import { Header, Footer, CTA, JsonLd } from '../components';
import { site, workflowSteps, sources } from '../data';

export const metadata = {
  title: 'VA call center workflows for intake, booking, and follow-up',
  description: 'Simple virtual assistant call center workflows for call answering, lead intake, appointment setting, CRM notes, escalation, and weekly review.',
};

export default function Workflows() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to set up a virtual assistant call center workflow',
    description: metadata.description,
    step: workflowSteps.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.title, text: step.text })),
  };

  return <><Header/><main className="section"><JsonLd data={schema}/><div className="container"><p className="eyebrow">Call workflows</p><h1>VA call center workflows that are easy to run.</h1><p className="lead">A virtual assistant can answer calls, qualify leads, book appointments, and update your CRM. The key is to give the assistant a clear path for each call type.</p>
    <div className="cards">{workflowSteps.map((s, i)=><div className="card" key={s.title}><span className="pill">Step {i + 1}</span><h2>{s.title}</h2><p>{s.text}</p></div>)}</div>
    <section className="section"><h2>Sample intake script</h2><div className="card"><p className="quote">“Thanks for calling. I can help get this to the right person. May I ask what you need help with today?”</p><ul className="list"><li>Name, phone, email, and company</li><li>Reason for call and urgency</li><li>Best appointment window or callback time</li><li>Source of the lead, if new</li><li>Any promise the assistant should not make</li></ul></div></section>
    <section className="section"><h2>Safe escalation rules</h2><div className="two"><div className="card"><h3>VA can handle</h3><p>Basic intake, schedule changes, reminders, status notes, simple FAQs, and routing.</p></div><div className="card"><h3>Owner should handle</h3><p>Staffing details exceptions, legal or medical advice, refunds, account changes, angry customers, and private data issues.</p></div></div></section>
    <section className="section"><h2>Source placeholders</h2><div className="cards">{sources.map((s)=><a className="card" key={s.url} href={s.url}><h3>{s.name}</h3><p>{s.note}</p></a>)}</div></section>
  </div><CTA/></main><Footer/></>;
}
