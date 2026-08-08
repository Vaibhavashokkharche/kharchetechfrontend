import React from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About us', href: '#about' },
  { label: 'Admin', href: '#admin' },
  { label: 'Blog', href: '#blog' },
  { label: 'Projects', href: '#gallery' },
  { label: 'Enquiry', href: '#enquiry' },
  { label: 'Contact us', href: '#contact' },
];

export default function NavbarSection() {
  return (
    <header className="py-3 shadow-sm sticky-top">
      <div className="container d-flex flex-wrap align-items-center justify-content-between">
        <a href="#home" className="navbar-brand text-dark text-decoration-none">
          <span className="brand-mark">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20V20H4V4Z" stroke="#5D6778" strokeWidth="1.5"/>
              <path d="M7 12H17" stroke="#5D6778" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M12 7V17" stroke="#5D6778" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
          <span>
            <strong>Kharche Technologies</strong>
            <small className="brand-subtitle d-block">Elegant software design for local business growth</small>
          </span>
        </a>
        <nav className="nav">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="nav-link px-2">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
