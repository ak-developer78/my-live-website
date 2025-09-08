// import React, { useState, useEffect } from 'react';
// import { FaUser, FaEnvelope, FaConciergeBell, FaPencilAlt } from 'react-icons/fa'; // Assuming you use these icons

// // Import your components
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import AboutSection from './components/AboutSection';
// import PortfolioSection from './components/PortfolioSection';
// import ServicesSection from './components/ServicesSection';
// import TechnologiesSection from './components/TechnologiesSection';
// import CallToActionSection from './components/CallToActionSection';
// import AIChatWidget from './components/AIChatWidget';
// import Modal from './components/Modal'; // Assuming you have a Modal component
// import AboutPage from './pages/AboutPage';
// import PortfolioPage from './pages/PortfolioPage';
// import ContactPage from './pages/ContactPage';
// import ServicePage from './pages/ServicePage';

// // Dummy serviceData for local testing. In a real app, you'd fetch this.
// // Make sure this matches the structure your ServicePage expects.
// const serviceData = [
//   { slug: 'mobile-application', title: 'Mobile Application', description: '...' },
//   { slug: 'web-application', title: 'Web Application', description: '...' },
//   { slug: 'game-development', title: 'Game Development', description: '...' },
//   // Add more services as needed
// ];

// // Ensure VITE_API_BASE_URL is defined in your .env file, e.g., VITE_API_BASE_URL=http://localhost:8000
// const apiUrl = import.meta.env.VITE_API_BASE_URL;
// const logoUrl = 'https://solvebytez.com/assets/images/logos/main-logo.png';
// const servicesList = [
//   "Mobile Application",
//   "Web Application",
//   "Digital Marketing",
//   "Game Development",
//   "Augmented Reality (AR)",
//   "Virtual Reality (VR)",
//   "Blockchain Technology",
//   "AI-Powered Solutions",
//   "UI/UX"
// ];

// // --- UPDATED PRELOADER COMPONENT ---
// const Preloader = ({ isHiding }) => (
//   <div className={`preloader-overlay ${isHiding ? 'hiding' : ''}`}>
//     <div className="preloader-gate preloader-gate-left"></div>
//     <div className="preloader-gate preloader-gate-right"></div>
//     <div className="preloader-logo-container">
//       <img src={logoUrl} alt="Loading..." className="preloader-logo-grayscale" />
//       <img src={logoUrl} alt="" className="preloader-logo-color" />
//       <div className="preloader-progress-bar"></div> {/* Added progress bar */}
//     </div>
//   </div>
// );
// // --- END UPDATED PRELOADER COMPONENT ---

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isHiding, setIsHiding] = useState(false);
//   const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState({ page: 'home', slug: null });

//   const [popupFormData, setPopupFormData] = useState({
//     fullName: '',
//     email: '',
//     service: '',
//     message: ''
//   });
//   const [isPopupSubmitting, setIsPopupSubmitting] = useState(false);
//   const [popupStatus, setPopupStatus] = useState({ message: '', type: '' }); // type: 'success' or 'error'

//   useEffect(() => {
//     const hideTimer = setTimeout(() => setIsHiding(true), 2000); // Start closing animation after 2 seconds
//     const removeTimer = setTimeout(() => setIsLoading(false), 2800); // Remove component from DOM after 2.8 seconds (matching gate animation)
//     return () => {
//       clearTimeout(hideTimer);
//       clearTimeout(removeTimer);
//     };
//   }, []);

//   useEffect(() => {
//     let timer;
//     if (!isLoading && currentPage.page === 'home') {
//       timer = setTimeout(() => setIsContactPopupOpen(true), 5000); // Open popup after 5 seconds on homepage
//     }
//     return () => clearTimeout(timer);
//   }, [currentPage, isLoading]);

//   const handlePopupChange = (e) => {
//     const { name, value } = e.target;
//     setPopupFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handlePopupFormSubmit = async (e) => {
//     e.preventDefault();
//     setIsPopupSubmitting(true);
//     setPopupStatus({ message: '', type: '' }); // Clear previous status

//     try {
//       if (!apiUrl) {
//         throw new Error("API base URL is not defined. Check your .env file.");
//       }

//       const response = await fetch(`${apiUrl}/api/popup-submit`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(popupFormData)
//       });

//       // It's good practice to always try to parse JSON, even for errors
//       const result = await response.json();

