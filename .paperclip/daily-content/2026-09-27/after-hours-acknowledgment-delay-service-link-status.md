# After-hours research service-link status — 2026-09-27

- Classification: `deployment_pending_public_verification / public_stale`.
- Rendered source: 28540485f76ec910920cba77cb24dfaa5c4319ea
- Preserve rendered-source commit 28540485f76ec910920cba77cb24dfaa5c4319ea.
- Scope: `content/research/after-hours-acknowledgment-delay-study.md` adds the existing `/services/after-hours-answering` route to the record's related-resource data and updates the record date to `2026-09-27`. The service and research routes were each present in the fresh local build and generated sitemap. The research artifact had one route-local link to `/services/after-hours-answering`.
- Local gates: `npm run content:validate`, `npm run lint`, and `npm run build` passed. The artifact proof found the exact research H1, canonical `https://virtualassistantcallcenter.com/research/after-hours-acknowledgment-delay-study`, one route-local service link, and both route locations in `.next/server/app/sitemap.xml.body`.
- Canonical public check: cache-busted `https://virtualassistantcallcenter.com/research/after-hours-acknowledgment-delay-study` returned `200 text/html` with the expected H1 and canonical, but route-local `<main>` contained zero links to `/services/after-hours-answering`.
- Alternate-host public check: cache-busted `https://www.virtualassistantcallcenter.com/research/after-hours-acknowledgment-delay-study` returned `200 text/html` with the expected H1 and canonical, but route-local `<main>` contained zero links to `/services/after-hours-answering`.
- Sitemap checks: canonical and alternate-host cache-busted sitemaps both returned `200 application/xml` and contain the canonical research URL. This sitemap intentionally has no `<lastmod>` for the route, so it does not establish freshness.
- Deployment boundary: the repository's existing research-release record says direct Research deployment is prohibited and a prior Coolify API probe returned `401`. No deployment was triggered in this run. The pushed source is not represented as public rollout proof.
- Next action: the approved deployment owner should release current `main`, then verify the exact route-local service href on canonical and alternate hosts. Retain this source SHA; do not recreate the link.
