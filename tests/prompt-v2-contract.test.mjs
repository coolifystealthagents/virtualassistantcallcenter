import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const contact = read('app/contact-us/page.tsx');
const form = read('app/contact-us/StandardContactForm.tsx');
const reviews = read('app/booking-components.tsx');
const components = read('app/components.tsx');
const home = read('app/page.tsx');
const services = read('app/services/page.tsx');
const details = read('app/services/[slug]/page.tsx');
const serviceData = read('app/fleet-content.ts');
const css = read('app/globals.css') + read('app/home.css') + read('app/contact-us/contact.css');

test('Contact first fold contains title, reassurance, horizontal approved reviews, complete form, and submit', () => {
  const hero = contact.slice(contact.indexOf('<section className="tc-hero"'), contact.indexOf('</section>', contact.indexOf('<section className="tc-hero"')));
  assert.match(hero, /<h1/);
  assert.match(hero, /TestimonialsRail/);
  assert.match(hero, /StandardContactForm/);
  assert.match(form, /Book a Free Consultation/);
  assert.match(reviews, /sa-testimonial-headline/);
  assert.match(reviews, /★★★★★/);
  assert.match(css, /grid-auto-flow:column/);
  assert.doesNotMatch(css, /translateY\(-190px\)|translateY\(-380px\)|translateY\(-570px\)/);
});

test('Stealth Agents credibility section immediately follows Contact first fold with exact required plate', () => {
  const heroEnd = contact.indexOf('</section>', contact.indexOf('<section className="tc-hero"'));
  const nextSection = contact.indexOf('<section', heroEnd + 10);
  assert.equal(contact.slice(nextSection, nextSection + 50).includes('tc-team-section'), true);
  assert.match(contact, /Official team, Bacolod/);
  assert.match(contact, /stealth-agents-team/);
  assert.match(contact, /stealth-agents-logo/);
});

test('header meets exact navigation, skip-link, sticky, and keyboard-controlled mobile menu contracts', () => {
  assert.match(components, /Skip to content/);
  assert.match(components, /aria-expanded/);
  assert.match(components, /aria-controls/);
  assert.match(components, /Escape/);
  assert.match(components, /focus\(\)/);
  assert.match(css, /position:sticky/);
  assert.doesNotMatch(css, /\.nav\{position:relative/);
  assert.match(components, /navItems=\[\['Home','\/'\],\['Services','\/services'\],\['Contact Us','\/contact-us'\]\]/);
});

test('commercial layouts contain no decorative zero-padded labels or repeated lane numbering', () => {
  for (const source of [home, services, details]) {
    assert.doesNotMatch(source, /padStart\(2|Lane \{|>0\{index|0\$\{/);
  }
});

test('service index includes decision guidance, operating model, proof path, FAQs, and final CTA', () => {
  assert.match(services, /service-decision-guide/);
  assert.match(services, /service-operating-model/);
  assert.match(services, /service-proof/);
  assert.match(services, /service-faqs/);
  assert.match(services, /<CTA/);
});

test('every service record supplies audience, problem, inputs, work, outputs, boundaries, scenarios, FAQs, related services, and image', () => {
  for (const field of ['audience', 'problem', 'inputs', 'work', 'outputs', 'boundaries', 'scenarios', 'faqs', 'related', 'image']) {
    assert.match(serviceData, new RegExp(`['\"]${field}['\"]\\s*:`));
  }
  assert.match(details, /service-detail-audience/);
  assert.match(details, /service-detail-workflow/);
  assert.match(details, /service-detail-boundaries/);
  assert.match(details, /service-detail-scenarios/);
  assert.match(details, /service-detail-faqs/);
  assert.match(details, /service-detail-related/);
});

test('service pages expose quality controls and concrete start guidance', () => {
  const detail = read('app/services/[slug]/page.tsx');
  assert.match(detail, /service-detail-quality/);
  assert.match(detail, /Quality controls/);
  assert.match(detail, /guidance\?\.quality \|\| service\.controls/);
  assert.match(detail, /guidance\?\.start \|\| service\.launch/);
});

test('editorial indexes show thumbnails and valid dates for every item', () => {
  const research = read('app/research/page.tsx');
  const blog = read('app/blog/blog-listing.tsx');
  const data = read('app/data.ts');
  assert.match(research, /<img[^>]+src=\{p\.image\}[^>]+alt=\{p\.imageAlt\}/);
  assert.match(research, /<time dateTime=\{p\.published\}/);
  assert.doesNotMatch(blog, /published:\s*["']{2}/);
  assert.equal((data.match(/published:\s*['"]\d{4}-\d{2}-\d{2}['"]/g) || []).length, 3);
});

test('site identity uses one relevant logo mark for header and favicon and defines an OG image', () => {
  assert.match(components, /\/icon\.svg/);
  assert.doesNotMatch(components, /\/logo\.svg/);
  assert.match(read('app/layout.tsx'), /images:/);
});
