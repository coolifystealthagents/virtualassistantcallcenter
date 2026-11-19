import type { Metadata } from 'next';
import { CTA, Footer, Header, JsonLd, PageHero, SectionHead } from '../components';
import { publicTiers } from '../fleet-content';
import { site } from '../data';

const description = 'Public hourly pricing for Philippines-based assistant staffing, with scope inputs, tier guidance, boundaries, and a practical launch process.';

export const metadata: Metadata = {
  title: 'Pricing for Philippines-based call support staffing',
  description,
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

export default function Pricing() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Philippines-based assistant staffing',
    provider: { '@type': 'Organization', name: site.brand, url: site.url },
    url: `${site.url}/pricing`,
    description,
    offers: publicTiers.map((tier) => ({
      '@type': 'Offer',
      name: tier.name,
      description: tier.detail,
      priceSpecification: { '@type': 'UnitPriceSpecification', priceCurrency: 'USD', unitText: 'HOUR', price: tier.price.replace(/[^0-9.]/g, '') },
    })),
  };

  return (
    <>
      <Header />
      <main id="main-content" className="vx-page">
        <JsonLd data={schema} />
        <PageHero
          label="Public hourly tiers"
          title={<>Price the role after the lane is clear.</>}
          lead="Choose a tier for the complexity of the approved work, then document the schedule, systems, boundaries, and review owner before launch."
          artTitle="Scope first. Then hours."
          artNote="Public tiers · manager review"
          actions={<a className="vx-btn vx-btn--orange" href="/contact-us">Scope my support lane ↗</a>}
        />

        <section className="vx-section">
          <div className="vx-container">
            <SectionHead
              label="Tier guide"
              title={<>Choose by complexity and ownership.</>}
              copy="These public tiers describe the support level. They do not replace intake or promise that every task belongs in every tier."
            />
            <div className="vx-service-decision">
              {publicTiers.map((tier, index) => (
                <article key={tier.name} style={{ position: 'relative' }}>
                  <span className="vx-service-tag">Tier {index + 1}</span>
                  <h3 style={{ marginTop: 20 }}>{tier.name}</h3>
                  <p style={{ margin: '4px 0 10px', color: 'var(--vx-ink)', fontFamily: 'var(--vx-display)', fontSize: 38, lineHeight: 1 }}>{tier.price}</p>
                  <p>{tier.detail}</p>
                  <a className="vx-link" href="/contact-us" style={{ marginTop: 18 }}>Discuss this tier</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vx-section vx-section--sand">
          <div className="vx-container">
            <SectionHead label="Scope inputs" title={<>Five inputs shape the real staffing plan.</>} />
            <div className="vx-five">
              {inputs.map(([title, body], index) => (
                <article key={title}>
                  <span className="vx-service-tag">Input {index + 1}</span>
                  <h3 style={{ fontSize: 17, marginTop: 16 }}>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vx-section">
          <div className="vx-container">
            <div className="vx-head">
              <div><p className="vx-eyebrow">Launch sequence</p><h2>Start with a bounded sample, then expand from evidence.</h2></div>
              <p>Define the work, prepare the access, and review the first sample before adding call types or hours.</p>
            </div>
            <div className="vx-service-decision">
              <article><h3>Define</h3><p>Share the calls, systems, hours, examples, and owner-only decisions.</p></article>
              <article><h3>Prepare</h3><p>Set access, scripts, record fields, escalation paths, and acceptance checks.</p></article>
              <article><h3>Review</h3><p>Inspect the first work sample and correct the workflow before adding scope.</p></article>
            </div>
          </div>
        </section>

        <section className="vx-section vx-section--white">
          <div className="vx-container">
            <SectionHead label="Pricing questions" title={<>Clarify assumptions before scheduling coverage.</>} />
            <div className="vx-faq">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
