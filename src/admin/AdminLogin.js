import React, { useState } from 'react';

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_BASE = process.env.REACT_APP_API_URL || '';

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (!res.ok) {
        const contentType = res.headers.get('content-type') || '';
        const data = contentType.includes('application/json')
          ? await res.json()
          : { message: await res.text() };
        throw new Error(data.message || 'Login failed');
      }
      const data = await res.json();
      onLogin(data.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-card">
      <h4>Admin Login</h4>
      <form onSubmit={submit} className="admin-form">
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <div className="text-danger">{error}</div>}
        <div className="mt-3">
          <button className="btn btn-primary" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
        </div>
      </form>
      <div className="mt-3 text-soft small">Use the admin credentials configured on the backend.</div>
    </div>
  );
}
