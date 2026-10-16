import type { Metadata } from 'next';
import { CTA, Footer, Header, JsonLd } from '../components';
import { publicTiers } from '../fleet-content';
import { site } from '../data';

const description = 'Public hourly pricing for Philippines-based assistant staffing, with scope inputs, tier guidance, boundaries, and a practical launch process.';
export const metadata: Metadata = {
  title: 'Pricing for Philippines-based call support staffing', description,
  alternates: { canonical: '/pricing' },
  openGraph: { title: 'Pricing for Philippines-based call support staffing', description, url: '/pricing', images: [{ url: '/pricing-scope-board.svg', alt: 'Call support scope and pricing planning board' }] },
};

const inputs = [
  ['Call types and tasks', 'List the exact calls, messages, updates, or coordination work the role may complete.'],
  ['Coverage schedule', 'Define business hours, time zone, overlap, holidays, and any after-hours expectations.'],
  ['Systems and access', 'Name the phone, calendar, CRM, help desk, inbox, and fields required for the approved lane.'],
  ['Decision boundaries', 'Keep refunds, policy exceptions, sensitive account changes, and professional advice with a named manager.'],
  ['Review plan', 'Choose the records or call samples a manager will check during the first weeks.'],
];
const faqs = [
  ['Are these prices a complete project quote?', 'They are the approved public hourly tiers. The suitable tier and expected hours still depend on the documented role, schedule, systems, and management requirements.'],
  ['Can a role start with one call type?', 'Yes. A bounded first lane is easier to train and review than a broad queue with unclear exceptions.'],
  ['Are software and third-party fees included?', 'Confirm every required phone, CRM, calendar, help-desk, or specialist tool during intake. Do not assume an external subscription is included in the hourly tier.'],
  ['Who approves work outside the script?', 'Your named manager keeps decisions outside the written scope. The assistant records the context and routes the exception.'],
];

export default function Pricing(){
  const schema = {'@context':'https://schema.org','@type':'Service',name:'Philippines-based assistant staffing',provider:{'@type':'Organization',name:site.brand,url:site.url},url:`${site.url}/pricing`,description,offers:publicTiers.map(t=>({'@type':'Offer',name:t.name,description:t.detail,priceSpecification:{'@type':'UnitPriceSpecification',priceCurrency:'USD',unitText:'HOUR',price:t.price.replace(/[^0-9.]/g,'')}}))};
  return <><Header/><main id="main-content" className="fleet-main pricing-page"><JsonLd data={schema}/>
    <section className="fleet-hero"><div className="container index-hero-grid"><div><p className="eyebrow">Public hourly tiers</p><h1>Price the role after the work lane is clear.</h1><p className="lead">Choose a tier for the complexity of the approved work, then document the schedule, systems, boundaries, and review owner before launch.</p><a className="btn primary" href="/contact-us">Scope my support lane</a></div><img className="index-hero-image" src="/pricing-scope-board.svg" alt="Planning board showing tasks, schedule, systems, and quality review flowing into a bounded support lane" width="1200" height="675"/></div></section>
    <section className="section" aria-labelledby="pricing-tiers"><div className="container"><p className="eyebrow">Tier guide</p><h2 id="pricing-tiers">Choose by complexity and ownership.</h2><p>These public tiers describe the support level. They do not replace intake or promise that every task belongs in every tier.</p><div className="pricing-grid">{publicTiers.map((t,i)=><article className={`price-card tier-${i+1}`} key={t.name}><p className="eyebrow">Tier {i+1}</p><h3>{t.name}</h3><p className="price">{t.price}</p><p>{t.detail}</p><ul><li>Role and task scoping</li><li>Philippines-based candidate matching</li><li>Onboarding and handoff planning</li></ul><a className="btn primary" href="/contact-us">Discuss this tier</a></article>)}</div></div></section>
    <section className="section soft"><div className="container"><p className="eyebrow">Scope inputs</p><h2>Five inputs shape the real staffing plan.</h2><div className="cards">{inputs.map(([title,text])=><article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section"><div className="container two"><div><p className="eyebrow">Included in planning</p><h2>Define a lane that can be trained and checked.</h2><ul className="list"><li>Approved tasks, source information, and completion rules</li><li>Coverage hours, handoff timing, and named manager</li><li>Minimum system access and record requirements</li><li>Initial examples, scripts, and quality-review cadence</li></ul></div><div className="card"><h2>Keep these decisions with your team</h2><ul className="list"><li>Policy, legal, medical, financial, or refund judgments</li><li>Unapproved promises or exceptions</li><li>Access beyond the documented work lane</li><li>Expansion before the first lane is reviewed</li></ul></div></div></section>
    <section className="section band"><div className="container"><p className="eyebrow">Launch sequence</p><h2>Start with a bounded sample, then expand from evidence.</h2><div className="cards"><article className="card"><h3>Define</h3><p>Share the calls, systems, hours, examples, and owner-only decisions.</p></article><article className="card"><h3>Prepare</h3><p>Set access, scripts, record fields, escalation paths, and acceptance checks.</p></article><article className="card"><h3>Review</h3><p>Inspect the first work sample and correct the workflow before adding scope.</p></article></div></div></section>
    <section className="section"><div className="container"><p className="eyebrow">Pricing questions</p><h2>Clarify assumptions before scheduling coverage.</h2><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
    <CTA/>
  </main><Footer/></>;
}
