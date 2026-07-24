import './globals.css';
import type { Metadata } from 'next';
import { site } from './data';

export const metadata: Metadata = {
  metadataBase: new URL('https://virtualassistantcallcenter.com'),
  title: { default: 'Philippines Virtual Receptionist Services | Virtual Assistant Call Center', template: '%s | Virtual Assistant Call Center' },
  description: 'Plan call answering, intake, appointment setting, follow-up, and customer support with Filipino virtual receptionists.',
  openGraph: { title: 'Philippines Virtual Receptionist Services', description: 'Plan Filipino call support around your script, routing rules, and quality checks.', url: 'https://virtualassistantcallcenter.com', siteName: 'Virtual Assistant Call Center', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
