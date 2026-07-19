import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogPosts, site, workflowSteps, qaScorecard, sources } from '../../data';

export function generateStaticParams() { return blogPosts.map((p)=>({ slug: p.slug })); }

const guides: Record<string, { answer: string; sections: { title: string; text: string; bullets?: string[] }[]; faq: { q: string; a: string }[] }> = {
  'virtual-assistant-costs': {
    answer: 'Most small teams should price VA phone support by the hour at first, then move to a weekly block once call volume is steady. A common overseas planning range is $6 to $18 per hour, but management, schedule coverage, and skill level can change the price.',
    sections: [
      { title: 'What changes the price', text: 'Phone support costs more when the assistant needs strong English, live call handling, appointment setting, CRM cleanup, weekend coverage, or a manager who reviews quality.', bullets: ['Live answering usually costs more than back-office admin.', 'Nights, weekends, and split shifts can raise cost.', 'A managed service may cost more but can help with screening, backup, and QA.'] },
      { title: 'A safe first budget', text: 'Start with a small block of hours tied to one call queue. For example, use 10 to 20 hours per week for missed-call follow-up, simple intake, reminders, and CRM notes before moving into full phone coverage.' },
      { title: 'Questions to ask before buying', text: 'Ask who trains the assistant, who checks calls, what happens if a call is mishandled, and how replacement works if fit is poor.' },
    ],
    faq: [
      { q: 'Is the cheapest assistant the best choice?', a: 'Usually no. For calls, clear speech, notes, judgment, and reliability matter more than the lowest hourly rate.' },
      { q: 'Should I buy full-time coverage right away?', a: 'Start smaller unless call volume is proven. A short pilot helps you fix scripts before you pay for more hours.' },
    ],
  },
  'tasks-to-delegate-first': {
    answer: 'Delegate the calls that are common, repeatable, and easy to check. Do not begin with angry customers, refunds, legal questions, medical questions, or special pricing decisions.',
    sections: [
      { title: 'Best first call tasks', text: 'Good first tasks are missed-call follow-up, appointment reminders, lead intake, basic FAQ answers, and CRM notes after each call.', bullets: ['New lead intake', 'Appointment setting and reminders', 'Simple support ticket creation', 'CRM status updates', 'Callback list cleanup'] },
      { title: 'Tasks to keep with the owner', text: 'Keep refunds, account changes, medical or legal advice, discounts, and upset customer calls with the owner until the assistant is trained and trusted.' },
      { title: 'How to hand off the first week', text: 'Give the assistant 10 sample calls, one script, one FAQ sheet, and one scorecard. Review calls daily for the first week, then weekly after quality is stable.' },
    ],
    faq: [
      { q: 'How many tasks should I give first?', a: 'Five to ten repeatable tasks is enough. More than that often makes training messy.' },
      { q: 'Can a VA qualify leads?', a: 'Yes, if qualification questions are clear and the assistant routes edge cases to the owner.' },
    ],
  },
  'virtual-assistant-vs-employee': {
    answer: 'Use a local employee when the work needs in-person judgment, deep company context, or sensitive decisions. Use a virtual assistant when the call work is repeatable, scripted, and easy to review.',
    sections: [
      { title: 'When a VA fits', text: 'A VA fits when you need extra phone coverage, lead follow-up, scheduling, reminder calls, customer updates, and CRM cleanup.' },
      { title: 'When an employee fits better', text: 'An employee can be better for complex customer relationships, in-person work, management decisions, sensitive account changes, or work that changes every day.' },
      { title: 'A hybrid path', text: 'Many teams keep ownership and sensitive calls in-house while a VA handles first response, scheduling, and routine updates.' },
    ],
    faq: [
      { q: 'Can a VA replace my receptionist?', a: 'Sometimes, but only when scripts, calendars, escalation rules, and backup coverage are clear.' },
      { q: 'Who should manage the assistant?', a: 'One named owner should review the scorecard, update scripts, and answer questions.' },
    ],
  },
  'assistant-onboarding-checklist': {
    answer: 'A good first week gives the assistant a small job, safe access, real call examples, a script, and daily feedback. Do not wait a month to review quality.',
    sections: [
      { title: 'Day 1 setup', text: 'Share the role goal, call types, script, FAQ, calendar rules, CRM fields, and escalation list. Give the lowest access needed to do the work.' },
      { title: 'Days 2 to 3 practice', text: 'Have the assistant listen to sample calls, write notes, run mock calls, and shadow live work before taking calls alone.' },
      { title: 'Days 4 to 5 review', text: 'Score real calls with a short checklist. Fix one or two problems at a time, such as missing notes or unclear close.' },
      { title: 'Week 2 and beyond', text: 'Move from daily review to weekly review once the assistant hits your quality target.' },
    ],
    faq: [
      { q: 'What logins should a VA get?', a: 'Give only the tools needed for the task. Avoid shared passwords and remove access when the role ends.' },
      { q: 'How fast can a VA start taking calls?', a: 'Simple calls may start in a few days. Complex calls should wait until scripts and reviews are stronger.' },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p)=>p.slug===slug);
  return { title: post?.title || 'Guide', description: post?.excerpt };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const post = blogPosts.find((p)=>p.slug===slug) || blogPosts[0];
 const guide = guides[post.slug] || guides['assistant-onboarding-checklist'];
 const schema = {
   '@context': 'https://schema.org',
   '@type': 'Article',
   headline: post.title,
   description: post.excerpt,
   url: `${site.url}/blog/${post.slug}`,
   publisher: { '@type': 'Organization', name: site.brand, url: site.url },
   citation: sources.map((s)=>s.url),
   hasPart: guide.sections.map((s)=>({ '@type': 'WebPageElement', name: s.title, text: s.text })),
   mainEntity: { '@type': 'FAQPage', mainEntity: guide.faq.map((f)=>({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
 };
 return <><Header/><main className="section"><JsonLd data={schema}/><article className="container" style={{maxWidth:900}}><p className="eyebrow">{site.brand} guide</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><div className="card"><h2>The short answer</h2><p>{guide.answer}</p><div className="table"><div className="row"><b>Call path</b><b>Assistant does</b><b>Manager checks</b></div>{workflowSteps.slice(0,3).map((w)=><div className="row" key={w.title}><span>{w.title}</span><span>{w.text}</span><span>Script, notes, routing, and next step</span></div>)}</div>{guide.sections.map((section)=><section key={section.title} className="article-section"><h2>{section.title}</h2><p>{section.text}</p>{section.bullets ? <ul className="list">{section.bullets.map((b)=><li key={b}>{b}</li>)}</ul> : null}</section>)}<section className="article-section"><h2>Quote-style script example</h2><p className="quote">“I can help with that. I will collect the details, book the next step if it fits our rules, and send anything unusual to the owner for review.”</p></section><section className="article-section"><h2>Quality check</h2><ul className="list">{qaScorecard.slice(0,4).map((q)=><li key={q.item}><b>{q.item}:</b> {q.note}</li>)}</ul></section><section className="article-section"><h2>FAQs</h2>{guide.faq.map((f)=><div key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>)}</section><section className="article-section"><h2>Sources to review</h2>{sources.map((s)=><p key={s.url}><a href={s.url}><b>{s.name}</b></a>: {s.note}</p>)}</section></div></article><CTA/></main><Footer/></>;
}
