import React from 'react';

export default function About() {
  const outcomes = [
    { number: '01', title: 'More qualified enquiries', description: 'Clear service pages and strong calls to action make it easier for the right customers to reach you.' },
    { number: '02', title: 'A smoother customer journey', description: 'Mobile-first experiences help customers find information, trust your business, and take the next step.' },
    { number: '03', title: 'A system that can grow', description: 'Maintainable software and integrations reduce manual work and support your next stage of growth.' },
  ];

  return (
    <section id="about" className="bg-soft">
      <div className="container section-card">
        <div className="row align-items-center gy-4">
          <div className="col-lg-6">
            <p className="text-soft about-kicker">A technology partner, not just a vendor</p>
            <h2>Technology should move your business forward.</h2>
            <p className="about-intro">Kharche Technologies helps local businesses and growing teams turn customer and operational challenges into practical digital products. We combine clear communication, thoughtful design, and dependable engineering from discovery through launch.</p>

            <div className="about-outcomes">
              {outcomes.map((outcome) => (
                <article className="outcome-item" key={outcome.number}>
                  <span className="outcome-number">{outcome.number}</span>
                  <div><h3>{outcome.title}</h3><p>{outcome.description}</p></div>
                </article>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-founder-card">
              <div className="founder-heading">
                <img src="/images/Vaibhav.png" alt="Vaibhav Kharche, Founder" />
                <div><span>Founder</span><h3>Vaibhav Kharche</h3><p>Full-Stack Software Engineer</p></div>
              </div>
              <p className="founder-bio">With 3 years of development experience and a PGDAC from CDAC Pune, Vaibhav leads each project with a focus on useful outcomes, reliable delivery, and direct client communication.</p>
              <div className="founder-credentials"><span>3 years’ experience</span><span>PGDAC · CDAC Pune</span><span>Pune, India</span></div>
              <div className="about-approach">
                <h3>How we work</h3>
                <p>We start by understanding your goals, agree on scope and milestones, then share progress as we design, build, test, and launch. You stay involved and know what comes next.</p>
                <a href="#enquiry" className="btn btn-primary">Discuss your goals <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
