import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const targetDate = '2026-08-17';
const siteUrl = 'https://virtualassistantcallcenter.com';
const expectedSlugs = [
  'call-queue-wait-announcement-accuracy-study',
  'call-recording-notice-audibility-study',
  'call-routing-outage-fallback-continuity-study',
  'caller-authentication-challenge-failure-study',
  'caller-correction-propagation-study',
  'duplicate-callback-request-linkage-study',
  'language-identification-interpreter-handoff-study',
  'virtual-assistant-answer-source-traceability-study',
  'virtual-assistant-turn-taking-recovery-study',
  'voicemail-transcription-fidelity-study',
];
const expectedRoutes = expectedSlugs.map((slug) => `/research/${slug}`);
const requiredSections = [
  'Headline finding',
  'Research question',
  'Methodology',
  'Evidence interpretation',
  'Decision boundaries',
  'Limitations',
  'Reproducibility',
  'Sources',
];
const authoritativeHosts = new Set([
  'ada.gov',
  'archives.gov',
  'census.gov',
  'cisa.gov',
  'doi.org',
  'fcc.gov',
  'fema.gov',
  'ftc.gov',
  'gao.gov',
  'gov.uk',
  'hhs.gov',
  'identitytheft.gov',
  'itu.int',
  'justice.gov',
  'lep.gov',
  'nist.gov',
  'plainlanguage.gov',
  'ready.gov',
  'whitehouse.gov',
  'w3.org',
]);

function parseRecord(path) {
  const source = readFileSync(path, 'utf8').replace(/\r\n/g, '\n');
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]+)$/);
  assert.ok(match, `${path} must use native front matter and a substantive body`);
  const metadata = Object.fromEntries(match[1].split('\n').map((line) => {
    const separator = line.indexOf(':');
    return [line.slice(0, separator).trim(), line.slice(separator + 1).trim()];
  }));
  return { path, source, metadata, body: match[2].trim() };
}

function markdownRecords(kind) {
  const directory = join(root, 'content', kind);
  return readdirSync(directory)
    .filter((name) => name.endsWith('.md'))
    .map((name) => parseRecord(join(directory, name)));
}

const researchRecords = markdownRecords('research');
const targetRecords = researchRecords.filter(({ metadata }) => metadata.published === targetDate);

test('August 17 research family has exactly ten date bound, native, non-colliding routes', () => {
  assert.equal(targetRecords.length, 10, 'research must have exactly ten August 17 source records');
  assert.deepEqual(targetRecords.map(({ metadata }) => metadata.slug).sort(), expectedSlugs);

  const contentSlugs = new Map();
  for (const kind of readdirSync(join(root, 'content'), { withFileTypes: true }).filter((entry) => entry.isDirectory())) {
    for (const record of markdownRecords(kind.name)) {
      const paths = contentSlugs.get(record.metadata.slug) ?? [];
      paths.push(record.path);
      contentSlugs.set(record.metadata.slug, paths);
    }
  }

  for (const record of targetRecords) {
    const { metadata, path } = record;
    assert.equal(metadata.slug, basename(path, '.md'), `${path} slug must bind to its source filename`);
    assert.equal(metadata.published, targetDate, `${metadata.slug} published date must be source bound`);
    assert.equal(metadata.updated, targetDate, `${metadata.slug} updated date must be source bound`);
    assert.equal(contentSlugs.get(metadata.slug)?.length, 1, `${metadata.slug} must not collide with another content record`);
    assert.equal(`/research/${metadata.slug}`, expectedRoutes.find((route) => route.endsWith(metadata.slug)));
  }
});

