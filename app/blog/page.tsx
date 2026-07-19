import { Header, Footer, JsonLd } from '../components';
import { blogPosts, site } from '../data';

export const metadata = {
  title: 'Virtual assistant call center hiring blog',
  description: 'Plain guides for virtual assistant call answering, appointment setting, intake, pricing, onboarding, and QA.',
};

export default function Blog(){
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: metadata.title, url: `${site.url}/blog`, mainEntity: { '@type': 'ItemList', itemListElement: blogPosts.map((p, i)=>({ '@type': 'ListItem', position: i + 1, url: `${site.url}/blog/${p.slug}`, name: p.title })) } };
  return <><Header/><main className="section"><JsonLd data={schema}/><div className="container"><p className="eyebrow">Blog</p><h1>Plain guides for hiring VA call center help</h1><p className="lead">Use these guides to compare costs, call tasks, providers, and onboarding steps before you hire.</p><div className="cards">{blogPosts.map((p)=><a className="card" href={`/blog/${p.slug}`} key={p.slug}><h3>{p.title}</h3><p>{p.excerpt}</p><span className="pill">{p.minutes} min read</span></a>)}</div></div></main><Footer/></>;
}
