import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-soft">
      <div className="container section-card">
        <div className="row gy-4">
          <div className="col-lg-6">
            <p className="text-soft">Contact Us</p>
            <h2>Get in touch with Kharche Technologies</h2>
            <p className="section-subtitle">Email, office address, and location for project enquiries and support.</p>
            <div className="mt-4">
              <p className="mb-2"><strong>Email:</strong> vaibhavkharche4328@gmail.com</p>
              <p className="mb-2"><strong>Address:</strong> Ace Astha Society Charholi Road, Charholi Budruk, Haveli, MH-412105, India</p>
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
