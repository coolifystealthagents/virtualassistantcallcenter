import './globals.css';
import type { Metadata } from 'next';
import { site } from './data';

export const metadata: Metadata = {
  metadataBase: new URL('https://virtualassistantcallcenter.com'),
  title: { default: 'Virtual Receptionist Call Center Services | Virtual Assistant Call Center', template: '%s | Virtual Assistant Call Center' },
  description: 'Plan virtual receptionist coverage for call answering, intake, appointment setting, follow-up, CRM notes, and customer support.',
  openGraph: { title: 'Virtual Receptionist Call Center Services', description: 'A practical call coverage plan built around your script, routing rules, and quality checks.', url: 'https://virtualassistantcallcenter.com', siteName: 'Virtual Assistant Call Center', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
