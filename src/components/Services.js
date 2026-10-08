import React from 'react';

const serviceCards = [
  {
    title: 'Business websites & web apps',
    description: 'Turn visitors into customers with a fast, mobile-ready website or custom web application built around your services and sales process.',
  },
  {
    title: 'Custom business software',
    description: 'Replace repetitive manual processes with secure .NET and Java applications designed for your team, customers, and day-to-day operations.',
  },
  {
    title: 'APIs & system integration',
    description: 'Connect the tools you already use, share data reliably, and create smoother workflows across your business.',
  },
  {
    title: 'Online stores & payments',
    description: 'Give customers an easy way to browse, enquire, or pay with practical e-commerce experiences and payment integrations.',
  },
  {
    title: 'Ongoing care & improvements',
    description: 'Keep your digital product dependable with testing, maintenance, performance improvements, and support after launch.',
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container section-card">
        <div className="text-center mb-5">
          <p className="text-soft">Services</p>
          <h2>Practical digital solutions for business growth</h2>
          <p className="section-subtitle">Start with the business problem. We’ll help you choose the right scope, build a reliable solution, and support it as your needs evolve.</p>
        </div>
        <div className="row g-4">
          {serviceCards.map((service, index) => (
            <div key={service.title} className="col-md-6 col-xl-4">
              <div className="p-4 h-100 rounded-4 service-card">
                <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
                <h5 className="mb-3 brand-accent">{service.title}</h5>
                <p className="text-soft mb-0">{service.description}</p>
                <a href="#enquiry" className="service-link" aria-label={`Discuss ${service.title}`}>Discuss your needs <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
