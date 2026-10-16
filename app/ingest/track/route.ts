import { type NextRequest } from 'next/server';

const TRACKING_API = 'https://acrtracking.stealthagents.us/api/track';
const SITE_ID = 'virtual-assistant-call-center';
const CANONICAL_ORIGIN = 'https://virtualassistantcallcenter.com';
const MAX_BODY_BYTES = 64_000;
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 90;
const MAX_RATE_LIMIT_KEYS = 10_000;
type RateBucket = { count: number; startedAt: number; lastSeen: number };
const requests = new Map<string, RateBucket>();
let lastPrune = 0;

export const runtime = 'nodejs';

function clientAddress(request: NextRequest) {
  return request.headers.get('cf-connecting-ip') || request.headers.get('x-real-ip') || 'unknown';
}

function pruneRateLimits(now: number) {
  if (now - lastPrune < WINDOW_MS && requests.size < MAX_RATE_LIMIT_KEYS) return;
  for (const [address, bucket] of requests) if (now - bucket.lastSeen >= WINDOW_MS) requests.delete(address);
  if (requests.size >= MAX_RATE_LIMIT_KEYS) {
    const oldest = [...requests.entries()].sort((a, b) => a[1].lastSeen - b[1].lastSeen).slice(0, requests.size - MAX_RATE_LIMIT_KEYS + 1);
    for (const [address] of oldest) requests.delete(address);
  }
  lastPrune = now;
}

function isRateLimited(address: string) {
  const now = Date.now();
  pruneRateLimits(now);
  const current = requests.get(address);
  const bucket = !current || now - current.startedAt >= WINDOW_MS
    ? { count: 1, startedAt: now, lastSeen: now }
    : { count: current.count + 1, startedAt: current.startedAt, lastSeen: now };
  requests.set(address, bucket);
  return bucket.count > MAX_REQUESTS;
}

export async function POST(request: NextRequest) {
  if (request.headers.get('origin') !== CANONICAL_ORIGIN) {
    return Response.json({ status: 'error', detail: 'Invalid origin' }, { status: 403 });
  }

  const address = clientAddress(request);
  if (isRateLimited(address)) return Response.json({ status: 'error', detail: 'Too many requests' }, { status: 429 });

  try {
    const declaredLength = Number(request.headers.get('content-length') || '0');
    if (declaredLength > MAX_BODY_BYTES) return Response.json({ status: 'error', detail: 'Payload too large' }, { status: 413 });

    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) return Response.json({ status: 'error', detail: 'Payload too large' }, { status: 413 });

    const payload = JSON.parse(body) as Record<string, unknown>;
    if (!payload || Array.isArray(payload) || typeof payload !== 'object') throw new Error('Invalid tracking payload');
    if (Object.keys(payload).length === 0) throw new Error('Invalid tracking payload');
    if (payload.siteId !== undefined && payload.siteId !== SITE_ID) return Response.json({ status: 'error', detail: 'Invalid site' }, { status: 403 });
    const normalizedPayload = { ...payload, siteId: SITE_ID };

    const upstream = await fetch(TRACKING_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': request.headers.get('user-agent') || '',
        'Accept-Language': request.headers.get('accept-language') || '',
        'X-Forwarded-For': address,
        'X-ACR-Client-IP': address,
      },
      body: JSON.stringify(normalizedPayload),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });

    if (!upstream.ok) return Response.json({ status: 'accepted' }, { status: 202, headers: { 'Cache-Control': 'no-store' } });
    const upstreamBody = [204, 205, 304].includes(upstream.status) ? null : await upstream.text();
    return new Response(upstreamBody, { status: upstream.status, headers: { 'Content-Type': upstream.headers.get('content-type') || 'application/json', 'Cache-Control': 'no-store' } });
  } catch {
    return Response.json({ status: 'error', detail: 'Invalid payload' }, { status: 400, headers: { 'Cache-Control': 'no-store' } });
  }
}
