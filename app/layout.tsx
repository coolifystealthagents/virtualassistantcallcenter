import { AcrClient } from './acr-client';
import Script from 'next/script';
import './globals.css';
import type { Metadata } from 'next';
import { site } from './data';

export const metadata: Metadata = {
  metadataBase: new URL('https://virtualassistantcallcenter.com'),
  title: { default: 'Virtual Assistant Call Center | Filipino Receptionists', template: '%s | Virtual Assistant Call Center' },
  description: 'Plan call answering, intake, appointment setting, follow-up, and customer support with Filipino virtual receptionists.',
  openGraph: { title: 'Philippines Virtual Receptionist Services', description: 'Plan Filipino call support around your script, routing rules, and quality checks.', url: 'https://virtualassistantcallcenter.com', siteName: 'Virtual Assistant Call Center', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<AcrClient/><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'virtual-assistant-call-center',endpoint:'/ingest/track',debug:false,funnelSteps:[{path:'/contact-us',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/contact',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/thank-you',step:2,label:'Form Submitted',event:'funnel_form_submitted'},{path:'/thanks-whats-next',step:3,label:'Booking Confirmed',event:'funnel_booking_confirmed'}]};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive"/></body></html>;
}
