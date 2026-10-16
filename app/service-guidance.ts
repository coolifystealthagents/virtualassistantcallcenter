export type ServiceGuidance = {
  quality: string[];
  start: string[];
  faqs: { q: string; a: string }[];
};

export const serviceGuidance: Record<string, ServiceGuidance> = {
  'inbound-customer-calls': {
    quality: ['Greeting and identity fields are complete', 'Disposition matches the caller request', 'Urgent calls reach the named owner inside the agreed window'],
    start: ['Approve the greeting, FAQ, and prohibited answers', 'Connect the phone queue and CRM test account', 'Review ten test calls before opening live coverage'],
    faqs: [
      { q: 'Can the specialist transfer calls live?', a: 'Yes, when your routing directory defines the destination, availability rule, and fallback path.' },
      { q: 'How are missed transfers handled?', a: 'The specialist records the caller, reason, urgency, and callback owner instead of leaving an unowned voicemail.' },
      { q: 'Which answers require escalation?', a: 'Any answer outside the approved FAQ, including policy, pricing, legal, medical, or refund decisions, goes to your named owner.' },
    ],
  },
  'outbound-lead-qualification': {
    quality: ['Every dial has a permissioned source and timestamp', 'Qualification fields are complete before booking', 'Attempt limits and do-not-call requests are honored'],
    start: ['Supply the permissioned lead source and suppression rules', 'Approve qualification questions and disqualifiers', 'Review the first twenty call outcomes and objections'],
    faqs: [
      { q: 'Will you call purchased cold lists?', a: 'No. This lane requires a permissioned lead source and documented contact basis.' },
      { q: 'Who decides whether a lead is qualified?', a: 'Your approved criteria decide; the specialist records answers and applies the defined stage without inventing judgment.' },
      { q: 'What happens when a lead asks to stop?', a: 'The request is recorded immediately, the contact is suppressed, and the outcome is reported to the owner.' },
    ],
  },
  'appointment-setting': {
    quality: ['Bookings satisfy the approved eligibility rules', 'Timezone and contact details are confirmed', 'Reschedules and cancellations remain linked to the original record'],
    start: ['Share calendar access and appointment types', 'Document buffers, timezones, and qualification rules', 'Run booking, reschedule, and cancellation test cases'],
    faqs: [
      { q: 'Can appointments be booked across timezones?', a: 'Yes. The workflow confirms the caller timezone and uses the calendar rules you approve.' },
      { q: 'Can the specialist override a full calendar?', a: 'No. Full or exceptional requests follow your waitlist or escalation path.' },
      { q: 'How are confirmations handled?', a: 'The specialist uses your approved email, SMS, or call confirmation process and records delivery status.' },
    ],
  },
  'after-hours-answering': {
    quality: ['Urgency is classified from the approved matrix', 'On-call acknowledgements are timestamped', 'Routine messages include a complete callback record'],
    start: ['Define coverage hours and holiday exceptions', 'Publish the on-call roster and fallback contacts', 'Simulate urgent, routine, and unreachable-owner scenarios'],
    faqs: [
      { q: 'How is an emergency identified?', a: 'Only the urgency matrix you approve is used; the specialist does not make medical, legal, or safety judgments.' },
      { q: 'What if the on-call person does not answer?', a: 'The specialist follows the timed fallback chain and records each attempted contact.' },
      { q: 'Can coverage change for holidays?', a: 'Yes. Holiday hours and temporary contacts must be supplied before the affected shift.' },
    ],
  },
  'order-status-calls': {
    quality: ['Order identity is verified before details are shared', 'Status wording matches the source system', 'Exceptions are routed without promising an unapproved remedy'],
    start: ['Provide read-only order-system access', 'Approve identity checks and status language', 'Test delayed, partial, delivered, and missing-order cases'],
    faqs: [
      { q: 'Can the specialist issue a refund?', a: 'Only if your documented workflow explicitly authorizes that action; otherwise the request is escalated.' },
      { q: 'How is customer identity checked?', a: 'The specialist uses the approved combination of order number and customer fields before sharing order details.' },
      { q: 'What if carrier data is unclear?', a: 'The record is marked for investigation and routed to the owner without inventing a delivery promise.' },
    ],
  },
  'patient-scheduling': {
    quality: ['Required patient identifiers are captured securely', 'Appointments match provider and visit-type rules', 'Clinical questions are transferred rather than interpreted'],
    start: ['Approve minimum-necessary data and access boundaries', 'Document provider, visit-type, and referral rules', 'Test routine, urgent, new-patient, and reschedule scenarios'],
    faqs: [
      { q: 'Does the specialist give medical advice?', a: 'No. Clinical questions and symptom interpretation stay with licensed staff through your escalation process.' },
      { q: 'Can insurance eligibility be promised?', a: 'No. The specialist can record supplied insurance information and follow your verification workflow without guaranteeing coverage.' },
      { q: 'How is sensitive information limited?', a: 'Access and scripts are restricted to the minimum information required for the scheduling task.' },
    ],
  },
  'real-estate-lead-intake': {
    quality: ['Property, timing, and representation fields are complete', 'Fair-housing-sensitive questions stay inside approved language', 'Hot leads reach the assigned agent within the agreed window'],
    start: ['Approve buyer, seller, renter, and vendor intake paths', 'Connect the CRM assignment rules and territory map', 'Review sample leads for completeness and routing accuracy'],
    faqs: [
      { q: 'Can the specialist discuss neighborhood demographics?', a: 'No. Fair-housing-sensitive questions follow approved neutral language and are referred to appropriate public resources.' },
      { q: 'How are leads assigned?', a: 'Assignment follows your territory, availability, property type, or round-robin rules.' },
      { q: 'Can showing times be confirmed?', a: 'Only when calendar access and listing instructions permit it; exceptions go to the assigned agent.' },
    ],
  },
  'customer-win-back-calls': {
    quality: ['Contacts meet consent and suppression rules', 'Offer language stays within the approved version', 'Reasons for return, decline, or opt-out are coded consistently'],
    start: ['Define eligible customer cohorts and exclusions', 'Approve the offer, objection responses, and expiry', 'Review the first campaign sample before increasing volume'],
    faqs: [
      { q: 'Can the specialist change the offer?', a: 'No. Pricing, discounts, and eligibility remain exactly within the approved campaign rules.' },
      { q: 'How are opt-outs handled?', a: 'The request is recorded during the call and the customer is added to the applicable suppression list.' },
      { q: 'What is reported after a campaign?', a: 'You receive attempts, contacts, dispositions, stated objections, reactivations, and unresolved exceptions.' },
    ],
  },
  'call-quality-assurance': {
    quality: ['Samples follow the approved selection method', 'Scores cite the exact call moment or record field', 'Calibration differences are logged and resolved'],
    start: ['Approve the scorecard and critical-failure rules', 'Provide recordings, transcripts, and privacy boundaries', 'Calibrate reviewers on the same sample before routine scoring'],
    faqs: [
      { q: 'How are calls selected for review?', a: 'Selection follows your approved random, risk-based, or event-triggered sampling method.' },
      { q: 'Can a reviewer change the policy?', a: 'No. Reviewers score against the current approved standard and send policy gaps to the owner.' },
      { q: 'How is scorer consistency checked?', a: 'Periodic calibration compares scores on the same calls and documents the final interpretation.' },
    ],
  },
  'call-disposition-reporting': {
    quality: ['Disposition definitions are mutually clear', 'Required note fields are present', 'Queue totals reconcile to the source call log'],
    start: ['Approve the disposition dictionary and owners', 'Connect the call log and destination report', 'Reconcile one full reporting period before automation'],
    faqs: [
      { q: 'Can disposition names be customized?', a: 'Yes. The dictionary should define each label, required fields, and exception owner before launch.' },
      { q: 'How are missing notes handled?', a: 'Incomplete records enter an exception queue rather than being silently counted as complete.' },
      { q: 'What does the report include?', a: 'The agreed view can include volume, outcomes, callbacks, aging, unresolved exceptions, and owner assignments.' },
    ],
  },
};
