import aug19Meta from '../aug19-meta.json';
import { fleetServices } from '../fleet-content';
import { blogPosts } from '../data';
import { getContent } from '../content';

const base = 'https://virtualassistantcallcenter.com';
const aug19Paths = Object.entries(aug19Meta).map(([slug, value]) => `/${(value as { family: string }).family}/${slug}`);

function escapeXml(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
}

export async function GET() {
  const pages = ['', '/services', '/pricing', '/workflows', '/qa-scorecard', '/blog', '/blog/top-25-virtual-assistant-call-center-companies', '/research', '/alternatives', '/contact-us', '/privacy', '/terms', '/cancellation-policy'];
  const fileBlogs = getContent('blog');
  const research = getContent('research');
  const blogPages = Array.from({ length: Math.max(1, Math.ceil((blogPosts.length + fileBlogs.length) / 20)) }, (_, index) => index + 1).filter((page) => page > 1).map((page) => `/blog/page/${page}`);
  const alternatives = getContent('alternatives').map((entry) => `/alternatives/${entry.slug}`);
  const urls = [...aug19Paths, ...pages, ...fleetServices.map((service) => `/services/${service.slug}`), ...blogPosts.map((post) => `/blog/${post.slug}`), ...fileBlogs.map((post) => `/blog/${post.slug}`), ...blogPages, ...research.map((entry) => `/research/${entry.slug}`), ...alternatives];
  const locations = Array.from(new Set(urls)).filter((path) => !path.includes('"') && !path.includes("'") && !path.includes(' '));
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${locations.map((path) => `<url><loc>${escapeXml(`${base}${path}`)}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400' } });
}
