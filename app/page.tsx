import type { CSSProperties } from 'react';
import { Header, Footer, JsonLd, Marquee, SectionHead, CTA } from './components';
import { blogPosts, faqs, qaScorecard, roles, site, workflowSteps } from './data';
import { fleetServices } from './fleet-content';
import { TestimonialsRail } from './booking-components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Philippines virtual receptionist call center services',
      url: site.url,
      description: 'Filipino virtual receptionists for call answering, intake, appointment setting, follow-up, and customer support.',
      mainEntity: { '@id': `${site.url}/#service` },
    },
    {
      '@type': 'Service',
      '@id': `${site.url}/#service`,
      name: 'Philippines virtual receptionist call center services',
      provider: { '@type': 'Organization', name: site.brand, url: site.url },
      areaServed: 'United States',
      serviceType: roles,
      description: site.angle,
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

const laneTags: Record<string, string> = {
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

const marquee = ['Answer', 'Qualify', 'Book', 'Route', 'Follow up', 'Record', 'Review'];
const homeRoles = fleetServices.slice(0, 8);

export default function Home() {
  const totalPoints = qaScorecard.reduce((sum, item) => sum + item.points, 0);
  const guides = blogPosts.slice(0, 3);

  return (
    <>
      <Header />
      <main id="main-content" className="vx-home">
        <JsonLd data={schema} />

        <section className="vx-hero">
          <div className="vx-hero-grid vx-container">
            <div className="vx-hero-copy">
              <p className="vx-eyebrow">Philippines call support / inbound + outbound</p>
              <h1>
                <span>Every call</span>
                <span>gets a</span>
                <em>next step.</em>
              </h1>
              <p className="vx-hero-lead">
                A Filipino receptionist answers in your business name, follows the approved
                script, and leaves a record your team can act on. No guessing. No dead ends.
              </p>
              <div className="vx-actions">
                <a className="vx-btn vx-btn--orange" href="/contact-us">Map my call coverage ↗</a>
                <a className="vx-btn vx-btn--ghost" href="/workflows">See the call flow</a>
              </div>
              <ul className="vx-hero-notes">
                <li>Philippines-based specialists</li>
                <li>Your script, tools, and hours</li>
                <li>Manager-owned exceptions</li>
              </ul>
            </div>

            <div className="vx-stage" data-vx-scene aria-label="Call handling scene">
              <span className="vx-dial" aria-hidden="true" />
              <span className="vx-live"><i aria-hidden="true" /> Live coverage plan</span>
              <figure className="vx-photo" data-vx-tilt data-tilt-strength="4">
                <img
                  src="/call-team.jpg"
                  alt="Filipino call support specialist wearing a headset"
                  width="1600"
                  height="2400"
                  fetchPriority="high"
                />
                <figcaption>Philippines call desk · real person, real headset</figcaption>
              </figure>
              <div className="vx-ticket vx-ticket--a" data-vx-depth="16">
                <span>Inbound / 00:12</span>
                <strong>Reason captured</strong>
                <small>Appointment request · owner notified</small>
              </div>
              <div className="vx-ticket vx-ticket--b" data-vx-depth="22">
                <span>Handoff / 00:42</span>
                <strong>Routed to Dana</strong>
                <small>CRM note saved · callback booked</small>
              </div>
              <span className="vx-sticker" data-vx-depth="10" aria-hidden="true">Live<br />line</span>
              <div className="vx-wave" data-vx-depth="12" aria-hidden="true">
                {Array.from({ length: 22 }, (_, index) => <i key={index} />)}
              </div>
            </div>
          </div>
          <Marquee items={marquee} />
        </section>

        <section className="vx-manifesto">
          <div className="vx-manifesto-grid vx-container">
            <h2 data-reveal>
              A call is a handoff.
              <br />
              <em>Not a note.</em>
            </h2>
            <div className="vx-manifesto-copy" data-reveal style={{ '--vx-delay': '100ms' } as CSSProperties}>
              <p>
                Every caller should know what happens next. Every manager should be able to read
                the record without replaying the conversation.
              </p>
              <p>
                We build the lane around your real call types, then document the greeting, the
                questions, the system of record, the owner, and the stop rule before the first
                queue opens.
              </p>
              <div className="vx-manifesto-facts">
                <div><strong>Before launch</strong><span>Script, access list, routing table, and escalation owner approved</span></div>
                <div><strong>During a call</strong><span>Only approved answers, complete notes, and a clear next action</span></div>
                <div><strong>Every week</strong><span>A small call sample scored for accuracy, tone, notes, and safe routing</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="vx-section">
          <div className="vx-container">
            <SectionHead
              label="The switchboard"
              title={<>Pick the lane.<br />We’ll cover the calls.</>}
              copy="Start with one repeatable call type. Each lane has its own inputs, records, boundaries, and review owner."
            />

            <div className="vx-lanes">
              {homeRoles.map((service: any, index: number) => (
                <a
                  className="vx-lane"
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  data-reveal
                  style={{ '--vx-delay': `${(index % 2) * 70}ms` } as CSSProperties}
                >
                  <span className="vx-lane-tag">{laneTags[service.slug] || 'Call lane'}</span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <span className="vx-lane-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>

            <div className="vx-lanes-foot">
              <p>10 defined call lanes · one recruiting and support team</p>
              <a className="vx-link" href="/services">Compare every service</a>
            </div>
          </div>
        </section>

        <section className="vx-section vx-section--ink">
          <div className="vx-container">
            <SectionHead
              light
              label="One call path"
              title={<>Leave a record the next person can use.</>}
              copy="The assistant does not just answer. They capture the reason, follow the approved path, and finish with a note and an owner."
            />

            <div className="vx-process">
              {workflowSteps.map((step, index) => (
                <article
                  className="vx-step"
                  key={step.title}
                  data-reveal
                  style={{ '--vx-delay': `${index * 90}ms` } as CSSProperties}
                >
                  <span className="vx-step-dot">{[ 'Capture', 'Script', 'Route', 'Review' ][index]}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>

            <div className="vx-rule-note" data-reveal>
              <strong>Manager rule</strong>
              <p>
                If the script does not cover the request, the specialist sends it to the named
                owner with the context. They do not invent a policy, a price, or a promise.
              </p>
            </div>
          </div>
        </section>

        <section className="vx-quality">
          <div className="vx-quality-grid vx-container">
            <div className="vx-gauge" aria-label={`Weekly QA scorecard total: ${totalPoints} points`}>
              <svg viewBox="0 0 280 280" aria-hidden="true">
                <circle cx="140" cy="140" r="120" />
                <circle className="vx-gauge-ring" cx="140" cy="140" r="120" />
              </svg>
              <div className="vx-gauge-copy">
                <strong>{totalPoints}</strong>
                <span>Point weekly review</span>
              </div>
            </div>

            <div className="vx-quality-copy">
              <p className="vx-eyebrow">Quality you can see</p>
              <h2>Review a few calls. Fix small misses early.</h2>
              <p>
                A script is not a quality plan. Score a small sample for accuracy, tone, routing,
                notes, and safe escalation. Then coach one clear point at a time.
              </p>
              <div className="vx-score-list">
                {qaScorecard.map((item) => (
                  <div className="vx-score-row" key={item.item}>
                    <span>{item.item}</span>
                    <b>{item.points} pts</b>
                    <i style={{ '--w': `${Math.round((item.points / totalPoints) * 100)}%` } as CSSProperties} />
                  </div>
                ))}
              </div>
              <a className="vx-link" href="/qa-scorecard" style={{ marginTop: 22 }}>Open the full QA scorecard</a>
            </div>
          </div>
        </section>

        <section className="vx-section vx-section--white">
          <div className="vx-team vx-container">
            <figure className="vx-team-photo" data-vx-tilt data-tilt-strength="3">
              <img
                src="/stealth-agents-team.jpg"
                alt="Stealth Agents team outside the Bacolod City Government Center"
                width="953"
                height="540"
                loading="lazy"
              />
              <figcaption><span>Official team · Bacolod City, Philippines</span><b>StealthAgents</b></figcaption>
            </figure>
            <div className="vx-team-copy" data-reveal>
              <span className="vx-team-badge"><i aria-hidden="true" /> The people behind the line</span>
              <h2>One voice. A whole team behind it.</h2>
              <p>
                StealthAgents recruits, employs, and supports the Philippines-based specialists who
                answer these calls. Virtual Assistant Call Center is the planning layer for your
                scripts, coverage, and review rules.
              </p>
              <p>
                Your team owns priorities, approvals, and sensitive decisions. The specialist owns
                the agreed call work, the record, and the handoff.
              </p>
              <a className="vx-link" href="https://stealthagents.com/our-team/" target="_blank" rel="noopener noreferrer">Meet the official team ↗</a>
            </div>
          </div>
        </section>

        <section className="vx-reviews" aria-label="Client reviews">
          <div className="vx-container">
            <TestimonialsRail />
          </div>
        </section>

        <section className="vx-section">
          <div className="vx-container">
            <SectionHead
              label="Field notes"
              title={<>Plan the handoff before day one.</>}
              copy="Practical guides for call scripts, routing, access, and the first week of review."
            />
            <div className="vx-notes">
              {guides.map((post: any, index: number) => (
                <a
                  className="vx-note"
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  data-reveal
                  style={{ '--vx-delay': `${index * 70}ms` } as CSSProperties}
                >
                  <span className="vx-note-meta">Field note / {post.minutes} min</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="vx-note-foot"><span>Read the guide</span><b aria-hidden="true">↗</b></div>
                </a>
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
