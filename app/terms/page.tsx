import { Header, Footer } from '../components';
import { site } from '../data';

export const metadata = {
  title: 'Terms placeholder',
  description: 'Terms placeholder for Virtual Assistant Call Center. Replace with legal review before launch.',
};

export default function Terms() {
  return <><Header/><main className="section"><div className="container" style={{maxWidth:860}}><p className="eyebrow">Terms</p><h1>Terms placeholder</h1><p className="lead">This page is a plain terms placeholder for {site.brand}. Replace it with reviewed terms before collecting real leads or selling services.</p><div className="card"><h2>Educational information</h2><p>The site provides general hiring, onboarding, and planning information. It is not legal, tax, HR, medical, security, or financial advice.</p><h2>No guaranteed outcome</h2><p>Virtual assistant results depend on role fit, training, scripts, management, call volume, data access, and provider quality.</p><h2>Lead requests</h2><p>Submitting a form does not create a client relationship or guarantee availability, staffing details, hiring results, or provider acceptance.</p><h2>Third-party links</h2><p>The site may link to outside sources. Review those sources directly and confirm facts before making business decisions.</p><h2>Contact</h2><p>Replace this line with the business contact email and mailing address.</p></div></div></main><Footer/></>;
}
