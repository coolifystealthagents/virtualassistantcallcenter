import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');
const walk = (dir, suffix = '') => readdirSync(join(root, dir), { withFileTypes: true }).flatMap((entry) => {
  const relative = join(dir, entry.name);
  return entry.isDirectory() ? walk(relative, suffix) : (!suffix || entry.name.endsWith(suffix) ? [relative] : []);
});

test('canonical conversion journey is complete and legacy contact is compatible', () => {
  assert.ok(existsSync(join(root, 'app/thanks-whats-next/page.tsx')), 'step 3 route must exist');
  const completion = read('app/thanks-whats-next/page.tsx');
  assert.match(completion, /robots:\s*\{\s*index:\s*false,\s*follow:\s*false/);
  assert.match(completion, /Step 3|booking (?:is )?confirmed|meeting (?:is )?booked/i);

  const booking = read('app/thank-you/page.tsx');
  assert.match(booking, /https:\/\/go\.oncehub\.com\/StealthAgentsTeam/);
  assert.doesNotMatch(booking, /href=["']\/thanks-whats-next["']/);
  assert.match(booking, /OnceHub will confirm the meeting and continue/);
  assert.match(booking, /robots:\s*\{\s*index:\s*false,\s*follow:\s*false/);

  const legacy = read('app/contact/page.tsx');
  assert.match(legacy, /permanentRedirect\(["']\/contact-us["']\)/);

  const chrome = read('app/components.tsx');
  assert.doesNotMatch(chrome, /href=["']\/contact["']/);
  assert.match(chrome, /href=["']\/contact-us["']/);
});

test('ACR contract and accepted-response-before-tracking behavior are preserved', () => {
  const layout = read('app/layout.tsx');
  assert.match(layout, /siteId:'virtual-assistant-call-center'/);
  assert.match(layout, /endpoint:'\/ingest\/track'/);
  assert.match(layout, /path:'\/contact-us',step:1/);
  assert.match(layout, /path:'\/thank-you',step:2/);
  assert.match(layout, /path:'\/thanks-whats-next',step:3/);
  assert.match(layout, /https:\/\/acrtracking\.stealthagents\.us\/v1\/tracker\.js/);

  const form = read('app/contact-us/StandardContactForm.tsx');
  const accepted = form.indexOf('if (!response.ok)');
  const queuedTrack = form.indexOf('sessionStorage.setItem("acrPendingLead"');
  const directTrack = form.indexOf('tracker.trackLead(payload)');
  const clearTrack = form.indexOf('sessionStorage.removeItem("acrPendingLead"');
  const navigated = form.indexOf('window.location.assign');
  assert.ok(accepted >= 0 && queuedTrack > accepted && directTrack > queuedTrack, 'accepted lead must be queued before the bound tracker call');
  assert.ok(clearTrack > directTrack && navigated > clearTrack, 'pending lead clears only after a successful tracker handoff and before navigation');
  assert.match(form, /try\s*\{[\s\S]*?sessionStorage[\s\S]*?tracker\.trackLead[\s\S]*?removeItem[\s\S]*?\}\s*catch\s*\{\}/);

  const proxy = read('app/ingest/track/route.ts');
  assert.match(proxy, /request\.headers\.get\('origin'\) !== CANONICAL_ORIGIN/);
  assert.match(proxy, /normalizedPayload = \{ \.\.\.payload, siteId: SITE_ID \}/);
  assert.match(proxy, /MAX_RATE_LIMIT_KEYS/);
  assert.match(proxy, /requests\.delete/);
});

test('all-route security and canonical host contracts are configured', () => {
  const config = read('next.config.mjs');
  for (const header of ['Content-Security-Policy', 'Strict-Transport-Security', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) {
    assert.match(config, new RegExp(header));
  }
  assert.match(config, /go\.oncehub\.com/);
  assert.match(config, /acrtracking\.stealthagents\.us/);

  assert.ok(existsSync(join(root, 'middleware.ts')), 'canonical-host middleware must exist');
  const middleware = read('middleware.ts');
  assert.match(middleware, /virtualassistantcallcenter\.com/);
  assert.match(middleware, /x-forwarded-proto/);
  assert.match(middleware, /308/);
});

test('contact page uses reliable parent-brand assets and avoids unsupported claims or decorative counters', () => {
  const page = read('app/contact-us/page.tsx');
  assert.match(page, /\/stealth-agents-logo-black\.(?:png|webp)/);
  assert.match(page, /\/stealth-agents-team\.(?:png|jpg|jpeg|webp)/);
  assert.match(page, /alt=["'][^"']+(?:team|Stealth Agents)[^"']*["']/i);
  assert.doesNotMatch(page, /35\+|top[- ]?rated|featured on Forbes/i);
  assert.doesNotMatch(page, /<span>0[1-9]<\/span>/);
  assert.doesNotMatch(page, /!!|\?\?|!\?|\?!|…/);
});

test('sitemap publishes canonical public pages and excludes conversion completion routes', () => {
  const sitemap = read('app/sitemap.xml/route.ts');
  assert.match(sitemap, /['"]\/contact-us['"]/);
  assert.doesNotMatch(sitemap, /['"]\/contact['"]/);
  assert.doesNotMatch(sitemap, /['"]\/thank-you['"]/);
  assert.doesNotMatch(sitemap, /['"]\/thanks-whats-next['"]/);
  for (const route of ['pricing', 'workflows', 'qa-scorecard']) {
    assert.match(read(`app/${route}/page.tsx`), new RegExp(`canonical:\\s*['"]/${route}['"]`));
  }
});

test('content renderer handles source headings and markdown tables semantically', () => {
  const article = read('app/content-article.tsx');
  assert.match(article, /block\.startsWith\(['"]# ['"]\)/);
  assert.match(article, /<table/);
  assert.match(article, /<thead/);
  assert.match(article, /<tbody/);
  assert.match(article, /<th/);
  assert.match(article, /<td/);
});

test('content routes and image references are structurally valid', () => {
  const files = walk('content', '.md');
  assert.ok(files.length > 0);
  for (const file of files) {
    const raw = read(file);
    const front = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    const fields = Object.fromEntries(front.split('\n').map((line) => {
      const split = line.indexOf(':');
      return split > 0 ? [line.slice(0, split).trim(), line.slice(split + 1).trim()] : ['', ''];
    }));
    assert.doesNotMatch(fields.slug ?? '', /^['"]|['"]$/, `${file} has a quoted slug`);
    if (fields.image?.startsWith('/')) assert.ok(existsSync(join(root, 'public', fields.image)), `${file} references missing ${fields.image}`);
  }
});

test('global accessibility and responsive contracts are explicit', () => {
  const css = read('app/globals.css');
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /overflow-wrap|word-break/);
  const error = read('app/not-found.tsx');
  assert.match(error, /<h1/);
  assert.match(error, /href=["']\/["']/);
});
