'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import * as data from './data';

const site = (data as any).site || {};
const year = new Date().getFullYear();
const navItems = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Contact Us', '/contact-us'],
] as const;

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return (
    <span className="vx-brandmark">
      <img src="/logo.svg" alt="" width="44" height="44" />
      <span className="vx-brandmark-copy">
        <span className="vx-brandmark-name">Virtual Assistant <b>Call Center</b></span>
        <span className="vx-brandmark-sub">Powered by StealthAgents</span>
      </span>
    </span>
  );
}

export function Header({ hidePricing: _hidePricing = false }: { hidePricing?: boolean } = {}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const root = panel.current;
    if (!root) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusable = [...root.querySelectorAll<HTMLElement>('a,button')];
    focusable[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <a className="vx-skip" href="#main-content">Skip to content</a>
      <header className="vx-header">
        <div className="vx-nav-inner">
          <a className="vx-logo" href="/" aria-label="Virtual Assistant Call Center home">
            <LogoMark />
          </a>

          <nav className="vx-nav" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} aria-current={isActive(href) ? 'page' : undefined}>{label}</a>
            ))}
          </nav>

          <div className="vx-line-status" aria-label="Coverage status">
            <i aria-hidden="true" />
            <span>Lines open</span>
          </div>

          <a className="vx-nav-cta" href="/contact-us">Map my coverage <span aria-hidden="true">↗</span></a>

          <button
            ref={button}
            className="vx-menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="vx-mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            <i aria-hidden="true" />
          </button>
        </div>
        {open ? (
          <nav ref={panel} id="vx-mobile-nav" className="vx-mobile-nav" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}<span aria-hidden="true">↗</span></a>
            ))}
            <a className="vx-mobile-call" href="/contact-us" onClick={() => setOpen(false)}>Map my call coverage</a>
          </nav>
        ) : null}
      </header>
    </>
  );
}

export function Footer({ hidePricing = false }: { hidePricing?: boolean } = {}) {
  return (
    <footer className="vx-footer">
      <div className="vx-footer-grid vx-container">
        <div className="vx-footer-brand">
          <a href="/" aria-label="Virtual Assistant Call Center home"><LogoMark /></a>
          <p>
            Philippines-based call support for teams that need every caller to reach a clear next
            step. Scripts, access, records, and escalation rules stay under your control.
          </p>
          <a className="vx-footer-phone" href="/contact-us">
            <span>Start with a coverage map</span>
            <b>↗</b>
          </a>
        </div>

        <div className="vx-footer-col">
          <h3>Explore</h3>
          <a href="/services">Services</a>
          {hidePricing ? null : <a href="/pricing">Pricing</a>}
          <a href="/workflows">Call workflows</a>
          <a href="/qa-scorecard">QA scorecard</a>
          <a href="/blog">Blog</a>
          <a href="/research">Research</a>
          <a href="/alternatives">Alternatives</a>
        </div>

        <div className="vx-footer-col">
          <h3>Company</h3>
          <a href="/contact-us">Contact Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms &amp; Conditions</a>
          <a href="/cancellation-policy">Cancellation Policy</a>
        </div>
      </div>

      <div className="vx-footer-parent vx-container">
        <a className="vx-footer-parent-logo" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer" aria-label="StealthAgents parent company">
          <img src="/stealth-agents-logo-black.png" alt="StealthAgents" width="149" height="50" />
        </a>
        <div>
          <span>Parent company</span>
          <p>
            StealthAgents recruits, employs, and supports the Philippines-based specialists behind
            this service. Virtual Assistant Call Center is a StealthAgents subsidiary.
          </p>
          <a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by StealthAgents ↗</a>
        </div>
      </div>

      <div className="vx-footer-bottom vx-container">
        <span>© {year} {site.brand || 'Virtual Assistant Call Center'}. All rights reserved.</span>
        <span>{site.domain || 'VirtualAssistantCallCenter.com'}</span>
      </div>
    </footer>
  );
}

export function PageHero({
  label,
  title,
  lead,
  actions,
  image,
  imageAlt,
  artTitle,
  artNote,
  compact = false,
}: {
  label: string;
  title: ReactNode;
  lead: string;
  actions?: ReactNode;
  image?: string;
  imageAlt?: string;
  artTitle?: string;
  artNote?: string;
  compact?: boolean;
}) {
  return (
    <section className={`vx-pagehero${compact ? ' vx-pagehero--compact' : ''}`}>
      <div className="vx-pagehero-grid vx-container">
        <div className="vx-pagehero-copy">
          <p className="vx-eyebrow vx-eyebrow--light">{label}</p>
          <h1>{title}</h1>
          <p className="vx-pagehero-lead">{lead}</p>
          {actions ? <div className="vx-actions">{actions}</div> : null}
        </div>
        <div className={`vx-pagehero-art${image ? ' has-image' : ''}`} aria-hidden="true">
          <span className="vx-art-dial" />
          <span className="vx-art-cross cross-a" />
          <span className="vx-art-cross cross-b" />
          {image ? (
            <img src={image} alt={imageAlt || ''} />
          ) : (
            <div className="vx-art-card">
              <span>INBOUND</span>
              <b>{artTitle || <>Every call has<br />a place to land.</>}</b>
              <small>{artNote || "Manual intake · approved route"}</small>
            </div>
          )}
          <span className="vx-art-sticker">LIVE<br />LINE</span>
        </div>
      </div>
    </section>
  );
}

export function Marquee({ items }: { items: readonly string[] }) {
  return (
    <div className="vx-marquee" aria-hidden="true">
      <div className="vx-marquee-track">
        {[0, 1].map((group) => (
          <div className="vx-marquee-group" key={group}>
            {items.map((item, index) => <span key={`${group}-${index}`}>{item}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectionHead({
  label,
  title,
  copy,
  light = false,
}: {
  label: string;
  title: ReactNode;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={`vx-head${light ? ' vx-head--light' : ''}`} data-reveal>
      <div>
        <p className={`vx-eyebrow${light ? ' vx-eyebrow--light' : ''}`}>{label}</p>
        <h2>{title}</h2>
      </div>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function CTA() {
  return (
    <section className="vx-cta">
      <div className="vx-cta-grid vx-container">
        <div data-reveal>
          <p className="vx-eyebrow vx-eyebrow--light">Map the first queue</p>
          <h2>GIVE MISSED CALLS A WAY BACK IN.</h2>
          <p>
            Share your call types, hours, tools, and escalation rules. We will turn them into a
            practical coverage plan with a clear first week.
          </p>
        </div>
        <div className="vx-cta-actions" data-reveal style={{ '--vx-delay': '120ms' } as CSSProperties}>
          <a className="vx-btn vx-btn--orange" href="/contact-us">Book a free consultation ↗</a>
          <a className="vx-btn vx-btn--outline-light" href="/services">See the call lanes</a>
        </div>
      </div>
      <div className="vx-cta-ticker" aria-hidden="true">ANSWER · ROUTE · RECORD · REVIEW · ANSWER · ROUTE · RECORD · REVIEW</div>
    </section>
  );
}
