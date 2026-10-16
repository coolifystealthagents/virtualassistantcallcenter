import { NextRequest, NextResponse } from 'next/server';

const CANONICAL_HOST = 'virtualassistantcallcenter.com';

export function middleware(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0]?.trim();
  const host = (forwardedHost || request.headers.get('host') || '').split(':')[0].toLowerCase();
  const cloudflareScheme = request.headers.get('cf-visitor')?.match(/"scheme"\s*:\s*"([^"]+)"/i)?.[1]?.toLowerCase();
  const protocol = cloudflareScheme || request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim().toLowerCase() || request.nextUrl.protocol.replace(':', '');
  const isKnownProductionHost = host === CANONICAL_HOST || host === `www.${CANONICAL_HOST}`;

  if (isKnownProductionHost && (host !== CANONICAL_HOST || protocol !== 'https')) {
    const canonical = request.nextUrl.clone();
    canonical.protocol = 'https';
    canonical.host = CANONICAL_HOST;
    canonical.port = '';
    return NextResponse.redirect(canonical, 308);
  }

  return NextResponse.next();
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
