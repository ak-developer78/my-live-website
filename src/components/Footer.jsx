import React from 'react';
import '../css/Footer.css';
import { useInView } from 'react-intersection-observer';

// Import Icons
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

// The logo with the transparent background is better for this design
const logoLightUrl = 'https://solvebytez.com/assets/images/logos/main-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Hook for scroll animations
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation happens only once
    threshold: 0.1,    // Trigger when 10% of the footer is visible
  });

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: About */}
          <div className={`footer-column col-1 ${inView ? 'is-visible' : ''}`}>
            <div className="footer-logo-container">
              <img src={logoLightUrl} alt="Solvebytez Logo" className="footer-logo" />
            </div>
            <p className="footer-about-text">
              We are passionate about empowering businesses with innovative and scalable IT solutions that drive growth and success.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          {/* Column 2: Page Links */}
          <div className={`footer-column col-2 ${inView ? 'is-visible' : ''}`}>
            <h4 className="footer-heading">Page Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className={`footer-column col-3 ${inView ? 'is-visible' : ''}`}>
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><a href="#">Mobile Application</a></li>
              <li><a href="#">Web Application</a></li>
              <li><a href="#">Augmented Reality</a></li>
              <li><a href="#">Virtual Reality</a></li>
              <li><a href="#">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Column 4: Contacts */}
          <div className={`footer-column col-4 ${inView ? 'is-visible' : ''}`}>
            <h4 className="footer-heading">Contacts</h4>
            <ul className="footer-contact-list">
              <li>
                <FaPhoneAlt className="icon" />
                <span>+91-9599179795</span>
              </li>
              <li>
                <FaEnvelope className="icon" />
                <span>info@solvebytez.com</span>
              </li>
              <li>
                <FaMapMarkerAlt className="icon" />
                <span>Rahul Vihar 2, Pratap Vihar, Sector 12, Ghaziabad 201009, (Uttar Pradesh)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © {currentYear} Solvebytez. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;