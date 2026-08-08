import React from 'react';
import Team from './Team';

export default function About() {
  const services = [
    'Full-Stack Web Application Development (React, Bootstrap, JS/TS)',
    'Enterprise .NET Development (ASP.NET Core, APIs, Azure)',
    'Robust Java Development (Spring Boot, REST APIs)',
    'API Development & System Integration (REST / GraphQL)',
    'QA Testing, Maintenance & Support (Automated & Manual)'
  ];

  return (
    <section id="about" className="bg-soft">
      <div className="container section-card">
        <div className="row align-items-center gy-4">
          <div className="col-lg-6">
            <h2>About Kharche Technologies</h2>
            <p className="section-subtitle">We create calm, user-first websites and reliable backend systems for local businesses and growing brands.</p>

            <h5 className="mt-4">Founder</h5>
            <div className="d-flex align-items-center gap-3 mb-3">
              <img src="/images/Vaibhav.png" alt="Vaibhav Kharche" style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 12 }} />
              <div>
                <strong>Vaibhav Kharche</strong>
                <div className="text-soft">Founder & Software Developer — FullStack engineer with 3 years experience and PGDAC from CDAC Pune.</div>
              </div>
            </div>

            <h5 className="mt-4">Services</h5>
            <ul>
              {services.map((s) => (
                <li key={s} className="text-soft">{s}</li>
              ))}
            </ul>

            <p className="mt-3">For project enquiries, timelines, and pricing, use the Enquiry form or contact us directly via the Contact section.</p>
          </div>

          <div className="col-lg-6">
            <div className="section-card">
              <h5>Our approach</h5>
              <p className="text-soft">We focus on simple, maintainable code, thoughtful UX, and reliable deployments. Our work is optimized for performance, accessibility, and a calm user experience.</p>
              <div className="mt-3">
                <a href="#enquiry" className="btn btn-primary me-2">Start a Project</a>
                <a href="#contact" className="btn btn-outline-primary">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Team />
        </div>
      </div>
    </section>
  );
}
