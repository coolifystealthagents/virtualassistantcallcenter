import { FeaturedComparison } from "./FeaturedComparison";
import { notFound } from "next/navigation";
import { Header, Footer, PageHero } from "../components";
import { blogPosts } from "../data";
import { getContent } from "../content";

const PAGE_SIZE = 20;

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));

const vira56BlogRank = new Map(
  [
    "appointment-cancellation-call-handling-guide",
    "call-center-after-call-work-checklist",
    "virtual-receptionist-onboarding-30-day-checklist",
    "average-speed-of-answer-for-small-call-teams",
    "call-recording-consent-script-and-workflow",
    "call-center-kpi-dictionary-for-small-business",
    "call-center-service-level-measurement-guide",
    "customer-call-disposition-design-guide",
    "customer-service-escalation-priority-matrix",
    "missed-call-response-workflow-for-small-business",
    "accessible-phone-intake-testing-checklist",
    "small-business-call-routing-failover-plan",
  ].map((slug, index) => [slug, index]),
);

const acceptedBlogRank = new Map(
  [
    "appointment-intake-for-therapists",
    "call-answering-for-accounting-firms",
    "call-answering-for-event-venues",
    "call-answering-for-landscapers",
    "call-answering-for-physical-therapy-clinics",
    "call-answering-for-repair-shops",
    "call-intake-for-architects",
    "call-intake-for-funeral-homes",
    "call-intake-for-insurance-brokers",
    "call-intake-for-nonprofit-events",
    "call-intake-for-pet-groomers",
    "call-intake-for-translation-services",
    "call-intake-for-veterinary-clinics",
    "call-routing-for-home-care",
    "call-routing-for-multi-location-restaurants",
    "call-routing-for-solar-installers",
    "call-screening-for-b2b-software",
    "call-screening-for-commercial-real-estate",
    "dental-emergency-call-triage",
    "home-inspection-call-answering",
    "medical-office-referral-call-intake",
    "property-manager-maintenance-call-answering",
  ].map((slug, index) => [slug, index]),
);

export function BlogListing({ page = 1 }: { page?: number }) {
  const filePosts = getContent("blog").map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.description,
    minutes: Math.max(4, Math.ceil(post.body.split(/\s+/).length / 200)),
    published: post.published,
    image: post.image,
    imageAlt: post.imageAlt,
  }));

  const posts = [...filePosts, ...blogPosts].sort((a, b) => {
    const byDate = b.published.localeCompare(a.published);
    if (byDate) return byDate;
    if (a.published === "2026-09-18") {
      const ar = vira56BlogRank.get(a.slug);
      const br = vira56BlogRank.get(b.slug);
      if (ar !== undefined || br !== undefined) {
        if (ar === undefined) return 1;
        if (br === undefined) return -1;
        return ar - br;
      }
    }
    const ar = acceptedBlogRank.get(a.slug);
    const br = acceptedBlogRank.get(b.slug);
    if (ar !== undefined || br !== undefined) {
      if (ar === undefined) return 1;
      if (br === undefined) return -1;
      return ar - br;
    }
    return a.slug.localeCompare(b.slug);
  });

  const total = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  if (page < 1 || page > total) notFound();
  const pagePosts = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const [featured, ...rest] = pagePosts;

  return (
    <>
      <Header />
      <main id="main-content" className="vx-index">
        <PageHero
          label={`Blog${page > 1 ? ` · page ${page}` : ""}`}
          title={<>Call notes, not guesswork.</>}
          lead="Practical guides for scripts, routing, access, follow-up, and the first week of call quality review."
          artTitle="Read the note before the call."
          artNote="Field notes for call teams"
          actions={
            <>
              <a className="vx-btn vx-btn--orange" href="/contact-us">Map my first queue ↗</a>
              <a className="vx-btn vx-btn--outline-light" href="/research">Browse research</a>
            </>
          }
        />

        <section className="vx-section">
          <div className="vx-container">
            <div className="vx-toolbar">
              <p>Every guide is written for the person who has to make the handoff work.</p>
              <span>{pagePosts.length} guides on this page</span>
            </div>

            {featured ? (
              <a className="vx-feature" href={`/blog/${featured.slug}`} data-reveal>
                <div className="vx-feature-media">
                  <img src={featured.image || "/thumbnails/phone-support-workflow-for-growing-teams.svg"} alt={featured.imageAlt || ""} loading="eager" />
                </div>
                <div className="vx-feature-copy">
                  <span className="vx-post-meta">Featured guide · {featured.minutes} min</span>
                  <h2>{featured.title}</h2>
                  <p>{featured.excerpt}</p>
                  <span className="vx-post-meta" style={{ color: "#8f8b81" }}>{featured.published ? formatDate(featured.published) : "Call operations"}</span>
                  <span className="vx-link" style={{ marginTop: 20 }}>Read the guide</span>
                </div>
              </a>
            ) : null}

            <div className="vx-post-grid">
              {rest.map((post) => (
                <a className="vx-post" href={`/blog/${post.slug}`} key={post.slug}>
                  <div className="vx-post-media">
                    <img src={post.image || "/thumbnails/phone-support-workflow-for-growing-teams.svg"} alt={post.imageAlt || ""} loading="lazy" />
                    <span>{post.minutes} min read</span>
                  </div>
                  <div className="vx-post-body">
                    <span className="vx-post-meta">{post.published ? formatDate(post.published) : "Call operations"}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="vx-link">Read guide</span>
                  </div>
                </a>
              ))}
            </div>

            <nav className="vx-pager" aria-label="Blog pages">
              {page > 1 ? <a href={page === 2 ? "/blog" : `/blog/page/${page - 1}`} aria-label="Previous page">←</a> : null}
              {(() => {
                const visible = [...new Set([1, total, page - 1, page, page + 1])]
                  .filter((number) => number >= 1 && number <= total)
                  .sort((a, b) => a - b);
                const links: Array<number | "gap"> = [];
                visible.forEach((number, index) => {
                  if (index > 0 && number - visible[index - 1] > 1) links.push("gap");
                  links.push(number);
                });
                return links.map((item, index) => item === "gap"
                  ? <span key={`gap-${index}`} className="vx-pager-gap">…</span>
                  : <a className={item === page ? "active" : ""} aria-current={item === page ? "page" : undefined} href={item === 1 ? "/blog" : `/blog/page/${item}`} key={item}>{item}</a>);
              })()}
              {page < total ? <a href={`/blog/page/${page + 1}`} aria-label="Next page">→</a> : null}
            </nav>
          </div>
        </section>
        {page === 2 ? <div className="vx-container" style={{ paddingBottom: 50 }}><FeaturedComparison /></div> : null}
      </main>
      <Footer />
    </>
  );
}

export { PAGE_SIZE };
