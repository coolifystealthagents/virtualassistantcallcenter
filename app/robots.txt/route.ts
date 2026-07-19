export function GET() { return new Response(`User-agent: *
Allow: /
Sitemap: https://virtualassistantcallcenter.com/sitemap.xml
`, { headers: { 'content-type': 'text/plain' } }); }