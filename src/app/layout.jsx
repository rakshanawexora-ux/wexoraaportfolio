import 'lenis/dist/lenis.css';
import '../styles/globals.css';
import SmoothScrollProvider from '../components/ui/SmoothScrollProvider';
import { getSiteUrl } from '../lib/site-url';

const siteUrl = getSiteUrl();

export const metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: '/' } } : {}),
  title: 'Wexoraa Infotech — Our portfolio',
  description:
    'Explore the websites, mobile apps, creative work and campaign results of Wexoraa Infotech.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
