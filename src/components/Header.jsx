// import React, { useState } from 'react';
// import '../css/Header.css'; // Make sure the path to your CSS is correct

// // --- ASSETS ---
// const logoUrl = 'https://solvebytez.com/assets/images/logos/main-logo.png';
// const facebookLogoUrl = 'https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png';
// const instagramLogoUrl = 'https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png';
// const linkedinLogoUrl = 'https://img.icons8.com/ios-filled/50/ffffff/linkedin.png';
// const youtubeLogoUrl = 'https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png';

// // Header now accepts 'onNavigate' and 'currentPage' as props from App.js
// const Header = ({ onNavigate, currentPage }) => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isServiceMenuOpen, setServiceMenuOpen] = useState(false);

//   const services = {
//     col1: [
//       { name: 'Mobile-Application', href: '#' }, { name: 'Web Application', href: '#' },
//       { name: 'Digital-Marketing', href: '#' }, { name: 'Game-Development', href: '#' },
//       { name: 'Augmented Reality (AR)', href: '#' },
//     ],
//     col2: [
//       { name: 'Virtual Reality (VR)', href: '#' }, { name: 'Blockchain Technology', href: '#' },
//       { name: 'AI-Powered Solutions', href: '#' }, { name: 'UI/UX', href: '#' },
//     ],
//   };

//   // Helper function to handle navigation and close the mobile menu if it's open
//   const handleLinkClick = (page) => {
//     onNavigate(page);
//     setMobileMenuOpen(false);
//   };

//   return (
//     <header className="header-container">
//       {/* Top Bar */}
//       <div className="top-bar">
//         <div className="container top-bar-inner">
//           <div className="contact-info">
//             <a href="tel:+919599179795" className="contact-item"><i className="fas fa-phone-alt"></i><span>+91-9599179795</span></a>
//             <a href="mailto:info@solvebytez.com" className="contact-item"><i className="fas fa-envelope"></i><span>info@solvebytez.com</span></a>
//           </div>
//           <div className="social-links">
//             <a href="#" aria-label="Facebook"><img src={facebookLogoUrl} alt="Facebook" /></a>
//             <a href="#" aria-label="Instagram"><img src={instagramLogoUrl} alt="Instagram" /></a>
//             <a href="#" aria-label="LinkedIn"><img src={linkedinLogoUrl} alt="LinkedIn" /></a>
//             <a href="#" aria-label="YouTube"><img src={youtubeLogoUrl} alt="YouTube" /></a>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation Bar */}
//       <nav className="main-nav">
//         <div className="container nav-inner">
//           <button className="logo-button" onClick={() => handleLinkClick('home')}>
//             <img src={logoUrl} alt="Solvebytez Logo" className="logo" />
//           </button>

//           <div className={`nav-links-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
//             <ul className="nav-links">
//               <li>
//                 <button className={`nav-link-button ${currentPage === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')}>Home</button>
//               </li>
//               <li>
//                 <button className={`nav-link-button ${currentPage === 'about' ? 'active' : ''}`} onClick={() => handleLinkClick('about')}>About Us</button>
//               </li>
//               <li className="nav-item-dropdown" onMouseEnter={() => setServiceMenuOpen(true)} onMouseLeave={() => setServiceMenuOpen(false)}>
//                 <a href="#service" className="service-link">
//                   Service <i className="fas fa-chevron-down dropdown-caret"></i>
//                 </a>
//                 <div className={`service-dropdown ${isServiceMenuOpen ? 'show' : ''}`}>
//                   <div className="dropdown-columns">
//                     <ul>{services.col1.map(service => (<li key={service.name}><a href={service.href}>{service.name}</a></li>))}</ul>
//                     <ul>{services.col2.map(service => (<li key={service.name}><a href={service.href}>{service.name}</a></li>))}</ul>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <button className={`nav-link-button ${currentPage === 'portfolio' ? 'active' : ''}`} onClick={() => handleLinkClick('portfolio')}>Portfolio</button>
//               </li>
//               <li>
//                 <button className={`nav-link-button ${currentPage === 'contact' ? 'active' : ''}`} onClick={() => handleLinkClick('contact')}>Contact</button>
//               </li>
//             </ul>
//           </div>

//           <div className="nav-actions">
//             <button className="meet-button">Meet With Us</button>
//             <button className="hamburger-menu" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
//               <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;




































import React, { useState } from 'react';
import '../css/Header.css'; // Make sure the path to your CSS is correct

