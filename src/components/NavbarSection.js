import React, { useState } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'How we work', href: '#process' },
  { label: 'About us', href: '#about' },
  { label: 'Our team', href: '#team' },
  { label: 'Blog', href: '#blog' },
  { label: 'Projects', href: '#gallery' },
  { label: 'Enquiry', href: '#enquiry' },
  { label: 'Contact us', href: '#contact' },
  { label: 'FAQs', href: '#faq' },
];

export default function NavbarSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header sticky-top">
      <div className="container">
        <div className="navbar-row">
          <a href="#home" className="navbar-brand text-dark text-decoration-none" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark" aria-hidden="true">K<span>.</span></span>
          <span>
            <strong>Kharche Technologies</strong>
            <small className="brand-subtitle d-block">Digital that moves business forward</small>
          </span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
          <nav className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#enquiry" className="nav-cta" onClick={() => setMenuOpen(false)}>Start a project <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </div>
    </header>
  );
}
