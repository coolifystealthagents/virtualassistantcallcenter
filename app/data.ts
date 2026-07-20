export const site = {
  domain: 'VirtualAssistantCallCenter.com',
  url: 'https://virtualassistantcallcenter.com',
  slug: 'virtualassistantcallcenter',
  brand: 'Virtual Assistant Call Center',
  primary: 'virtual assistant call center',
  audience: 'teams that need call answering, follow-up, intake, appointment setting, and customer support coverage',
  angle: 'call center workflows run by trained virtual assistants for small and mid-size teams',
  color: '#dc2626',
  accent: '#0369a1',
} as const;

export const roles = [
  'Call answering assistant',
  'Appointment setting assistant',
  'Customer support assistant',
  'Lead follow-up assistant',
  'Intake assistant',
  'QA and CRM assistant',
] as const;

export const industries = ['real estate', 'healthcare offices', 'legal teams', 'ecommerce stores', 'coaches and agencies', 'home services'] as const;

export const stats = [
  { label: 'Role clarity', value: 'Scope first', note: 'the right plan depends on tasks, schedule, skill, tools, and management needs' },
  { label: 'Common call ramp', value: '7-21 days', note: 'with scripts, call recordings, FAQs, and QA review ready' },
  { label: 'Best first handoff', value: '5-10 tasks', note: 'small repeatable call work beats a vague all-in role' },
];

export const workflowSteps = [
  { title: 'Capture the call reason', text: 'The assistant tags each call as new lead, existing customer, billing, support, reschedule, spam, or urgent.' },
  { title: 'Use the right script', text: 'They follow a plain script, ask the required questions, and do not guess on policy, plan, medical, legal, or money issues.' },
  { title: 'Book or route the next step', text: 'Good-fit calls become appointments, support tickets, CRM tasks, or owner callbacks with notes attached.' },
  { title: 'Score the work weekly', text: 'Review a small sample of calls for greeting, accuracy, notes, tone, follow-up, and escalation.' },
];

export const qaScorecard = [
  { item: 'Greeting and identity check', points: 10, note: 'Uses the approved greeting and confirms the caller or lead source.' },
  { item: 'Reason for call captured', points: 15, note: 'Tags the call correctly and writes a short note a manager can understand.' },
  { item: 'Script and FAQ accuracy', points: 20, note: 'Answers only from the approved script, FAQ, plan sheet, or policy note.' },
  { item: 'Appointment or ticket quality', points: 20, note: 'Books the right slot, creates the task, or sends the issue to the right person.' },
  { item: 'Escalation rules followed', points: 15, note: 'Does not handle sensitive decisions without owner review.' },
  { item: 'Tone and close', points: 10, note: 'Sounds calm, helpful, and clear.' },
  { item: 'CRM cleanup', points: 10, note: 'Updates the record, status, next action, and owner.' },
];

export const faqs = [
  { q: 'Can a virtual assistant answer calls for my business?', a: 'Yes, if the calls follow a clear script and the assistant has safe rules for booking, routing, and escalation. Keep sensitive decisions with your in-house team.' },
  { q: 'What should I hand off first?', a: 'Start with call answering, lead qualification, appointment setting, missed-call follow-up, CRM notes, and simple support replies.' },
  { q: 'How do I keep quality high?', a: 'Use call recordings when legal in your area, a weekly scorecard, sample reviews, short coaching notes, and a clear list of issues that must be escalated.' },
  { q: 'Is this a replacement for a full call center?', a: 'Not always. A VA call center setup is best for small to mid-size call volume where scripts, routing, and owner oversight still matter.' },
];

export const sources = [
  { name: 'U.S. Bureau of Labor Statistics', url: 'https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm', note: 'Customer service work often includes answering questions, keeping records, and routing requests.' },
  { name: 'FTC Safeguards Rule', url: 'https://www.ftc.gov/business-guidance/privacy-security/safeguards-rule', note: 'Useful placeholder for safe handling of customer information and access controls.' },
  { name: 'NIST Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/', note: 'Useful placeholder for login, identity, and access planning.' },
];

export const blogPosts = [
  { slug: 'virtual-assistant-planning', title: 'How much does a virtual assistant call center plan?', excerpt: 'A plain guide to role scope, staffing models, and launch planning for calls and follow-up.', minutes: 8 },
  { slug: 'tasks-to-delegate-first', title: 'What call center tasks should you delegate first?', excerpt: 'Start with repeatable call answering, appointment setting, CRM notes, and follow-up work.', minutes: 7 },
  { slug: 'virtual-assistant-vs-employee', title: 'Virtual assistant vs employee for phone support', excerpt: 'When to hire in-house and when a managed assistant is the safer first step for calls.', minutes: 8 },
  { slug: 'assistant-onboarding-checklist', title: 'VA call center onboarding checklist', excerpt: 'A simple first-week checklist for scripts, logins, calls, QA, and scorecards.', minutes: 9 },
];

export const routes = ['', '/workflows', '/qa-scorecard', '/blog', '/contact', '/privacy', '/terms', '/thank-you', ...blogPosts.map((p) => `/blog/${p.slug}`)];

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
