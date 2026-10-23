import { ContentEntry, markdownBlocks, normalizeVisibleText } from './content';
import { ArticleSidebar } from './article-sidebar';
import { CTA, JsonLd } from './components';
import { site } from './data';

const publicationDateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
});
const formatPublicationDate = (value: string) => publicationDateFormatter.format(new Date(`${value}T00:00:00Z`));

function inline(text: string) {
  text = normalizeVisibleText(text);
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a key={index} href={link[2]}>{link[1]}</a>;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    return part;
  });
}

function tableRows(block: string) {
  const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
  if (lines.length < 2 || !/^\|?\s*:?-{3,}/.test(lines[1])) return null;
  const cells = (line: string) => line.replace(/^\||\|$/g, '').split('|').map((cell) => cell.trim());
  return { headings: cells(lines[0]), rows: lines.slice(2).map(cells) };
}

function headingSlug(label: string) {
  return normalizeVisibleText(label).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
}

export function ContentArticle({ entry }: { entry: ContentEntry }) {
  const blocks = markdownBlocks(entry.body);
  const slugCounts = new Map<string, number>();
  const headingByIndex = new Map<number, { id: string; label: string; level: 2 | 3 }>();
  blocks.forEach((block, index) => {
    const level = block.startsWith('## ') ? 2 : block.startsWith('### ') ? 3 : null;
    if (!level) return;
    const label = normalizeVisibleText(block.slice(level + 1));
    const base = headingSlug(label);
    const count = (slugCounts.get(base) || 0) + 1;
    slugCounts.set(base, count);
    headingByIndex.set(index, { id: count === 1 ? base : `${base}-${count}`, label, level });
  });
  const headings = [...headingByIndex.values()];
  const related = entry.related.map((href) => ({
    href,
    label: href.split('/').filter(Boolean).pop()?.replace(/-/g, ' ') || 'Related guide',
  }));
  const url = `${site.url}/${entry.kind}/${entry.slug}`;
  const faqStart = blocks.findIndex((block) => block === '## Frequently asked questions');
  const faqBlocks = faqStart < 0 ? [] : blocks.slice(faqStart + 1);
  const faqs = faqBlocks.reduce<{ question: string; answer: string }[]>((items, block) => {
    if (block.startsWith('## ')) return items;
    if (block.startsWith('### ')) items.push({ question: normalizeVisibleText(block.slice(4)), answer: '' });
    else if (items.length && !items[items.length - 1].answer) items[items.length - 1].answer = normalizeVisibleText(block.replace(/\n/g, ' '));
    return items;
  }, []).filter((item) => item.answer);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: entry.title,
    description: entry.description,
    datePublished: entry.published,
    dateModified: entry.updated,
    image: `${site.url}${entry.image}`,
    url,
    publisher: { '@type': 'Organization', name: site.brand, url: site.url },
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
  return <main id="main-content" className="section rich-article-main">
    <JsonLd data={schema}/>{faqs.length ? <JsonLd data={faqSchema}/> : null}
    <article className="container rich-article">
      <header className="article-header">
        <p className="eyebrow">{entry.category}</p>
        <h1>{entry.title}</h1>
        <p className="lead">{entry.description}</p>
        <p className="article-date"><time dateTime={entry.published}>Published {formatPublicationDate(entry.published)}</time></p>
        <img className="content-hero-image" src={entry.image} alt={entry.imageAlt}/>
      </header>
      <div className="article-layout">
        <details className="mobile-article-toc">
          <summary>On this page</summary>
          <nav aria-label="Mobile table of contents"><ol>{headings.map((h) => <li className={h.level === 3 ? 'toc-level-3' : undefined} key={h.id}><a href={`#${h.id}`}>{h.label}</a></li>)}</ol></nav>
        </details>
        <div className="article-copy">
          {blocks.map((block, index) => {
            if (block.startsWith('# ')) return null;
            const heading = headingByIndex.get(index);
            if (heading?.level === 2) return <h2 id={heading.id} key={index}>{heading.label}</h2>;
            if (heading?.level === 3) return <h3 id={heading.id} key={index}>{heading.label}</h3>;
            if (block.split('\n').every((line) => line.startsWith('- '))) return <ul key={index}>{block.split('\n').map((line) => <li key={line}>{inline(line.slice(2))}</li>)}</ul>;
            const table = tableRows(block);
            if (table) return <div className="article-table-wrap" key={index}><table className="article-table"><thead><tr>{table.headings.map((cell) => <th scope="col" key={cell}>{inline(cell)}</th>)}</tr></thead><tbody>{table.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{inline(cell)}</td>)}</tr>)}</tbody></table></div>;
            return <p key={index}>{inline(block.replace(/\n/g, ' '))}</p>;
          })}
        </div>
        <ArticleSidebar headings={headings} published={entry.published} updated={entry.updated} category={entry.category} related={related}/>
      </div>
    </article>
    <script dangerouslySetInnerHTML={{ __html: "document.addEventListener('click',function(e){var a=e.target.closest('.mobile-article-toc a');if(a){var d=a.closest('details');if(d)d.removeAttribute('open')}})" }} />
    <CTA/>
  </main>;
}
