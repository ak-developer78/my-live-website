import React from 'react';
// import '../css/AboutSection.css'; 

const aboutImageUrl = 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container about-content">
        <div className="about-text">
          <h3 className="sub-heading">About Our Company</h3>
          <h2 className="main-heading">Creative & Innovative IT Solutions</h2>
          <p className="mission-statement">
            Our mission is to empower businesses by delivering cutting-edge, reliable, and scalable technology solutions that foster growth and drive success in a digital-first world.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>250+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
        <div className="about-image-container">
          <img src={aboutImageUrl} alt="A modern office with people collaborating" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;