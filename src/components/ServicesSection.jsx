import React, { useState } from 'react';
import Modal from './Modal';
import '../css/ServicesSection.css';

// Import all the icons we need for the new design
import { 
  FaGamepad, FaCubes, FaVrCardboard, 
  FaLink, FaBrain, FaPalette, FaArrowRight 
} from 'react-icons/fa';

// New services data based on your reference image
const services = [
  { icon: <FaGamepad />, title: "Game Development" },
  { icon: <FaCubes />, title: "Augmented Reality (AR)" },
  { icon: <FaVrCardboard />, title: "Virtual Reality (VR)" },
  { icon: <FaLink />, title: "Blockchain Technology" },
  { icon: <FaBrain />, title: "AI-Powered Solutions" },
  { icon: <FaPalette />, title: "UI/UX" },
];

const ServicesSection = () => {
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);

  return (
    <>
      <section className="services-section-intro container">
        <div className="section-header">
          <h2 className="main-heading">Explore Our Full Range of Services</h2>
          <p>From initial concept to final deployment, we provide end-to-end technology solutions tailored to your unique business needs.</p>
          <button className="view-services-button" onClick={() => setIsServicesModalOpen(true)}>
            View All Our Services
          </button>
        </div>
      </section>

      <Modal
        isOpen={isServicesModalOpen}
        onClose={() => setIsServicesModalOpen(false)}
        customClass="service-modal-content"
      >
        {/* --- NEW: Wrapper div to contain the button and content --- */}
        <div className="service-modal-container">
          {/* --- NEW: The perfect close button --- */}
          <button 
            aria-label="Close services modal"
            className="service-modal-close-btn"
            onClick={() => setIsServicesModalOpen(false)}
          >
            ×
          </button>

          <div className="service-modal-header">
            <h2 className="main-heading">Our Core Services</h2>
            <p>We combine cutting-edge technology with creative thinking to deliver solutions that make a difference.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <div className="service-card-wrapper" key={index}>
                <div className="service-card-inner">
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <div className="service-link-arrow">
                  <FaArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ServicesSection;