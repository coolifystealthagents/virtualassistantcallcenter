import { Header, Footer, PageHero } from "../components";
import { getContent } from "../content";
import { CTA } from "../components";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));

export const metadata = {
  title: "Research",
  description: "Research notes about Philippines-based staffing and operations.",
  alternates: { canonical: "/research" },
  openGraph: {
    title: "Research",
    description: "Research notes about Philippines-based staffing and operations.",
    url: "/research",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Virtual Assistant Call Center research library" }],
  },
};

export default function Research() {
  const posts = getContent("research");
  const [featured, ...rest] = posts;

  return (
    <>
      <Header />
      <main id="main-content" className="vx-index">
        <PageHero
          label="Research library"
          title={<>Evidence for better call decisions.</>}
          lead="Sourced notes on call operations, service workflows, staffing, and the controls behind a reliable handoff."
          artTitle="Evidence over guesswork."
          artNote="Sourced call operations notes"
          actions={<a className="vx-btn vx-btn--orange" href="/contact-us">Talk through the findings ↗</a>}
        />

        <section className="vx-section">
          <div className="vx-container">
            <div className="vx-toolbar">
              <p>Each note pairs a source review with the operating implication for a call team.</p>
              <span>{posts.length} research briefs</span>
            </div>

            {featured ? (
              <a className="vx-feature" href={`/research/${featured.slug}`} data-reveal>
                <div className="vx-feature-media">
                  <img src={featured.image} alt={featured.imageAlt} loading="eager" />
                </div>
                <div className="vx-feature-copy">
                  <span className="vx-post-meta">Featured research · {featured.category}</span>
                  <h2>{featured.title}</h2>
                  <p>{featured.description}</p>
                  <span className="vx-post-meta" style={{ color: "#8f8b81" }}>Published {formatDate(featured.published)}</span>
                  <span className="vx-link" style={{ marginTop: 20 }}>Read the brief</span>
                </div>
              </a>
            ) : null}

            <div className="vx-post-grid">
              {rest.map((post) => (
                <a className="vx-post" href={`/research/${post.slug}`} key={post.slug}>
                  <div className="vx-post-media">
                    <img src={post.image} alt={post.imageAlt} loading="lazy" />
                    <span>{post.category}</span>
                  </div>
                  <div className="vx-post-body">
                    <span className="vx-post-meta">{formatDate(post.published)}</span>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <span className="vx-link">Read brief</span>
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
