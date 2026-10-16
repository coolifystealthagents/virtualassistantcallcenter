export const fleetServices = [
  {
    'slug': 'inbound-customer-calls',
    'title': 'Inbound Customer Calls',
    'summary': 'Inbound Customer Calls from Philippines-based specialists, with clear scripts, system access, outputs, and manager-owned exceptions.',
    'audience': 'Businesses that lose focus when sales, service, and administrative calls interrupt the core team.',
    'problem': 'Calls arrive without a consistent greeting, intake checklist, or routing owner.',
    'inputs': [
      'Brand greeting and approved FAQ',
      'Call-routing directory',
      'CRM or shared inbox access',
      'Urgency and escalation rules'
    ],
    'work': [
      'Answer in the business name',
      'Identify the caller and reason',
      'Resolve approved routine questions',
      'Route or schedule the next action'
    ],
    'outputs': [
      'Complete caller record',
      'Disposition and owner',
      'Callback or appointment confirmation'
    ],
    'boundaries': [
      'No policy, refund, legal, medical, or pricing decisions outside the approved script.'
    ],
    'scenarios': [
      'A new prospect is qualified and routed to sales with source and callback window.',
      'An urgent customer issue is tagged and escalated to the on-call owner.'
    ],
    'faqs': [
      {
        'q': 'What does inbound customer calls include?',
        'a': 'The lane includes the documented tasks shown on this page, using your approved script, tools, and routing rules.'
      },
      {
        'q': 'What stays with our internal team?',
        'a': 'No policy, refund, legal, medical, or pricing decisions outside the approved script.'
      },
      {
        'q': 'How do we start?',
        'a': 'Define the call type, provide approved examples and access, then review a small first sample before expanding coverage.'
      }
    ],
    'related': [
      'after-hours-answering',
      'call-disposition-reporting'
    ],
    'image': '/illustrations/getillustrations/communication/call-support-handoff.webp',
    'tasks': [
      'Answer in the business name',
      'Identify the caller and reason',
      'Resolve approved routine questions',
      'Route or schedule the next action'
    ],
    'controls': [
      'No policy, refund, legal, medical, or pricing decisions outside the approved script.'
    ],
    'launch': [
      'Share approved examples and system access',
      'Document completion and escalation rules',
      'Review the first call sample together'
    ]
  },
  {
    'slug': 'outbound-lead-qualification',
    'title': 'Outbound Lead Qualification',
    'summary': 'Outbound Lead Qualification from Philippines-based specialists, with clear scripts, system access, outputs, and manager-owned exceptions.',
    'audience': 'Sales teams with opted-in leads that need consistent first-contact and qualification follow-up.',
    'problem': 'Lead lists age while representatives spend time on repeated discovery questions and manual status updates.',
    'inputs': [
      'Permissioned lead list',
      'Approved qualification questions',
      'Calling window and attempt limits',
      'CRM stages and booking rules'
    ],
    'work': [
      'Confirm identity and interest',
      'Ask only approved fit questions',
      'Record objections and timing',
      'Book or assign the agreed next step'
    ],
    'outputs': [
      'Qualification record',
      'Attempt history',
      'Booked meeting or nurture status'
    ],
    'boundaries': [
      'No deceptive claims, unapproved offers, cold-list scraping, or decisions reserved for licensed staff.'
    ],
    'scenarios': [
      'A webinar registrant confirms need, timing, and decision process before booking.',
      'An unready lead receives the approved nurture status instead of repeated calls.'
    ],
    'faqs': [
      {
        'q': 'What does outbound lead qualification include?',
        'a': 'The lane includes the documented tasks shown on this page, using your approved script, tools, and routing rules.'
      },
      {
        'q': 'What stays with our internal team?',
        'a': 'No deceptive claims, unapproved offers, cold-list scraping, or decisions reserved for licensed staff.'
      },
      {
        'q': 'How do we start?',
        'a': 'Define the call type, provide approved examples and access, then review a small first sample before expanding coverage.'
      }
    ],
    'related': [
      'appointment-setting',
      'customer-win-back-calls'
    ],
    'image': '/aug19-heroes/call-center-assistant-launch-readiness-review.webp',
    'tasks': [
      'Confirm identity and interest',
      'Ask only approved fit questions',
      'Record objections and timing',
      'Book or assign the agreed next step'
    ],
    'controls': [
      'No deceptive claims, unapproved offers, cold-list scraping, or decisions reserved for licensed staff.'
    ],
    'launch': [
      'Share approved examples and system access',
      'Document completion and escalation rules',
      'Review the first call sample together'
    ]
  },
  {
    'slug': 'appointment-setting',
    'title': 'Appointment Setting',
    'summary': 'Appointment Setting from Philippines-based specialists, with clear scripts, system access, outputs, and manager-owned exceptions.',
    'audience': 'Service businesses and sales teams that need accurate booking without handing over calendar control.',
    'problem': 'Back-and-forth scheduling slows response time and creates preventable calendar errors.',
    'inputs': [
      'Approved calendars and meeting types',
      'Availability and buffer rules',
      'Qualification checklist',
      'Confirmation and reschedule templates'
    ],
    'work': [
      'Confirm the requested service',
      'Check required qualifications',
      'Offer approved times',
      'Send confirmation and record the outcome'
    ],
    'outputs': [
      'Calendar event',
      'CRM note',
      'Confirmation or follow-up task'
    ],
    'boundaries': [
      'No overbooking, calendar overrides, or promises beyond the approved availability and service rules.'
    ],
    'scenarios': [
      'A qualified prospect selects an available consultation slot and receives confirmation.',
      'A reschedule request is moved within the approved window and the owner is notified.'
    ],
    'faqs': [
      {
        'q': 'What does appointment setting include?',
        'a': 'The lane includes the documented tasks shown on this page, using your approved script, tools, and routing rules.'
      },
      {
        'q': 'What stays with our internal team?',
        'a': 'No overbooking, calendar overrides, or promises beyond the approved availability and service rules.'
      },
      {
        'q': 'How do we start?',
        'a': 'Define the call type, provide approved examples and access, then review a small first sample before expanding coverage.'
      }
    ],
    'related': [
      'inbound-customer-calls',
      'patient-scheduling'
    ],
    'image': '/illustrations/getillustrations/communication/call-support-handoff.webp',
    'tasks': [
      'Confirm the requested service',
      'Check required qualifications',
      'Offer approved times',
      'Send confirmation and record the outcome'
    ],
    'controls': [
      'No overbooking, calendar overrides, or promises beyond the approved availability and service rules.'
    ],
    'launch': [
      'Share approved examples and system access',
      'Document completion and escalation rules',
      'Review the first call sample together'
    ]
  },
  {
    'slug': 'after-hours-answering',
    'title': 'After-Hours Answering',
    'summary': 'After-Hours Answering from Philippines-based specialists, with clear scripts, system access, outputs, and manager-owned exceptions.',
    'audience': 'Teams that need a professional response when the office is closed but do not need every call treated as an emergency.',
    'problem': 'Voicemail delays important callbacks and gives routine callers no clear expectation.',
    'inputs': [
      'After-hours greeting',
      'Emergency definition',
      'On-call roster',
      'Callback service levels'
    ],
    'work': [
      'Answer or return calls during coverage',
      'Classify urgency from the script',
      'Notify the correct owner',
      'Set a clear callback expectation'
    ],
    'outputs': [
      'Timestamped message',
      'Urgency classification',
      'Notification and callback deadline'
    ],
    'boundaries': [
      'No emergency judgment beyond the written criteria and no unsupported promise of immediate resolution.'
    ],
    'scenarios': [
      'A routine caller receives a next-business-day expectation and complete message receipt.',
      'A qualifying urgent issue triggers the named on-call notification path.'
    ],
    'faqs': [
      {
        'q': 'What does after-hours answering include?',
        'a': 'The lane includes the documented tasks shown on this page, using your approved script, tools, and routing rules.'
      },
      {
        'q': 'What stays with our internal team?',
        'a': 'No emergency judgment beyond the written criteria and no unsupported promise of immediate resolution.'
      },
      {
        'q': 'How do we start?',
        'a': 'Define the call type, provide approved examples and access, then review a small first sample before expanding coverage.'
      }
    ],
    'related': [
      'inbound-customer-calls',
      'call-disposition-reporting'
    ],
    'image': '/aug19-heroes/call-center-assistant-launch-readiness-review.webp',
    'tasks': [
      'Answer or return calls during coverage',
      'Classify urgency from the script',
      'Notify the correct owner',
      'Set a clear callback expectation'
    ],
    'controls': [
      'No emergency judgment beyond the written criteria and no unsupported promise of immediate resolution.'
    ],
    'launch': [
      'Share approved examples and system access',
      'Document completion and escalation rules',
      'Review the first call sample together'
    ]
  },
  {
    'slug': 'order-status-calls',
    'title': 'Order Status Calls',
    'summary': 'Order Status Calls from Philippines-based specialists, with clear scripts, system access, outputs, and manager-owned exceptions.',
    'audience': 'Commerce and fulfillment teams with repeat questions about order progress, shipment, or delivery.',
    'problem': 'Support agents repeatedly look up the same status fields while exceptions wait for specialists.',
    'inputs': [
      'Read-only order system access',
      'Status definitions',
      'Carrier tracking process',
      'Exception and refund ownership'
    ],
    'work': [
      'Verify the caller',
      'Read approved status fields',
      'Explain the documented next milestone',
      'Escalate missing or conflicting records'
    ],
    'outputs': [
      'Verified status response',
      'Contact note',
      'Exception ticket when required'
    ],
    'boundaries': [
      'No refunds, credits, delivery guarantees, or order changes without explicit authorization.'
    ],
    'scenarios': [
      'A customer receives the current carrier status and documented delivery window.',
      'A missing fulfillment scan becomes an exception ticket for the warehouse owner.'
    ],
    'faqs': [
      {
        'q': 'What does order status calls include?',
        'a': 'The lane includes the documented tasks shown on this page, using your approved script, tools, and routing rules.'
      },
      {
        'q': 'What stays with our internal team?',
        'a': 'No refunds, credits, delivery guarantees, or order changes without explicit authorization.'
      },
      {
        'q': 'How do we start?',
        'a': 'Define the call type, provide approved examples and access, then review a small first sample before expanding coverage.'
      }
    ],
    'related': [
      'inbound-customer-calls',
      'call-quality-assurance'
    ],
    'image': '/aug19-heroes/call-center-assistant-source-of-truth-map.webp',
    'tasks': [
      'Verify the caller',
      'Read approved status fields',
      'Explain the documented next milestone',
      'Escalate missing or conflicting records'
    ],
    'controls': [
      'No refunds, credits, delivery guarantees, or order changes without explicit authorization.'
    ],
    'launch': [
      'Share approved examples and system access',
      'Document completion and escalation rules',
      'Review the first call sample together'
    ]
  },
  {
    'slug': 'patient-scheduling',
    'title': 'Patient Scheduling',
    'summary': 'Patient Scheduling from Philippines-based specialists, with clear scripts, system access, outputs, and manager-owned exceptions.',
    'audience': 'Healthcare offices that need administrative scheduling support with strict privacy and clinical boundaries.',
    'problem': 'High call volume creates hold time and incomplete appointment records for front-desk teams.',
    'inputs': [
      'Approved scheduling system',
      'Appointment-type rules',
      'Identity-verification steps',
      'Clinical escalation contact'
    ],
    'work': [
      'Verify required identity fields',
      'Select the approved appointment type',
      'Offer permitted times',
      'Flag clinical questions for licensed staff'
    ],
    'outputs': [
      'Scheduled appointment',
      'Administrative note',
      'Clinical escalation flag when needed'
    ],
    'boundaries': [
      'No diagnosis, triage, medical advice, insurance guarantee, or access beyond the minimum approved fields.'
    ],
    'scenarios': [
      'A returning patient books the correct follow-up type after identity verification.',
      'A symptom question is not interpreted and is transferred to the clinical escalation path.'
    ],
    'faqs': [
      {
        'q': 'What does patient scheduling include?',
        'a': 'The lane includes the documented tasks shown on this page, using your approved script, tools, and routing rules.'
      },
      {
        'q': 'What stays with our internal team?',
        'a': 'No diagnosis, triage, medical advice, insurance guarantee, or access beyond the minimum approved fields.'
      },
      {
        'q': 'How do we start?',
        'a': 'Define the call type, provide approved examples and access, then review a small first sample before expanding coverage.'
      }
    ],
    'related': [
      'appointment-setting',
      'inbound-customer-calls'
    ],
    'image': '/aug19-heroes/call-center-assistant-approval-evidence-matrix.webp',
    'tasks': [
      'Verify required identity fields',
      'Select the approved appointment type',
      'Offer permitted times',
      'Flag clinical questions for licensed staff'
    ],
    'controls': [
      'No diagnosis, triage, medical advice, insurance guarantee, or access beyond the minimum approved fields.'
    ],
    'launch': [
      'Share approved examples and system access',
      'Document completion and escalation rules',
      'Review the first call sample together'
    ]
  },
  {
    'slug': 'real-estate-lead-intake',
    'title': 'Real Estate Lead Intake',
    'summary': 'Real Estate Lead Intake from Philippines-based specialists, with clear scripts, system access, outputs, and manager-owned exceptions.',
    'audience': 'Brokerages and agents that need complete buyer, seller, tenant, or property inquiry records.',
    'problem': 'Portal and phone leads arrive with uneven context, leaving agents to repeat basic intake.',
    'inputs': [
      'Property and territory rules',
      'Buyer and seller intake questions',
      'Agent assignment logic',
      'CRM access and consent language'
    ],
    'work': [
      'Identify inquiry type',
      'Capture property, timing, and financing context',
      'Apply assignment rules',
      'Book or route the next conversation'
    ],
    'outputs': [
      'Complete lead record',
      'Assigned agent',
      'Appointment or follow-up task'
    ],
    'boundaries': [
      'No property, legal, fair-housing, financing, or valuation advice beyond approved factual information.'
    ],
    'scenarios': [
      'A buyer inquiry reaches the territory owner with timeline and preferred viewing window.',
      'A seller lead is logged with property basics and booked for an agent consultation.'
    ],
    'faqs': [
      {
        'q': 'What does real estate lead intake include?',
        'a': 'The lane includes the documented tasks shown on this page, using your approved script, tools, and routing rules.'
      },
      {
        'q': 'What stays with our internal team?',
        'a': 'No property, legal, fair-housing, financing, or valuation advice beyond approved factual information.'
      },
      {
        'q': 'How do we start?',
        'a': 'Define the call type, provide approved examples and access, then review a small first sample before expanding coverage.'
      }
    ],
    'related': [
      'outbound-lead-qualification',
      'appointment-setting'
    ],
    'image': '/aug19-heroes/call-center-assistant-intake-source-register.webp',
    'tasks': [
      'Identify inquiry type',
      'Capture property, timing, and financing context',
      'Apply assignment rules',
      'Book or route the next conversation'
    ],
    'controls': [
      'No property, legal, fair-housing, financing, or valuation advice beyond approved factual information.'
    ],
    'launch': [
      'Share approved examples and system access',
      'Document completion and escalation rules',
      'Review the first call sample together'
    ]
  },
  {
    'slug': 'customer-win-back-calls',
    'title': 'Customer Win-Back Calls',
    'summary': 'Customer Win-Back Calls from Philippines-based specialists, with clear scripts, system access, outputs, and manager-owned exceptions.',
    'audience': 'Teams with consented former customers or inactive accounts and an approved re-engagement offer.',
    'problem': 'Past customers remain untouched because outreach, objections, and outcomes are not managed consistently.',
    'inputs': [
      'Eligible customer list',
      'Approved offer and exclusions',
      'Call and voicemail script',
      'Outcome codes and stop rules'
    ],
    'work': [
      'Confirm the right contact',
      'State the approved reason for outreach',
      'Record interest or objection',
      'Book, nurture, or suppress future contact'
    ],
    'outputs': [
      'Contact outcome',
      'Offer response',
      'Next action or do-not-contact status'
    ],
    'boundaries': [
      'No pressure tactics, improvised discounts, or continued outreach after an opt-out.'
    ],
    'scenarios': [
      'An inactive customer accepts a consultation under the approved offer.',
      'A customer declines and is immediately recorded as do not contact.'
    ],
    'faqs': [
      {
        'q': 'What does customer win-back calls include?',
        'a': 'The lane includes the documented tasks shown on this page, using your approved script, tools, and routing rules.'
      },
      {
        'q': 'What stays with our internal team?',
        'a': 'No pressure tactics, improvised discounts, or continued outreach after an opt-out.'
      },
      {
        'q': 'How do we start?',
        'a': 'Define the call type, provide approved examples and access, then review a small first sample before expanding coverage.'
      }
    ],
    'related': [
      'outbound-lead-qualification',
      'call-disposition-reporting'
    ],
    'image': '/aug19-heroes/call-center-assistant-exception-queue-triage.webp',
    'tasks': [
      'Confirm the right contact',
      'State the approved reason for outreach',
      'Record interest or objection',
      'Book, nurture, or suppress future contact'
    ],
    'controls': [
      'No pressure tactics, improvised discounts, or continued outreach after an opt-out.'
    ],
    'launch': [
      'Share approved examples and system access',
      'Document completion and escalation rules',
      'Review the first call sample together'
    ]
  },
  {
    'slug': 'call-quality-assurance',
    'title': 'Call Quality Assurance',
    'summary': 'Call Quality Assurance from Philippines-based specialists, with clear scripts, system access, outputs, and manager-owned exceptions.',
    'audience': 'Managers who need a repeatable view of accuracy, tone, compliance, routing, and note quality.',
    'problem': 'Coaching depends on anecdotes when calls are not sampled against a shared scorecard.',
    'inputs': [
      'Approved call sample',
      'QA scorecard',
      'Critical-error definitions',
      'Coaching and appeal process'
    ],
    'work': [
      'Select the agreed sample',
      'Score observable behaviors',
      'Flag critical errors separately',
      'Summarize coaching themes'
    ],
    'outputs': [
      'Completed scorecards',
      'Critical-error queue',
      'Coaching summary and trend'
    ],
    'boundaries': [
      'No hidden surveillance, unsupported interpretation, or performance decision outside the manager process.'
    ],
    'scenarios': [
      'A weekly sample reveals incomplete callback ownership and leads to targeted coaching.',
      'A critical privacy miss is separated from routine scoring and escalated immediately.'
    ],
    'faqs': [
      {
        'q': 'What does call quality assurance include?',
        'a': 'The lane includes the documented tasks shown on this page, using your approved script, tools, and routing rules.'
      },
      {
        'q': 'What stays with our internal team?',
        'a': 'No hidden surveillance, unsupported interpretation, or performance decision outside the manager process.'
      },
      {
        'q': 'How do we start?',
        'a': 'Define the call type, provide approved examples and access, then review a small first sample before expanding coverage.'
      }
    ],
    'related': [
      'call-disposition-reporting',
      'inbound-customer-calls'
    ],
    'image': '/aug19-heroes/call-center-assistant-change-control-record.webp',
    'tasks': [
      'Select the agreed sample',
      'Score observable behaviors',
      'Flag critical errors separately',
      'Summarize coaching themes'
    ],
    'controls': [
      'No hidden surveillance, unsupported interpretation, or performance decision outside the manager process.'
    ],
    'launch': [
      'Share approved examples and system access',
      'Document completion and escalation rules',
      'Review the first call sample together'
    ]
  },
  {
    'slug': 'call-disposition-reporting',
    'title': 'Call Disposition Reporting',
    'summary': 'Call Disposition Reporting from Philippines-based specialists, with clear scripts, system access, outputs, and manager-owned exceptions.',
    'audience': 'Operations leaders who need reliable call outcomes, queue ownership, and follow-up visibility.',
    'problem': 'Inconsistent tags and incomplete notes make call volume hard to act on.',
    'inputs': [
      'Disposition taxonomy',
      'Required note fields',
      'Owner and due-date rules',
      'Reporting schedule'
    ],
    'work': [
      'Review call records for completeness',
      'Normalize approved outcome codes',
      'Identify unowned follow-ups',
      'Prepare the queue summary'
    ],
    'outputs': [
      'Clean disposition report',
      'Exception list',
      'Owner and due-date view'
    ],
    'boundaries': [
      'No changing source facts, inventing outcomes, or closing work without the defined completion evidence.'
    ],
    'scenarios': [
      'A daily report surfaces callbacks without owners before they age.',
      'A monthly view separates answered, booked, escalated, and unresolved calls.'
    ],
    'faqs': [
      {
        'q': 'What does call disposition reporting include?',
        'a': 'The lane includes the documented tasks shown on this page, using your approved script, tools, and routing rules.'
      },
      {
        'q': 'What stays with our internal team?',
        'a': 'No changing source facts, inventing outcomes, or closing work without the defined completion evidence.'
      },
      {
        'q': 'How do we start?',
        'a': 'Define the call type, provide approved examples and access, then review a small first sample before expanding coverage.'
      }
    ],
    'related': [
      'call-quality-assurance',
      'after-hours-answering'
    ],
    'image': '/aug19-heroes/call-center-assistant-weekly-decision-brief.webp',
    'tasks': [
      'Review call records for completeness',
      'Normalize approved outcome codes',
      'Identify unowned follow-ups',
      'Prepare the queue summary'
    ],
    'controls': [
      'No changing source facts, inventing outcomes, or closing work without the defined completion evidence.'
    ],
    'launch': [
      'Share approved examples and system access',
      'Document completion and escalation rules',
      'Review the first call sample together'
    ]
  }
] as const;

export const researchPosts: ReadonlyArray<{slug:string;title:string;excerpt:string;published:string;body:readonly string[]}> = [];
export const publicTiers = [
  {name:'Executive Assistants', price:'$10/hour', detail:'Philippines-based support for structured executive and administrative work.'},
  {name:'Senior Assistants', price:'$15/hour', detail:'Experienced Philippines-based support for specialized workflows and coordination.'},
  {name:'C-Suite / Operations', price:'$18/hour', detail:'Philippines-based operational support for complex work lanes and leadership follow-through.'},
] as const;
