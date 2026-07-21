# Humanizer audit

Date: 2026-07-21

## Scope

Reviewed the site's public marketing and editorial copy, including the homepage, shared data, call workflow, QA scorecard, blog index and guide template, contact page, thank-you page, shared CTA/footer text, and metadata.

## Reviewed files

- `app/page.tsx`
- `app/data.ts`
- `app/components.tsx`
- `app/layout.tsx`
- `app/workflows/page.tsx`
- `app/qa-scorecard/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/contact/page.tsx`
- `app/thank-you/page.tsx`

## Patterns fixed

- Repaired damaged guide sentences such as "phone support planning more" and "special staffing details decisions."
- Replaced broad offshore staffing copy with call-specific language about scripts, intake, booking, follow-up, coverage hours, CRM notes, and escalation rules.
- Removed unsupported sample performance numbers and the unsupported 7-21 day setup claim.
- Replaced source-note placeholders with factual descriptions of the linked FTC and NIST guidance.
- Rewrote robotic fragments, a chatbot-style "Ready when you are" label, and an absolute missed-call promise.
- Changed the shared CTA and contact form so they match the site's call coverage offer instead of a generic staffing pitch.
- Replaced curly quotation marks and the mechanical "Quote-style script example" label in the guide template.

## Final anti-AI pass

The revised copy stays concrete and call-specific. Sentence lengths vary, claims are bounded, and headings describe a real buyer task rather than announcing importance. Repeated template language remains only where it helps users move between the call plan, workflow, scorecard, and contact form.

## Exclusions

Privacy, terms, cancellation, and cancellation-policy pages were excluded. Their wording and policy meaning were not changed. Route slugs, schema types, citations, factual boundaries, and conversion paths were preserved. No testimonials, first-person stories, statistics, credentials, or client claims were added.
