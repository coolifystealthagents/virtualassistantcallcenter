import { ContentEntry, markdownBlocks } from './content';
import { CTA, JsonLd } from './components';
import { site } from './data';

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
  return <main className="section rich-article-main"><JsonLd data={schema}/><article className="container rich-article">
    <p className="eyebrow">{entry.category}</p>
    <h1>{entry.title}</h1>
    <p className="lead">{entry.description}</p>
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
  </article><CTA/></main>;
}
