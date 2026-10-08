import React from 'react';

const blogPosts = [
  {
    title: 'Your website is part of your sales team',
    excerpt: 'Make it easy for a potential customer to understand what you offer, trust your business, and take action on any device.',
  },
  {
    title: 'When should a business automate a process?',
    excerpt: 'Spot repetitive tasks, delays, and avoidable errors that could be improved with a fit-for-purpose digital workflow.',
  },
  {
    title: 'Planning a software project with confidence',
    excerpt: 'A clear scope, practical milestones, and early feedback help teams manage risk and get value sooner.',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-soft">
      <div className="container section-card">
        <div className="text-center mb-5">
          <p className="text-soft">Blog</p>
          <h2>Useful ideas for smarter digital decisions</h2>
          <p className="section-subtitle">Straightforward guidance to help you choose and plan technology that serves a real business goal.</p>
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