//       if (response.ok) {
//         setPopupStatus({ message: result.msg || 'Message sent successfully!', type: 'success' });
//         setPopupFormData({ fullName: '', email: '', service: '', message: '' }); // Clear form
//         // Optionally close popup after a delay, or let user close it
//         setTimeout(() => {
//           setIsContactPopupOpen(false);
//           setPopupStatus({ message: '', type: '' }); // Clear status when closing
//         }, 3000);
//       } else {
//         // Server responded with an error status (e.g., 400, 500)
//         setPopupStatus({ message: result.msg || `Error: ${response.status} - Could not send message.`, type: 'error' });
//       }
//     } catch (error) {
//       console.error('Popup submission error:', error);
//       // This catches network errors, JSON parsing errors, or the custom error above
//       setPopupStatus({ message: 'Failed to connect to the server. Please check your network and backend status.', type: 'error' });
//     } finally {
//       setIsPopupSubmitting(false);
//     }
//   };

//   const handleNavigate = (page, slug = null) => {
//     setCurrentPage({ page, slug });
//     window.scrollTo(0, 0);
//   };

//   const renderPage = () => {
//     switch(currentPage.page) {
//       case 'home':
//         return (
//           <>
//             <Hero onNavigate={handleNavigate} />
//             <AboutSection />
//             <PortfolioSection />
//             <ServicesSection />
//             <TechnologiesSection />
//             <CallToActionSection onOpenContactModal={() => setIsContactPopupOpen(true)} />
//           </>
//         );
//       case 'about':
//         return <AboutPage />;
//       case 'portfolio':
//         return <PortfolioPage />;
//       case 'contact':
//         return <ContactPage />;
//       // --- THIS IS THE CORRECTED LOGIC ---
//       case 'service': {
//         // Try to find the service using the slug from the state.
//         let selectedService = serviceData.find(s => s.slug === currentPage.slug);
//         // If no service was found (because the slug was null or invalid)...
//         if (!selectedService) {
//           // ...then default to the VERY FIRST service in your data file.
//           // This prevents crashes if an invalid slug is somehow used.
//           selectedService = serviceData[0];
//           console.warn(`Service with slug "${currentPage.slug}" not found. Displaying first service as fallback.`);
//         }
//         // Now, render the ServicePage with a valid service object.
//         return <ServicePage service={selectedService} />;
//       }
//       default:
//         // For any other unknown page, we can just render the homepage.
//         return (
//           <>
//             <Hero onNavigate={handleNavigate} />
//             <AboutSection />
//             <PortfolioSection />
//             <ServicesSection />
//             <TechnologiesSection />
//             <CallToActionSection onOpenContactModal={() => setIsContactPopupOpen(true)} />
//           </>
//         );
//     }
//   };

//   return (
//     <>
//       {isLoading && <Preloader isHiding={isHiding} />}

//       {!isLoading && (
//         <div className="website-content">
//           <Header onNavigate={handleNavigate} currentPage={currentPage.page} />
//           <main>{renderPage()}</main>
//           <Footer />
//           <AIChatWidget />

//           <Modal isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} customClass="contact-popup-modal">
//             <div className="contact-popup-content">
//               <button aria-label="Close modal" className="popup-close-btn" onClick={() => setIsContactPopupOpen(false)}>×</button>
//               <div className="popup-header"><h2>Get In Touch</h2></div>
//               <div className="wavy-divider"><svg viewBox="0 0 500 40"><path d="M0,20 C150,40 350,0 500,20 L500,00 L0,0 Z" style={{stroke:'none',fill:'var(--primary-dark-blue, #0d2340)'}}></path></svg></div>
//               <div className="popup-form-body">
//                 {popupStatus.message && (
//                   <div className={`status-message ${popupStatus.type}`}>
//                     {popupStatus.message}
//                   </div>
//                 )}
//                 <form className="popup-form" onSubmit={handlePopupFormSubmit}>
//                   <div className="popup-input-group">
//                     <input
//                       type="text"
//                       name="fullName"
//                       placeholder="Your Name"
//                       value={popupFormData.fullName}
//                       onChange={handlePopupChange}
//                       required
//                       aria-label="Full Name"
//                     />
//                     <FaUser className="input-icon" />
//                   </div>
//                   <div className="popup-input-group">
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email"
//                       value={popupFormData.email}
//                       onChange={handlePopupChange}
//                       required
//                       aria-label="Email Address"
//                     />
//                     <FaEnvelope className="input-icon" />
//                   </div>
//                   <div className="popup-input-group">
//                     <select
//                       name="service"
//                       value={popupFormData.service}
//                       onChange={handlePopupChange}
//                       required
//                       aria-label="Select Service"
//                     >
//                       <option value="" disabled>Select a Service</option>
//                       {servicesList.map((s, i) => (
//                         <option key={i} value={s}>{s}</option>
//                       ))}
//                     </select>
//                     <FaConciergeBell className="input-icon" />
//                   </div>
//                   <div className="popup-input-group">
//                     <textarea
//                       name="message"
//                       placeholder="Your Message"
//                       value={popupFormData.message}
//                       onChange={handlePopupChange}
//                       required
//                       rows="4" // Added rows for better textarea display
//                       aria-label="Your Message"
//                     ></textarea>
//                     <FaPencilAlt className="input-icon" style={{top:'22px'}}/>
//                   </div>
//                   <button type="submit" className="popup-submit-button" disabled={isPopupSubmitting}>
//                     {isPopupSubmitting ? 'Sending...' : 'Send Message'}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </Modal>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;






