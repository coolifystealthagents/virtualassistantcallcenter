import type { Metadata } from "next";
import { Header, Footer } from "../components";
import { TestimonialsRail } from "../booking-components";
import StandardContactForm from "./StandardContactForm";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Us | Virtual Call Center Support",
  description: "Scope a virtual call center workflow around your call volume, coverage hours, scripts, systems, and escalation rules.",
  alternates: { canonical: "/contact-us" },
  robots: { index: true, follow: true },
};

const callLanes = [
  ["Reception and intake", "Answer in your brand voice, capture complete caller details, and create a clear next-action record."],
  ["Appointment setting", "Schedule, reschedule, confirm, and follow up using your availability and qualification rules."],
  ["Lead qualification", "Ask approved questions, record intent, and route qualified opportunities to the named owner."],
  ["Customer support", "Resolve documented requests, manage callback queues, and escalate sensitive or unusual issues."],
];

const reviewProfiles = [
  ["Google", "/review-google.webp", "https://www.google.com/search?q=STEALTH+AGENTS#lrd=0x89c14b8a875bffff:0xbe3c64edaf53d79a,1,,,,"],
  ["Trustpilot", "/review-trustpilot.png", "https://www.trustpilot.com/review/stealthagents.com"],
  ["Facebook", "/review-facebook.png", "https://www.facebook.com/StealthAgents/reviews"],
];

export default function ContactUsPage() {
  return <>
    <Header />
    <main className="trusted-contact">
      <section className="tc-hero" aria-labelledby="contact-heading">
        <div className="container tc-hero-grid">
          <div className="tc-copy">
            <p className="tc-kicker">Virtual call operations intake</p>
            <h1 id="contact-heading">Give every caller a clear next step.</h1>
            <p className="tc-lead">Share your call volume, coverage hours, scripts, tools, and escalation rules. We will use those details to shape a practical support lane for your team.</p>
            <ul className="tc-hero-list">
              <li>Map call types and approved responses</li>
              <li>Define routing, notes, and escalation ownership</li>
              <li>Start with a reviewable launch plan</li>
            </ul>
            <a className="tc-text-link" href="#call-support">Review the operating plan <span aria-hidden="true">↓</span></a>
          </div>
          <StandardContactForm endpoint="/api/contact" encoding="form" />
        </div>
      </section>

      <section className="tc-strip" aria-label="Consultation deliverables">
        <div className="container tc-strip-grid"><strong>A practical consultation</strong><span>Task inventory</span><span>Access boundaries</span><span>Quality review</span><span>Launch plan</span></div>
      </section>

      <section className="tc-section" id="call-support">
        <div className="container">
          <div className="tc-section-head"><div><p className="tc-kicker">Where call support fits</p><h2>Route every conversation toward an owned outcome.</h2></div><p>A dependable call lane combines approved language with complete notes, bounded decisions, and one accountable escalation owner.</p></div>
          <div className="tc-card-grid">{callLanes.map(([title, body]) => <article key={title}><p className="tc-card-signal">Call lane</p><h3>{title}</h3><p>{body}</p></article>)}</div>
          <div className="tc-inline-cta"><strong>Know which queue needs help?</strong><a href="#contactPageForm">Discuss it with our team</a></div>
        </div>
      </section>

      <section className="tc-section tc-check-section">
        <div className="container tc-check-grid"><div><p className="tc-kicker">Capability checklist</p><h2>A script is only the beginning.</h2><p>Map the operating conditions that help remote receptionists stay responsive, accurate, and easy to coach.</p></div><ul><li>Call types and approved responses</li><li>CRM, phone, calendar, and access boundaries</li><li>Routing ownership and quality-review cadence</li><li>Urgency, privacy, and escalation triggers</li><li>Disposition codes and note-completeness rules</li><li>Coverage targets and first-month scorecard</li></ul></div>
      </section>

      <section className="tc-team-section">
        <div className="container tc-team-grid">
          <figure><img src="/stealth-agents-team.jpg" width="1536" height="1024" alt="Stealth Agents team members collaborating in their Bacolod office" /><figcaption>First-party team photograph published by Stealth Agents.</figcaption></figure>
          <div><p className="tc-kicker">The team behind the handoff</p><h2>Structured support, powered by Stealth Agents.</h2><p>Virtual Assistant Call Center helps businesses document repeatable call work and prepare it for managed support. Stealth Agents provides the parent-team operating environment behind the service.</p><a className="tc-parent-brand" href="https://stealthagents.com/our-team/" target="_blank" rel="noopener noreferrer"><img src="/stealth-agents-logo-black.png" width="279" height="74" alt="Stealth Agents logo" /><span>Meet the Stealth Agents team <b aria-hidden="true">↗</b></span></a></div>
        </div>
      </section>

      <section className="tc-reviews" aria-labelledby="review-heading">
        <div className="container tc-review-grid">
          <div className="tc-review-copy"><p className="tc-kicker">Published client feedback</p><h2 id="review-heading">Read the source, not just the summary.</h2><p>The review profiles below open the independent platform pages for Stealth Agents. Ratings and counts can change, so this page links to the live sources rather than freezing a marketing number.</p><div className="tc-review-sources">{reviewProfiles.map(([name, image, href]) => <a href={href} target="_blank" rel="noopener noreferrer" key={name} aria-label={`Read Stealth Agents reviews on ${name}`}><img src={image} alt={`${name} reviews`} /><span>View live reviews <b aria-hidden="true">↗</b></span></a>)}</div></div>
          <TestimonialsRail contact />
        </div>
      </section>

      <section className="container tc-final"><div><p className="tc-kicker">Prepare the first queue</p><h2>Turn call coverage into a controlled operating lane.</h2><p>Share the call patterns, systems, and routing rules your team uses today. We will use them to define a practical next step.</p></div><a href="#contactPageForm">Book a free consultation</a></section>
    </main>
    <Footer />
  </>;
}
