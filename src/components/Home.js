import React from 'react';

export default function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row gy-5 align-items-center hero-row">
          <div className="col-lg-6 hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Pune-based software studio <span className="eyebrow-line" /></div>
            <h1 className="hero-title">Your next big idea, <span>built for the real world.</span></h1>
            <p className="hero-subtitle">We help businesses attract customers, simplify everyday work, and grow with reliable websites and software—planned around your goals, not just technology.</p>
            <div className="hero-actions d-flex flex-wrap gap-3">
              <a href="#enquiry" className="btn btn-primary btn-lg">Let’s build together <span aria-hidden="true">↗</span></a>
              <a href="#gallery" className="btn btn-outline-primary btn-lg">Explore our work</a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars" aria-hidden="true"><span>VK</span><span>KT</span><span>+</span></div>
              <p><strong>Clear milestones. Direct communication.</strong><br />A hands-on partner from first conversation to launch.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-visual hero-visual--feature">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
                alt="Kharche Technologies team collaborating on a software project"
              />
              <div className="hero-orbit" aria-hidden="true">
                <span className="orbit-ring orbit-ring--outer" />
                <span className="orbit-ring orbit-ring--inner" />
                <span className="orbit-dot" />
                <span className="orbit-core">↗</span>
              </div>
              <div className="hero-image-caption"><span className="caption-icon">✳</span><span><strong>Built around your business</strong><small>Useful digital experiences, made clear.</small></span></div>
              <div className="hero-float-card"><span className="float-card-icon">15</span><span><strong>Free growth audit</strong><small>15 minutes. Practical next steps.</small></span></div>
            </div>
          </div>
        </div>
        <div className="capability-ticker" aria-label="Web design, local SEO, booking tools, and business growth">
          <div className="ticker-track">
            <div className="ticker-group">
              <span>Web design</span><i>✳</i><span>Local SEO</span><i>✳</i><span>Booking tools</span><i>✳</i><span>Business growth</span><i>✳</i><span>Built for mobile</span><i>✳</i>
            </div>
            <div className="ticker-group" aria-hidden="true">
              <span>Web design</span><i>✳</i><span>Local SEO</span><i>✳</i><span>Booking tools</span><i>✳</i><span>Business growth</span><i>✳</i><span>Built for mobile</span><i>✳</i>
            </div>
          </div>
        </div>
        <div className="hero-bottomline"><span>Attract more customers</span><i /> <span>Make work simpler</span><i /> <span>Build for growth</span><i /> <span>Support after launch</span></div>
      </div>
    </section>
  );
}