// import React, { useState, useEffect } from 'react';
// import { FaUser, FaEnvelope, FaConciergeBell, FaPencilAlt } from 'react-icons/fa'; // Assuming you use these icons

// // Import your components
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import AboutSection from './components/AboutSection';
// import PortfolioSection from './components/PortfolioSection';
// import ServicesSection from './components/ServicesSection';
// import TechnologiesSection from './components/TechnologiesSection';
// import CallToActionSection from './components/CallToActionSection';
// import AIChatWidget from './components/AIChatWidget';
// import Modal from './components/Modal'; // Assuming you have a Modal component
// import AboutPage from './pages/AboutPage';
// import PortfolioPage from './pages/PortfolioPage';
// import ContactPage from './pages/ContactPage';
// import ServicePage from './pages/ServicePage';

// // Dummy serviceData for local testing. In a real app, you'd fetch this.
// // Make sure this matches the structure your ServicePage expects.
// const serviceData = [
//   { slug: 'mobile-application', title: 'Mobile Application', description: '...' },
//   { slug: 'web-application', title: 'Web Application', description: '...' },
//   { slug: 'game-development', title: 'Game Development', description: '...' },
//   // Add more services as needed
// ];

// // Ensure VITE_API_BASE_URL is defined in your .env file, e.g., VITE_API_BASE_URL=http://localhost:8000
// const apiUrl = import.meta.env.VITE_API_BASE_URL;
// const logoUrl = 'https://solvebytez.com/assets/images/logos/main-logo.png';
// const servicesList = [
//   "Mobile Application",
//   "Web Application",
//   "Digital Marketing",
//   "Game Development",
//   "Augmented Reality (AR)",
//   "Virtual Reality (VR)",
//   "Blockchain Technology",
//   "AI-Powered Solutions",
//   "UI/UX"
// ];

// // --- UPDATED PRELOADER COMPONENT ---
// const Preloader = ({ isHiding }) => (
//   <div className={`preloader-overlay ${isHiding ? 'hiding' : ''}`}>
//     <div className="preloader-logo-container">
//       {/* Grayscale image for the base */}
//       <img src={logoUrl} alt="Loading..." className="preloader-logo-grayscale" />
//       {/* Color image for the fill effect, which is clipped by the progress bar */}
//       <img src={logoUrl} alt="" className="preloader-logo-color" />
//     </div>
//     <div className="preloader-progress-bar">
//       {/* The inner bar that fills up */}
//       <div className="preloader-progress-fill"></div>
//     </div>
//   </div>
// );
// // --- END UPDATED PRELOADER COMPONENT ---

// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isHiding, setIsHiding] = useState(false);
//   const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState({ page: 'home', slug: null });

//   const [popupFormData, setPopupFormData] = useState({
//     fullName: '',
//     email: '',
//     service: '',
//     message: ''
//   });
//   const [isPopupSubmitting, setIsPopupSubmitting] = useState(false);
//   const [popupStatus, setPopupStatus] = useState({ message: '', type: '' }); // type: 'success' or 'error'

//   useEffect(() => {
//     // This simulates the loading time of your resources.
//     // The `progress-fill` animation in CSS runs for 2.8s.
//     // The `hiding` class is added after 2s to start the fade out.
//     // The component is removed from the DOM after 2.8s to match the animation.
//     const hideTimer = setTimeout(() => setIsHiding(true), 2000); 
//     const removeTimer = setTimeout(() => setIsLoading(false), 2800); 
//     return () => {
//       clearTimeout(hideTimer);
//       clearTimeout(removeTimer);
//     };
//   }, []);

