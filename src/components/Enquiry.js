import React, { useState } from 'react';

export default function Enquiry() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('');
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
        body: JSON.stringify({ name, email, message, phone, projectType })
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
      setProjectType('');
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
          <div className="col-lg-6">
            <p className="text-soft">Enquiry</p>
            <h2>Start your project with Kharche Technologies</h2>
            <p className="section-subtitle">Share your business idea, and we will respond with a custom scope and timeline.</p>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <form onSubmit={submit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="form-label">Full name *</label>
                  <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="col-sm-6">
                  <label className="form-label">Email *</label>
                  <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="col-12">
                  <label className="form-label">Phone *</label>
                  <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className="col-12">
                  <label className="form-label">Project type *</label>
                  <select className="form-select" value={projectType} onChange={(e) => setProjectType(e.target.value)} required>
                    <option value="">Choose an option</option>
                    <option>Web application</option>
                    <option>Mobile app</option>
                    <option>API integration</option>
                    <option>Maintenance & support</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label">Message *</label>
                  <textarea className="form-control" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
                {status && (
                  <div className={`col-12 text-${status.type === 'success' ? 'success' : 'danger'}`}>
                    {status.text}
                  </div>
                )}
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
                    {sending ? 'Sending...' : 'Send Enquiry'}
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
