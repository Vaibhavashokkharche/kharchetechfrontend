import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarSection from './components/NavbarSection';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Enquiry from './components/Enquiry';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Help from './components/Help';
import Contact from './components/Contact';
import Team from './components/Team';
import Admin from './admin/Admin';

function App() {
  return (
    <div className="app-shell">
      <NavbarSection />
      <main>
        <Home />
        <Services />
        <About />
        <Enquiry />
        <Gallery />
        <Blog />
        <Help />
        <Team />
        <Admin />
        <Contact />
      </main>
    </div>
  );
}

export default App;
