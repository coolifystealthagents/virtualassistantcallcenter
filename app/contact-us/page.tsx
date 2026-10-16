import type { Metadata } from 'next';
import { Header,Footer } from '../components';
import { TestimonialsRail } from '../booking-components';
import StandardContactForm from './StandardContactForm';
import './contact.css';

export const metadata: Metadata={title:'Contact Us | Virtual Call Center Support',description:'Scope a virtual call center workflow around your call volume, coverage hours, scripts, systems, and escalation rules.',alternates:{canonical:'/contact-us'},robots:{index:true,follow:true}};

const callLanes=[
 ['Reception and intake','Answer in your business name, capture complete caller details, and send each request to the right owner.'],
 ['Appointment setting','Schedule, reschedule, and confirm from your approved calendar and qualification rules.'],
 ['Lead qualification','Ask approved questions, record intent, and route qualified opportunities without overstepping the script.'],
 ['Customer support','Resolve documented requests, manage callback queues, and escalate sensitive or unusual issues.'],
];
const reviewProfiles=[['Google','/review-google.webp','https://www.google.com/search?q=STEALTH+AGENTS'],['Trustpilot','/review-trustpilot.png','https://www.trustpilot.com/review/stealthagents.com'],['Facebook','/review-facebook.png','https://www.facebook.com/StealthAgents/reviews']];

export default function ContactUsPage(){return <><Header/><main id="main-content" className="trusted-contact">
 <section className="tc-hero" aria-labelledby="contact-heading"><div className="container tc-hero-grid">
  <div className="tc-copy"><p className="tc-kicker">Free call-coverage consultation</p><h1 id="contact-heading">Give every caller a clear next step.</h1><p className="tc-lead">Tell us how calls reach your team today. We will map the scripts, systems, coverage hours, and escalation rules a Philippines-based specialist needs to support the queue.</p><ul className="tc-hero-list"><li>Clear scope before staffing</li><li>Manager-owned approvals and exceptions</li><li>Reviewable launch and QA plan</li></ul><TestimonialsRail contact/></div>
  <StandardContactForm endpoint="/api/contact" encoding="form" />
 </div></section>
 <section className="tc-team-section"><div className="container tc-team-grid"><figure className="contact-team-plate"><img src="/stealth-agents-team.jpg" width="953" height="540" alt="Stealth Agents team members at the Bacolod office"/><figcaption><img src="/stealth-agents-logo-black.png" width="149" height="50" alt="Stealth Agents logo"/><span>Official team, Bacolod</span></figcaption></figure><div><p className="tc-kicker">The team behind the handoff</p><h2>Structured call support, powered by Stealth Agents.</h2><p>Virtual Assistant Call Center helps businesses define repeatable phone work. Stealth Agents provides the parent-team environment behind recruiting, onboarding, and ongoing support.</p><a className="tc-parent-brand" href="https://stealthagents.com/our-team/" target="_blank" rel="noopener noreferrer"><span>Meet the Stealth Agents team</span></a></div></div></section>
 <section className="tc-section" id="call-support"><div className="container"><div className="tc-section-head"><div><p className="tc-kicker">Where call support fits</p><h2>Route each conversation toward an owned outcome.</h2></div><p>A dependable call lane combines approved language, complete notes, bounded decisions, and one accountable escalation owner.</p></div><div className="tc-card-grid">{callLanes.map(([title,body])=><article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div><div className="tc-inline-cta"><strong>Know which queue needs help?</strong><a href="#contactPageForm">Discuss it with our team</a></div></div></section>
 <section className="tc-section tc-check-section"><div className="container tc-check-grid"><div><p className="tc-kicker">Capability checklist</p><h2>A script is only the beginning.</h2><p>Map the conditions that help remote receptionists stay responsive, accurate, and easy to coach.</p></div><ul><li>Call types and approved responses</li><li>CRM, phone, calendar, and access boundaries</li><li>Routing ownership and review cadence</li><li>Urgency, privacy, and escalation triggers</li><li>Disposition codes and note rules</li><li>Coverage targets and first-month scorecard</li></ul></div></section>
 <section className="tc-reviews" aria-labelledby="review-heading"><div className="container tc-review-grid"><div className="tc-review-copy"><p className="tc-kicker">Independent review profiles</p><h2 id="review-heading">Check the current source.</h2><p>Ratings and counts change. These links open the live Stealth Agents profiles instead of freezing an unsupported marketing number.</p></div><div className="tc-review-sources">{reviewProfiles.map(([name,image,href])=><a href={href} target="_blank" rel="noopener noreferrer" key={name}><img src={image} alt={`${name} reviews`}/><span>View {name} reviews</span></a>)}</div></div></section>
 <section className="container tc-final"><div><p className="tc-kicker">Prepare the first queue</p><h2>Turn call coverage into a controlled operating lane.</h2><p>Share your call patterns, systems, and routing rules. We will use them to define a practical next step.</p></div><a href="#contactPageForm">Book a free consultation</a></section>
 </main><Footer/></>}
