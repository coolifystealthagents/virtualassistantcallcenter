import * as data from './data';

const dataAny = data as any;
const site = dataAny.site || {};
const domain = site.domain || 'this site';
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" alt="" aria-hidden="true" /><span className="logo-name">{site.brand || domain}</span></span>;
}

export function Header() {
  return <header className="nav"><div className="nav-inner"><a className="logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a><nav className="links" aria-label="Main navigation"><a href="/#coverage">Coverage</a><a href="/#how-it-works">Call path</a><a href="/qa-scorecard">QA scorecard</a><a href="/blog">Guides</a></nav><a className="btn nav-cta" href="/contact">Map my call coverage</a></div></header>;
}

export function Footer() {
  return <footer className="footer legit-footer"><div className="footer-grid"><div className="footer-brand"><a className="footer-logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a><p>{site.brand || domain} helps small and mid-size teams plan call answering, intake, booking, follow-up, CRM notes, and customer support coverage.</p><p className="footer-note">We recruit and hire talent only in the Philippines. This is an independent informational website. Submitted requests may be routed to an appropriate staffing team or service partner for follow-up.</p></div><div><h3>Call support</h3><div className="footer-links"><a href="/#coverage">Coverage lanes</a><a href="/workflows">Call workflow</a><a href="/qa-scorecard">QA scorecard</a><a href="/blog">Guides</a></div></div><div><h3>Company</h3><div className="footer-links"><a href="/contact">Contact</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms & Conditions</a><a href="/cancellation-policy">Cancellation Policy</a></div></div></div><div className="footer-bottom"><span>© {year} {site.brand || domain}. All rights reserved.</span><span>{domain}</span></div></footer>;
}

export function CTA() {
  return <section className="final-cta"><p className="eyebrow">Start with the call path</p><h2>Decide what happens after hello.</h2><p>Share your call types, hours, script, tools, and manager rules. The team will use them to map a practical first queue.</p><a className="btn primary" href="/contact">Map my call coverage</a></section>;
}