//   useEffect(() => {
//     let timer;
//     if (!isLoading && currentPage.page === 'home') {
//       timer = setTimeout(() => setIsContactPopupOpen(true), 5000); // Open popup after 5 seconds on homepage
//     }
//     return () => clearTimeout(timer);
//   }, [currentPage, isLoading]);

//   const handlePopupChange = (e) => {
//     const { name, value } = e.target;
//     setPopupFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handlePopupFormSubmit = async (e) => {
//     e.preventDefault();
//     setIsPopupSubmitting(true);
//     setPopupStatus({ message: '', type: '' }); // Clear previous status

//     try {
//       if (!apiUrl) {
//         throw new Error("API base URL is not defined. Check your .env file.");
//       }

//       const response = await fetch(`${apiUrl}/api/popup-submit`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(popupFormData)
//       });

//       // It's good practice to always try to parse JSON, even for errors
//       const result = await response.json();

//       if (response.ok) {
//         setPopupStatus({ message: result.msg || 'Message sent successfully!', type: 'success' });
//         setPopupFormData({ fullName: '', email: '', service: '', message: '' }); // Clear form
//         // Optionally close popup after a delay, or let user close it
//         setTimeout(() => {
//           setIsContactPopupOpen(false);
//           setPopupStatus({ message: '', type: '' }); // Clear status when closing
//         }, 3000);
//       } else {
//         // Server responded with an error status (e.g., 400, 500)
//         setPopupStatus({ message: result.msg || `Error: ${response.status} - Could not send message.`, type: 'error' });
//       }
//     } catch (error) {
//       console.error('Popup submission error:', error);
//       // This catches network errors, JSON parsing errors, or the custom error above
//       setPopupStatus({ message: 'Failed to connect to the server. Please check your network and backend status.', type: 'error' });
//     } finally {
//       setIsPopupSubmitting(false);
//     }
//   };

//   const handleNavigate = (page, slug = null) => {
//     setCurrentPage({ page, slug });
//     window.scrollTo(0, 0);
//   };

//   const renderPage = () => {
//     switch(currentPage.page) {
//       case 'home':
//         return (
//           <>
//             <Hero onNavigate={handleNavigate} />
//             <AboutSection />
//             <PortfolioSection />
//             <ServicesSection />
//             <TechnologiesSection />
//             <CallToActionSection onOpenContactModal={() => setIsContactPopupOpen(true)} />
//           </>
//         );
//       case 'about':
//         return <AboutPage />;
//       case 'portfolio':
//         return <PortfolioPage />;
//       case 'contact':
//         return <ContactPage />;
//       // --- THIS IS THE CORRECTED LOGIC ---
//       case 'service': {
//         // Try to find the service using the slug from the state.
//         let selectedService = serviceData.find(s => s.slug === currentPage.slug);
//         // If no service was found (because the slug was null or invalid)...
//         if (!selectedService) {
//           // ...then default to the VERY FIRST service in your data file.
//           // This prevents crashes if an invalid slug is somehow used.
//           selectedService = serviceData[0];
//           console.warn(`Service with slug "${currentPage.slug}" not found. Displaying first service as fallback.`);
//         }
//         // Now, render the ServicePage with a valid service object.
//         return <ServicePage service={selectedService} />;
//       }
//       default:
//         // For any other unknown page, we can just render the homepage.
//         return (
//           <>
//             <Hero onNavigate={handleNavigate} />
//             <AboutSection />
//             <PortfolioSection />
//             <ServicesSection />
//             <TechnologiesSection />
//             <CallToActionSection onOpenContactModal={() => setIsContactPopupOpen(true)} />
//           </>
//         );
//     }
//   };

//   return (
//     <>
//       {isLoading && <Preloader isHiding={isHiding} />}

//       {!isLoading && (
//         <div className="website-content">
//           <Header onNavigate={handleNavigate} currentPage={currentPage.page} />
//           <main>{renderPage()}</main>
//           <Footer />
//           <AIChatWidget />

