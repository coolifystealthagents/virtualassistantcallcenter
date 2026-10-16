import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('header and footer visibly attribute the official parent brand without replacing the subsidiary logo', () => {
  const source = read('app/components.tsx');
  assert.ok((source.match(/Powered by StealthAgents/g) || []).length >= 2);
  assert.ok((source.match(/stealth-agents-logo-black\.png/g) || []).length >= 2);
  assert.ok((source.match(/<LogoMark\/>/g) || []).length >= 2);
});

test('contact review marquee uses at least ten distinct sourced StealthAgents reviews and no playback controls', () => {
  const source = read('app/booking-components.tsx');
  const css = read('app/globals.css') + read('app/v3.css');
  const reviewers = [...source.matchAll(/name:\s*['"]([^'"]+)['"]/g)].map((match) => match[1]);
  const sourceUrls = [...source.matchAll(/sourceUrl:\s*['"]([^'"]+)['"]/g)].map((match) => match[1]);
  assert.ok(reviewers.length >= 10, `expected at least 10 reviews, found ${reviewers.length}`);
  assert.equal(new Set(reviewers).size, reviewers.length, 'reviewer records must be distinct');
  assert.equal(sourceUrls.length, reviewers.length);
  assert.match(source, /StealthAgents reviews/);
  assert.doesNotMatch(source, /<button|Play reviews|Pause reviews|Previous|Next review|pagination/i);
  assert.match(css, /animation-play-state:\s*paused/);
});

test('all shared editorial articles have a complete active sticky sidebar and mobile in-flow fallback', () => {
  const article = read('app/content-article.tsx');
  const sidebar = read('app/article-sidebar.tsx');
  const css = read('app/v3.css');
  assert.match(article, /ArticleSidebar/);
  assert.match(article, /article-layout/);
  assert.match(sidebar, /IntersectionObserver/);
  assert.match(sidebar, /aria-current/);
  assert.match(sidebar, /Table of contents/);
  assert.match(sidebar, /Published/);
  assert.match(sidebar, /Related/);
  assert.match(css, /\.article-sidebar[^}]*position:\s*sticky/s);
  assert.match(css, /max-height:\s*calc\(100vh/);
  assert.match(css, /@media[^}]*max-width:\s*(?:800|900)px[\s\S]*\.article-sidebar[^}]*position:\s*static/s);
});

test('research details retain the global identity shell', () => {
  const source = read('app/research/[slug]/page.tsx');
  assert.match(source, /Header/);
  assert.match(source, /Footer/);
});

test('one subsidiary mark is used for metadata, header, and footer with parent mark as the only exception', () => {
  const layout = read('app/layout.tsx');
  const components = read('app/components.tsx');
  assert.match(layout, /icons:\s*\{[^}]*icon:\s*['"]\/icon\.svg/s);
  assert.match(components, /src=['"]\/icon\.svg['"]/);
  assert.doesNotMatch(components, /\/logo\.svg/);
});
