import type { Metadata } from "next";
import { Header, Footer } from "../components";
import StandardContactForm from "./StandardContactForm";
import "./contact.css";
import "./image-fix.css";

export const metadata: Metadata = { title: "Contact Us | Virtual Call Center Support", description: "Book a free consultation to scope reliable virtual call center support for your business.", alternates: { canonical: "/contact-us" }, robots: { index: true, follow: true } };
const services = [
  ["Reception and intake", "Answer in your brand voice, capture complete caller details, and create clean next-step records."],
  ["Appointment setting", "Schedule, reschedule, confirm, and follow up using your availability and qualification rules."],
  ["Lead qualification", "Ask approved questions, tag intent, and route qualified opportunities to the right owner."],
  ["Customer support", "Resolve documented requests, manage callback queues, and escalate sensitive or unusual issues."],
];
export default function ContactUsPage(){return <>
  <Header/>
  <main className="trusted-contact tc-legal">
    <section className="tc-hero"><div className="container tc-hero-grid">
      <div className="tc-copy"><p className="tc-kicker">Calls handled with clear routing</p><h1>Give every caller a confident next step.</h1><p className="tc-lead">Tell us about your call volume, coverage hours, scripts, and escalation rules. We’ll help scope a Filipino virtual receptionist team that answers consistently and protects the customer experience.</p><div className="tc-proof-row"><span>35+ industries</span><span>Call center specialists</span><span>Free consultation</span></div><a className="tc-text-link" href="#call-support">Explore the call plan →</a></div>
      <StandardContactForm endpoint="/api/contact" encoding="form"/>
    </div></section>
    <section className="tc-strip"><div className="container tc-strip-grid"><strong>A practical consultation</strong><span>✓ Task inventory</span><span>✓ Access boundaries</span><span>✓ Quality review</span><span>✓ Launch plan</span></div></section>
    <section className="tc-section" id="call-support"><div className="container"><div className="tc-section-head"><div><p className="tc-kicker">Where call support fits</p><h2>Route every conversation to the right outcome.</h2></div><p>The best virtual call center roles pair clear scripts with sensible judgment boundaries, complete notes, and a named escalation owner.</p></div><div className="tc-card-grid">{services.map(([title,body],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="tc-inline-cta"><strong>Know which queue needs help?</strong><a href="#contactPageForm">Discuss it with our team</a></div></div></section>
    <section className="tc-section"><div className="container tc-check-grid"><div><p className="tc-kicker">Capability checklist</p><h2>A good script is only the beginning.</h2><p>We’ll map the operating conditions that help remote receptionists stay responsive, accurate, and easy to coach.</p></div><ul><li>Call types, scripts, and approved responses</li><li>CRM, phone, calendar, and access boundaries</li><li>Routing ownership and quality-review cadence</li><li>Urgency, privacy, and escalation triggers</li><li>Disposition codes and note-completeness rules</li><li>Coverage targets and first-month scorecard</li></ul></div></section>
    <section className="tc-why"><div className="container tc-why-grid"><img src="/call-team.jpg" width="1600" height="2400" alt="Call support specialist wearing a headset"/><div><p className="tc-kicker">Why structure matters</p><h2>Every call should leave a useful next step.</h2><p>We shape call support around approved scripts, complete notes, secure access, and unmistakable escalation points—so coverage grows without losing quality.</p><a href="#contactPageForm">Scope my call support team →</a></div></div></section>
    <section className="tc-about"><div className="container tc-about-grid"><div><p className="tc-kicker">Powered by a proven team</p><h2>About Stealth Agents</h2><p>Stealth Agents works with over 35+ different industries. We're featured on Forbes as the top rated virtual assistant company.</p></div><a href="https://stealthagents.com" rel="noopener noreferrer">Powered by Stealth Agents</a></div></section>
    <section className="container tc-final"><div><p className="tc-kicker">A better call plan</p><h2>Build call support your customers can confidently trust.</h2><p>Share your call patterns, systems, and routing rules. We’ll help define the team and next steps.</p></div><a href="#contactPageForm">Book a free consultation</a></section>
  </main><Footer/>
</>}
