import type { ReactNode } from 'react';

export const outboundFollowUpArticle = {
  slug: 'outbound-lead-follow-up-virtual-assistant-philippines',
  title: 'Outbound lead follow-up with a Philippines virtual assistant',
  excerpt: 'A consent-first call plan for Filipino virtual assistants who follow up with leads while keeping call lists, scripts, records, and stop requests under owner control.',
  marker: 'VAC-OUTBOUND-CONSENT-2026-07-27',
  sources: [
    { name: 'FTC, National Do Not Call Registry Data Book for Fiscal Year 2024', url: 'https://www.ftc.gov/reports/national-do-not-call-registry-data-book-fiscal-year-2024' },
    { name: 'FTC, Reports of Unwanted Telemarketing Calls Down More Than 50 Percent Since 2021, November 15, 2024', url: 'https://www.ftc.gov/news-events/news/press-releases/2024/11/reports-unwanted-telemarketing-calls-down-more-50-percent-2021' },
    { name: 'FTC, Complying with the Telemarketing Sales Rule', url: 'https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule' },
    { name: 'FTC, Do Not Call Data Book 2024 PDF', url: 'https://www.ftc.gov/system/files/ftc_gov/pdf/DNC-Data-Book-2024.pdf' },
    { name: 'Philippines Data Privacy Act of 2012, Republic Act No. 10173', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html' },
  ],
  faq: [
    { q: 'Can a Filipino virtual assistant call every lead in a CRM?', a: 'No. The business must first decide which records may be called and why. The assistant should only receive an approved list with a clear source and owner.' },
    { q: 'What should happen when a person says stop calling?', a: 'The assistant should confirm the request, mark it at once, and end the sales part of the call. A manager should make sure the block applies to every related list and tool.' },
    { q: 'Can the assistant decide whether consent is valid?', a: 'That decision should stay with the business and qualified counsel. The assistant can check an approved field, follow the matching script, and stop when the field is missing or unclear.' },
    { q: 'Does this guide prove that an outbound call plan follows every law?', a: 'No. Call rules depend on the caller, purpose, place, technology, relationship, and current law. A business should get advice for its exact campaign before calls begin.' },
  ],
};

function OutboundBanner({ slot, children }: { slot: 'top' | 'middle' | 'bottom'; children: ReactNode }) {
  return <aside className="article-banner" data-banner-slot={slot} aria-label={`${slot} article next step`}>{children}</aside>;
}

export function OutboundFollowUpArticle() {
  const dataBook = outboundFollowUpArticle.sources[0].url;
  const ftcRelease = outboundFollowUpArticle.sources[1].url;
  const tsr = outboundFollowUpArticle.sources[2].url;
  const dataBookPdf = outboundFollowUpArticle.sources[3].url;
  const lawphil = outboundFollowUpArticle.sources[4].url;

  return <article className="container rich-article" data-article-marker={outboundFollowUpArticle.marker}>
    <p className="eyebrow">Philippines outbound call support guide</p>
    <h1>{outboundFollowUpArticle.title}</h1>
    <p className="lead">A Filipino virtual assistant can follow up with people who asked to hear from a business. The safe job starts with an approved list, a plain reason for the call, and a fast way to honor a stop request.</p>

    <OutboundBanner slot="top"><div><strong>Clean the call list before the first dial</strong><p>Give each record a source, date, call purpose, and owner. Hold any row that does not show why the person may be contacted.</p></div><a className="btn primary" href="/services/outbound-lead-qualification">Plan the outbound lane</a></OutboundBanner>

    <section className="article-section">
      <h2>Start with permission, not a sales script</h2>
      <p>Outbound lead follow-up begins before the assistant says hello. The business must know where each lead came from, what the person asked for, and which call rules apply to that contact.</p>
      <p>A form request, event list, old customer record, bought list, and referral are not the same thing. Do not drop them into one sheet and ask a Philippines-based assistant to decide which names are safe to call.</p>
      <p>The owner should approve the list and the reason for contact. The assistant checks the approved fields, uses the matching opening, and stops if the source or instruction is blank.</p>
      <p>This split matters because a friendly call can still be unwanted. It also protects the worker from being told to guess at consent while a manager watches only the number of calls made.</p>
    </section>

    <section className="article-section">
      <h2>Use a list that shows the stop point</h2>
      <p>Every row needs enough detail for the assistant to act without making a legal choice. The table below is a planning model, so the business should change it after getting advice for its own calls.</p>
      <div className="article-table-wrap" role="region" aria-label="Outbound lead follow-up control table" tabIndex={0}>
        <table className="article-table">
          <thead><tr><th>List field</th><th>What the assistant sees</th><th>Allowed action</th><th>Hold the call when</th></tr></thead>
          <tbody>
            <tr><td>Lead source</td><td>Named form, event, referral, or customer record</td><td>Use only the script tied to that source.</td><td>The source is blank, broad, or unknown.</td></tr>
            <tr><td>Request date</td><td>The date the person asked for contact</td><td>Follow the owner's written time rule.</td><td>The date falls outside that approved rule.</td></tr>
            <tr><td>Call purpose</td><td>One plain reason, such as a requested callback</td><td>State that reason near the start.</td><td>The task asks for a different offer or purpose.</td></tr>
            <tr><td>Stop status</td><td>A clear yes or no field shared by every list</td><td>End the sales part and mark a new request.</td><td>The field says stop or does not sync.</td></tr>
            <tr><td>Owner</td><td>A named manager for questions and review</td><td>Send unclear records to that person.</td><td>No one owns the answer that day.</td></tr>
          </tbody>
        </table>
      </div>
      <p>The assistant should not repair a weak row during the live call. Place it in a hold queue so the owner can check the record and decide whether it belongs in the campaign.</p>
    </section>

    <section className="article-section">
      <h2>The complaint numbers explain why list care matters</h2>
      <p>The <a href={dataBook}>FTC's fiscal year 2024 Data Book</a> says the National Do Not Call Registry had more than 253 million active registrations. It also says the agency received more than 2 million Do Not Call complaints during that fiscal year.</p>
      <p>A related <a href={ftcRelease}>FTC release dated November 15, 2024</a> says more than 4.2 million people signed up during fiscal year 2024. The total rose from 249.5 million active registrations at the end of fiscal year 2023.</p>
      <p>The same release reports 1.1 million robocall complaints in fiscal year 2024, compared with 1.2 million in 2023 and more than 3.4 million in 2021. These are unverified consumer complaints, not a count of every unlawful call and not a measure of one assistant's work.</p>
    </section>

    <figure className="article-visual chart-visual" data-visual="ftc-robocall-complaints-chart" role="region" aria-label="Scrollable FTC robocall complaint chart" tabIndex={0}>
      <svg viewBox="0 0 780 410" role="img" aria-labelledby="outbound-chart-title outbound-chart-desc">
        <title id="outbound-chart-title">Robocall complaints reported to the FTC in fiscal years 2021, 2023, and 2024</title>
        <desc id="outbound-chart-desc">Three horizontal bars show more than 3.4 million reports in 2021, 1.2 million in 2023, and 1.1 million in 2024.</desc>
        <text x="28" y="42" className="svg-title">Robocall complaints reported to the FTC</text>
        <text x="28" y="100" className="svg-label">FY 2021</text><rect x="170" y="74" width="544" height="38" rx="8" className="bar-main"/><text x="724" y="101" className="svg-value dark">3.4M+</text>
        <text x="28" y="170" className="svg-label">FY 2023</text><rect x="170" y="144" width="192" height="38" rx="8" className="bar-accent"/><text x="374" y="171" className="svg-value dark">1.2M</text>
        <text x="28" y="240" className="svg-label">FY 2024</text><rect x="170" y="214" width="176" height="38" rx="8" className="bar-main"/><text x="358" y="241" className="svg-value dark">1.1M</text>
        <line x1="170" y1="292" x2="714" y2="292" className="chart-axis"/><text x="170" y="318" className="svg-small">0</text><text x="714" y="318" textAnchor="end" className="svg-small">3.4 million complaints</text>
        <text x="28" y="354" className="svg-note">Units: consumer robocall complaints received by the FTC in each fiscal year.</text>
        <text x="28" y="380" className="svg-note">Method: values copied from the FTC's November 15, 2024 release and FY 2024 Data Book.</text>
        <text x="28" y="404" className="svg-note">Reports are unverified and do not show the legal status, reach, or result of one campaign.</text>
      </svg>
      <figcaption><strong className="mobile-scroll-cue">On a small screen, swipe sideways or use arrow keys to see the full visual.</strong> Reported robocall complaints fell across these three cited years, but 1.1 million reports remained in fiscal year 2024. The chart gives context for careful list controls; it does not prove that a live follow-up call is allowed.</figcaption>
    </figure>

    <section className="article-section">
      <h2>Make the opening clear in the first few seconds</h2>
      <p>The assistant should say their name, the business name, and the reason for the call in plain words. They should not hide behind a vague line such as "I am calling about your account" when the person only asked for a guide.</p>
      <p>The <a href={tsr}>FTC's Telemarketing Sales Rule guide</a> says outbound telemarketing calls must promptly give certain facts, including the seller's identity and that the purpose is to sell goods or services. The guide has exceptions and details, so an owner should not turn this short summary into legal advice for every campaign.</p>
      <p>Give the assistant one opening for each approved source. If the person says they did not ask for a call, the worker should not argue, read hidden form fields aloud, or push through the script.</p>
    </section>

    <figure className="article-visual process-visual chart-visual" data-visual="consent-first-follow-up-process" role="region" aria-label="Scrollable consent-first follow-up process" tabIndex={0}>
      <svg viewBox="0 0 840 500" role="img" aria-labelledby="outbound-process-title outbound-process-desc">
        <title id="outbound-process-title">Consent-first outbound lead follow-up process</title>
        <desc id="outbound-process-desc">A five-step process moves from an approved list to a clear opening, response check, allowed next step, and saved call result.</desc>
        <text x="30" y="42" className="svg-title">One approved path for every follow-up call</text>
        <g transform="translate(30 82)"><rect width="140" height="94" rx="14" className="step-box"/><text x="18" y="34" className="step-no">01</text><text x="18" y="64" className="step-label">Check list row</text></g><path d="M178 129 H204" className="step-arrow"/>
        <g transform="translate(212 82)"><rect width="140" height="94" rx="14" className="step-box"/><text x="18" y="34" className="step-no">02</text><text x="18" y="64" className="step-label">State purpose</text></g><path d="M360 129 H386" className="step-arrow"/>
        <g transform="translate(394 82)"><rect width="160" height="94" rx="14" className="step-box accent"/><text x="18" y="34" className="step-no">03</text><text x="18" y="64" className="step-label">Hear response</text></g><path d="M562 129 H588" className="step-arrow"/>
        <g transform="translate(596 82)"><rect width="214" height="94" rx="14" className="step-box"/><text x="18" y="34" className="step-no">04</text><text x="18" y="64" className="step-label">Book, route, or stop</text></g>
        <path d="M474 184 V234" className="step-arrow"/><g transform="translate(342 242)"><rect width="264" height="84" rx="14" className="step-box accent"/><text x="18" y="32" className="step-no">STOP</text><text x="18" y="62" className="step-label">Block future outreach</text></g>
        <path d="M703 184 V354 H642" className="step-arrow"/><g transform="translate(302 344)"><rect width="340" height="70" rx="14" className="step-box"/><text x="18" y="29" className="step-no">05</text><text x="18" y="55" className="step-label">Save result and next owner</text></g>
        <text x="30" y="458" className="svg-note">The stop path overrides the call script. A manager checks that the request reaches every connected list.</text>
        <text x="30" y="486" className="svg-note">Process model only: the business must set its own consent, call-time, record, and review rules.</text>
      </svg>
      <figcaption><strong className="mobile-scroll-cue">On a small screen, swipe sideways or use arrow keys to see the full visual.</strong> The assistant checks the person's response before moving to a booked next step. A stop request moves down its own path and should not return to another calling list.</figcaption>
    </figure>

    <OutboundBanner slot="middle"><div><strong>Test the stop path before live calls</strong><p>Ask a practice caller to say no, ask who is calling, and dispute the request. Check that the assistant can stop, mark the record, and reach a manager.</p></div><a className="btn primary" href="/qa-scorecard">Use the QA scorecard</a></OutboundBanner>

    <section className="article-section">
      <h2>Use short scripts for common answers</h2>
      <p>A useful script gives the worker words they can say under pressure. It also tells them when to end the sales part instead of trying one more objection reply.</p>
      <div className="script-grid">
        <div className="script-card"><h3>For a requested callback</h3><p>"Hi, this is Ana calling for Green Street Services about the callback you requested on Tuesday. Is now an okay time to speak?" The assistant should stop if the person says the request is not theirs.</p></div>
        <div className="script-card"><h3>For a stop request</h3><p>"I understand, and I will mark that you do not want more calls from us. I will end this call now." The worker should save the request before opening another record.</p></div>
        <div className="script-card"><h3>For an unclear record</h3><p>"I do not have enough information to explain why this call was assigned. I will hold the record and ask the list owner to review it." The assistant should not invent a source.</p></div>
        <div className="script-card"><h3>For a wrong person</h3><p>"Thank you for telling me, and I will mark this as the wrong contact. I will not continue the sales questions." The worker should avoid asking the new person for another number.</p></div>
      </div>
      <p>Read the scripts aloud during training because words that look clear on a page can sound stiff on a call. Let the assistant use natural small talk, but keep identity, purpose, stop, and record lines exact.</p>
    </section>

    <blockquote className="expert-quote"><div className="quote-text">"Illegal calls remain a scourge, but the FTC's strategy to pursue upstream players and equip the agency to confront emerging threats is showing clear signs of success."</div><cite>Sam Levine, Director of the FTC's Bureau of Consumer Protection, November 15, 2024, <a href={ftcRelease}>FTC</a></cite></blockquote>

    <section className="article-section">
      <h2>Keep one stop list across every tool</h2>
      <p>A stop request fails when it is saved in one dialer but not in the CRM, event sheet, or callback board. The manager should choose one source of truth and test whether every call list checks it before a record is assigned.</p>
      <p>The assistant needs a simple button or field, not a long note that another worker may miss. Save the time, channel, number, words used, and list owner without copying unrelated private details.</p>
      <p>Section 20 of the <a href={lawphil}>Philippines Data Privacy Act of 2012</a> calls for reasonable and fitting organizational, physical, and technical measures to protect personal information. That does not settle the rules for a United States call campaign, but it does matter when a Philippines-based worker handles lead records.</p>
      <p>Give each assistant their own account and only the fields needed for the assigned calls. The business should own access, device rules, exports, removal, logs, and any cross-border legal review.</p>
    </section>

    <section className="article-section">
      <h2>Train the first call set with real edge cases</h2>
      <p>Practice a clear form request, a stale record, a wrong number, a stop request, an angry answer, and a person who asks where the number came from. The assistant should show the exact screen, script, result code, and owner for each case.</p>
      <p>Use the site's <a href="/workflows">call workflow board</a> to map the path and the <a href="/services/call-disposition-reporting">call disposition guide</a> to name the final result. Connect the approved campaign to the <a href="/services/outbound-lead-qualification">outbound lead support page</a> so the job stays narrow.</p>
      <p>Review all six practice calls before live work, then check a small sample from each new list. A missed stop request is a system failure that needs a list or tool fix, not a soft coaching note.</p>
      <p>The <a href={dataBookPdf}>FTC's 2024 Data Book PDF</a> explains that complaint figures come from unverified reports and are not a consumer survey. Use those figures as public context, while judging your own setup through list proof, script use, stop handling, and manager review.</p>
    </section>

    <section className="article-section">
      <h2>Questions owners ask before outbound calls</h2>
      {outboundFollowUpArticle.faq.map((item)=><div className="faq-item" key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}
    </section>

    <OutboundBanner slot="bottom"><div><strong>Plan one careful Philippines follow-up lane</strong><p>Share the lead source, call purpose, hours, tools, and stop process. Start with a list small enough for an owner to check.</p></div><a className="btn primary" href="/contact">Map my call queue</a></OutboundBanner>

    <section className="article-section sources-section" aria-labelledby="outbound-article-sources">
      <h2 id="outbound-article-sources">Sources</h2>
      <ol>{outboundFollowUpArticle.sources.map((source)=><li key={source.url}><a href={source.url}>{source.name}</a></li>)}</ol>
      <p className="methods-note">Source check: the FTC pages, FTC PDF, and Philippine legal text were opened before drafting. The figures describe registry and complaint records, not campaign permission or virtual assistant results.</p>
    </section>
  </article>;
}
