import { Header, Footer, CTA, JsonLd, PageHero, SectionHead } from '../components';
import { site, qaScorecard, faqs } from '../data';

export const metadata = {
  title: 'VA call center QA scorecard template',
  description: 'A simple QA scorecard for virtual assistant call answering, intake, appointment setting, CRM notes, tone, and escalation rules.',
  alternates: { canonical: '/qa-scorecard' },
  openGraph: { title: 'VA call center QA scorecard template', description: 'A simple QA scorecard for virtual assistant call answering, intake, appointment setting, CRM notes, tone, and escalation rules.', url: '/qa-scorecard', images: [{ url: '/qa-call-quality-board.svg', alt: 'Call quality review board for greeting, call record, next step, and escalation checks' }] },
};

export default function QAScorecard() {
  const total = qaScorecard.reduce((sum, item) => sum + item.points, 0);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: metadata.title,
    url: `${site.url}/qa-scorecard`,
    description: metadata.description,
    hasPart: [
      { '@type': 'ItemList', name: 'VA call center QA scorecard items', itemListElement: qaScorecard.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.item, description: item.note })) },
      { '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
    ],
  };

  return (
    <>
      <Header />
      <main id="main-content" className="vx-page">
        <JsonLd data={schema} />
        <PageHero
          label="QA scorecard"
          title={<>A simple scorecard for phone support.</>}
          lead="Use this scorecard once a week. Pick five to ten calls, review notes and recordings when allowed, then coach the assistant on the two biggest misses."
          artTitle="A sample beats a guess."
          artNote="Five to ten calls · one coaching point"
          actions={<a className="vx-btn vx-btn--orange" href="/contact-us">Build the first review plan ↗</a>}
        />

        <section className="vx-section">
          <div className="vx-container">
            <div className="vx-toolbar">
              <p>A weekly sample is enough to catch pattern errors without turning review into a full-time job.</p>
              <span>{total} points</span>
            </div>
            <div className="vx-qa-table">
              <div className="vx-qa-row vx-qa-head">
                {['Scorecard item', 'Points', 'What good looks like'].map((heading) => (
                  <div key={heading}>{heading}</div>
                ))}
              </div>
              {qaScorecard.map((item) => (
                <div key={item.item} className="vx-qa-row">
                  <strong>{item.item}</strong>
                  <span>{item.points}</span>
                  <span>{item.note}</span>
                </div>
              ))}
            </div>
            <p style={{ margin: '12px 0 0', color: 'var(--vx-muted)', fontFamily: 'var(--vx-mono)', fontSize: 8.5 }}>Sample template only. Agree the final scoring rules with your manager.</p>
          </div>
        </section>

        <section className="vx-section vx-section--sand">
          <div className="vx-container">
            <div className="vx-head">
              <div><p className="vx-eyebrow">Manager note</p><h2>Do not score everything at once.</h2></div>
              <p>Pick one call type first, such as new lead intake or appointment setting. Fix that path, then add support calls, billing questions, or follow-up work later.</p>
            </div>
            <div className="vx-service-decision">
              <article><span className="vx-service-tag">Sample</span><h3>Review a small sample</h3><p>Five to ten calls from the same lane are more useful than a scattered review of every queue.</p></article>
              <article><span className="vx-service-tag">Coach</span><h3>Name the two biggest misses</h3><p>Coach one script gap and one handoff gap. Keep the rest of the feedback for the next review.</p></article>
              <article><span className="vx-service-tag">Update</span><h3>Update the written lane</h3><p>Fix the script, checklist, or access rule that caused the miss. Then review again next week.</p></article>
            </div>
          </div>
        </section>

        <section className="vx-section">
          <div className="vx-container">
            <SectionHead label="Weekly review questions" title={<>Three questions that keep the review useful.</>} />
            <div className="vx-service-decision">
              <article><h3>Accuracy</h3><p>Did the assistant use the script and avoid guessing?</p></article>
              <article><h3>Next step</h3><p>Was the appointment, task, ticket, or callback clear?</p></article>
              <article><h3>Risk</h3><p>Did any call need owner review, better access rules, or a safer answer?</p></article>
            </div>
          </div>
        </section>

        <section className="vx-section vx-section--white">
          <div className="vx-container">
            <SectionHead label="Common questions" title={<>Keep the review fair and consistent.</>} />
            <div className="vx-faq">
              {faqs.map((item) => (
                <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>
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
