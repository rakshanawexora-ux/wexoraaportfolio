import { siteUrl } from '../data/site.json';

/** Set SITE_URL to the portfolio's public origin before the production build. */
export function getSiteUrl() {
  const configuredUrl = process.env.SITE_URL?.trim() || siteUrl;
  if (!configuredUrl) return null;

  const url = new URL(configuredUrl);
  if (!['https:', 'http:'].includes(url.protocol)) {
    throw new Error('SITE_URL must be a complete http or https URL.');
  }
  if (url.username || url.password || url.search || url.hash || url.pathname !== '/') {
    throw new Error(
      'SITE_URL must contain only the public origin, for example https://yourdomain.com.',
    );
  }
  return url.origin;
}
