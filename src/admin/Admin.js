import React, { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import './admin.css';

export default function Admin() {
  const [token, setToken] = useState(localStorage.getItem('admin_token'));

  useEffect(() => {
    const t = localStorage.getItem('admin_token');
    setToken(t);
  }, []);

  function handleLogin(newToken) {
    localStorage.setItem('admin_token', newToken);
    setToken(newToken);
  }

  function handleLogout() {
    localStorage.removeItem('admin_token');
    setToken(null);
  }

  return (
    <section id="admin" className="admin-section container">
      {!token ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <AdminDashboard token={token} onLogout={handleLogout} />
      )}
    </section>
  );
}
