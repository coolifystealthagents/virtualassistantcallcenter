import { Header, Footer, JsonLd } from './components';
import { blogPosts, faqs, industries, qaScorecard, roles, site, workflowSteps } from './data';

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

export default function Home() {
  return (
    <>
      <Header />
      <main className="signal-home">
        <JsonLd data={schema} />

        <section className="signal-hero">
          <div className="signal-line" aria-hidden="true" />
          <div className="container signal-hero-grid">
            <div className="signal-copy">
              <p className="signal-kicker"><span>Philippines call support</span> Built around your script</p>
              <h1>Every call gets a clear next step.</h1>
              <ul className="signal-points">
                <li>A Filipino receptionist answers in your business name</li>
                <li>Book, route, or follow up from one script</li>
                <li>Review notes and call quality each week</li>
              </ul>
              <a className="signal-button" href="/contact">Map my call coverage</a>
              <p className="signal-tagline">A calm voice for callers. A clean handoff for your team.</p>
            </div>

            <div className="signal-visual">
              <div className="signal-photo">
                <img src="/call-team.jpg" alt="Call support team reviewing caller handoff notes" />
              </div>
              <div className="signal-live"><i aria-hidden="true" /> Live coverage plan</div>
              <div className="signal-call-card">
                <span>New caller</span>
                <strong>Reason captured</strong>
                <p>Appointment request · owner notified</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ph-origin" aria-labelledby="ph-origin-title">
          <div className="container ph-origin-grid">
            <div className="ph-origin-intro">
              <p className="ph-origin-kicker"><span aria-hidden="true" /> Philippines team desk</p>
              <h2 id="ph-origin-title">Your call team is based in the Philippines.</h2>
              <p>We recruit and provide Filipino call support talent only. You set the hours, script, tools, and manager rules before the first queue opens.</p>
              <a href="/services">See Philippines call support services <span>→</span></a>
            </div>
            <div className="ph-handoff" aria-label="Sample caller handoff path">
              <div className="ph-handoff-bar">
                <div><i aria-hidden="true" /> Handoff ready</div>
                <span>Sample process · not live call data</span>
              </div>
              <ol>
                <li><span>01</span><div><small>Caller</small><strong>Reason captured</strong></div><b>INTAKE</b></li>
                <li><span>02</span><div><small>Filipino specialist</small><strong>Approved script used</strong></div><b>CHECK</b></li>
                <li><span>03</span><div><small>Your team</small><strong>Note and next action sent</strong></div><b>ROUTE</b></li>
              </ol>
              <div className="ph-handoff-footer"><span>Manager decisions stay with you</span><a href="/qa-scorecard">View the QA scorecard →</a></div>
            </div>
          </div>
        </section>

        <section className="signal-section" id="coverage">
          <div className="container">
            <div className="signal-heading">
              <div><p className="signal-label">Call lanes</p><h2>Give each caller a place to go.</h2></div>
              <p>Start with a few repeatable call types. Your receptionist follows the approved words, writes the note, and sends the next step to the right person.</p>
            </div>
            <div className="signal-lanes">
              {roles.map((role, index) => (
                <article key={role}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{role}</h3>
                  <p>{index === 0 ? 'Use your greeting, capture the reason, and route urgent calls.' : index === 1 ? 'Book the right slot and send a clean confirmation.' : index === 2 ? 'Answer from the approved FAQ and open the right ticket.' : index === 3 ? 'Return missed calls and record the next action.' : index === 4 ? 'Ask the required questions without giving advice.' : 'Keep call notes, tags, owners, and review samples tidy.'}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="signal-path" id="how-it-works">
          <div className="container signal-path-grid">
            <div className="signal-path-intro">
              <p className="signal-label">One call path</p>
              <h2>Leave a note the next person can use.</h2>
              <p>Callers should know what happens next. Your team should be able to read the record without replaying the whole conversation.</p>
              <a href="/workflows">See the full call workflow <span>→</span></a>
            </div>
            <ol>
              {workflowSteps.map((step, index) => (
                <li key={step.title}>
                  <span>{index + 1}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="signal-section signal-quality" id="quality">
          <div className="container signal-quality-grid">
            <div className="signal-score-card">
              <div className="signal-score-top"><span>Weekly call check</span><strong>100</strong></div>
              {qaScorecard.map((item) => (
                <div className="signal-score-row" key={item.item}>
                  <span>{item.item}</span><b>{item.points} pts</b>
                </div>
              ))}
              <a href="/qa-scorecard">Open the full QA scorecard</a>
            </div>
            <div className="signal-quality-copy">
              <p className="signal-label">Quality you can see</p>
              <h2>Review a few calls. Fix small misses early.</h2>
              <p>A script helps, but it is not enough on its own. Score a small call sample for accuracy, tone, routing, notes, and safe escalation. Then coach one clear point at a time.</p>
              <div className="signal-rule"><span>Keep with your team</span><p>Medical, legal, policy, refund, billing, and other sensitive decisions stay with an approved manager.</p></div>
              <a className="signal-text-link" href="/contact">Map my call coverage →</a>
            </div>
          </div>
        </section>

        <section className="signal-industries">
          <div className="container signal-industries-inner">
            <p className="signal-label">Common teams</p>
            <h2>Useful where the phone starts the work.</h2>
            <div>{industries.map((industry) => <span key={industry}>{industry}</span>)}</div>
          </div>
        </section>

        <section className="signal-section signal-guides">
          <div className="container">
            <div className="signal-heading"><div><p className="signal-label">Field notes</p><h2>Plan the handoff before day one.</h2></div><a href="/blog">Read all guides →</a></div>
            <div className="signal-guide-grid">
              {blogPosts.slice(0, 3).map((post, index) => (
                <a href={`/blog/${post.slug}`} key={post.slug}>
                  <span>0{index + 1} · {post.minutes} min</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <b>Read guide →</b>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="signal-close">
          <div className="container signal-close-inner">
            <div><p className="signal-label">Plan the first queue</p><h2>Give missed calls a clear way back in.</h2></div>
            <div><p>Share your call types, hours, tools, and escalation rules. The team will use them to shape a practical coverage plan.</p><a className="signal-button signal-button-light" href="/contact">Map my call coverage</a></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
