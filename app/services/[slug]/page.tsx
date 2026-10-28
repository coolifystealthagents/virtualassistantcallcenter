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
  const related = service.related.map((id) => fleetServices.find((item) => item.slug === id)).filter(Boolean);
  const url = `${site.url}/services/${service.slug}`;
  const faqs = guidance?.faqs || service.faqs;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: service.title, description: service.summary, url, provider: { '@type': 'Organization', name: site.brand, url: site.url }, areaServed: 'United States' },
      { '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) },
    ],
  };
  return <>
    <Header />
    <main id="main-content" className="service-detail">
      <JsonLd data={schema} />
      <section className="service-detail-hero"><div className="container service-detail-hero-grid"><div><p className="service-detail-kicker">Philippines call support service</p><h1>{service.title}</h1><p className="service-detail-audience"><strong>Best for:</strong> {service.audience}</p><p className="service-detail-summary">{service.summary}</p><a className="services-console-button" href="/contact-us">Discuss this call lane</a></div><figure><img src={service.image} alt={`${service.title} workflow illustration`} width="1400" height="1400" fetchPriority="high" sizes="(max-width: 900px) calc(100vw - 40px), 46vw" /><figcaption>Scope, record, and escalation rules defined before launch</figcaption></figure></div></section>
      <section className="service-detail-problem"><div className="container"><p className="service-detail-kicker">The operational problem</p><h2>{service.problem}</h2></div></section>
      <section className="service-detail-workflow"><div className="container"><div className="service-section-heading"><p>From source to outcome</p><h2>What the specialist needs, does, and leaves behind.</h2></div><div className="service-detail-workflow-grid"><article><h3>Inputs</h3><ul>{service.inputs.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>Work performed</h3><ul>{service.work.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>Outputs</h3><ul>{service.outputs.map((item) => <li key={item}>{item}</li>)}</ul></article></div></div></section>
      <section className="service-detail-boundaries"><div className="container service-boundary-grid"><div><p className="service-detail-kicker">Decision boundary</p><h2>What remains with your team.</h2></div><ul>{service.boundaries.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
      <section className="service-detail-quality"><div className="container service-boundary-grid"><div><p className="service-detail-kicker">Quality controls</p><h2>How this lane is reviewed.</h2></div><ul>{(guidance?.quality || service.controls).map((item) => <li key={item}>{item}</li>)}</ul></div></section>
      <section className="service-detail-launch"><div className="container"><div className="service-section-heading"><p>Launch inputs</p><h2>What we need to start.</h2></div><ol>{(guidance?.start || service.launch).map((item) => <li key={item}>{item}</li>)}</ol></div></section>
      <section className="service-detail-scenarios"><div className="container"><div className="service-section-heading"><p>Example scenarios</p><h2>How the lane works in practice.</h2></div><div className="service-scenario-grid">{service.scenarios.map((item, index) => <article key={item}><span>{index === 0 ? 'Routine path' : 'Exception path'}</span><p>{item}</p></article>)}</div></div></section>
      <section className="service-detail-faqs"><div className="container"><div className="service-section-heading"><p>Frequently asked questions</p><h2>Set expectations before access is granted.</h2></div><div className="service-faq-grid">{faqs.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section>
      <section className="service-detail-related"><div className="container"><div className="service-section-heading"><p>Related services</p><h2>Connect the next useful lane.</h2></div><div className="service-related-grid">{related.map((item) => <a href={`/services/${item!.slug}`} key={item!.slug}><h3>{item!.title}</h3><p>{item!.summary}</p><strong>View service</strong></a>)}</div></div></section>
      <CTA />
    </main>
    <Footer />
  </>;
}
