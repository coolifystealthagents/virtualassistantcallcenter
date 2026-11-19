import { Header, Footer, PageHero, SectionHead, CTA } from '../components';
import { getContent } from '../content';

export const metadata = {
  title: 'Virtual Receptionist Alternatives',
  description: 'Compare virtual receptionist and call support approaches using scope, controls, coverage, and quality criteria.',
  alternates: { canonical: '/alternatives' },
};

export default function Alternatives() {
  const entries = getContent('alternatives');
  return (
    <>
      <Header />
      <main id="main-content" className="vx-index">
        <PageHero
          label="Alternatives"
          title={<>Compare the option, not the label.</>}
          lead="Practical comparisons for teams choosing between virtual receptionists, answering services, employees, and specialized assistants."
          artTitle="Compare the controls."
          artNote="Coverage · handoff · review"
          actions={<a className="vx-btn vx-btn--orange" href="/contact-us">Talk through the fit ↗</a>}
        />
        <section className="vx-section">
          <div className="vx-container">
            <SectionHead
              label="Comparison library"
              title={<>Choose by operating fit.</>}
              copy="Look at coverage, controls, handoff, and review. A familiar label is not a plan."
            />
            <div className="vx-post-grid">
              {entries.map((entry) => (
                <a className="vx-post" href={`/alternatives/${entry.slug}`} key={entry.slug}>
                  <div className="vx-post-media">
                    <img src={entry.image} alt={entry.imageAlt} loading="lazy" />
                    <span>{entry.category}</span>
                  </div>
                  <div className="vx-post-body">
                    <span className="vx-post-meta">Comparison</span>
                    <h3>{entry.title}</h3>
                    <p>{entry.description}</p>
                    <span className="vx-link">Read comparison</span>
                  </div>
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
