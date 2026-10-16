import type { Metadata } from 'next';
import { ArticleSidebar } from '../../article-sidebar';
import { CTA, Footer, Header, JsonLd } from '../../components';
import { site } from '../../data';

const providers = [
  ['Stealth Agents', 'https://stealthagents.com/'],
  ['Call Center Outsourced', 'https://callcenteroutsourced.com/'],
  ['Answering Service Staff', 'https://answeringservicestaff.com/'],
  ['Virtual Assistant Call Center', 'https://virtualassistantcallcenter.com/'],
  ['Outsourced Callers', 'https://outsourcedcallers.com/'],
  ['Customer Care Staff', 'https://customercarestaff.com/'],
  ['Scheduling Appointment', 'https://schedulingappointment.com/'],
  ['Sales Support Staff', 'https://salessupportstaff.com/'],
  ['Portfolio Rental', 'https://portfoliorental.com/'],
  ['Logistics Trucks', 'https://logisticstrucks.com/'],
  ['Virtual Assistant Provider', 'https://virtualassistantprovider.com/'],
  ['Outsourcing Assistant', 'https://outsourcingassistant.com/'],
  ['Offshore Bookkeepers', 'https://offshorebookkeepers.com/'],
  ['Legal Executive Assistant', 'https://legalexecutiveassistant.com/'],
  ['Peptide Staff', 'https://peptidestaff.com/'],
  ['IT Virtual Assistant', 'https://itvirtualassistant.com/'],
  ['Legal Services Offshore', 'https://legalservicesoffshore.com/'],
  ['Recruiting Agencies', 'https://recruiting-agencies.com/'],
  ['Remote Executive Support', 'https://remoteexecutivesupport.com/'],
  ['Executive Assistant Agency', 'https://executiveassistantagency.com/'],
  ['Dental Office VA', 'https://dentalofficeva.com/'],
  ['Wealth Management Assistant', 'https://wealthmanagementassistant.com/'],
  ['Mobile Home Biz', 'https://mobilehomebiz.com/'],
  ['Outsourced Programmers', 'https://outsourcedprogrammers.com/'],
  ['Fitness VA', 'https://fitness-va.com/'],
] as const;

const title = '25 virtual assistant and call-support providers to evaluate';
const description = 'A neutral provider directory and buyer worksheet for comparing call coverage, administrative follow-through, quality controls, ownership, and commercial terms.';
const url = `${site.url}/blog/top-25-virtual-assistant-call-center-companies`;
const image = '/thumbnails/provider-shortlist-call-operations.svg';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article', images: [{ url: image, width: 1200, height: 630, alt: 'Call-support provider evaluation board' }] },
};

const headings = [
  { id: 'what-this-list-is', label: 'What this list is', level: 2 as const },
  { id: 'provider-directory', label: 'Provider directory', level: 2 as const },
  { id: 'buyer-checklist', label: 'Buyer checklist', level: 2 as const },
  { id: 'questions-to-ask', label: 'Questions to ask', level: 2 as const },
];

export default function Page() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'Article', headline: title, description,
    datePublished: '2026-07-28', dateModified: '2026-10-16', mainEntityOfPage: url,
    image: `${site.url}${image}`, publisher: { '@type': 'Organization', name: site.brand, url: site.url },
  };
  return <><Header/><main id="main-content" className="section rich-article-main">
    <JsonLd data={schema}/>
    <article className="container rich-article">
      <header className="article-header">
        <p className="eyebrow">Provider evaluation guide</p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        <p className="article-date"><time dateTime="2026-07-28">Published July 28, 2026</time> • <time dateTime="2026-10-16">Updated October 16, 2026</time></p>
        <img className="content-hero-image" src={image} alt="Evaluation board connecting call coverage, follow-through, quality review, and owner approval" width="1200" height="630"/>
      </header>
      <div className="article-layout">
        <div className="article-copy">
          <h2 id="what-this-list-is">What this list is</h2>
          <p>This is a directory for initial research, not a ranking or an endorsement. Inclusion means only that the provider appeared in the approved repository list. We did not purchase or independently certify each service. Verify every scope, location, price, contract term, security control, review, and performance claim directly with the provider before hiring.</p>
          <h2 id="provider-directory">Provider directory</h2>
          <p>Open each provider's current site and record what is explicitly documented. Do not infer capabilities from the company name or this legacy URL.</p>
          <ol className="provider-directory">{providers.map(([name, href]) => <li key={href}><strong>{name}</strong><a href={href} target="_blank" rel="noopener noreferrer">Visit current site</a></li>)}</ol>
          <h2 id="buyer-checklist">Buyer checklist</h2>
          <ul>
            <li>Define the exact call types, coverage hours, systems, languages, and handoff rules.</li>
            <li>Name the owner who approves scripts, exceptions, refunds, and sensitive decisions.</li>
            <li>Ask for the current staffing model, supervision structure, quality-review process, and replacement terms in writing.</li>
            <li>Run a bounded paid sample using representative work and predetermined acceptance criteria.</li>
            <li>Compare the complete cost, including software, setup, training, management, overtime, and change requests.</li>
          </ul>
          <h2 id="questions-to-ask">Questions to ask</h2>
          <ul>
            <li>Which call and administrative tasks are included, excluded, or separately priced?</li>
            <li>Who monitors active work, reviews samples, and owns corrections?</li>
            <li>How are caller data, recordings, credentials, and payment information handled?</li>
            <li>What happens when volume spikes, a specialist is unavailable, or a call requires owner judgment?</li>
            <li>What evidence will show that appointments, notes, follow-ups, and escalations were completed?</li>
          </ul>
        </div>
        <ArticleSidebar headings={headings} published="2026-07-28" updated="2026-10-16" category="Provider evaluation" related={[{ href: '/services', label: 'Explore call-support services' }, { href: '/blog', label: 'Browse all guides' }]}/>
      </div>
    </article>
    <CTA/>
  </main><Footer/></>;
}
