import { CTA, Footer, Header, JsonLd, PageHero, SectionHead } from '../components';
import { site } from '../data';
import { fleetServices } from '../fleet-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Philippines Call Support Services',
  description: 'Compare Philippines-based call answering, appointment setting, lead intake, follow-up, quality assurance, and reporting services.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Philippines Call Support Services',
    description: 'Choose a focused call support lane with defined inputs, outputs, boundaries, and manager-owned exceptions.',
    url: '/services',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Virtual Assistant Call Center service lanes' }],
  },
};

const itemList = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Philippines call support services',
  url: `${site.url}/services`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: fleetServices.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      url: `${site.url}/services/${service.slug}`,
    })),
  },
};

const faqs = [
  ['Can we start with one call type?', 'Yes. A narrow first lane is easier to script, review, and improve before additional call types are added.'],
  ['Do specialists make policy decisions?', 'No. Your team defines the approved script, access, and escalation rules. Exceptions remain with your named manager.'],
  ['Which systems can the team use?', 'Use only the phone, calendar, CRM, help desk, or shared inbox access required for the assigned lane.'],
  ['How is quality reviewed?', 'Review a small call sample for accuracy, tone, routing, notes, and safe escalation using an agreed scorecard.'],
];

const tags: Record<string, string> = {
  'inbound-customer-calls': 'Inbound',
  'outbound-lead-qualification': 'Outbound',
  'appointment-setting': 'Scheduling',
  'after-hours-answering': 'After hours',
  'order-status-calls': 'Order support',
  'patient-scheduling': 'Healthcare',
  'real-estate-lead-intake': 'Real estate',
  'customer-win-back-calls': 'Win-back',
  'call-quality-assurance': 'Quality',
  'call-disposition-reporting': 'Reporting',
};

export default function Services() {
  return (
    <>
      <Header />
      <main id="main-content" className="vx-page">
        <JsonLd data={itemList} />

        <PageHero
          label="Philippines call support"
          title={<>Choose the work lane before the coverage.</>}
          lead="Start with the caller, the decision boundary, the system of record, and the required output. Then match the hours and capacity to work that is already clear."
          artTitle="Ten lanes. One owner."
          artNote="Inputs · records · boundaries"
          actions={
            <>
              <a className="vx-btn vx-btn--orange" href="/contact-us">Map my first lane ↗</a>
              <a className="vx-btn vx-btn--outline-light" href="#service-guide">Compare the options</a>
            </>
          }
        />

        <section className="vx-section">
          <div className="vx-container">
            <SectionHead
              label="The service menu"
              title={<>Ten lanes.<br />One clear owner.</>}
              copy="Each service explains who it fits, the information required, the work performed, the records left behind, and the decisions that stay with your team."
            />
            <div className="vx-service-grid">
              {fleetServices.map((service, index) => (
                <a className="vx-service-card" href={`/services/${service.slug}`} key={service.slug} data-reveal style={{ '--vx-delay': `${(index % 2) * 60}ms` } as import('react').CSSProperties}>
                  <span className="vx-service-tag">{tags[service.slug] || 'Call lane'}</span>
                  <h3>{service.title}</h3>
                  <p>{service.problem}</p>
                  <span className="vx-service-output">Output · {service.outputs[0]}</span>
                  <b>View scope and boundaries</b>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="vx-section vx-section--sand" id="service-guide">
          <div className="vx-container">
            <SectionHead
              label="Decision guide"
              title={<>Pick by outcome, not by job title.</>}
              copy="The easiest lane to launch is the one with a repeatable caller type, a clear finish, and a manager who can answer exceptions."
            />
            <div className="vx-service-decision">
              <article>
                <h3>Capture and route</h3>
                <p>Use inbound calls, after-hours answering, or real estate intake when the primary job is collecting complete context and assigning the next owner.</p>
              </article>
              <article>
                <h3>Book and follow up</h3>
                <p>Use appointment setting, lead qualification, or win-back calls when the next step follows a defined eligibility and consent rule.</p>
              </article>
              <article>
                <h3>Measure and improve</h3>
                <p>Use quality assurance or disposition reporting when managers need observable evidence, cleaner records, and coaching priorities.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="vx-section vx-section--white">
          <div className="vx-contact-team-grid vx-container">
            <figure>
              <img src="/stealth-agents-team.jpg" alt="Stealth Agents team at the Bacolod office" width="953" height="540" loading="lazy" />
              <figcaption><img src="/stealth-agents-logo-black.png" alt="Stealth Agents" width="149" height="50" /><span>Official team · Bacolod</span></figcaption>
            </figure>
            <div>
              <p className="vx-eyebrow">Delivery environment</p>
              <h2>Supported by the Stealth Agents team.</h2>
              <p>The parent team provides the recruiting and support environment behind these Philippines-based call services. Your written workflow remains the source of truth for daily execution.</p>
              <p>Your manager keeps approvals, policy decisions, and sensitive exceptions. The specialist owns the agreed calls, notes, and handoff.</p>
              <a className="vx-link" href="https://stealthagents.com/our-team/" target="_blank" rel="noopener noreferrer">Meet the official team ↗</a>
              <div className="vx-proof-facts">
                <div><strong>Philippines only</strong><span>Recruiting, employment, and support stay in-country.</span></div>
                <div><strong>Written lane</strong><span>Your script and routing rules remain the source of truth.</span></div>
                <div><strong>Manager owned</strong><span>Policy, pricing, and sensitive exceptions stay with you.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="vx-section">
          <div className="vx-container">
            <SectionHead
              label="Frequently asked questions"
              title={<>Clarify the lane before launch.</>}
            />
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
