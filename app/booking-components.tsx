'use client';

const testimonials = [
  {
    headline: 'Support that keeps the agency organized',
    name: 'Lauren Granger',
    quote: 'My virtual assistants have been nothing short of amazing. They help me stay organized day to day, manage my CRM, schedule appointments, handle customer service calls, and streamline so many parts of my business.',
    sourceUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xFemIybEJlRXBqYm5weVVHcDBiRmgzVjBSb1ZtYxAB!2m1!1s0x0:0xbe3c64edaf53d79a!3m1!1s2@1:CAIQACodChtycF9oOlEzb2lBeEpjbnpyUGp0bFh3V0RoVmc%7C%7C?hl=en-US',
    source: 'Google',
  },
  {
    headline: 'A five-star experience',
    name: 'Paul',
    quote: 'Jonica was a true standout. She was always punctual, adaptable, and proactive. She consistently went above and beyond, handling every task with professionalism and care.',
    sourceUrl: 'https://www.trustpilot.com/reviews/6a176132f50b24fcadc353c1',
    source: 'Trustpilot',
  },
  {
    headline: 'More time for bigger-picture work',
    name: 'Chad Sublet',
    quote: 'Lindsay has been incredible. She handles a lot of the tactical work, which has freed me up to focus on bigger-picture initiatives and be way more productive.',
    sourceUrl: 'https://www.trustpilot.com/reviews/69c3fb0f2ac3e3be73a0c25b',
    source: 'Trustpilot',
  },
  {
    headline: 'Highly recommend',
    name: 'Tash',
    quote: 'Highly recommend.',
    sourceUrl: 'https://www.trustpilot.com/reviews/69f8869c6a2a223e909629d2',
    source: 'Trustpilot',
  },
  {
    headline: 'A game-changer for my business',
    name: 'Lee Maasen',
    quote: 'I have freed up significant time from admin tasks, allowing me to focus on the higher-level work that truly moves the needle. They complete tasks with attention to detail and consistency.',
    sourceUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21sRU1IRlhMVVZ6Um5aV1ZUTkNXbTlZVlUxQmNVRRAB!2m1!1s0x0:0xbe3c64edaf53d79a!3m1!1s2@1:CAIQACodChtycF9oOmlEMHFXLUVzRnZWVTNCWm9YVU1BcUE%7C%7C?hl=en-US',
    source: 'Google',
  },
  {
    headline: 'A huge asset to our company',
    name: 'Austin Rampt',
    quote: 'These guys have been wonderful. Kate, our VA, has been a huge asset to our company. I would recommend Stealth Agents to anyone in need of a VA company.',
    sourceUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2twMll6Z3RORXh4U1dvM1RWRmxTMk5VTlc1V1prRRAB!2m1!1s0x0:0xbe3c64edaf53d79a!3m1!1s2@1:CAIQACodChtycF9oOkp2YzgtNExxSWo3TVFlS2NUNW5WZkE%7C%7C?hl=en-US',
    source: 'Google',
  },
  {
    headline: 'Diligent and pleasant support',
    name: 'Rich Cochran',
    quote: 'We have enjoyed working with Stealth and their VEA, Evy. They are pros, and we especially appreciate how diligent and pleasant Evy is.',
    sourceUrl: 'https://www.trustpilot.com/reviews/69a0808e19278dfa4eeb5bfe',
    source: 'Trustpilot',
  },
  {
    headline: 'Thrilled with the results',
    name: 'Robert Jones',
    quote: 'This is my first experience with a VA and I wish I found them earlier. I am thrilled with the results I am getting and I highly recommend Stealth Agents.',
    sourceUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pGV05USjNXV2ROWmtGUFkyaHhOblpoVmxkMVJFRRAB!2m1!1s0x0:0xbe3c64edaf53d79a!3m1!1s2@1:CAIQACodChtycF9oOjFWNTJ3WWdNZkFPY2hxNnZhVld1REE%7C%7C?hl=en-US',
    source: 'Google',
  },
  {
    headline: 'Part of our internal team',
    name: 'Alex Behrens',
    quote: 'They have made a real difference in our day-to-day operations. They have saved us a ton of time and allowed us to focus on growing the business. They truly feel like part of our internal team.',
    sourceUrl: 'https://www.trustpilot.com/reviews/69974bbb643e985bb0f55698',
    source: 'Trustpilot',
  },
  {
    headline: 'Responsive and supportive',
    name: 'Gabriel Alexander',
    quote: 'Great experience working with CM and our VA. Responsive and supportive of changes and improvements.',
    sourceUrl: 'https://www.trustpilot.com/reviews/6994f04cf70db2f27405ca3d',
    source: 'Trustpilot',
  },
];

function ReviewGroup({ clone = false }: { clone?: boolean }) {
  return <div className="sa-testimonial-group" aria-hidden={clone || undefined}>
    {testimonials.map((review) => <article className="sa-testimonial-card" key={`${clone ? 'clone-' : ''}${review.name}`}>
      <div className="sa-testimonial-stars"><span aria-hidden="true">★★★★★</span><span className="sa-sr-only">5 out of 5 stars</span></div>
      <strong className="sa-testimonial-headline">{review.headline}</strong>
      <blockquote>“{review.quote}”</blockquote>
      <p><strong>{review.name}</strong> <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer">View on {review.source}</a></p>
    </article>)}
  </div>;
}

export function TestimonialsRail({ contact = false }: { contact?: boolean }) {
  return <section className={`sa-testimonials${contact ? ' sa-testimonials-contact' : ''}`} aria-labelledby={contact ? 'contact-client-reviews' : 'booking-client-reviews'}>
    <div className="sa-testimonial-heading"><span aria-hidden="true">★★★★★</span><h2 id={contact ? 'contact-client-reviews' : 'booking-client-reviews'}>StealthAgents reviews</h2></div>
    <div className="sa-testimonial-viewport" tabIndex={0} aria-label="StealthAgents client reviews. Movement pauses while this area is focused or hovered.">
      <div className="sa-testimonial-track"><ReviewGroup/><ReviewGroup clone/></div>
    </div>
    <p className="sa-testimonial-source">Ten distinct client reviews from the <a href="https://stealthagentsreviews.com/" target="_blank" rel="noopener noreferrer">first-party StealthAgents review collection</a>. Each card links to its Google or Trustpilot source.</p>
  </section>;
}
