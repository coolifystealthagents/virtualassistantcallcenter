import type { Metadata } from 'next';
import { Header, Footer } from '../components';

export const metadata: Metadata = {
  title: 'Meeting Confirmed',
  description: 'Your consultation booking with the Stealth Agents team is confirmed.',
  alternates: { canonical: '/thanks-whats-next' },
  robots: { index: false, follow: false },
};

export default function BookingConfirmedPage() {
  return <>
    <Header />
    <main className="completion-page">
      <section className="container completion-panel" aria-labelledby="confirmation-heading">
        <p className="eyebrow">Step 3 - Booking confirmed</p>
        <h1 id="confirmation-heading">Your meeting is booked.</h1>
        <p className="lead">Check your inbox for the calendar invitation and meeting details from Stealth Agents.</p>
        <div className="completion-next">
          <h2>What happens next</h2>
          <ul>
            <li>Bring your common call types, coverage hours, and current routing process.</li>
            <li>List the phone, calendar, CRM, or ticketing tools involved.</li>
            <li>Identify the decisions and exceptions that must stay with your team.</li>
          </ul>
        </div>
        <p>If the confirmation does not arrive, contact <a href="mailto:support@stealthagents.com">support@stealthagents.com</a>.</p>
        <a className="btn primary" href="/">Return to the homepage</a>
      </section>
    </main>
    <Footer />
  </>;
}
