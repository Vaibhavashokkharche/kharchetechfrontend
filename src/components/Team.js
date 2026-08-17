import React from 'react';

const teamMembers = [
  {
    name: 'Vaibhav Kharche',
    role: 'Founder & Software Developer',
    image: '/images/Vaibhav.png',
  },
  {
    name: 'Anurag Kharche',
    role: 'Co-Founder & Software Developer',
    image: '/images/Anurag.jpeg',
  },
  {
    name: 'Rushikesh Kharche',
    role: 'Finance Analyst',
    image: '/images/Rushikesh.jpg',
  },
  {
    name: 'Shraddha Kharche',
    role: 'Frontend Developer',
    image: '/images/Shradhha2.jpeg',
  },
  {
    name: 'Prasad Patil',
    role: 'Quality Anaylst',
    image: '/images/Prasad.jpeg',
  },
   
];

export default function Team() {
  return (
    <section id="team">
      <div className="container section-card">
        <div className="text-center mb-5">
          <p className="text-soft">Meet Our Team</p>
          <h2>People behind Kharche Technologies</h2>
          <p className="section-subtitle">A small team combining software engineering and business insight.</p>
        </div>
        <div className="row g-4 justify-content-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="col-12 col-lg-8">
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-image" />
                </div>
                <div className="team-details text-center mt-4">
                  <h5 className="mb-1">{member.name}</h5>
                  <p className="mb-0 text-soft">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