test('August 17 records are substantive evidence led studies with authoritative sources', () => {
  for (const { metadata, body } of targetRecords) {
    for (const heading of requiredSections) {
      assert.match(body, new RegExp(`^## ${heading}$`, 'm'), `${metadata.slug} needs a ${heading} section`);
    }

    const words = body.match(/\b[\w']+\b/g) ?? [];
    assert.ok(words.length >= 700, `${metadata.slug} must contain at least 700 substantive words`);
    assert.match(body, /\b(?:cohort|sample|sampling unit|unit of analysis|primary unit)\b/i, `${metadata.slug} must define a reproducible population, sample, or primary unit`);
    assert.match(body, /\b(?:denominator|counts|count)\b/i, `${metadata.slug} must state count or denominator handling`);
    assert.match(body, /\b(?:cannot|does not|do not|limitation)\b/i, `${metadata.slug} must bound interpretation`);
    assert.match(body, /\b(?:owner|human)\b/i, `${metadata.slug} must identify a decision boundary`);

    const sourceSection = body.split(/^## Sources$/m)[1] ?? '';
    const urls = [...sourceSection.matchAll(/^\d+\. \[[^\]]+\]\((https:\/\/[^)]+)\)$/gm)].map((match) => match[1]);
    assert.ok(urls.length >= 6, `${metadata.slug} must cite at least six external sources`);
    assert.equal(new Set(urls).size, urls.length, `${metadata.slug} sources must be unique`);
    for (const source of urls) {
      const host = new URL(source).hostname.replace(/^www\./, '');
      const isAuthoritative = [...authoritativeHosts].some((domain) => host === domain || host.endsWith(`.${domain}`));
      assert.ok(isAuthoritative, `${metadata.slug} source must use an approved authoritative host: ${host}`);
      assert.notEqual(host, 'virtualassistantcallcenter.com', `${metadata.slug} sources must be external`);
    }
  }
});

test('August 17 research excludes public commerce copy, internal publishing mechanics, and long dash characters', () => {
  const forbidden = /\b(?:price|prices|pricing|fee|fees|hourly|dollar|dollars|per minute|per hour|internal production|production process|publishing pipeline|editorial pipeline|deployment|deploy|CMS|SEO keyword|stock image)\b/i;
  for (const { metadata, source, body } of targetRecords) {
    assert.doesNotMatch(body, forbidden, `${metadata.slug} includes forbidden commerce or publishing language`);
    assert.doesNotMatch(source, /[\u2013\u2014]/, `${metadata.slug} includes an en dash or em dash`);
  }
});

test('research loader orders the exact August 17 family newest first and then by slug', () => {
  const loader = readFileSync(join(root, 'app', 'content.ts'), 'utf8');
  assert.match(loader, /const byDate = b\.published\.localeCompare\(a\.published\)/, 'loader must order publication dates newest first');
  assert.match(loader, /kind !== 'blog'[\s\S]*?return a\.slug\.localeCompare\(b\.slug\)/, 'research date ties must order by slug');

  const loadedOrder = [...researchRecords]
    .sort((a, b) => b.metadata.published.localeCompare(a.metadata.published) || a.metadata.slug.localeCompare(b.metadata.slug))
    .map(({ metadata }) => metadata.slug);
  assert.deepEqual(loadedOrder.slice(0, 10), expectedSlugs, 'August 17 routes must lead the research loader in stable order');
});

test('built August 17 routes expose visible dates, structured dates, and canonical identity', () => {
  const indexPath = join(root, '.next', 'server', 'app', 'research.html');
  assert.ok(existsSync(indexPath), 'build the research index before running this regression test');
  const indexHtml = readFileSync(indexPath, 'utf8');
  const positions = expectedRoutes.map((route) => {
    const position = indexHtml.indexOf(`href="${route}"`);
    assert.ok(position >= 0, `${route} must appear in the built research index`);
    return position;
  });
  assert.deepEqual([...positions].sort((a, b) => a - b), positions, 'built research index must preserve loader order');

  for (const record of targetRecords) {
    const { slug, title } = record.metadata;
    const route = `/research/${slug}`;
    const htmlPath = join(root, '.next', 'server', 'app', 'research', `${slug}.html`);
    assert.ok(existsSync(htmlPath), `${route} must have a built HTML route`);
    const html = readFileSync(htmlPath, 'utf8');
    assert.match(html, /Published (?:<!-- -->)?August 17, 2026/, `${route} must show the August 17 publication date`);
    assert.ok(html.includes(`"datePublished":"${targetDate}"`), `${route} must emit structured datePublished`);
    assert.ok(html.includes(`"dateModified":"${targetDate}"`), `${route} must emit structured dateModified`);
    assert.ok(html.includes(`"url":"${siteUrl}${route}"`), `${route} structured data must use its own canonical identity`);
    assert.ok(html.includes(`<link rel="canonical" href="${siteUrl}${route}"`), `${route} metadata must use its own canonical identity`);
    assert.ok(html.includes(`"headline":"${title}"`), `${route} structured headline must bind to its source title`);
  }
});
