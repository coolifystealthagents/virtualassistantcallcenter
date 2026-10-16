import { Header, Footer } from '../components';
import { getContent } from '../content';

export const metadata = {
  title: 'Virtual Receptionist Alternatives',
  description: 'Compare virtual receptionist and call support approaches using scope, controls, coverage, and quality criteria.',
  alternates: { canonical: '/alternatives' },
};

export default function Alternatives() {
  const entries = getContent('alternatives');
  return <><Header/><main id="main-content" className="fleet-main"><section className="fleet-hero"><div className="container index-hero-grid"><div>
    <p className="eyebrow">Alternatives</p><h1>Compare call support options by operating fit</h1>
    <p className="lead">Practical comparisons for teams choosing between virtual receptionists, answering services, employees, and specialized assistants.</p></div>
    <img className="index-hero-image" src="/thumbnails/provider-shortlist-call-operations.svg" alt="Call support provider evaluation board comparing coverage, follow-through, quality, and ownership" width="1200" height="630"/>
  </div></section><section className="section"><div className="container fleet-card-grid">{entries.map((entry) =>
    <a className="fleet-card" href={`/alternatives/${entry.slug}`} key={entry.slug}><img src={entry.image} alt={entry.imageAlt}/><span>{entry.category}</span><h2>{entry.title}</h2><p>{entry.description}</p><b>Read comparison</b></a>
  )}</div></section></main><Footer/></>;
}