//           <Modal isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} customClass="contact-popup-modal">
//             <div className="contact-popup-content">
//               <button aria-label="Close modal" className="popup-close-btn" onClick={() => setIsContactPopupOpen(false)}>×</button>
//               <div className="popup-header"><h2>Get In Touch</h2></div>
//               <div className="wavy-divider"><svg viewBox="0 0 500 40"><path d="M0,20 C150,40 350,0 500,20 L500,00 L0,0 Z" style={{stroke:'none',fill:'var(--primary-dark-blue, #0d2340)'}}></path></svg></div>
//               <div className="popup-form-body">
//                 {popupStatus.message && (
//                   <div className={`status-message ${popupStatus.type}`}>
//                     {popupStatus.message}
//                   </div>
//                 )}
//                 <form className="popup-form" onSubmit={handlePopupFormSubmit}>
//                   <div className="popup-input-group">
//                     <input
//                       type="text"
//                       name="fullName"
//                       placeholder="Your Name"
//                       value={popupFormData.fullName}
//                       onChange={handlePopupChange}
//                       required
//                       aria-label="Full Name"
//                     />
//                     <FaUser className="input-icon" />
//                   </div>
//                   <div className="popup-input-group">
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email"
//                       value={popupFormData.email}
//                       onChange={handlePopupChange}
//                       required
//                       aria-label="Email Address"
//                     />
//                     <FaEnvelope className="input-icon" />
//                   </div>
//                   <div className="popup-input-group">
//                     <select
//                       name="service"
//                       value={popupFormData.service}
//                       onChange={handlePopupChange}
//                       required
//                       aria-label="Select Service"
//                     >
//                       <option value="" disabled>Select a Service</option>
//                       {servicesList.map((s, i) => (
//                         <option key={i} value={s}>{s}</option>
//                       ))}
//                     </select>
//                     <FaConciergeBell className="input-icon" />
//                   </div>
//                   <div className="popup-input-group">
//                     <textarea
//                       name="message"
//                       placeholder="Your Message"
//                       value={popupFormData.message}
//                       onChange={handlePopupChange}
//                       required
//                       rows="4" // Added rows for better textarea display
//                       aria-label="Your Message"
//                     ></textarea>
//                     <FaPencilAlt className="input-icon" style={{top:'22px'}}/>
//                   </div>
//                   <button type="submit" className="popup-submit-button" disabled={isPopupSubmitting}>
//                     {isPopupSubmitting ? 'Sending...' : 'Send Message'}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </Modal>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;





import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaConciergeBell, FaPencilAlt } from 'react-icons/fa';

// Import your components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import TechnologiesSection from './components/TechnologiesSection';
import CallToActionSection from './components/CallToActionSection';
import AIChatWidget from './components/AIChatWidget';
import Modal from './components/Modal';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import AdComponent from './components/AdComponent';

// Dummy service data
const serviceData = [
  { slug: 'mobile-application', title: 'Mobile Application', description: '...' },
  { slug: 'web-application', title: 'Web Application', description: '...' },
  { slug: 'game-development', title: 'Game Development', description: '...' },
];

// Environment and constants
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const logoUrl = 'https://solvebytez.com/assets/images/logos/main-logo.png';
const servicesList = [
  "Mobile Application",
  "Web Application",
  "Digital Marketing",
  "Game Development",
  "Augmented Reality (AR)",
  "Virtual Reality (VR)",
  "Blockchain Technology",
  "AI-Powered Solutions",
  "UI/UX"
];

// --- AdComponent for showing ads ---
const AdComponent = ({ adSlot }) => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: 'block', textAlign: 'center', margin: '20px 0' }}
         data-ad-client="ca-pub-8450152485790142"
         data-ad-slot={adSlot}
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  );
};
// --- End AdComponent ---

