import { Header, Footer } from "../components";
import { getContent } from "../content";
const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
export const metadata = {
  title: "Research",
  description:
    "Research notes about Philippines-based staffing and operations.",
  alternates: { canonical: "/research" },
  openGraph: {
    title: "Research",
    description:
      "Research notes about Philippines-based staffing and operations.",
    url: "/research",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Virtual Assistant Call Center research library" }],
  },
};
export default function Research() {
  const posts = getContent("research");
  return (
    <>
      <Header />
      <main id="main-content" className="fleet-main">
        <section className="fleet-hero">
          <div className="container index-hero-grid">
            <div><p className="eyebrow">Research library</p>
            <h1>Research for planning Philippines-based teams</h1>
            <p className="lead">
              Sourced articles about call operations, service workflows, and
              staffing decisions.
            </p></div>
            <img className="index-hero-image" src="/thumbnails/independent-call-outcome-coding-agreement-study.svg" alt="Research board comparing independent call outcome coding and reviewer agreement" width="1200" height="675" />
          </div>
        </section>
        <section className="section">
          <div className="container fleet-card-grid">
            {posts.map((p) => (
              <a
                className="fleet-card"
                href={`/research/${p.slug}`}
                key={p.slug}
              >
                <img src={p.image} alt={p.imageAlt} width="640" height="360" loading="lazy" />
                <h2>{p.title}</h2>
                <p>{p.description}</p>
                <time dateTime={p.published}>Published {formatDate(p.published)}</time>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
