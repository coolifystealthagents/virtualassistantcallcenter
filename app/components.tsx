import { site } from './data';

export function Header() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="logo"><span className="mark">VA</span><span>{site.brand}</span></a>
        <nav className="links">
          <a href="/workflows">Workflows</a>
          <a href="/qa-scorecard">QA scorecard</a>
          <a href="/#pricing">Pricing</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </nav>
        <a className="btn" href="/contact">Get plan</a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <b>{site.brand}</b>
          <p>Practical virtual assistant call center hiring guides for buyers who want clear steps, not hype.</p>
          <p>© {new Date().getFullYear()} {site.brand}. Independent education site. Replace contact details before launch.</p>
        </div>
        <div className="footer-links">
          <a href="/workflows">Call workflows</a>
          <a href="/qa-scorecard">QA scorecard</a>
          <a href="/blog/assistant-onboarding-checklist">Onboarding checklist</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="callout">
          <p className="eyebrow" style={{ color: 'white' }}>Need help deciding?</p>
          <h2>Get a simple assistant call plan.</h2>
          <p>Tell us your calls, tools, hours, and handoff rules. We will map the role, cost range, interview questions, and first-week QA checklist.</p>
          <a className="btn secondary" href="/contact">Request a quote-style plan</a>
        </div>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
