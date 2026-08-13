import { ContentEntry, markdownBlocks } from './content';
import { CTA, JsonLd } from './components';
import { site } from './data';

const publicationDateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
});
const formatPublicationDate = (value: string) => publicationDateFormatter.format(new Date(`${value}T00:00:00Z`));

function inline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a key={index} href={link[2]}>{link[1]}</a>;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    return part;
  });
}

export function ContentArticle({ entry }: { entry: ContentEntry }) {
  const blocks = markdownBlocks(entry.body);
  const headings = blocks.filter((block) => block.startsWith('## ')).map((block) => block.slice(3));
  const url = `${site.url}/${entry.kind}/${entry.slug}`;
  const faqStart = blocks.findIndex((block) => block === '## Frequently asked questions');
  const faqBlocks = faqStart < 0 ? [] : blocks.slice(faqStart + 1);
  const faqs = faqBlocks.reduce<{ question: string; answer: string }[]>((items, block) => {
    if (block.startsWith('## ')) return items;
    if (block.startsWith('### ')) items.push({ question: block.slice(4), answer: '' });
    else if (items.length && !items[items.length - 1].answer) items[items.length - 1].answer = block.replace(/\n/g, ' ');
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
  return <main className="section rich-article-main"><JsonLd data={schema}/>{faqs.length ? <JsonLd data={faqSchema}/> : null}<article className="container rich-article">
    <p className="eyebrow">{entry.category}</p>
    <h1>{entry.title}</h1>
    <p className="lead">{entry.description}</p>
    <p className="article-date"><time dateTime={entry.published}>Published {formatPublicationDate(entry.published)}</time></p>
    <img className="content-hero-image" src={entry.image} alt={entry.imageAlt}/>
    {headings.length > 1 ? <nav className="article-toc" aria-label="Table of contents"><strong>On this page</strong><ol>{headings.map((heading) => <li key={heading}><a href={`#${heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{heading}</a></li>)}</ol></nav> : null}
    {blocks.map((block, index) => {
      if (block.startsWith('## ')) {
        const heading = block.slice(3);
        return <h2 id={heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')} key={index}>{heading}</h2>;
      }
      if (block.startsWith('### ')) return <h3 key={index}>{block.slice(4)}</h3>;
      if (block.split('\n').every((line) => line.startsWith('- '))) return <ul key={index}>{block.split('\n').map((line) => <li key={line}>{inline(line.slice(2))}</li>)}</ul>;
      return <p key={index}>{inline(block.replace(/\n/g, ' '))}</p>;
    })}
    {entry.related.length ? <aside className="article-related" aria-labelledby="related-content"><h2 id="related-content">Related content</h2><ul>{entry.related.map((href) => {
      const label = href.split('/').filter(Boolean).pop()?.replace(/-/g, ' ') || 'Related guide';
      return <li key={href}><a href={href}>{label}</a></li>;
    })}</ul></aside> : null}
  </article><CTA/></main>;
}
