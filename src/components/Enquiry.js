import React, { useState } from 'react';

export default function Enquiry() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [serviceRequired, setServiceRequired] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const API_BASE = process.env.REACT_APP_API_URL || '';

  async function submit(e) {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      const res = await fetch(`${API_BASE}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          phone,
          businessType,
          serviceRequired,
          projectType: serviceRequired,
        })
      });

      if (!res.ok) {
        const contentType = res.headers.get('content-type') || '';
        const data = contentType.includes('application/json')
          ? await res.json()
          : { message: await res.text() };
        throw new Error(data.message || 'Unable to send enquiry');
      }

      setName('');
      setEmail('');
      setPhone('');
      setBusinessType('');
      setServiceRequired('');
      setMessage('');
      setStatus({ type: 'success', text: 'Enquiry submitted successfully. We will reach out soon.' });
    } catch (err) {
      setStatus({ type: 'error', text: err.message });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="enquiry" className="bg-soft">
      <div className="container section-card">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <p className="text-soft">Free 15-minute digital growth audit</p>
            <h2>Find your next opportunity online.</h2>
            <p className="section-subtitle">Get a free 15-minute digital growth audit for your business. We’ll discuss your online presence, customer journey, and practical opportunities to improve—no obligation to proceed.</p>
            <div className="audit-points">
              <p><span aria-hidden="true">✓</span> A focused conversation about your business goals</p>
              <p><span aria-hidden="true">✓</span> Clear suggestions for useful next steps</p>
              <p><span aria-hidden="true">✓</span> No commitment or pressure to purchase</p>
            </div>
            <a className="audit-whatsapp" href="https://wa.me/917218964006?text=Hello%20Kharche%20Technologies%2C%20I%27d%20like%20to%20book%20a%20free%2015-minute%20digital%20growth%20audit." target="_blank" rel="noreferrer">Prefer WhatsApp? Book your audit <span aria-hidden="true">↗</span></a>
          </div>
          <div className="col-lg-7 mt-4 mt-lg-0">
            <form onSubmit={submit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="enquiry-name">Full name *</label>
                  <input id="enquiry-name" name="name" type="text" autoComplete="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="enquiry-email">Business email *</label>
                  <input id="enquiry-email" name="email" type="email" autoComplete="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="enquiry-phone">Phone number *</label>
                  <input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="enquiry-business-type">Business type *</label>
                  <select id="enquiry-business-type" name="businessType" className="form-select" value={businessType} onChange={(e) => setBusinessType(e.target.value)} required>
                    <option value="">Choose your business type</option>
                    <option value="Hospital / Clinic">Hospital / Clinic</option>
                    <option value="Gym / Fitness Center">Gym / Fitness Center</option>
                    <option value="Local Retail / Service Business">Local Retail / Service Business</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="enquiry-service">Service required *</label>
                  <select id="enquiry-service" name="serviceRequired" className="form-select" value={serviceRequired} onChange={(e) => setServiceRequired(e.target.value)} required>
                    <option value="">Choose a service</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="SEO & Google Profile Setup">SEO & Google Profile Setup</option>
                    <option value="Custom Booking Portal">Custom Booking Portal</option>
                    <option value="Maintenance">Maintenance</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="enquiry-message">What would you like to improve? *</label>
                  <textarea id="enquiry-message" name="message" className="form-control" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="For example: make it easier to book appointments, attract local customers, or manage enquiries." required />
                </div>
                {status && (
                  <div className={`col-12 text-${status.type === 'success' ? 'success' : 'danger'}`}>
                    {status.text}
                  </div>
                )}
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
                    {sending ? 'Sending...' : 'Request a free growth audit'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
