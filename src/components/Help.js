import React from 'react';

export default function Help() {
  return (
    <section id="help">
      <div className="container section-card">
        <div className="text-center mb-5">
          <p className="text-soft">A useful first conversation</p>
          <h2>Not sure what your business needs yet?</h2>
          <p className="section-subtitle">That’s okay. Tell us where you’re losing time, missing enquiries, or getting stuck. We’ll help you explore practical next steps—without starting with a technology sales pitch.</p>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <article className="help-step h-100"><span>01</span><h3>Share the challenge</h3><p>What is taking too much time, or what would you like your customers to do more easily?</p></article>
          </div>
          <div className="col-md-4">
            <article className="help-step h-100"><span>02</span><h3>Explore the options</h3><p>We’ll talk through a sensible approach, key priorities, and what can wait until later.</p></article>
          </div>
          <div className="col-md-4">
            <article className="help-step h-100"><span>03</span><h3>Get a clear next step</h3><p>If it’s a fit, we’ll outline scope, milestones, and an estimate before work begins.</p></article>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="#enquiry" className="btn btn-primary me-sm-2 mb-2 mb-sm-0">Describe your project <span aria-hidden="true">↗</span></a>
          <a href="https://wa.me/917218964006?text=Hello%20Kharche%20Technologies%2C%20I%20would%20like%20some%20guidance%20about%20a%20business%20project." target="_blank" rel="noreferrer" className="btn btn-outline-primary">Ask on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
