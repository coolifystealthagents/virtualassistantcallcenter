import { Header, Footer, CTA, JsonLd, PageHero, SectionHead } from '../components';
import { workflowSteps, sources } from '../data';

export const metadata = {
  title: 'VA call center workflows for intake, booking, and follow-up',
  description: 'Simple virtual assistant call center workflows for call answering, lead intake, appointment setting, CRM notes, escalation, and weekly review.',
  alternates: { canonical: '/workflows' },
};

const queueLanes = [
  { label: 'New lead', rule: 'Ask fit questions, then book or send the quote brief.', status: 'Book' },
  { label: 'Existing customer', rule: 'Open a ticket with the order, account, or case number.', status: 'Ticket' },
  { label: 'Urgent issue', rule: 'Confirm the issue and alert the owner before making promises.', status: 'Escalate' },
  { label: 'Missed call', rule: 'Call back once, leave the approved message, and log the result.', status: 'Follow up' },
];

const handoffChecks = [
  'Approved greeting and caller identity check',
  'Allowed answers, banned answers, and escalation notes',
  'CRM fields the assistant must fill in after every call',
  'Weekly review sample size and pass score',
];

export default function Workflows() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to set up a virtual assistant call center workflow',
    description: metadata.description,
    supply: handoffChecks.map((name) => ({ '@type': 'HowToSupply', name })),
    citation: sources.map((source) => source.url),
    step: workflowSteps.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.title, text: step.text })),
  };

  return (
    <>
      <Header />
      <main id="main-content" className="vx-page">
        <JsonLd data={schema} />
        <PageHero
          label="Call workflows"
          title={<>A call path that is easy to run.</>}
          lead="Answer, qualify, book, update, and route from one approved path. Build the path before you hire, then review a small sample every week."
          artTitle="Every call has a next stop."
          artNote="One path · one record"
          actions={
            <>
              <a className="vx-btn vx-btn--orange" href="/contact-us">Build my call plan ↗</a>
              <a className="vx-btn vx-btn--outline-light" href="/qa-scorecard">See the QA scorecard</a>
            </>
          }
        />

        <section className="vx-section">
          <div className="vx-container">
            <SectionHead
              label="Lane map"
              title={<>Give every caller one next step.</>}
              copy="Each lane needs an owner, a saved note, and a clear finish. If the script does not cover it, the specialist routes it."
            />
            <div className="vx-service-grid">
              {queueLanes.map((lane, index) => (
                <article className="vx-service-card" key={lane.label} style={{ minHeight: 200 }}>
                  <span className="vx-service-tag">{lane.status}</span>
                  <h3>{lane.label}</h3>
                  <p>{lane.rule}</p>
                  <b>{lane.status === 'Book' ? 'Calendar + CRM note' : lane.status === 'Ticket' ? 'Ticket + owner' : lane.status === 'Escalate' ? 'Alert + callback time' : 'Attempt + outcome'}</b>
                </article>
              ))}
            </div>
            <div className="vx-rule-note" style={{ borderColor: 'var(--vx-ink)', background: 'var(--vx-yellow)' }}>
              <strong style={{ color: 'var(--vx-ink)' }}>Manager rule</strong>
              <p style={{ color: '#2f2b1c' }}>If the script does not cover the request, send it to the named owner. Do not guess a policy, a price, or a promise.</p>
            </div>
          </div>
        </section>

        <section className="vx-section vx-section--ink">
          <div className="vx-container">
            <SectionHead light label="Four-step flow" title={<>Keep the handoff simple enough to coach.</>} />
            <div className="vx-process">
              {workflowSteps.map((step, index) => (
                <article className="vx-step" key={step.title}>
                  <span className="vx-step-dot">{[ 'Capture', 'Script', 'Route', 'Review' ][index]}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vx-section">
          <div className="vx-container vx-two vx-two--wide">
            <div>
              <p className="vx-eyebrow">Script starter</p>
              <h2 style={{ margin: '0 0 18px', fontFamily: 'var(--vx-display)', fontSize: 'clamp(34px,4.4vw,58px)', fontWeight: 400, lineHeight: '.92', textTransform: 'uppercase' }}>Use one opening line, then route the call.</h2>
              <div style={{ padding: 24, border: '1px solid var(--vx-ink)', background: 'var(--vx-white)' }}>
                <p style={{ margin: 0, color: 'var(--vx-ink)', fontSize: 19, fontWeight: 700, lineHeight: 1.45 }}>“Thanks for calling. I can help get this to the right person. May I ask what you need help with today?”</p>
                <ul className="vx-flow-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 7, marginTop: 18, padding: 0, listStyle: 'none', border: 0, background: 'transparent' }}>
                  {['Name, phone, email, and company', 'Reason for call and urgency', 'Best appointment window or callback time', 'Source of the lead, if new', 'Any promise the assistant should not make'].map((item) => (
                    <li key={item} style={{ position: 'relative', paddingLeft: 14, color: '#3e3c36', fontSize: 13, lineHeight: 1.5 }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ padding: 24, border: '1px solid var(--vx-ink)', background: 'var(--vx-paper-2)' }}>
              <p className="vx-eyebrow">Handoff checks</p>
              <div className="vx-faq">
                {handoffChecks.map((item) => <div key={item} style={{ padding: '12px 0', borderBottom: '1px solid #bfb9ab', fontSize: 13, lineHeight: 1.55 }}>{item}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="vx-section vx-section--sand">
          <div className="vx-container vx-two">
            <div style={{ padding: 26, border: '1px solid var(--vx-ink)', background: 'var(--vx-white)' }}>
              <p className="vx-eyebrow">Safe scope</p>
              <h2 style={{ fontSize: 24, margin: '0 0 12px' }}>What can sit with the assistant</h2>
              <p style={{ margin: 0, color: 'var(--vx-muted)', fontSize: 13, lineHeight: 1.65 }}>Basic intake, schedule changes, reminders, status notes, simple FAQs, and routing can sit with the assistant.</p>
            </div>
            <div style={{ padding: 26, border: '1px solid var(--vx-ink)', background: 'var(--vx-white)' }}>
              <p className="vx-eyebrow">Owner-only</p>
              <h2 style={{ fontSize: 24, margin: '0 0 12px' }}>What stays with your manager</h2>
              <p style={{ margin: 0, color: 'var(--vx-muted)', fontSize: 13, lineHeight: 1.65 }}>Policy exceptions, legal or medical advice, refunds, account changes, angry customer decisions, and private data issues.</p>
            </div>
          </div>
        </section>

        <section className="vx-section">
          <div className="vx-container">
            <SectionHead label="Sources to keep close" title={<>Use outside guidance. Do not invent policy on a live call.</>} />
            <div className="vx-faq">
              {sources.map((source) => (
                <details key={source.url}>
                  <summary>{source.name}</summary>
                  <p>{source.note} <a href={source.url} target="_blank" rel="noopener noreferrer">Open the source ↗</a></p>
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
