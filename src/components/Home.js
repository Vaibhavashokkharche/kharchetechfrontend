import React from 'react';

export default function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6">
            <div className="hero-card">
              <p className="text-soft mb-2">Modern software for local business growth</p>
              <h1 className="hero-title">
                <span className="brand-word">Kharche Technologies</span>
                <span className="feature-word">soft, polished digital experiences</span>
              </h1>
              <p className="hero-subtitle">
                I am Vaibhav Kharche, a FullStack Development Software Engineer with 3 years of experience and a PGDAC from CDAC Pune.
              </p>
              <div className="mb-4 section-highlight">
                <p className="mb-2">We build calm, responsive sites and apps using React, Bootstrap, .NET, Java, and modern APIs.</p>
                <p className="mb-0">From local business websites to enterprise integrations, we craft digital products that feel trusted and premium.</p>
              </div>
              <div className="hero-actions d-flex flex-wrap gap-3">
                <a href="#services" className="btn btn-primary btn-lg">
                  Explore Services
                </a>
                <a href="#contact" className="btn btn-outline-primary btn-lg">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-visual">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                alt="Software design"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
