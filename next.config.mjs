/** @type {import("next").NextConfig} */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us https://static.cloudflareinsights.com",
  "connect-src 'self' https://acrtracking.stealthagents.us https://cloudflareinsights.com",
  "img-src 'self' data: https:",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "frame-src https://go.oncehub.com https://*.oncehub.com https://*.scheduleonce.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
];

const nextConfig = {
  async redirects() {
    return [
      { source: "/cancellation", destination: "/cancellation-policy", permanent: true },
      { source: "/blog/page/1", destination: "/blog", permanent: true },
      { source: "/industries", destination: "/services", permanent: true },
      { source: "/industry", destination: "/services", permanent: true },
      { source: "/services/inbound-call-answering", destination: "/services/inbound-customer-calls", permanent: true },
      { source: "/services/appointment-scheduling", destination: "/services/appointment-setting", permanent: true },
      { source: "/services/outbound-customer-calls", destination: "/services/outbound-lead-qualification", permanent: true },
      { source: "/services/virtual-assistant", destination: "/services/inbound-customer-calls", permanent: true },
      { source: "/services/customer-support", destination: "/services/inbound-customer-calls", permanent: true },
      { source: "/services/call-answering", destination: "/services/inbound-customer-calls", permanent: true },
      { source: "/blog/warm-transfer-call-handling", destination: "/blog/warm-transfer-acceptance-receipt", permanent: true },
      { source: "/content/research/property-management-maintenance-call-triage", destination: "/blog/property-management-maintenance-call-triage", permanent: true },
      { source: "/research/call-center-queue-backlog-governance", destination: "/research/customer-call-backlog-triage", permanent: true },
      { source: "/research/customer-callback-queue-management", destination: "/blog/customer-callback-queue-management", permanent: true },
      { source: "/research/business-hours-coverage-plan", destination: "/blog/business-hours-coverage-plan", permanent: true },
      { source: "/research/healthcare-appointment-call-handoff", destination: "/blog/healthcare-appointment-call-handoff", permanent: true },
      { source: "/research/call-center-qa-review-routine", destination: "/blog/call-center-qa-review-routine", permanent: true },
      { source: "/research/virtual-assistant-call-notes-template", destination: "/blog/virtual-assistant-call-notes-template", permanent: true },
      { source: "/research/virtual-receptionist-handoff-checklist", destination: "/blog/virtual-receptionist-handoff-checklist", permanent: true },
      { source: "/research/missed-call-recovery-workflow", destination: "/blog/missed-call-recovery-workflow", permanent: true },
      { source: "/research/inbound-customer-call-intake-checklist", destination: "/blog/inbound-customer-call-intake-checklist", permanent: true },
      { source: "/research/call-answering-policy-for-new-leads", destination: "/blog/call-answering-policy-for-new-leads", permanent: true },
      { source: "/research/virtual-receptionist-call-transfer-rules", destination: "/blog/virtual-receptionist-call-transfer-rules", permanent: true },
      { source: "/research/lead-qualification-call-script", destination: "/blog/lead-qualification-call-script", permanent: true },
      { source: "/research/call-routing-for-multi-location-businesses", destination: "/blog/call-routing-for-multi-location-businesses", permanent: true },
      { source: "/research/call-center-kpi-baselines-for-small-business", destination: "/research/call-center-kpi-definition-guide", permanent: true },
      { source: "/alternatives/business-call-scam-screening-virtual-assistant-philippines", destination: "/blog/business-call-scam-screening-virtual-assistant-philippines", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
