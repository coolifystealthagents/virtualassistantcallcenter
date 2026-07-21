import { Header, Footer, CTA, JsonLd } from '../components';
import { workflowSteps, sources } from '../data';

export const metadata = {
  title: 'VA call center workflows for intake, booking, and follow-up',
  description: 'Simple virtual assistant call center workflows for call answering, lead intake, appointment setting, CRM notes, escalation, and weekly review.',
};

const queueLanes = [
  { label: 'New lead', rule: 'Ask fit questions, then book or send the quote brief.', status: 'Book' },
  { label: 'Existing customer', rule: 'Open a ticket with the order, account, or case number.', status: 'Ticket' },
  { label: 'Urgent issue', rule: 'Confirm the issue and alert the owner before making promises.', status: 'Escalate' },
  { label: 'Missed call', rule: 'Call back once, leave the approved message, and log the result.', status: 'Follow up' },
];

const handoffChecks = [
  'Approved greeting and caller identity check',
  'Allowed answers, banned answers, and escalation notes',
  'CRM fields the assistant must fill in after every call',
  'Weekly review sample size and pass score',
];

export default function Workflows() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to set up a virtual assistant call center workflow',
    description: metadata.description,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    supply: handoffChecks.map((name) => ({ '@type': 'HowToSupply', name })),
    citation: sources.map((source) => source.url),
    step: workflowSteps.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.title, text: step.text })),
  };

  return <><Header/><main>
    <JsonLd data={schema}/>
    <section className="section workflow-hero">
      <div className="container two">
        <div>
          <p className="eyebrow">Call workflows</p>
          <h1>VA call center workflows that are easy to run.</h1>
          <p className="lead">A virtual assistant can answer calls, qualify leads, book appointments, and update your CRM. The key is to give the assistant a clear path for each call type.</p>
          <p>Build the path before you hire. That means clear scripts, safe handoff rules, CRM notes, and a weekly QA review that catches small issues fast.</p>
          <div className="button-row"><a className="btn" href="/contact">Build my call plan</a><a className="btn secondary" href="/qa-scorecard">See QA scorecard</a></div>
        </div>
        <div className="workflow-photo">
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" alt="Support operations team tracking customer calls on laptop screens" />
          <div className="score-float"><b>Sample QA review</b><span>Calls selected</span><span>Notes checked</span><span>Coaching point logged</span></div>
        </div>
      </div>
    </section>

    <section className="section soft">
      <div className="container">
        <p className="eyebrow">Queue board</p>
        <h2>Give every caller one next step.</h2>
        <p className="lead">A good support queue is boring in the best way. The assistant knows the lane, the rule, and the next action.</p>
        <div className="lane-board">{queueLanes.map((lane)=><div className="lane-card" key={lane.label}><span>{lane.status}</span><h3>{lane.label}</h3><p>{lane.rule}</p></div>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <p className="eyebrow">Four-step call flow</p>
        <h2>Keep the handoff simple enough to coach.</h2>
        <div className="cards">{workflowSteps.map((s, i)=><div className="card" key={s.title}><span className="pill">Step {i + 1}</span><h3>{s.title}</h3><p>{s.text}</p></div>)}</div>
      </div>
    </section>

    <section className="section soft">
      <div className="container two">
        <div>
          <p className="eyebrow">Script starter</p>
          <h2>Use one opening line, then route the call.</h2>
          <div className="card"><p className="quote">"Thanks for calling. I can help get this to the right person. May I ask what you need help with today?"</p><ul className="list"><li>Name, phone, email, and company</li><li>Reason for call and urgency</li><li>Best appointment window or callback time</li><li>Source of the lead, if new</li><li>Any promise the assistant should not make</li></ul></div>
        </div>
        <div className="call-flow-diagram" aria-label="Call flow diagram from caller to assistant to CRM and owner escalation">
          <div className="node caller">Caller</div>
          <div className="flow-line"></div>
          <div className="node agent">VA answers</div>
          <div className="split"><div className="node">Book</div><div className="node">Ticket</div><div className="node lime">Escalate</div></div>
          <div className="node crm">CRM note + QA review</div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container two">
        <div className="card">
          <h2>Safe escalation rules</h2>
          <p>Basic intake, schedule changes, reminders, status notes, simple FAQs, and routing can sit with the assistant.</p>
          <p>Keep policy exceptions, legal or medical advice, refunds, account changes, angry customer decisions, and private data issues with the owner or manager.</p>
        </div>
        <div className="card">
          <h2>Sources to keep close</h2>
          <p>Use outside guidance for job scope and customer information rules. Do not make policy up during a live call.</p>
          <div className="source-list">{sources.map((s)=><a key={s.url} href={s.url}>{s.name}</a>)}</div>
        </div>
      </div>
    </section>
    <CTA/>
  </main><Footer/></>;
}
