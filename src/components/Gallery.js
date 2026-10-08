import React from 'react';

const galleryItems = [
  { title: 'Local business website', category: 'Customer acquisition', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=60' },
  { title: 'E-commerce experience', category: 'Online sales', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60' },
  { title: 'Business insights dashboard', category: 'Better decisions', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=60' },
];

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="container section-card">
        <div className="text-center mb-5">
          <p className="text-soft">What we can build</p>
          <h2>Digital experiences designed around business needs</h2>
          <p className="section-subtitle">Explore example project directions. We’ll tailor the scope, features, and priorities to your customers and goals.</p>
        </div>
        <div className="row g-4">
          {galleryItems.map((item) => (
            <div key={item.title} className="col-md-4">
              <div className="rounded-4 overflow-hidden shadow-sm gallery-card">
                <img src={item.image} className="img-fluid" alt={item.title} />
                <div className="p-3 bg-white">
                  <span className="project-category">{item.category}</span>
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
