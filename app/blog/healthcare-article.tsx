import type { ReactNode } from 'react';

export const healthcareSchedulingArticle = {
  slug: 'healthcare-appointment-scheduling-virtual-assistant-philippines',
  title: 'Healthcare appointment scheduling with a Philippines virtual assistant',
  excerpt: 'A careful call plan for medical offices that use a Filipino virtual assistant for scheduling, routine messages, and telehealth support.',
  marker: 'VAC-HEALTH-SCHED-2026-07-27',
  sources: [
    { name: 'CDC, Telemedicine Use Among Physicians, 2021', url: 'https://www.cdc.gov/nchs/products/databriefs/db493.htm' },
    { name: 'NIST SP 800-66 Revision 2, February 2024', url: 'https://csrc.nist.gov/pubs/sp/800/66/r2/final' },
    { name: 'NIST, Updates Guidance for Health Care Cybersecurity, July 2022', url: 'https://www.nist.gov/news-events/news/2022/07/nist-updates-guidance-health-care-cybersecurity' },
    { name: 'Philippines Data Privacy Act of 2012, Republic Act No. 10173', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html' },
    { name: 'HHS, The HIPAA Privacy Rule', url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/index.html' },
  ],
  faq: [
    { q: 'Can a Filipino virtual assistant give medical advice on a scheduling call?', a: 'No. The assistant can follow an approved office script and route a clinical question, but a licensed or approved clinical worker must answer it.' },
    { q: 'Can the assistant book a telehealth visit?', a: 'Yes, when the office gives clear slot rules and approved connection steps. The assistant should send any symptom, device, or care question to the named clinical queue.' },
    { q: 'What access should a healthcare scheduling assistant receive?', a: 'Give one named account with only the fields needed for the assigned calls. The office should control access, logs, device rules, removal, and any required agreements.' },
    { q: 'Does this call plan prove HIPAA compliance?', a: 'No. It is an operating example, while legal duties depend on the office, the records, the systems, the contract, and the full setup.' },
  ],
};

function HealthcareBanner({ slot, children }: { slot: 'top' | 'middle' | 'bottom'; children: ReactNode }) {
  return <aside className="article-banner" data-banner-slot={slot} aria-label={`${slot} article next step`}>{children}</aside>;
}

export function HealthcareSchedulingArticle() {
  const cdc = healthcareSchedulingArticle.sources[0].url;
  const nist = healthcareSchedulingArticle.sources[1].url;
  const nistQuote = healthcareSchedulingArticle.sources[2].url;
  const lawphil = healthcareSchedulingArticle.sources[3].url;
  const hhs = healthcareSchedulingArticle.sources[4].url;

  return <article className="container rich-article" data-article-marker={healthcareSchedulingArticle.marker}>
    <p className="eyebrow">Philippines healthcare call support guide</p>
    <h1>{healthcareSchedulingArticle.title}</h1>
    <p className="lead">A Filipino virtual assistant can help a medical office book visits and carry routine messages. The work needs a narrow call script, small system access, and a fast path to clinical staff.</p>

    <HealthcareBanner slot="top"><div><strong>Map each patient call before hiring</strong><p>List the calls the assistant may finish and the calls a staff member must take. Name the exact queue, person, or line for every handoff.</p></div><a className="btn primary" href="/workflows">Map the call path</a></HealthcareBanner>

    <section className="article-section">
      <h2>Start with a small scheduling lane</h2>
      <p>A healthcare appointment scheduling virtual assistant in the Philippines can answer a call, find an allowed slot, read back the details, and save a short note. The assistant can also send approved telehealth steps or route a routine refill message without saying that the refill will be approved.</p>
      <p>The safe line is simple: the assistant handles office work, not care decisions. They do not diagnose a symptom, judge how sick a caller is, explain a lab result, change a dose, promise medicine, or decide whether a patient may wait.</p>
      <p>Write that line into the job before the first login is made. A warm voice does not replace a clinical license, and a good call note does not turn an office worker into a nurse.</p>
      <p>This is also why a general answering script is too weak. A medical office needs its own words for identity checks, urgent language, records, portal help, late arrivals, interpreter needs, and calls that must move to a staff member at once.</p>
    </section>

    <section className="article-section">
      <h2>Use a call table that names the stop point</h2>
      <p>The assistant should see the allowed action and the stop point side by side. The office should test each row with sample calls, then change any step that makes the assistant guess.</p>
      <div className="article-table-wrap" role="region" aria-label="Healthcare scheduling call table" tabIndex={0}>
        <table className="article-table">
          <thead><tr><th>Call type</th><th>Assistant may do</th><th>Access needed</th><th>Send to staff when</th></tr></thead>
          <tbody>
            <tr><td>New appointment</td><td>Collect approved fields and offer an allowed slot.</td><td>Schedule and approved intake form</td><td>A referral, order, or visit rule is unclear.</td></tr>
            <tr><td>Move or cancel a visit</td><td>Use the office identity step and update the visit.</td><td>Existing appointment record</td><td>The caller cannot pass the identity step.</td></tr>
            <tr><td>Telehealth visit</td><td>Confirm time and send the approved connection steps.</td><td>Schedule and instruction fields</td><td>The caller asks about symptoms, care, or device fit.</td></tr>
            <tr><td>Medicine request</td><td>Write the request and send it to the secure queue.</td><td>Message queue only</td><td>The caller asks about dose, effects, or urgency.</td></tr>
            <tr><td>Records or account question</td><td>Create a secure note for the right office team.</td><td>Limited routing fields</td><td>The caller asks for a record to be shared.</td></tr>
            <tr><td>Emergency words</td><td>Read the office emergency line and follow its transfer step.</td><td>Script and transfer list</td><td>Right away, under the office's written rule.</td></tr>
          </tbody>
        </table>
      </div>
      <p>This table is a planning example, not medical or legal advice. A practice must write its own rules with the people who own care, privacy, security, and local law.</p>
    </section>

    <section className="article-section">
      <h2>Telehealth makes clear scheduling work useful</h2>
      <p>Telehealth is now a normal part of many office schedules, but it does not fit every visit in the same way. A 2024 CDC report based on a 2021 physician survey says telemedicine use rose from 15.4% of physicians in 2019 to 86.5% in 2021.</p>
      <p>The same <a href={cdc}>CDC report found that 76.7% of primary care physicians</a> said telemedicine could provide care like an in-person visit to some or a great extent. The figure was 73.1% for medical specialists and 50.6% for surgical specialists.</p>
      <p>Those figures do not measure assistants, call centers, or patient results. They show why a scheduling worker may need to handle both office and telehealth visit steps while leaving the choice of visit type with the practice.</p>
    </section>

    <figure className="article-visual chart-visual" data-visual="telemedicine-similar-care-chart">
      <svg viewBox="0 0 760 390" role="img" aria-labelledby="tele-chart-title tele-chart-desc">
        <title id="tele-chart-title">Physicians reporting similar care through telemedicine by specialty in 2021</title>
        <desc id="tele-chart-desc">Three horizontal bars show 76.7 percent for primary care, 73.1 percent for medical specialists, and 50.6 percent for surgical specialists.</desc>
        <text x="28" y="42" className="svg-title">Telemedicine could provide similar care, 2021</text>
        <text x="28" y="92" className="svg-label">Primary care</text><rect x="220" y="67" width="399" height="36" rx="8" className="bar-main"/><text x="632" y="93" className="svg-value dark">76.7%</text>
        <text x="28" y="154" className="svg-label">Medical specialists</text><rect x="220" y="129" width="380" height="36" rx="8" className="bar-accent"/><text x="613" y="155" className="svg-value dark">73.1%</text>
        <text x="28" y="216" className="svg-label">Surgical specialists</text><rect x="220" y="191" width="263" height="36" rx="8" className="bar-main"/><text x="496" y="217" className="svg-value dark">50.6%</text>
        <line x1="220" y1="266" x2="740" y2="266" className="chart-axis"/><text x="220" y="290" className="svg-small">0%</text><text x="740" y="290" textAnchor="end" className="svg-small">100% of physicians</text>
        <text x="28" y="330" className="svg-note">Units: percent who answered "to some extent or a great extent."</text>
        <text x="28" y="356" className="svg-note">Method: CDC/NCHS 2021 National Electronic Health Records Survey, published February 2024.</text>
        <text x="28" y="380" className="svg-note">These U.S. physician answers do not measure virtual assistant work.</text>
      </svg>
      <figcaption>Primary care and medical specialists gave similar answers, while the surgical group was lower. The chart uses one CDC survey question and one survey year.</figcaption>
    </figure>

    <section className="article-section">
      <h2>Build the call path before giving access</h2>
      <p>Start with the approved greeting and the office's own identity check. Do not invent extra questions, and do not ask for more private facts just because the caller sounds unsure.</p>
      <p>Next, place the call into one lane: scheduling, a nonclinical message, a staff handoff, or the office emergency path. The assistant should never turn a symptom call into a booking task merely to clear the line.</p>
    </section>

    <figure className="article-visual process-visual" data-visual="healthcare-scheduling-process">
      <svg viewBox="0 0 820 500" role="img" aria-labelledby="health-process-title health-process-desc">
        <title id="health-process-title">Healthcare scheduling call process for a Philippines virtual assistant</title>
        <desc id="health-process-desc">A five-step path moves from identity check to call type, staff handoff or office task, read back, and saved note.</desc>
        <text x="30" y="42" className="svg-title">A narrow path for each patient call</text>
        <g transform="translate(30 80)"><rect width="138" height="92" rx="14" className="step-box"/><text x="18" y="33" className="step-no">01</text><text x="18" y="63" className="step-label">Identity step</text></g><path d="M176 126 H202" className="step-arrow"/>
        <g transform="translate(210 80)"><rect width="138" height="92" rx="14" className="step-box"/><text x="18" y="33" className="step-no">02</text><text x="18" y="63" className="step-label">Call type</text></g><path d="M356 126 H382" className="step-arrow"/>
        <g transform="translate(390 80)"><rect width="164" height="92" rx="14" className="step-box accent"/><text x="18" y="33" className="step-no">03</text><text x="18" y="63" className="step-label">Check stop rule</text></g><path d="M562 126 H588" className="step-arrow"/>
        <g transform="translate(596 80)"><rect width="194" height="92" rx="14" className="step-box"/><text x="18" y="33" className="step-no">04</text><text x="18" y="63" className="step-label">Book or send</text></g>
        <path d="M472 180 V230" className="step-arrow"/><g transform="translate(354 238)"><rect width="236" height="82" rx="14" className="step-box accent"/><text x="18" y="32" className="step-no">STOP</text><text x="18" y="61" className="step-label">Clinical staff path</text></g>
        <path d="M693 180 V350 H630" className="step-arrow"/><g transform="translate(300 340)"><rect width="330" height="66" rx="14" className="step-box"/><text x="18" y="28" className="step-no">05</text><text x="18" y="52" className="step-label">Read back and save note</text></g>
        <text x="30" y="450" className="svg-note">The stop rule comes before booking. A patient question stays with the office's approved clinical team.</text>
        <text x="30" y="480" className="svg-note">Process model only: each practice must set its own emergency, privacy, and transfer rules.</text>
      </svg>
      <figcaption>The assistant checks the stop rule before changing a schedule. If the call crosses that line, the office's staff path takes over.</figcaption>
    </figure>

    <HealthcareBanner slot="middle"><div><strong>Test the script with real call types</strong><p>Practice booking, medicine messages, portal trouble, and urgent words. Check that the assistant reaches the right staff path without making a care choice.</p></div><a className="btn primary" href="/qa-scorecard">Use the QA scorecard</a></HealthcareBanner>

    <section className="article-section">
      <h2>Give the assistant the least access needed</h2>
      <p>A scheduler may need to see open times, visit types, and a few approved patient fields. That does not mean the worker needs every chart note, clinical result, payment screen, admin setting, or report.</p>
      <p>Use one named account for one person. The office should control sign-in rules, approved devices, record logs, screen locks, access removal, and who reviews an alert.</p>
      <p><a href={nist}>NIST SP 800-66 Revision 2</a>, published in February 2024, gives health groups help with protecting electronic health information under the HIPAA Security Rule. It is a guide, not a badge that proves a setup is safe.</p>
      <p>The Philippines has its own data law too. Section 20 of the <a href={lawphil}>Data Privacy Act of 2012</a> calls for reasonable and fitting organizational, physical, and technical steps to protect personal information.</p>
      <p>A U.S. medical office should also check its duties under the <a href={hhs}>HHS HIPAA Privacy Rule</a> and related rules. The office should get qualified help for contracts, business associate duties, and the exact systems used across borders.</p>
    </section>

    <blockquote className="expert-quote"><div className="quote-text">"The revision is more actionable so that health care organizations can improve their cybersecurity posture and comply with the Security Rule."</div><cite>Jeff Marron, NIST cybersecurity specialist, July 21, 2022, <a href={nistQuote}>NIST</a></cite></blockquote>

    <section className="article-section">
      <h2>Write scripts for the hard edges</h2>
      <p>A useful script tells the assistant what to say next, not just what to avoid. Keep the words short enough to use while a caller is worried, rushed, or upset.</p>
      <div className="script-grid">
        <div className="script-card"><h3>For a symptom question</h3><p>"I can help with the office step, but I cannot answer a care question. I will send this to the clinical team using their approved path."</p></div>
        <div className="script-card"><h3>For a medicine request</h3><p>"I can record the medicine name and your callback details for the office. A staff member will review the request, and I cannot promise an approval or time."</p></div>
        <div className="script-card"><h3>For a telehealth problem</h3><p>"I can repeat the connection steps the office gave me. If those steps do not work or you need care help, I will send you to the named office team."</p></div>
        <div className="script-card"><h3>For private records</h3><p>"I cannot read or send that record from this call. I will create a secure note for the office team that handles record requests."</p></div>
      </div>
      <p>Do not let a script grow into a hidden clinical guide. When a call does not fit the written words, the assistant should stop and send it to the named staff member.</p>
    </section>

    <section className="article-section">
      <h2>Train with six calls before going live</h2>
      <p>Use a new booking, a move request, a telehealth login problem, a medicine message, a records request, and a caller who uses urgent words. Have the assistant say the line, open the right screen, make the note, and show the handoff.</p>
      <p>Score facts, privacy, booking accuracy, read-back, note quality, and the stop rule. Do not reward the assistant for guessing what a patient needs or for finishing a call that should have gone to staff.</p>
      <p>The office can use the site's <a href="/qa-scorecard">call QA scorecard</a> as a starting sheet. It should also map each call on the <a href="/workflows">call workflow board</a> and keep the final plan with the <a href="/services">right support lane</a>.</p>
      <p>Review every new call type during the first week, then sample work after the path is steady. A missed stop rule needs a script or access fix, not a vague note telling the assistant to be more careful.</p>
    </section>

    <section className="article-section">
      <h2>Check the work without reading every call</h2>
      <p>Track whether the appointment was saved in the right place, the time was read back, the message reached the right queue, and the note has an owner. Also check whether the assistant stopped at clinical, emergency, privacy, and record-sharing lines.</p>
      <p>Do not borrow a made-up target from another office. Set a starting check, review errors by call type, and change the script when the same mistake happens twice.</p>
      <p>A manager should own the review and answer questions fast. If the assistant waits hours for a reply, they may start making small guesses that slowly widen the job.</p>
    </section>

    <section className="article-section">
      <h2>Questions medical offices ask</h2>
      {healthcareSchedulingArticle.faq.map((item)=><div className="faq-item" key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}
    </section>

    <HealthcareBanner slot="bottom"><div><strong>Plan one safe Philippines scheduling lane</strong><p>Share the call types, hours, tools, and staff-only decisions. Start with a small queue that your office can train and check.</p></div><a className="btn primary" href="/contact">Map my call queue</a></HealthcareBanner>

    <section className="article-section sources-section" aria-labelledby="health-article-sources">
      <h2 id="health-article-sources">Sources</h2>
      <ol>{healthcareSchedulingArticle.sources.map((source)=><li key={source.url}><a href={source.url}>{source.name}</a></li>)}</ol>
      <p className="methods-note">Source check: each page was opened before this article was written. The CDC figures describe U.S. physicians, while the legal and security pages do not certify this sample call plan.</p>
    </section>
  </article>;
}
