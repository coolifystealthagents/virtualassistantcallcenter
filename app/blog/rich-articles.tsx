import type { ReactNode } from 'react';

export const scamCallArticle = {
  slug: 'business-call-scam-screening-virtual-assistant-philippines',
  title: 'How a Philippines virtual assistant can screen scam calls',
  excerpt: 'A safe call-screening plan for Filipino virtual assistants who answer vendor, customer, and account calls without making sensitive decisions.',
  marker: 'VAC-SCAM-SCREEN-2026',
  sources: [
    { name: 'Federal Trade Commission, 2024 fraud data', url: 'https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024' },
    { name: 'FBI Internet Crime Complaint Center, 2024 Annual Report', url: 'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf' },
    { name: 'CISA, Recognize and Report Phishing', url: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing' },
    { name: 'NIST SP 800-63A, Identity Proofing and Enrollment', url: 'https://pages.nist.gov/800-63-4/sp800-63a.html' },
  ],
  faq: [
    { q: 'Can a Filipino virtual assistant block a suspicious caller?', a: 'The assistant can end a call that breaks a written safety rule. A manager should decide whether to block a number, report an incident, or contact a bank, vendor, customer, or public agency.' },
    { q: 'Should the assistant ask for a one-time code?', a: 'No. The script should say that the business will never ask a caller or worker to read a one-time code aloud. Account recovery and identity checks belong in an approved system, not an incoming call.' },
    { q: 'What should go in the call log?', a: 'Log the time, displayed number, claimed name, company, request, red flags, action taken, and person who owns the next step. Do not copy passwords, codes, full card numbers, or other secrets into notes.' },
    { q: 'How often should managers review the scam-call lane?', a: 'Review real examples each week during the first month. After the script is stable, keep a short monthly review and update it whenever a new scam reaches the team.' },
  ],
};

function Banner({ slot, children }: { slot: 'top' | 'middle' | 'bottom'; children: ReactNode }) {
  return <aside className="article-banner" data-banner-slot={slot} aria-label={`${slot} article next step`}>{children}</aside>;
}

export function ScamCallScreeningArticle() {
  const ftc = scamCallArticle.sources[0].url;
  const fbi = scamCallArticle.sources[1].url;
  const cisa = scamCallArticle.sources[2].url;
  const nist = scamCallArticle.sources[3].url;

  return <article className="container rich-article" data-article-marker={scamCallArticle.marker}>
    <p className="eyebrow">Philippines call support guide</p>
    <h1>{scamCallArticle.title}</h1>
    <p className="lead">A Filipino virtual assistant can screen odd calls without playing detective. The job is to slow the call down, collect only safe details, and send the decision to the right person.</p>

    <Banner slot="top"><div><strong>Map the risky calls first</strong><p>List the callers who may ask for money, access, account changes, or private records. Then give the assistant one safe reply for each request.</p></div><a className="btn primary" href="/workflows">Build the call path</a></Banner>

    <section className="article-section">
      <h2>Why a scam-call lane belongs in the script</h2>
      <p>A busy phone line makes people rush. A caller may claim to be a bank worker, software vendor, delivery company, public office, senior leader, or angry customer. The assistant needs a calm way to pause the request without starting an argument.</p>
      <p>The risk is not small. In data released in March 2025, the <a href={ftc}>Federal Trade Commission said consumers reported more than 12.5 billion dollars lost to fraud in 2024</a>, which was 25% more than the year before. The same release says phone calls were the second most common contact method in 2024.</p>
      <p>The FBI saw the same pressure online. Its <a href={fbi}>2024 Internet Crime Complaint Center report</a> lists 859,532 complaints and 16.6 billion dollars in reported losses, a 33% rise from 2023. These reports cover many kinds of crime, so they do not tell you how many bad calls will reach one business.</p>
      <p>They do show why a small team needs a repeatable stop point. Your Philippines-based assistant should not approve a payment, reset an account, share a code, or change customer records because a caller sounds sure of themselves. The assistant can be warm while still saying, "I need to verify this through our normal contact path."</p>
    </section>

    <section className="article-section">
      <h2>The five facts an assistant may collect</h2>
      <p>Keep the first note short. Ask for the caller's name, company, callback number, reason for calling, and the person or account they say they know. Do not ask for a password, one-time code, full card number, or copy of an identity document.</p>
      <p>A caller who refuses basic details may be a problem, but a willing caller is not proven safe. The assistant should repeat the request in plain words and tell the caller that a manager will use a saved number or known channel to respond. That step breaks the pressure without making an accusation.</p>
      <p>NIST calls this kind of work fraud mitigation: detect, respond to, and prevent access through a false identity. Its <a href={nist}>identity proofing guidance</a> also points to data minimization. For a phone team, that means collecting the least information needed to route the request.</p>
    </section>

    <section className="article-section">
      <h2>A call-screening table for the first queue</h2>
      <p>Start with the requests that can cause the most harm. The assistant should know the safe action before the first live call, and the manager should keep every final decision.</p>
      <div className="article-table-wrap" role="region" aria-label="Scam call screening table" tabIndex={0}>
        <table className="article-table">
          <thead><tr><th>Caller says</th><th>Red flag</th><th>Assistant does</th><th>Manager owns</th></tr></thead>
          <tbody>
            <tr><td>"I need the login code now."</td><td>Urgency and secret request</td><td>Refuse the code request, end the call, and log the number.</td><td>Check the account through the saved admin page.</td></tr>
            <tr><td>"Your invoice account changed."</td><td>New bank or payment details</td><td>Take a name and callback number only.</td><td>Call the known vendor contact and check the change.</td></tr>
            <tr><td>"The owner told me to call."</td><td>Authority claim with no ticket</td><td>Ask for the request and say it needs review.</td><td>Confirm with the owner in the normal company channel.</td></tr>
            <tr><td>"Open this link while we talk."</td><td>Unknown link or remote access</td><td>Do not open it. Save the claimed company and purpose.</td><td>Check the vendor site and security tools.</td></tr>
            <tr><td>"Read back the customer record."</td><td>Private data request</td><td>Share nothing and offer a manager callback.</td><td>Verify identity and decide what may be shared.</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <figure className="article-visual chart-visual" data-visual="ic3-complaints-chart">
      <svg viewBox="0 0 760 360" role="img" aria-labelledby="ic3-chart-title ic3-chart-desc">
        <title id="ic3-chart-title">FBI IC3 complaint counts reported for 2024</title>
        <desc id="ic3-chart-desc">A horizontal bar chart compares 859,532 total complaints with 193,407 phishing and spoofing complaints.</desc>
        <text x="28" y="42" className="svg-title">Reports sent to FBI IC3 in 2024</text>
        <text x="28" y="90" className="svg-label">All complaint types</text>
        <rect x="220" y="66" width="500" height="38" rx="8" className="bar-main" />
        <text x="230" y="92" className="svg-value">859,532</text>
        <text x="28" y="164" className="svg-label">Phishing / spoofing</text>
        <rect x="220" y="140" width="113" height="38" rx="8" className="bar-accent" />
        <text x="345" y="166" className="svg-value dark">193,407</text>
        <line x1="220" y1="220" x2="720" y2="220" className="chart-axis" />
        <text x="220" y="248" className="svg-small">0</text><text x="720" y="248" textAnchor="end" className="svg-small">859,532 complaints</text>
        <text x="28" y="304" className="svg-note">Units: complaints submitted to IC3. The phishing bar is one category within the total.</text>
        <text x="28" y="330" className="svg-note">Method: values copied from the FBI 2024 IC3 Annual Report; this is report volume, not crime prevalence.</text>
      </svg>
      <figcaption>The FBI report lists 193,407 phishing or spoofing complaints in 2024. A phone script should treat fake identity and urgent access requests as a normal queue risk, not a rare surprise.</figcaption>
    </figure>

    <section className="article-section">
      <h2>Use a pause, verify, route process</h2>
      <p>The assistant does not need to prove that a caller is a scammer. They need to notice a risky request and move it into a safer path. The process below keeps that path easy to remember during a loud or rushed call.</p>
    </section>

    <figure className="article-visual process-visual" data-visual="pause-verify-route-diagram">
      <svg viewBox="0 0 820 360" role="img" aria-labelledby="process-title process-desc">
        <title id="process-title">Five-step scam call screening process</title>
        <desc id="process-desc">The process moves from pause to note, verify, route, and review without sharing secrets.</desc>
        <text x="30" y="42" className="svg-title">Pause, verify, and route</text>
        <g transform="translate(30 82)"><rect width="132" height="92" rx="14" className="step-box"/><text x="18" y="34" className="step-no">01</text><text x="18" y="64" className="step-label">Pause</text></g>
        <path d="M170 128 H194" className="step-arrow"/>
        <g transform="translate(202 82)"><rect width="132" height="92" rx="14" className="step-box"/><text x="18" y="34" className="step-no">02</text><text x="18" y="64" className="step-label">Note</text></g>
        <path d="M342 128 H366" className="step-arrow"/>
        <g transform="translate(374 82)"><rect width="132" height="92" rx="14" className="step-box accent"/><text x="18" y="34" className="step-no">03</text><text x="18" y="64" className="step-label">Verify</text></g>
        <path d="M514 128 H538" className="step-arrow"/>
        <g transform="translate(546 82)"><rect width="110" height="92" rx="14" className="step-box"/><text x="18" y="34" className="step-no">04</text><text x="18" y="64" className="step-label">Route</text></g>
        <path d="M664 128 H688" className="step-arrow"/>
        <g transform="translate(696 82)"><rect width="94" height="92" rx="14" className="step-box"/><text x="16" y="34" className="step-no">05</text><text x="16" y="64" className="step-label">Review</text></g>
        <text x="30" y="236" className="svg-label">The assistant:</text><text x="164" y="236" className="svg-note">slows the call, writes safe facts, and sends the request to its owner.</text>
        <text x="30" y="278" className="svg-label">The manager:</text><text x="164" y="278" className="svg-note">uses a saved number or known account to check the claim and choose the next step.</text>
        <text x="30" y="326" className="svg-note">Rule: no codes, passwords, remote access, money moves, or private record changes during the incoming call.</text>
      </svg>
      <figcaption>This diagram is a call-handling model, not a test of whether the caller is honest. The known-channel check belongs with a manager or another approved owner.</figcaption>
    </figure>

    <Banner slot="middle"><div><strong>Give the assistant a firm stop line</strong><p>Use one short sentence for codes, account changes, remote access, and private records. Practice it with sample calls before live coverage.</p></div><a className="btn primary" href="/qa-scorecard">Use the QA scorecard</a></Banner>

    <section className="article-section">
      <h2>Scripts a Filipino assistant can say without sounding rude</h2>
      <p>Short words work best when a caller applies pressure. The assistant should not debate the claim or explain every company rule. A calm repeat is safer than a long answer that gives the caller more details.</p>
      <div className="script-grid">
        <div className="script-card"><h3>For a code or password</h3><p>"I cannot take or share access codes by phone. I will log your name and ask the account owner to check the request through our normal system."</p></div>
        <div className="script-card"><h3>For a vendor change</h3><p>"Thank you for the notice. We do not change account details from an incoming call, so our manager will contact the vendor using the number already on file."</p></div>
        <div className="script-card"><h3>For a private record</h3><p>"I cannot read or change that record on this call. I can take your name and callback number, then send the request to the person who handles account checks."</p></div>
        <div className="script-card"><h3>For urgency or threats</h3><p>"I hear that this feels urgent. I still need to follow our check process, and I will mark the note for manager review."</p></div>
      </div>
      <p>CISA tells people to watch for <a href={cisa}>urgent or emotional language and requests for personal or financial information</a>. Those signs were written for phishing messages, but they also make a useful listening check on a call. A sign should trigger the safe process, not an instant claim that the caller is guilty.</p>
    </section>

    <section className="article-section">
      <h2>What the manager must keep</h2>
      <p>A Philippines-based assistant can gather safe facts, end a risky call, and send a clean note. The manager keeps control of account recovery, payment changes, remote access, customer record edits, bank calls, public agency calls, and reports to law enforcement. This line protects the assistant from being pushed into a decision they cannot verify.</p>
      <p>Give one person ownership of the scam-call queue each shift. If nobody owns it, odd calls sit in a shared inbox until the details are forgotten. The owner should check the claim through a saved contact, label the result, and tell the assistant what to do if the pattern appears again.</p>
      <p>The FTC's 2024 data says government imposter scam losses reached 789 million dollars, up 171 million dollars from 2023. That is the third dated figure worth putting in manager training because authority claims can sound official. Your assistant should never use a number supplied by the incoming caller to verify that same caller.</p>
    </section>

    <section className="article-section">
      <h2>Build the first training set</h2>
      <p>Use six sample calls: a real vendor update, a fake code request, a customer asking for a record change, an upset caller, an unknown software caller, and a leader asking for an urgent task. Let the assistant practice the stop line, note fields, and route for each one. Then compare the note with your written rule.</p>
      <p>Score the call on facts, safety, tone, and next step. Do not score the assistant on whether they guessed the caller's intent correctly. The goal is to protect the business while giving real callers a clear path back.</p>
      <p>Add the final script to your <a href="/blog/assistant-onboarding-checklist">assistant onboarding checklist</a>, and connect each risky request to the right <a href="/services">call support service</a>. Review a small call sample every week during the first month. Replace vague coaching such as "be careful" with one sentence the assistant can use on the next call.</p>
    </section>

    <blockquote className="expert-quote"><div className="quote-text">"The data we're releasing today shows that scammers' tactics are constantly evolving."</div><cite>Christopher Mufarrige, Director of the FTC's Bureau of Consumer Protection, March 10, 2025</cite></blockquote>

    <section className="article-section">
      <h2>Questions business owners ask</h2>
      {scamCallArticle.faq.map((item)=><div className="faq-item" key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}
    </section>

    <Banner slot="bottom"><div><strong>Plan a safer Philippines call queue</strong><p>Share the call types, tools, coverage hours, and owner-only decisions. Keep the first handoff small enough to train and check.</p></div><a className="btn primary" href="/contact">Map my call queue</a></Banner>

    <section className="article-section sources-section" aria-labelledby="article-sources">
      <h2 id="article-sources">Sources</h2>
      <ol>{scamCallArticle.sources.map((source)=><li key={source.url}><a href={source.url}>{source.name}</a></li>)}</ol>
      <p className="methods-note">Source check: each link was opened before publication. The figures above are reported complaints and losses, not a forecast for one business or proof that every suspicious call is a crime.</p>
    </section>
  </article>;
}
