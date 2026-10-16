'use client';

import { useEffect, useRef, useState } from 'react';

type Heading = { id: string; label: string; level: 2 | 3 };
type RelatedLink = { href: string; label: string };

export function ArticleSidebar({ headings, published, updated, category, related }: {
  headings: Heading[];
  published: string;
  updated: string;
  category: string;
  related: RelatedLink[];
}) {
  const [activeId, setActiveId] = useState(headings[0]?.id || '');

  useEffect(() => {
    const nodes = headings.map(({ id }) => document.getElementById(id)).filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]?.target.id) setActiveId(visible[0].target.id);
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, 1] });
    nodes.forEach((node) => observer.observe(node));
    const updateFromScroll = () => {
      const passed = nodes.filter((node) => node.getBoundingClientRect().top <= 150);
      if (passed.length) setActiveId(passed[passed.length - 1].id);
    };
    window.addEventListener('scroll', updateFromScroll, { passive: true });
    updateFromScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateFromScroll);
    };
  }, [headings]);

  return <aside className="article-sidebar" aria-label="Article navigation and details">
    <nav className="article-sidebar-toc" aria-label="Table of contents">
      <strong>Table of contents</strong>
      <ol>{headings.map((heading) => <li className={`toc-level-${heading.level}`} key={heading.id}>
        <a href={`#${heading.id}`} aria-current={activeId === heading.id ? 'location' : undefined}>{heading.label}</a>
      </li>)}</ol>
    </nav>
    <section className="article-sidebar-meta" aria-labelledby="article-details-heading">
      <h2 id="article-details-heading">Article details</h2>
      <dl>
        <div><dt>Category</dt><dd>{category}</dd></div>
        <div><dt>Published</dt><dd><time dateTime={published}>{published}</time></dd></div>
        <div><dt>Updated</dt><dd><time dateTime={updated}>{updated}</time></dd></div>
      </dl>
    </section>
    <section className="article-sidebar-related" aria-labelledby="related-guides-heading">
      <h2 id="related-guides-heading">Related guides</h2>
      {related.length ? <ul>{related.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul> : <p><a href="/blog">Browse all guides</a></p>}
    </section>
  </aside>;
}

function headingId(label: string, used: Map<string, number>) {
  const base = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
  const count = (used.get(base) || 0) + 1;
  used.set(base, count);
  return count === 1 ? base : `${base}-${count}`;
}

/** Populates a real TOC for fixed legacy editorial templates after hydration. */
export function DiscoveredArticleSidebar({ published, updated, category, related }: {
  published: string;
  updated: string;
  category: string;
  related: RelatedLink[];
}) {
  const marker = useRef<HTMLSpanElement>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);
  useEffect(() => {
    const article = marker.current?.closest('article');
    if (!article) return;
    const used = new Map<string, number>();
    const discovered = [...article.querySelectorAll<HTMLElement>('h2, h3')]
      .filter((node) => !node.closest('.article-sidebar'))
      .map((node) => {
        const label = node.textContent?.trim() || 'Section';
        const id = node.id || headingId(label, used);
        node.id = id;
        return { id, label, level: node.tagName === 'H2' ? 2 as const : 3 as const };
      });
    setHeadings(discovered);
  }, []);
  return <><span ref={marker} hidden/><ArticleSidebar headings={headings} published={published} updated={updated} category={category} related={related}/></>;
}
