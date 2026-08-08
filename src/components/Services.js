import React from 'react';

const serviceCards = [
  {
    title: 'Full-Stack Web Application Development',
    description: 'End-to-end design, development, and deployment using React, HTML5, CSS3, JavaScript, and TypeScript.',
  },
  {
    title: 'Enterprise .NET Development',
    description: 'ASP.NET Core Web APIs, microservices, Azure integration, and modern Microsoft ecosystem solutions.',
  },
  {
    title: 'Robust Java Development',
    description: 'Spring Boot backends, RESTful APIs, database design, and performance tuning for enterprise systems.',
  },
  {
    title: 'API Development & Integration',
    description: 'Custom REST/GraphQL APIs, payment gateways, OAuth, and third-party integrations for connected systems.',
  },
  {
    title: 'QA Testing, Maintenance & Support',
    description: 'Automated/manual testing, bug fixes, performance optimization, and security hardening.',
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container section-card">
        <div className="text-center mb-5">
          <p className="text-soft">Services</p>
          <h2>What Kharche Technologies offers</h2>
          <p className="section-subtitle">Solutions for web apps, enterprise software, APIs, and long-term support.</p>
        </div>
        <div className="row g-4">
          {serviceCards.map((service) => (
            <div key={service.title} className="col-md-6 col-xl-4">
              <div className="p-4 h-100 rounded-4" style={{ background: '#ffffff' }}>
                <h5 className="mb-3 brand-accent">{service.title}</h5>
                <p className="text-soft mb-0">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
