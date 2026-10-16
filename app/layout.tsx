import { AcrClient } from './acr-client';
import Script from 'next/script';
import './globals.css';
import './v3.css';
import type { Metadata } from 'next';
import { site } from './data';

export const metadata: Metadata = {
  metadataBase: new URL('https://virtualassistantcallcenter.com'),
  title: { default: 'Virtual Assistant Call Center | Filipino Receptionists', template: '%s | Virtual Assistant Call Center' },
  description: 'Plan call answering, intake, appointment setting, follow-up, and customer support with Filipino virtual receptionists.',
  openGraph: { title: 'Philippines Virtual Receptionist Services', description: 'Plan Filipino call support around your script, routing rules, and quality checks.', url: 'https://virtualassistantcallcenter.com', siteName: 'Virtual Assistant Call Center', type: 'website', images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Virtual Assistant Call Center' }] },
  twitter: { card: 'summary_large_image', title: 'Philippines Virtual Receptionist Services', description: 'Plan Filipino call support around your script, routing rules, and quality checks.', images: ['/og-image.svg'] },
  icons: { icon: '/icon.svg', shortcut: '/icon.svg', apple: '/icon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<AcrClient/><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'virtual-assistant-call-center',endpoint:'/ingest/track',debug:false,funnelSteps:[{path:'/contact-us',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/contact',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/thank-you',step:2,label:'Form Submitted',event:'funnel_form_submitted'},{path:'/thanks-whats-next',step:3,label:'Booking Confirmed',event:'funnel_booking_confirmed'}]};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive"/></body></html>;
}
