import './globals.css';
import type { Metadata } from 'next';
import { site } from './data';

export const metadata: Metadata = {
  metadataBase: new URL('https://virtualassistantcallcenter.com'),
  title: { default: 'Virtual Assistant Call Center | Simple virtual assistant hiring guides', template: '%s | Virtual Assistant Call Center' },
  description: 'Simple, practical guides for hiring, onboarding, managing, and scaling virtual assistant call center support.',
  openGraph: { title: 'Virtual Assistant Call Center', description: 'Practical virtual assistant hiring guides for busy teams.', url: 'https://virtualassistantcallcenter.com', siteName: 'Virtual Assistant Call Center', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