// --- ASSETS ---
const logoUrl = 'https://solvebytez.com/assets/images/logos/main-logo.png';
const facebookLogoUrl = 'https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png';
const instagramLogoUrl = 'https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png';
const linkedinLogoUrl = 'https://img.icons8.com/ios-filled/50/ffffff/linkedin.png';
const youtubeLogoUrl = 'https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png';

const Header = ({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServiceMenuOpen, setServiceMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const services = {
    col1: [
      { name: 'Mobile-Application', slug: 'mobile-application' },
      { name: 'Web Application', slug: 'web-application' },
      { name: 'Digital-Marketing', slug: 'digital-marketing' },
      { name: 'Game-Development', slug: 'game-development' },
      { name: 'Augmented Reality (AR)', slug: 'augmented-reality' },
    ],
    col2: [
      { name: 'Virtual Reality (VR)', slug: 'virtual-reality' },
      { name: 'Blockchain Technology', slug: 'blockchain-technology' },
      { name: 'AI-Powered Solutions', slug: 'ai-solutions' },
      { name: 'UI/UX', slug: 'ui-ux' },
    ],
  };

  const handleLinkClick = (page, slug = null) => {
    if (isNavigating) return;
    setIsNavigating(true);

    setTimeout(() => {
      onNavigate(page, slug);
      setMobileMenuOpen(false);
      setServiceMenuOpen(false);
      setIsNavigating(false);
    }, 1500); // 1.5-second delay
  };

  return (
    <>
      {/* --- NEW & IMPROVED: Loading Overlay --- */}
      {isNavigating && (
        <div className="loading-overlay">
          <div className="loading-content">
            {/* Pulsing Logo */}
            <img src={logoUrl} alt="Loading..." className="loading-logo" />
            {/* Progress Bar */}
            <div className="loading-progress-container">
              <div className="loading-progress-bar"></div>
            </div>
          </div>
        </div>
      )}

      <header className="header-container">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="container top-bar-inner">
            <div className="contact-info">
              <a href="tel:+919599179795" className="contact-item"><i className="fas fa-phone-alt"></i><span>+91-9599179795</span></a>
              <a href="mailto:info@solvebytez.com" className="contact-item"><i className="fas fa-envelope"></i><span>info@solvebytez.com</span></a>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><img src={facebookLogoUrl} alt="Facebook" /></a>
              <a href="#" aria-label="Instagram"><img src={instagramLogoUrl} alt="Instagram" /></a>
              <a href="#" aria-label="LinkedIn"><img src={linkedinLogoUrl} alt="LinkedIn" /></a>
              <a href="#" aria-label="YouTube"><img src={youtubeLogoUrl} alt="YouTube" /></a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav className="main-nav">
          <div className="container nav-inner">
            <button className="logo-button" onClick={() => handleLinkClick('home')}>
              <img src={logoUrl} alt="Solvebytez Logo" className="logo" />
            </button>

            <div className={`nav-links-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
              <ul className="nav-links">
                <li><button className={`nav-link-button ${currentPage === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')}>Home</button></li>
                <li><button className={`nav-link-button ${currentPage === 'about' ? 'active' : ''}`} onClick={() => handleLinkClick('about')}>About Us</button></li>
                <li className="nav-item-dropdown" onMouseEnter={() => setServiceMenuOpen(true)} onMouseLeave={() => setServiceMenuOpen(false)}>
                  <a href="#service" onClick={(e) => e.preventDefault()} className="service-link">Service <i className="fas fa-chevron-down dropdown-caret"></i></a>
                  <div className={`service-dropdown ${isServiceMenuOpen ? 'show' : ''}`}>
                    <div className="dropdown-columns">
                      <ul>{services.col1.map(service => (<li key={service.name}><button onClick={() => handleLinkClick('service', service.slug)}>{service.name}</button></li>))}</ul>
                      <ul>{services.col2.map(service => (<li key={service.name}><button onClick={() => handleLinkClick('service', service.slug)}>{service.name}</button></li>))}</ul>
                    </div>
                  </div>
                </li>
                <li><button className={`nav-link-button ${currentPage === 'portfolio' ? 'active' : ''}`} onClick={() => handleLinkClick('portfolio')}>Portfolio</button></li>
                <li><button className={`nav-link-button ${currentPage === 'contact' ? 'active' : ''}`} onClick={() => handleLinkClick('contact')}>Contact</button></li>
              </ul>
            </div>

            <div className="nav-actions">
              <button className="meet-button" onClick={() => handleLinkClick('contact')}>Meet With Us</button>
              <button className="hamburger-menu" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu"><i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i></button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;