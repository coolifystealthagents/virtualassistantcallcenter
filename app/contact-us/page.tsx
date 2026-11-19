import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import StandardContactForm from './StandardContactForm';
import './contact.css';

export const metadata: Metadata = {
  title: 'Contact Us | Virtual Call Center Support',
  description: 'Scope a virtual call center workflow around your call volume, coverage hours, scripts, systems, and escalation rules.',
  alternates: { canonical: '/contact-us' },
  robots: { index: true, follow: true },
};

const callLanes = [
  ['Reception and intake', 'Answer in your business name, capture complete caller details, and send each request to the right owner.'],
  ['Appointment setting', 'Schedule, reschedule, and confirm from your approved calendar and qualification rules.'],
  ['Lead qualification', 'Ask approved questions, record intent, and route qualified opportunities without overstepping the script.'],
  ['Customer support', 'Resolve documented requests, manage callback queues, and escalate sensitive or unusual issues.'],
];

const checklist = [
  'Call types and approved responses',
  'CRM, phone, calendar, and access boundaries',
  'Routing ownership and review cadence',
  'Urgency, privacy, and escalation triggers',
  'Disposition codes and note rules',
  'Coverage targets and first-month scorecard',
];

const reviewProfiles = [
  ['Google', '/review-google.webp', 'https://www.google.com/search?q=STEALTH+AGENTS'],
  ['Trustpilot', '/review-trustpilot.png', 'https://www.trustpilot.com/review/stealthagents.com'],
  ['Facebook', '/review-facebook.png', 'https://www.facebook.com/StealthAgents/reviews'],
];

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="vx-page vx-contact">
        <section className="vx-contact-hero">
          <div className="vx-contact-grid vx-container">
            <div className="vx-contact-copy">
              <p className="vx-eyebrow vx-eyebrow--light">Free call-coverage consultation</p>
              <h1>Give every caller a clear next step.</h1>
              <p className="vx-contact-lead">
                Tell us how calls reach your team today. We will map the scripts, systems, coverage
                hours, and escalation rules a Philippines-based specialist needs to support the
                queue.
              </p>
              <ul className="vx-contact-list">
                <li>Clear scope before staffing</li>
                <li>Manager-owned approvals</li>
                <li>Reviewable launch plan</li>
              </ul>
              <div className="vx-contact-brief">
                <span>What the first call covers</span>
                <div><strong>Scope</strong><p>One caller type, the approved words, and the finish line.</p></div>
                <div><strong>Route</strong><p>The system of record, the next owner, and the escalation rule.</p></div>
                <div><strong>Review</strong><p>The sample size, the scorecard, and the first coaching point.</p></div>
              </div>
            </div>
            <div>
              <StandardContactForm endpoint="/api/contact" encoding="form" />
              <p className="vx-contact-note">No obligation. Your request may be routed to the StealthAgents staffing team for follow-up.</p>
            </div>
          </div>
        </section>

        <section className="vx-contact-team">
          <div className="vx-contact-team-grid vx-container">
            <figure>
              <img src="/stealth-agents-team.jpg" width="953" height="540" alt="Stealth Agents team members at the Bacolod office" />
              <figcaption>
                <img src="/stealth-agents-logo-black.png" width="149" height="50" alt="Stealth Agents logo" />
                <span>Official team · Bacolod</span>
              </figcaption>
            </figure>
            <div>
              <p className="vx-eyebrow">The team behind the handoff</p>
              <h2>Structured call support, powered by Stealth Agents.</h2>
              <p>
                Virtual Assistant Call Center helps businesses define repeatable phone work.
                Stealth Agents provides the parent-team environment behind recruiting, onboarding,
                and ongoing support.
              </p>
              <p>
                Your manager keeps approvals, policy decisions, and sensitive exceptions. The
                specialist owns the agreed calls, notes, and handoff.
              </p>
              <a className="vx-btn vx-btn--ghost" href="https://stealthagents.com/our-team/" target="_blank" rel="noopener noreferrer">Meet the Stealth Agents team ↗</a>
            </div>
          </div>
        </section>

        <section className="vx-section">
          <div className="vx-container">
            <div className="vx-head">
              <div>
                <p className="vx-eyebrow">Where call support fits</p>
                <h2>Route each conversation toward an owned outcome.</h2>
              </div>
              <p>
                A dependable call lane combines approved language, complete notes, bounded
                decisions, and one accountable escalation owner.
              </p>
            </div>
            <div className="vx-contact-cards">
              {callLanes.map(([title, body], index) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <span className="vx-contact-card-foot">{['Caller record + owner', 'Calendar + confirmation', 'Qualification note + stage', 'Ticket + escalation note'][index]}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vx-section vx-section--sand">
          <div className="vx-container">
            <div className="vx-head">
              <div>
                <p className="vx-eyebrow">Capability checklist</p>
                <h2>A script is only the beginning.</h2>
              </div>
              <p>Map the conditions that help remote receptionists stay responsive, accurate, and easy to coach.</p>
            </div>
            <div className="vx-check-grid">
              {checklist.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="vx-reviews" aria-label="Independent review sources">
          <div className="vx-container">
            <div className="vx-head">
              <div>
                <p className="vx-eyebrow">Independent review profiles</p>
                <h2>Check the current source.</h2>
              </div>
              <p>Ratings and counts change. These links open the live Stealth Agents profiles instead of freezing an unsupported marketing number.</p>
            </div>
            <div className="vx-review-grid">
              {reviewProfiles.map(([name, image, href]) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer">
                  <img src={image} alt={`${name} reviews`} width="150" height="50" loading="lazy" />
                  <span>View {name} reviews ↗</span>
                  <small>Live profile · opens in a new tab</small>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="vx-section vx-section--ink">
          <div className="vx-container vx-contact-final">
            <div>
              <p className="vx-eyebrow vx-eyebrow--light">Prepare the first queue</p>
              <h2 style={{ margin: 0, color: 'var(--vx-white)', fontFamily: 'var(--vx-display)', fontSize: 'clamp(42px,5.4vw,76px)', lineHeight: '.9', textTransform: 'uppercase' }}>Turn call coverage into a controlled lane.</h2>
              <p style={{ maxWidth: 640, margin: '18px 0 0', color: '#b9b5ab', fontSize: 14, lineHeight: 1.65 }}>Share your call patterns, systems, and routing rules. We will use them to define a practical next step.</p>
            </div>
            <a className="vx-btn vx-btn--orange" href="#contactPageForm">Book a free consultation ↗</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
