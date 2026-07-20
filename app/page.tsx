import { Header, Footer, CTA, JsonLd } from './components';
import { site, roles, industries, stats, blogPosts, workflowSteps, qaScorecard, faqs, sources } from './data';

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${site.url}/#webpage`,
    url: site.url,
    name: 'Virtual Assistant Call Center | VA call answering, intake, appointment setting, and QA',
    description: 'Plain planning help for small teams that need virtual assistant call answering, intake, appointment setting, customer support, and QA scorecards.',
    publisher: { '@type': 'Organization', name: site.brand, url: site.url },
    mainEntity: {
      '@type': 'Service',
      name: 'Virtual assistant call center planning',
      serviceType: 'Virtual assistant call answering and appointment setting planning',
      areaServed: 'US',
      provider: { '@type': 'Organization', name: site.brand },
    },
    hasPart: [
      { '@type': 'WebPageElement', name: 'Call intake workflow', url: `${site.url}/workflows` },
      { '@type': 'WebPageElement', name: 'QA scorecard', url: `${site.url}/qa-scorecard` },
      { '@type': 'WebPageElement', name: 'Hiring guides', url: `${site.url}/blog` },
    ],
  };

  return <><Header/><main>
    <JsonLd data={schema} />
    <section className="hero"><div className="container grid"><div><p className="eyebrow">virtual assistant call center</p><h1>Phone support help without the hiring guesswork.</h1><p className="lead">Plan call answering, lead intake, appointment setting, customer follow-up, and QA before you hire a virtual assistant.</p><p>Use this site to choose safe first tasks, build simple scripts, set access rules, and review calls each week. No fake promises. Just a practical plan.</p><div className="button-row"><a className="btn" href="/contact">Build my assistant plan</a><a className="btn secondary" href="/workflows">See call workflows</a></div></div><div className="hero-visual" aria-label="Support queue dashboard preview"><img src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=80" alt="Customer support team reviewing call notes at a desk" /><div className="queue-card"><span className="status-dot"></span><b>Live queue check</b><p>12 calls reviewed · 3 owner callbacks · 96% notes complete</p></div></div></div></section>
    <section className="section support-desk"><div className="container two"><div className="card dark-card"><p className="eyebrow">Support desk</p><h2>Make every call land in the right lane.</h2><p>Phone support breaks when every call gets treated the same. Set up simple lanes for new leads, customers, billing questions, urgent issues, and spam. Then give the assistant one safe next step for each lane.</p><div className="queue-grid"><div><b>New lead</b><span>Book or qualify</span></div><div><b>Customer</b><span>Create ticket</span></div><div><b>Urgent</b><span>Escalate fast</span></div><div><b>Spam</b><span>Tag and close</span></div></div><a className="btn" href="/workflows">Map my call flow</a></div><div className="image-card"><img src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=80" alt="Support agent wearing a headset while managing customer calls" /><div className="image-caption">Use scripts, call tags, and QA notes before expanding hours.</div></div></div></section>
    <section className="section" id="services"><div className="container"><p className="eyebrow">Services</p><h2>Assistant roles people compare most</h2><div className="cards">{roles.map((r)=><div className="card" key={r}><h3>{r}</h3><p>Good for repeatable work with a clear script, tool access, call examples, and owner review.</p><span className="pill">Script ready</span><span className="pill">QA checked</span></div>)}</div></div></section>
    <section className="section soft"><div className="container two"><div><p className="eyebrow">Call flow</p><h2>A simple workflow keeps calls from getting messy.</h2><p>Most bad VA call center hires fail because the assistant gets a vague job title instead of a clear call path. Give the assistant the call reason, script, booking rule, escalation rule, and note format.</p><a className="btn" href="/workflows">View the workflow page</a></div><div className="steps">{workflowSteps.map((s, i)=><div className="mini" key={s.title}><b>{i + 1}. {s.title}</b><p>{s.text}</p></div>)}</div></div></section>
    <section className="section"><div className="container two"><div><p className="eyebrow">Who it helps</p><h2>Built for teams that need coverage but still need control.</h2><p>{site.angle}.</p><p>We focus on job scopes, screening questions, training assets, time-zone fit, security basics, and weekly call scorecards.</p></div><div className="card"><h3>Industry examples</h3>{industries.map((i)=><span className="pill" key={i}>{i}</span>)}</div></div></section>
    <section className="section" id="pricing"><div className="container"><p className="eyebrow">Costs and timing</p><h2>Realistic ranges before you talk to providers</h2><div className="cards">{stats.map((s)=><div className="card stat" key={s.label}><h3>{s.value}</h3><b>{s.label}</b><p>{s.note}</p></div>)}</div></div></section>
    <section className="section soft"><div className="container"><p className="eyebrow">QA scorecard</p><h2>Score calls before small mistakes become big ones.</h2><div className="table"><div className="row"><b>Check</b><b>Points</b><b>What to review</b></div>{qaScorecard.slice(0,5).map((q)=><div className="row" key={q.item}><span>{q.item}</span><span>{q.points}</span><span>{q.note}</span></div>)}</div><p style={{marginTop:16}}><a className="btn secondary" href="/qa-scorecard">Open the full QA scorecard</a></p></div></section>
    <section className="section"><div className="container"><p className="eyebrow">Comparison</p><h2>Three ways to hire phone support</h2><div className="table"><div className="row"><b>Option</b><b>Best for</b><b>Watch out for</b></div><div className="row"><span>Local employee</span><span>In-person work and sensitive decisions</span><span>Higher cost and slower hiring</span></div><div className="row"><span>Freelance VA</span><span>Small task lists and flexible work</span><span>Training, backup, and QA are on you</span></div><div className="row"><span>Managed VA service</span><span>Recurring support with screening and replacement help</span><span>Ask exactly who manages quality</span></div></div></div></section>
    <section className="section"><div className="container"><p className="eyebrow">FAQs</p><h2>Common buyer questions</h2><div className="cards">{faqs.slice(0,3).map((f)=><div className="card" key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>)}</div></div></section>
    <section className="section soft"><div className="container"><p className="eyebrow">Source placeholders</p><h2>Use outside sources when making hiring and access decisions.</h2><div className="cards">{sources.map((s)=><a className="card" key={s.url} href={s.url}><h3>{s.name}</h3><p>{s.note}</p><span className="pill">source</span></a>)}</div></div></section>
    <section className="section"><div className="container"><p className="eyebrow">Guides</p><h2>Start with these hiring guides</h2><div className="cards">{blogPosts.slice(0,3).map((p)=><a className="card" href={`/blog/${p.slug}`} key={p.slug}><h3>{p.title}</h3><p>{p.excerpt}</p><span className="pill">{p.minutes} min read</span></a>)}</div></div></section>
    <CTA />
  </main><Footer/></>;
}
