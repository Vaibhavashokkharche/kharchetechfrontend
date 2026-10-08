import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-soft">
      <div className="container section-card">
        <div className="row gy-4">
          <div className="col-lg-6">
            <p className="text-soft">Contact</p>
            <h2>Let’s talk about your business goals.</h2>
            <p className="section-subtitle">Tell us what you’re looking to improve. We’ll connect you with the right person to discuss your project.</p>
            <div className="mt-4">
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:vaibhavkharche4328@gmail.com">vaibhavkharche4328@gmail.com</a></p>
              <p className="mb-2"><strong>Phone:</strong> <a href="tel:+917218964006">+91 72189 64006</a></p>
              <p className="mb-2"><strong>Location:</strong> Ace Astha Society, Charholi Road, Charholi Budruk, Haveli, Maharashtra 412105, India</p>
              <p className="contact-response-note">Serving businesses in Pune and beyond.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <iframe
              title="VAKharche location"
              className="map-embed"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5477143498554!2d73.92254787501768!3d18.67071428727208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0da724fcd11%3A0xf12f5f5d0d7fd368!2sCharholi%20Budruk%2C%20Pune%2C%20Maharashtra%20412105%2C%20India!5e0!3m2!1sen!2sus!4v1710000000000"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
