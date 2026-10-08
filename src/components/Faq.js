import React from 'react';

const questions = [
  {
    question: 'How much does a business website or digital project cost?',
    answer: 'Pricing depends on the scope, features, content, and integrations you need. After a short discovery conversation, we can outline a practical scope and provide an estimate before work begins. The 15-minute growth audit is a free first conversation, not a commitment to proceed.',
  },
  {
    question: 'How long does a project take to deliver?',
    answer: 'Timelines depend on project size, content readiness, feedback, and any third-party integrations. We agree on milestones and a realistic schedule after understanding your requirements, then keep you updated as the work progresses.',
  },
  {
    question: 'Can you help with domain name and hosting setup?',
    answer: 'Yes. We can advise on choosing a domain and suitable hosting, and help configure deployment and the domain connection. Domain and hosting accounts remain in your business’s name; third-party provider fees are separate from development costs.',
  },
  {
    question: 'What happens after the website or application launches?',
    answer: 'We test key journeys before launch and can provide ongoing maintenance, security and dependency updates, backups, content changes, and planned improvements. Support needs and any recurring fees are agreed separately so you know what is covered.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="faq-section">
      <div className="container section-card">
        <div className="row g-4">
          <div className="col-lg-4">
            <p className="text-soft">Frequently asked questions</p>
            <h2>Good questions deserve clear answers.</h2>
            <p className="faq-lede">A few details to help you plan your next business website or digital project.</p>
            <a href="#enquiry" className="faq-contact-link">Ask us about your project <span aria-hidden="true">↗</span></a>
          </div>
          <div className="col-lg-8">
            <div className="faq-list">
              {questions.map((item, index) => (
                <details className="faq-item" key={item.question} open={index === 0}>
                  <summary>{item.question}<span className="faq-toggle" aria-hidden="true" /></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}