import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarSection from './components/NavbarSection';
import Home from './components/Home';
import Services from './components/Services';
import Industries from './components/Industries';
import Process from './components/Process';
import About from './components/About';
import Enquiry from './components/Enquiry';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Help from './components/Help';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Team from './components/Team';
import Admin from './admin/Admin';

const contactPhone = '+917218964006';
const whatsappPhone = contactPhone.replace(/\D/g, '');

function App() {
  const [isAdminRoute, setIsAdminRoute] = useState(window.location.hash === '#admin');

  useEffect(() => {
    const syncRoute = () => setIsAdminRoute(window.location.hash === '#admin');
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main > section'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    sections.forEach((section) => section.setAttribute('data-reveal', ''));
    document.documentElement.classList.add('motion-ready');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -55px 0px' });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isAdminRoute]);

  return (
    <div className="app-shell">
      <NavbarSection />
      <main>
        {isAdminRoute ? (
          <Admin />
        ) : (
          <>
            <Home />
            <Services />
            <Industries />
            <Process />
            <About />
            <Enquiry />
            <Gallery />
            <Blog />
            <Help />
            <Team />
            <Faq />
            <Contact />
          </>
        )}
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#home" className="footer-brand">Kharche Technologies<span>.</span></a>
          <p>Thoughtful software. Built for what’s next.</p>
          <div className="footer-meta">
            <span className="footer-copyright">© {new Date().getFullYear()} Kharche Technologies</span>
          </div>
        </div>
      </footer>
      <div className="floating-contact" aria-label="Quick contact options">
        <a className="contact-float contact-float--whatsapp" href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent('Hello Kharche Technologies, I would like to discuss a project.')}`} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp" title="Chat on WhatsApp">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.82 11.82 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.09.55 4.13 1.59 5.93L.12 24l6.34-1.66a11.9 11.9 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.47-8.41ZM12.11 21.75h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.67-.23-.38a9.87 9.87 0 0 1-1.52-5.22c0-5.46 4.45-9.91 9.92-9.91a9.84 9.84 0 0 1 7.01 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.46-4.45 9.91-9.91 9.91Zm5.44-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" /></svg>
        </a>
        <a className="contact-float contact-float--call" href={`tel:${contactPhone}`} aria-label="Call Kharche Technologies" title="Call us">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.56 3.57a1 1 0 0 1-.25 1.02l-2.19 2.2Z" /></svg>
        </a>
      </div>
    </div>
  );
}

export default App;
