import { Header, Footer } from '../components';
import { getContent } from '../content';

export const metadata = {
  title: 'Virtual Receptionist Alternatives',
  description: 'Compare virtual receptionist and call support approaches using scope, controls, coverage, and quality criteria.',
  alternates: { canonical: '/alternatives' },
};

export default function Alternatives() {
  const entries = getContent('alternatives');
  return <><Header/><main className="fleet-main"><section className="fleet-hero"><div className="container">
    <p className="eyebrow">Alternatives</p><h1>Compare call support options by operating fit</h1>
    <p className="lead">Practical comparisons for teams choosing between virtual receptionists, answering services, employees, and specialized assistants.</p>
  </div></section><section className="section"><div className="container fleet-card-grid">{entries.map((entry) =>
    <a className="fleet-card" href={`/alternatives/${entry.slug}`} key={entry.slug}><img src={entry.image} alt={entry.imageAlt}/><span>{entry.category}</span><h2>{entry.title}</h2><p>{entry.description}</p><b>Read comparison</b></a>
  )}</div></section></main><Footer/></>;
}
