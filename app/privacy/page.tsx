import { Header, Footer } from '../components';
import { site } from '../data';

export const metadata = {
  title: 'Privacy policy placeholder',
  description: 'Privacy policy placeholder for Virtual Assistant Call Center. Replace with legal review before launch.',
};

export default function Privacy() {
  return <><Header/><main className="section"><div className="container" style={{maxWidth:860}}><p className="eyebrow">Privacy</p><h1>Privacy policy placeholder</h1><p className="lead">This page is a plain placeholder for {site.brand}. Replace it with a reviewed policy before collecting real leads or running ads.</p><div className="card"><h2>What this site may collect</h2><p>Contact forms may ask for your name, email, phone number, business details, and the tasks you want help with.</p><h2>How information may be used</h2><p>Information may be used to reply to your request, prepare an assistant hiring plan, improve the website, and route your request to the right team.</p><h2>Do not send sensitive data</h2><p>Please do not send passwords, customer records, payment details, medical information, legal files, or other private data through the form.</p><h2>Analytics and cookies</h2><p>This site may later use basic analytics. Add the real analytics tools, cookie details, and opt-out process here before launch.</p><h2>Contact</h2><p>Replace this line with the business contact email and mailing address.</p></div></div></main><Footer/></>;
}
