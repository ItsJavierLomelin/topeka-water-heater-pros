import type { APIRoute } from 'astro';
import { SITE_URL } from '~/lib/site';

export const GET: APIRoute = () =>
  new Response(import.meta.env.BASE_URL !== '/' ? `User-agent: *\nDisallow: /\n` : `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap-index.xml\n`, {
    headers: { 'Content-Type': 'text/plain' },
  });
