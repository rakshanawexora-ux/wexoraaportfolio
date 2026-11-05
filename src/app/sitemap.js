import { getSiteUrl } from '../lib/site-url';

export const dynamic = 'force-static';

export default function sitemap() {
  const siteUrl = getSiteUrl();
  // Do not publish localhost or an invented domain when SITE_URL is missing.
  if (!siteUrl) return [];

  // This is a single-page portfolio; section anchors are not separate pages.
  return [{ url: `${siteUrl}/`, changeFrequency: 'monthly', priority: 1 }];
}
