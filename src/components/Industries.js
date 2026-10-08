import React from 'react';

const industries = [
  {
    id: 'healthcare',
    number: '01',
    icon: '✚',
    title: 'Hospitals & Clinics',
    intro: 'Help patients find the right care, understand what to expect, and book an appointment with confidence.',
    solutions: [
      'Online appointment requests and booking flows',
      'Doctor directory, specialties, and OPD schedules',
      'One-tap emergency and reception contact options',
      'Prominent verified certifications and accreditations',
    ],
    cta: 'Plan a healthcare website',
    message: 'I would like to discuss a website for a hospital or clinic.',
  },
  {
    id: 'fitness',
    number: '02',
    icon: '↗',
    title: 'Gyms & Fitness Centers',
    intro: 'Turn local interest into visits with clear membership options, class details, and an easy first step.',
    solutions: [
      'Membership tiers, pricing, and class schedules',
      'Trainer profiles and facility highlights',
      'Lead capture for free trial passes',
      'Direct WhatsApp enquiries for tours and sign-ups',
    ],
    cta: 'Grow gym memberships',
    message: 'I would like to discuss digital marketing or a website for my gym.',
  },
  {
    id: 'local-business',
    number: '03',
    icon: '⌂',
    title: 'Local Retail & Services',
    intro: 'Make your local business easier to discover, call, visit, and choose—on mobile and in local search.',
    solutions: [
      'Local SEO foundations and Google Business Profile setup',
      'Product catalog, service menu, or price list',
      'Google Maps embed, directions, and click-to-call actions',
      'Customer review links or supported review embeds',
    ],
    cta: 'Get found by nearby customers',
    message: 'I would like to grow a local retail or service business online.',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="industries-section">
      <div className="container section-card">
        <div className="section-heading-row">
          <div>
            <p className="text-soft">Industries we serve</p>
            <h2>Digital solutions shaped around your customers.</h2>
          </div>
          <p className="section-heading-aside">Your business has its own needs. We plan the content, features, and customer journey around how people discover and choose your services.</p>
        </div>
        <div className="row g-4">
          {industries.map((industry) => (
            <div className="col-lg-4" key={industry.id}>
              <article className="industry-card h-100">
                <div className="industry-card-top"><span>{industry.number}</span><span className="industry-marker" aria-hidden="true">{industry.icon}</span></div>
                <h3>{industry.title}</h3>
                <p className="industry-intro">{industry.intro}</p>
                <h4>What we can build</h4>
                <ul>
                  {industry.solutions.map((solution) => <li key={solution}>{solution}</li>)}
                </ul>
                <a
                  className="industry-cta"
                  href={`https://wa.me/917218964006?text=${encodeURIComponent(industry.message)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {industry.cta}<span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
          ))}
        </div>
        <p className="industry-disclaimer">Healthcare trust marks and customer reviews should always link to accurate, verifiable information supplied by your business.</p>
      </div>
    </section>
  );
}