// Preloader component
const Preloader = ({ isHiding }) => (
  <div className={`preloader-overlay ${isHiding ? 'hiding' : ''}`}>
    <div className="preloader-logo-container">
      <img src={logoUrl} alt="Loading..." className="preloader-logo-grayscale" />
      <img src={logoUrl} alt="" className="preloader-logo-color" />
    </div>
    <div className="preloader-progress-bar">
      <div className="preloader-progress-fill"></div>
    </div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHiding, setIsHiding] = useState(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState({ page: 'home', slug: null });

  const [popupFormData, setPopupFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    message: ''
  });
  const [isPopupSubmitting, setIsPopupSubmitting] = useState(false);
  const [popupStatus, setPopupStatus] = useState({ message: '', type: '' });

  useEffect(() => {
    const hideTimer = setTimeout(() => setIsHiding(true), 2000);
    const removeTimer = setTimeout(() => setIsLoading(false), 2800);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    let timer;
    if (!isLoading && currentPage.page === 'home') {
      timer = setTimeout(() => setIsContactPopupOpen(true), 5000);
    }
    return () => clearTimeout(timer);
  }, [currentPage, isLoading]);

  const handlePopupChange = (e) => {
    const { name, value } = e.target;
    setPopupFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePopupFormSubmit = async (e) => {
    e.preventDefault();
    setIsPopupSubmitting(true);
    setPopupStatus({ message: '', type: '' });

    try {
      if (!apiUrl) {
        throw new Error("API base URL is not defined. Check your .env file.");
      }

      const response = await fetch(`${apiUrl}/api/popup-submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(popupFormData)
      });

      const result = await response.json();

      if (response.ok) {
        setPopupStatus({ message: result.msg || 'Message sent successfully!', type: 'success' });
        setPopupFormData({ fullName: '', email: '', service: '', message: '' });
        setTimeout(() => {
          setIsContactPopupOpen(false);
          setPopupStatus({ message: '', type: '' });
        }, 3000);
      } else {
        setPopupStatus({ message: result.msg || `Error: ${response.status}`, type: 'error' });
      }
    } catch (error) {
      console.error('Popup submission error:', error);
      setPopupStatus({ message: 'Failed to connect to the server. Please check your network.', type: 'error' });
    } finally {
      setIsPopupSubmitting(false);
    }
  };

  const handleNavigate = (page, slug = null) => {
    setCurrentPage({ page, slug });
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage.page) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <AdComponent adSlot="1234567890" /> {/* Replace with your actual AdSense slot ID */}
            <AboutSection />
            <PortfolioSection />
            <AdComponent adSlot="9876543210" /> {/* Another ad slot example */}
            <ServicesSection />
            <TechnologiesSection />
            <CallToActionSection onOpenContactModal={() => setIsContactPopupOpen(true)} />
          </>
        );
      case 'about':
        return <AboutPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'contact':
        return <ContactPage />;
      case 'service': {
        let selectedService = serviceData.find(s => s.slug === currentPage.slug);
        if (!selectedService) {
          selectedService = serviceData[0];
          console.warn(`Service with slug "${currentPage.slug}" not found. Displaying first service as fallback.`);
        }
        return <ServicePage service={selectedService} />;
      }
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <AboutSection />
            <PortfolioSection />
            <ServicesSection />
            <TechnologiesSection />
            <CallToActionSection onOpenContactModal={() => setIsContactPopupOpen(true)} />
          </>
        );
    }
  };

  return (
    <>
      {isLoading && <Preloader isHiding={isHiding} />}
      {!isLoading && (
        <div className="website-content">
          <Header onNavigate={handleNavigate} currentPage={currentPage.page} />
          <main>{renderPage()}</main>
          <Footer />
          <AIChatWidget />

          <Modal isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} customClass="contact-popup-modal">
            <div className="contact-popup-content">
              <button aria-label="Close modal" className="popup-close-btn" onClick={() => setIsContactPopupOpen(false)}>×</button>
              <div className="popup-header"><h2>Get In Touch</h2></div>
              <div className="wavy-divider"><svg viewBox="0 0 500 40"><path d="M0,20 C150,40 350,0 500,20 L500,00 L0,0 Z" style={{stroke:'none',fill:'var(--primary-dark-blue, #0d2340)'}}></path></svg></div>
              <div className="popup-form-body">
                {popupStatus.message && (
                  <div className={`status-message ${popupStatus.type}`}>
                    {popupStatus.message}
                  </div>
                )}
                <form className="popup-form" onSubmit={handlePopupFormSubmit}>
                  <div className="popup-input-group">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your Name"
                      value={popupFormData.fullName}
                      onChange={handlePopupChange}
                      required
                      aria-label="Full Name"
                    />
                    <FaUser className="input-icon" />
                  </div>
                  <div className="popup-input-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={popupFormData.email}
                      onChange={handlePopupChange}
                      required
                      aria-label="Email Address"
                    />
                    <FaEnvelope className="input-icon" />
                  </div>
                  <div className="popup-input-group">
                    <select
                      name="service"
                      value={popupFormData.service}
                      onChange={handlePopupChange}
                      required
                      aria-label="Select Service"
                    >
                      <option value="" disabled>Select a Service</option>
                      {servicesList.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                    <FaConciergeBell className="input-icon" />
                  </div>
                  <div className="popup-input-group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={popupFormData.message}
                      onChange={handlePopupChange}
                      required
                      rows="4"
                      aria-label="Your Message"
                    ></textarea>
                    <FaPencilAlt className="input-icon" style={{top:'22px'}}/>
                  </div>
                  <button type="submit" className="popup-submit-button" disabled={isPopupSubmitting}>
                    {isPopupSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}

export default App;

