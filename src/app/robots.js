import { getSiteUrl } from '../lib/site-url';

// Metadata routes must be static for the Next.js export in next.config.mjs.
export const dynamic = 'force-static';

export default function robots() {
  const siteUrl = getSiteUrl();
  return {
    rules: { userAgent: '*', allow: '/' },
    ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
