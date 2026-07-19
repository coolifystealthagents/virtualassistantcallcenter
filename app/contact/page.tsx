import { Header, Footer, JsonLd } from '../components';
import { site } from '../data';

export const metadata = {
  title: 'Contact for a VA call center hiring plan',
  description: 'Request a simple virtual assistant call center plan for call answering, intake, appointment setting, follow-up, and QA.',
};

export default function Contact() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: metadata.title,
    url: `${site.url}/contact`,
    description: metadata.description,
    about: { '@type': 'Service', name: 'Virtual assistant call center planning' },
    publisher: { '@type': 'Organization', name: site.brand, url: site.url },
  };
  return <><Header/><main className="section"><JsonLd data={schema}/><div className="container two"><div><p className="eyebrow">Contact</p><h1>Request an assistant call center plan</h1><p className="lead">Tell us what phone work you want off your plate. We will map the role, estimated hours, questions to ask, scripts to prepare, and first-week QA checklist.</p><div className="card"><h2>What to include</h2><ul className="list"><li>Call volume and hours needed</li><li>Call types: intake, booking, support, follow-up, or reminders</li><li>Tools used: phone system, calendar, CRM, help desk</li><li>What the assistant should never decide alone</li></ul></div><p><b>Placeholder:</b> connect this form to the Stealth Agents intake endpoint or preferred CRM before paid traffic.</p></div><form className="card" action="/thank-you"><label>Name<br/><input required name="name" /></label><label>Email<br/><input required name="email" type="email" /></label><label>Phone coverage needed<br/><select name="coverage"><option>Call answering</option><option>Appointment setting</option><option>Lead intake</option><option>Customer support</option><option>Not sure yet</option></select></label><label>What tasks do you want help with?<br/><textarea name="tasks" rows={6} /></label><button className="btn" type="submit">Send request</button></form></div></main><Footer/></>;
}
