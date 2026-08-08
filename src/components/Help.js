import React from 'react';

export default function Help() {
  return (
    <section id="help">
      <div className="container section-card">
        <div className="text-center mb-5">
          <p className="text-soft">Help</p>
          <h2>Need guidance? Let’s talk.</h2>
          <p className="section-subtitle">Ask your question and we’ll connect you with the right development solution.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="p-4 rounded-4" style={{ background: '#fff9f7' }}>
              <h4 className="mb-3">Quick enquiry</h4>
              <p className="text-soft mb-4">Tell us what you need and get a fast response for project planning, pricing, or a technical review.</p>
              <form>
                <div className="mb-3">
                  <label className="form-label">Your name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Your email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">What can we help with?</label>
                  <textarea className="form-control" rows="3" />
                </div>
                <button type="submit" className="btn btn-outline-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
