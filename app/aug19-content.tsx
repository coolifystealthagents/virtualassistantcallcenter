import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { ArticleSidebar } from './article-sidebar';
import { Header, Footer, CTA } from './components';
import { metadataTitle, normalizeVisibleText } from './content';
import meta from './aug19-meta.json';

const SITE = 'https://virtualassistantcallcenter.com';
type Family = 'blog' | 'research';
type Item = { family: Family; title: string; description: string; hero: string };

function item(slug: string): Item {
  return (meta as Record<string, Item>)[slug];
}

function source(family: Family, slug: string) {
  const raw = fs.readFileSync(path.join(process.cwd(), 'content', family, `${slug}.md`), 'utf8');
  return raw.replace(/^---[\s\S]*?---\s*/, '').replace(/^#[^\n]+\n+/, '').replace(/^\*August 19, 2026\*\s*/, '');
}

function inline(text: string) {
  const safe = normalizeVisibleText(text);
  const parts = safe.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a href={link[2]} key={index}>{link[1]}</a>;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    return part;
  });
}

function slugify(value: string) {
  return normalizeVisibleText(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
}

export function getAug19Metadata(family: Family, slug: string): Metadata {
  const record = item(slug);
  return {
    title: metadataTitle(record.title),
    description: record.description,
    alternates: { canonical: `/${family}/${slug}` },
    openGraph: { title: record.title, description: record.description, url: `${SITE}/${family}/${slug}`, images: [{ url: record.hero, alt: `${record.title} editorial illustration` }] },
  };
}

export function renderAug19Article(family: Family, slug: string) {
  const record = item(slug);
  const contentBlocks = source(family, slug).split(/\n\n+/).filter(Boolean);
  const counts = new Map<string, number>();
  const headingByIndex = new Map<number, { id: string; label: string; level: 2 | 3 }>();
  contentBlocks.forEach((part, index) => {
    const level = part.startsWith('## ') ? 2 : part.startsWith('### ') ? 3 : null;
    if (!level) return;
    const label = normalizeVisibleText(part.slice(level + 1));
    const base = slugify(label);
    const count = (counts.get(base) || 0) + 1;
    counts.set(base, count);
    headingByIndex.set(index, { id: count === 1 ? base : `${base}-${count}`, label, level });
  });
  const headings = [...headingByIndex.values()];
  const related = [
    { href: `/${family}`, label: family === 'research' ? 'Browse all research' : 'Browse all blog guides' },
    { href: '/services', label: 'Explore call support services' },
  ];
  const schema = {
    '@context': 'https://schema.org', '@type': 'Article', headline: record.title,
    description: record.description, datePublished: '2026-08-19', dateModified: '2026-08-19',
    mainEntityOfPage: `${SITE}/${family}/${slug}`, image: `${SITE}${record.hero}`,
  };
  return <><Header/><main id="main-content" className="section rich-article-main article-shell">
    <article className="container rich-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>
      <header className="article-header">
        <p className="eyebrow">{family === 'research' ? 'Research' : 'Blog'}</p>
        <h1>{record.title}</h1>
        <p className="lead">{record.description}</p>
        <p className="article-date"><time dateTime="2026-08-19">Published August 19, 2026</time></p>
        <img className="content-hero-image" src={record.hero} alt={`${record.title} editorial illustration`} width="1536" height="1024"/>
      </header>
      <div className="article-layout">
        <div className="article-copy article-body">{contentBlocks.map((part, index) => {
          const heading = headingByIndex.get(index);
          if (heading?.level === 2) return <h2 id={heading.id} key={index}>{heading.label}</h2>;
          if (heading?.level === 3) return <h3 id={heading.id} key={index}>{heading.label}</h3>;
          if (part.startsWith('- ')) return <ul key={index}>{part.split('\n').map((line, lineIndex) => <li key={lineIndex}>{inline(line.replace(/^- /, ''))}</li>)}</ul>;
          return <p key={index}>{inline(part.replace(/\n/g, ' '))}</p>;
        })}</div>
        <ArticleSidebar headings={headings} published="2026-08-19" updated="2026-08-19" category={family === 'research' ? 'Research' : 'Blog'} related={related}/>
      </div>
    </article>
    <CTA/>
  </main><Footer/></>;
}
