import { Header, Footer, CTA, JsonLd } from '../components';
import { site, qaScorecard, faqs } from '../data';

export const metadata = {
  title: 'VA call center QA scorecard template',
  description: 'A simple QA scorecard for virtual assistant call answering, intake, appointment setting, CRM notes, tone, and escalation rules.',
};

export default function QAScorecard() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: metadata.title,
    url: `${site.url}/qa-scorecard`,
    description: metadata.description,
    hasPart: [
      { '@type': 'ItemList', name: 'VA call center QA scorecard items', itemListElement: qaScorecard.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.item, description: item.note })) },
      { '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    ],
  };

  return <><Header/><main className="section"><JsonLd data={schema}/><div className="container"><p className="eyebrow">QA scorecard</p><h1>A simple scorecard for virtual assistant phone support.</h1><p className="lead">Use this scorecard once a week. Pick 5 to 10 calls, review notes and recordings when allowed, then coach the assistant on the two biggest misses.</p>
    <div className="table"><div className="row"><b>Scorecard item</b><b>Points</b><b>What good looks like</b></div>{qaScorecard.map((q)=><div className="row" key={q.item}><span>{q.item}</span><span>{q.points}</span><span>{q.note}</span></div>)}</div>
    <section className="section"><div className="callout"><p className="eyebrow" style={{color:'white'}}>Manager note</p><h2>Do not score everything at once.</h2><p>Pick one call type first, such as new lead intake or appointment setting. Fix that path, then add support calls, billing questions, or follow-up work later.</p></div></section>
    <section className="section"><h2>Weekly review questions</h2><div className="cards"><div className="card"><h3>Accuracy</h3><p>Did the assistant use the script and avoid guessing?</p></div><div className="card"><h3>Next step</h3><p>Was the appointment, task, ticket, or callback clear?</p></div><div className="card"><h3>Risk</h3><p>Did any call need owner review, better access rules, or a safer answer?</p></div></div></section>
  </div><CTA/></main><Footer/></>;
}
