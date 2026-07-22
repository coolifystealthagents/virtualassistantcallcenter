import { CTA, Footer, Header, JsonLd } from '../components';
import { site } from '../data';
import { fleetServices } from '../fleet-content';

export const metadata = {
  title: 'Philippines call support services',
  description: 'Compare call answering, appointment setting, customer support, follow-up, and QA services handled by Filipino call support specialists.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Philippines call support services',
    description: 'Choose a focused phone support lane for a Filipino specialist, with clear scripts, records, and manager rules.',
    url: '/services',
  },
};

const serviceRecords: Record<string, { status: string; action: string; record: string }> = {
  'inbound-customer-calls': { status: 'Answer', action: 'Greet, identify the reason, and route the caller', record: 'Caller note + owner' },
  'outbound-lead-qualification': { status: 'Qualify', action: 'Use approved questions and book the right next step', record: 'Lead status + follow-up' },
  'appointment-setting': { status: 'Book', action: 'Offer approved times and confirm the details', record: 'Calendar + CRM note' },
  'after-hours-answering': { status: 'Route', action: 'Take the message and follow the urgent-call rule', record: 'Alert + callback time' },
  'order-status-calls': { status: 'Update', action: 'Check the allowed order fields and explain the status', record: 'Order note + outcome' },
  'patient-scheduling': { status: 'Schedule', action: 'Book from the approved calendar without giving medical advice', record: 'Appointment + flag' },
  'real-estate-lead-intake': { status: 'Capture', action: 'Ask the required property and timing questions', record: 'Lead record + agent' },
  'customer-win-back-calls': { status: 'Follow up', action: 'Use the approved offer and log the response', record: 'Attempt + outcome' },
  'call-quality-assurance': { status: 'Review', action: 'Check a call sample against the scorecard', record: 'Score + coaching note' },
  'call-disposition-reporting': { status: 'Report', action: 'Clean call tags and send the queue summary', record: 'Disposition + next action' },
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

export default function Services() {
  return (
    <>
      <Header />
      <main className="services-console">
        <JsonLd data={itemList} />

        <section className="services-console-hero">
          <div className="container services-console-hero-grid">
            <div className="services-console-copy">
              <p className="services-console-kicker"><span aria-hidden="true" /> Philippines call desk</p>
              <h1>Choose the call lane. Set the rules. Keep the record.</h1>
              <p className="services-console-lead">Filipino call support specialists can answer, book, follow up, and update your systems. You choose what they can handle and when a manager must step in.</p>
              <div className="services-console-actions">
                <a className="services-console-button" href="/contact">Map my first call lane</a>
                <a className="services-console-link" href="/workflows">See the call flow <span>→</span></a>
              </div>
              <div className="services-console-rule">
                <strong>Manager rule</strong>
                <span>If the script does not cover the request, the specialist routes it to your named owner.</span>
              </div>
            </div>

            <div className="services-console-image">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=82" alt="Call support team reviewing customer records on laptop screens" />
              <div className="services-console-image-tag"><i aria-hidden="true" /> Script ready</div>
              <div className="services-console-image-card">
                <span>Sample handoff</span>
                <strong>Appointment request</strong>
                <p>Calendar checked · CRM note saved</p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-board" aria-labelledby="services-board-title">
          <div className="container">
            <div className="services-board-heading">
              <div>
                <p className="services-board-kicker">Service queue</p>
                <h2 id="services-board-title">Start with one repeatable call type.</h2>
              </div>
              <p>Each lane below names the action and the record your Filipino specialist leaves behind. Open a service to see the tasks, controls, and first review steps.</p>
            </div>

            <div className="services-board-shell">
              <div className="services-board-bar">
                <div><i aria-hidden="true" /> Coverage menu</div>
                <span>Philippines team · manager controlled</span>
              </div>
              <div className="services-board-grid">
                {fleetServices.map((service, index) => {
                  const record = serviceRecords[service.slug];
                  return (
                    <a className="services-board-card" href={`/services/${service.slug}`} key={service.slug}>
                      <div className="services-board-card-top">
                        <span>Lane {String(index + 1).padStart(2, '0')}</span>
                        <b>{record.status}</b>
                      </div>
                      <h3>{service.title}</h3>
                      <p>{record.action}</p>
                      <dl>
                        <div><dt>Record</dt><dd>{record.record}</dd></div>
                        <div><dt>Team</dt><dd>Filipino specialist</dd></div>
                      </dl>
                      <strong className="services-board-open">Open service <span>→</span></strong>
                    </a>
                  );
                })}
              </div>
              <div className="services-board-footer">
                <p><span>QA</span> Review call notes, routing, and safe escalation before adding more call types.</p>
                <a href="/qa-scorecard">Use the QA scorecard →</a>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
