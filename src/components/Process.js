import React from 'react';

const steps = [
  { number: '01', title: 'Discovery & Strategy', description: 'We learn about your business, ideal customers, current challenges, and what success should look like. Then we agree on priorities and scope.' },
  { number: '02', title: 'Modern Responsive Build', description: 'We create a clear, accessible experience that works across phones, tablets, and desktops, then review progress with you at agreed milestones.' },
  { number: '03', title: 'Local SEO & Map Setup', description: 'We prepare key pages for local discovery and help connect your website with your Google Business Profile and location details.' },
  { number: '04', title: 'Launch & Growth Support', description: 'We test the customer journey before launch, help you go live, and can continue with maintenance and improvements as your business grows.' },
];

export default function Process() {
  return (
    <section id="process" className="process-section">
      <div className="container section-card">
        <div className="text-center mb-5">
          <p className="text-soft">How we work</p>
          <h2>A clear path from first conversation to launch.</h2>
          <p className="section-subtitle">Transparent steps, practical priorities, and no technical guesswork.</p>
        </div>
        <ol className="process-grid">
          {steps.map((step) => (
            <li className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>
              <div className="process-connector" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="process-cta"><span>Have a project in mind?</span><a href="#enquiry">Start with a free 15-minute digital growth audit <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
  );
}