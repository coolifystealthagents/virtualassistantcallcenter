import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-content';
import { serviceGuidance } from '../../service-guidance';
import { site } from '../../data';
import '../services.css';

export function generateStaticParams() {
  return fleetServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) return {};
  const url = `${site.url}/services/${service.slug}`;
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: url },
    openGraph: { title: service.title, description: service.summary, url, type: 'website', images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Virtual Assistant Call Center service workflow' }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const guidance = serviceGuidance[service.slug];
  const related = service.related
    .map((id) => fleetServices.find((item) => item.slug === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const url = `${site.url}/services/${service.slug}`;
  const faqs = guidance?.faqs || service.faqs;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: service.title, description: service.summary, url, provider: { '@type': 'Organization', name: site.brand, url: site.url }, areaServed: 'United States' },
      { '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
    ],
  };

  return (
    <>
      <Header />
      <main id="main-content" className="vx-detail-page">
        <JsonLd data={schema} />

        <section className="vx-detail-hero">
          <div className="vx-detail-grid vx-container">
            <div className="vx-detail-copy">
              <p className="vx-eyebrow vx-eyebrow--light">Philippines call support service</p>
              <h1>{service.title}</h1>
              <p className="vx-detail-audience"><strong>Best for:</strong> {service.audience}</p>
              <p className="vx-detail-summary">{service.summary}</p>
              <div className="vx-actions">
                <a className="vx-btn vx-btn--orange" href="/contact-us">Discuss this lane ↗</a>
                <a className="vx-btn vx-btn--outline-light" href="#scope">See the scope</a>
              </div>
            </div>
            <div className="vx-detail-art" aria-hidden="true">
              <span className="vx-art-dial" />
              <div className="vx-lane-card">
                <span>Call lane</span>
                <b>{service.title}</b>
                <small>Approved script · named owner · weekly review</small>
              </div>
              <span className="vx-art-sticker">PH</span>
            </div>
          </div>
        </section>

        <section className="vx-detail-body">
          <div className="vx-container">
            <section className="vx-detail-section" data-reveal>
              <p className="vx-eyebrow">The operational problem</p>
              <h2>{service.problem}</h2>
            </section>

            <section className="vx-detail-section" id="scope" data-reveal>
              <p className="vx-eyebrow">From source to outcome</p>
              <h2>What the specialist needs, does, and leaves behind.</h2>
              <div className="vx-flow-grid">
                <article>
                  <h3>Inputs</h3>
                  <ul>{service.inputs.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
                <article>
                  <h3>Work performed</h3>
                  <ul>{service.work.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
                <article>
                  <h3>Outputs</h3>
                  <ul>{service.outputs.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </div>
            </section>

            <section className="vx-detail-section" data-reveal>
              <div className="vx-boundary">
                <div>
                  <p className="vx-eyebrow">Decision boundary</p>
                  <h2>What remains with your team.</h2>
                </div>
                <ul>{service.boundaries.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="vx-boundary-note">
                  <span>Exception path</span>
                  <p>Record the request, the account, and the caller. Send it to the named owner. Do not promise a price, a policy exception, or a callback you cannot keep.</p>
                </div>
              </div>
            </section>

            <section className="vx-detail-section" data-reveal>
              <p className="vx-eyebrow">Quality controls</p>
              <h2>How this lane is reviewed.</h2>
              <div className="vx-scenarios">
                {(guidance?.quality || service.controls).map((item) => (
                  <article key={item}><span>Review check</span><p>{item}</p></article>
                ))}
              </div>
            </section>

            <section className="vx-detail-section" data-reveal>
              <p className="vx-eyebrow">Launch inputs</p>
              <h2>What we need to start.</h2>
              <ol className="vx-detail-steps">
                {(guidance?.start || service.launch).map((item) => <li key={item}>{item}</li>)}
              </ol>
            </section>

            <section className="vx-detail-section" data-reveal>
              <p className="vx-eyebrow">Example scenarios</p>
              <h2>How the lane works in practice.</h2>
              <div className="vx-scenarios">
                {service.scenarios.map((item, index) => (
                  <article key={item}>
                    <span>{index === 0 ? 'Routine path' : 'Exception path'}</span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="vx-detail-section" data-reveal>
              <p className="vx-eyebrow">Common questions</p>
              <h2>Set expectations before access is granted.</h2>
              <div className="vx-faq">
                {faqs.map((item) => (
                  <details key={item.q}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="vx-detail-section" data-reveal>
              <p className="vx-eyebrow">Related lanes</p>
              <h2>Connect the next useful lane.</h2>
              <div className="vx-related">
                {related.map((item) => (
                  <a href={`/services/${item.slug}`} key={item.slug}>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <span>View service ↗</span>
                  </a>
                ))}
                <a href="/services">
                  <h3>All call lanes</h3>
                  <p>Compare the full service menu and pick the first queue.</p>
                  <span>Open the directory ↗</span>
                </a>
              </div>
            </section>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
