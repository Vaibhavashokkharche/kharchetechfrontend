import React from 'react';

const galleryItems = [
  { title: 'Local Business Website', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=60' },
  { title: 'E-commerce Interface', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60' },
  { title: 'Analytics Dashboard', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=60' },
];

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="container section-card">
        <div className="text-center mb-5">
          <p className="text-soft">Photo Gallery</p>
          <h2>Recent designs and client projects</h2>
          <p className="section-subtitle">A small showcase of websites and software experiences built for businesses.</p>
        </div>
        <div className="row g-4">
          {galleryItems.map((item) => (
            <div key={item.title} className="col-md-4">
              <div className="rounded-4 overflow-hidden shadow-sm">
                <img src={item.image} className="img-fluid" alt={item.title} />
                <div className="p-3 bg-white">
                  <h5 className="mb-1">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
