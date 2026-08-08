import React, { useEffect, useState } from 'react';

export default function AdminDashboard({ token, onLogout }) {
  const [admin, setAdmin] = useState(null);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE = process.env.REACT_APP_API_URL || '';

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const [aRes, eRes] = await Promise.all([
          fetch(`${API_BASE}/api/admin`, { headers: { Authorization: `Bearer ${token}` } }),
          fetch(`${API_BASE}/api/enquiries`, { headers: { Authorization: `Bearer ${token}` } })
        ]);
        if (!aRes.ok || !eRes.ok) throw new Error('Failed to fetch');
        const aData = await aRes.json();
        const eData = await eRes.json();
        setAdmin(aData);
        setEnquiries(eData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [token]);

  if (loading) return <div className="admin-card">Loading...</div>;

  return (
    <div className="admin-card">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h4>Admin Dashboard</h4>
          <div className="text-soft">Signed in as <strong>{admin?.name}</strong> ({admin?.email})</div>
        </div>
        <div>
          <button className="btn btn-outline-secondary" onClick={onLogout}>Sign out</button>
        </div>
      </div>

      <hr />

      <h5>Enquiries</h5>
      {enquiries.length === 0 ? (
        <div className="text-soft">No enquiries yet</div>
      ) : (
        <div className="list-group">
          {enquiries.map((q) => (
            <div key={q.id} className="list-group-item">
              <div className="d-flex justify-content-between">
                <strong>{q.name}</strong>
                <small className="text-muted">{new Date(q.createdAt).toLocaleString()}</small>
              </div>
              <div className="text-soft">{q.email}</div>
              <p className="mt-2 mb-0">{q.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
