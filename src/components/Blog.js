import React from 'react';

const blogPosts = [
  {
    title: 'Why Modern Web Apps Matter',
    excerpt: 'Explore how clean UI, responsive design, and fast performance create trust for local businesses.',
  },
  {
    title: 'Building a UI that Feels Calm',
    excerpt: 'Learn design choices for wellness and lifestyle brands with soft colors, spacing, and approachable fonts.',
  },
  {
    title: 'APIs, Integrations, and Growth',
    excerpt: 'How modern APIs connect websites with payments, user accounts, and business data.',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-soft">
      <div className="container section-card">
        <div className="text-center mb-5">
          <p className="text-soft">Blog</p>
          <h2>Insights on development and growth</h2>
          <p className="section-subtitle">Short stories and ideas for clients building their next digital experience.</p>
        </div>
        <div className="row g-4">
          {blogPosts.map((post) => (
            <div key={post.title} className="col-md-4">
              <div className="p-4 rounded-4" style={{ background: '#fff' }}>
                <h5 className="mb-3 brand-accent">{post.title}</h5>
                <p className="text-soft mb-0">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
