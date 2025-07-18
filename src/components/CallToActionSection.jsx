import React from 'react';
import '../css/CallToActionSection.css'

const CallToActionSection = ({ onOpenContactModal }) => {
  return (
    <section className="cta-section">
      <div className="container cta-content">
        <div className="cta-text">
          <h2>Ready to Start Your Next Project?</h2>
          <p>We are here to help you turn your vision into reality. Let's build something amazing together.</p>
        </div>
        <button className="cta-button-main" onClick={onOpenContactModal}>
          Let's Talk
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;