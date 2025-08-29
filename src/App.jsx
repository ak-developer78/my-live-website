// import React, { useState, useEffect } from 'react';

// // Import CSS
// import './index.css'; // Make sure you have this base CSS file
// import './App.css';

// // Import All Components
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import AboutSection from './components/AboutSection';
// import PortfolioSection from './components/PortfolioSection';
// import ServicesSection from './components/ServicesSection';
// import TechnologiesSection from './components/TechnologiesSection';
// import CallToActionSection from './components/CallToActionSection';
// import AIChatWidget from './components/AIChatWidget';
// import Modal from './components/Modal';
// import ContactPage from './pages/ContactPage'; // Import the new full contact page

// // Import Icons for the modal form
// import { FaUser, FaEnvelope, FaPencilAlt, FaConciergeBell } from 'react-icons/fa';

// // Define the list of services for the dropdown
// const servicesList = [
//   "Mobile Application", "Web Application", "Digital Marketing", "Game Development",
//   "Augmented Reality (AR)", "Virtual Reality (VR)", "Blockchain Technology",
//   "AI-Powered Solutions", "UI/UX"
// ];

// function App() {
//   // NEW: State to manage which page is visible ('home' or 'contact')
//   const [currentPage, setCurrentPage] = useState('home');

//   // EXISTING: State for your contact pop-up modal
//   const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

//   // MODIFIED: This effect for the modal now only runs on the 'home' page
//   useEffect(() => {
//     let timer;
//     if (currentPage === 'home') {
//       timer = setTimeout(() => {
//         setIsContactPopupOpen(true);
//       }, 5000);
//     }
//     return () => clearTimeout(timer);
//   }, [currentPage]); // Dependency array ensures this re-evaluates when the page changes

//   // EXISTING: Handler for the modal's form submission
//   const handlePopupFormSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for your message! We will get in touch soon.');
//     setIsContactPopupOpen(false);
//   };

//   // NEW: Function to handle navigation clicks from the Header
//   const handleNavigate = (page) => {
//     setCurrentPage(page);
//     window.scrollTo(0, 0); // Scroll to top when changing pages
//   };

//   return (
//     <>
//       {/* MODIFIED: The Header now receives props to control navigation */}
//       <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
//       <main>
//         {/* NEW: Conditional rendering to show the correct page content */}
//         {currentPage === 'home' && (
//           <>
//             <Hero />
//             <AboutSection />
//             <PortfolioSection />
//             <ServicesSection />
//             <TechnologiesSection />
//             <CallToActionSection onOpenContactModal={() => setIsContactPopupOpen(true)} />
//           </>
//         )}

//         {currentPage === 'contact' && (
//           <ContactPage />
//         )}
//       </main>
      
//       <Footer />
      
//       <AIChatWidget />

//       {/* EXISTING: Your Modal logic remains the same */}
//       <Modal 
//         isOpen={isContactPopupOpen} 
//         onClose={() => setIsContactPopupOpen(false)}
//         customClass="contact-popup-modal"
//       >
//         <div className="contact-popup-content">
//           <button 
//             aria-label="Close modal"
//             className="popup-close-btn" 
//             onClick={() => setIsContactPopupOpen(false)}
//           >
//             ×
//           </button>
//           <div className="popup-header">
//             <h2>Get In Touch</h2>
//           </div>
//           <div className="wavy-divider">
//             <svg viewBox="0 0 500 40" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
//               <path d="M0,20 C150,40 350,0 500,20 L500,00 L0,0 Z" style={{ stroke: 'none', fill: 'var(--primary-dark-blue, #0d2340)' }}></path>
//             </svg>
//           </div>
//           <div className="popup-form-body">
//             <form className="popup-form" onSubmit={handlePopupFormSubmit}>
//               <div className="popup-input-group">
//                 <input type="text" id="popup-name" name="fullName" placeholder="Your Name" required />
//                 <FaUser className="input-icon" />
//               </div>
//               <div className="popup-input-group">
//                 <input type="email" id="popup-email" name="email" placeholder="Your Email" required />
//                 <FaEnvelope className="input-icon" />
//               </div>
//               <div className="popup-input-group">
//                 <select id="popup-service" name="service" required defaultValue="">
//                   <option value="" disabled>Select a Service</option>
//                   {servicesList.map((service, index) => (
//                     <option key={index} value={service}>{service}</option>
//                   ))}
//                 </select>
//                 <FaConciergeBell className="input-icon" />
//               </div>
//               <div className="popup-input-group">
//                 <textarea id="popup-message" name="message" placeholder="Your Message" required></textarea>
//                 <FaPencilAlt className="input-icon" style={{top: '22px'}}/>
//               </div>
//               <button type="submit" className="popup-submit-button">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// }

// export default App;
































// import React, { useState, useEffect } from 'react';

// // Import CSS
// import './index.css';
// import './App.css';

// // Import All Components & Pages
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import AboutSection from './components/AboutSection';
// import PortfolioSection from './components/PortfolioSection';
// import ServicesSection from './components/ServicesSection';
// import TechnologiesSection from './components/TechnologiesSection';
// import CallToActionSection from './components/CallToActionSection';
// import AIChatWidget from './components/AIChatWidget';
// import Modal from './components/Modal';
// import ContactPage from './pages/ContactPage';
// import AboutPage from './pages/AboutPage';
// import PortfolioPage from './pages/PortfolioPage'; // <-- IMPORT THE NEW PORTFOLIO PAGE

// // Import Icons for the modal form
// import { FaUser, FaEnvelope, FaPencilAlt, FaConciergeBell } from 'react-icons/fa';

// // Define the list of services for the dropdown
// const servicesList = [
//   "Mobile Application", "Web Application", "Digital Marketing", "Game Development",
//   "Augmented Reality (AR)", "Virtual Reality (VR)", "Blockchain Technology",
//   "AI-Powered Solutions", "UI/UX"
// ];

// function App() {
//   // State to manage which page is visible ('home', 'about', 'contact', etc.)
//   const [currentPage, setCurrentPage] = useState('home');

//   // State for your contact pop-up modal
//   const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

//   // This effect for the modal now only runs on the 'home' page
//   useEffect(() => {
//     let timer;
//     if (currentPage === 'home') {
//       timer = setTimeout(() => {
//         setIsContactPopupOpen(true);
//       }, 5000);
//     }
//     return () => clearTimeout(timer);
//   }, [currentPage]);

//   // Handler for the modal's form submission
//   const handlePopupFormSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for your message! We will get in touch soon.');
//     setIsContactPopupOpen(false);
//   };

//   // Function to handle navigation clicks from the Header
//   const handleNavigate = (page) => {
//     setCurrentPage(page);
//     window.scrollTo(0, 0); // Scroll to top when changing pages
//   };

//   // Helper function to render the main content based on currentPage
//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return (
//           <>
//             <Hero />
//             <AboutSection />
//             <PortfolioSection />
//             <ServicesSection />
//             <TechnologiesSection />
//             <CallToActionSection onOpenContactModal={() => setIsContactPopupOpen(true)} />
//           </>
//         );
//       case 'about':
//         return <AboutPage />;
//       case 'portfolio': // <-- ADDED CASE FOR PORTFOLIO
//         return <PortfolioPage />;
//       case 'contact':
//         return <ContactPage />;
//       default:
//         return ( // Default to home page content
//           <>
//             <Hero />
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
//       <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
//       <main>
//         {/* Conditional rendering to show the correct page content */}
//         {renderPage()}
//       </main>
      
//       <Footer />
      
//       <AIChatWidget />

//       {/* Your Modal logic remains the same */}
//       <Modal 
//         isOpen={isContactPopupOpen} 
//         onClose={() => setIsContactPopupOpen(false)}
//         customClass="contact-popup-modal"
//       >
//         <div className="contact-popup-content">
//           <button 
//             aria-label="Close modal"
//             className="popup-close-btn" 
//             onClick={() => setIsContactPopupOpen(false)}
//           >
//             ×
//           </button>
//           <div className="popup-header">
//             <h2>Get In Touch</h2>
//           </div>
//           <div className="wavy-divider">
//             <svg viewBox="0 0 500 40" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
//               <path d="M0,20 C150,40 350,0 500,20 L500,00 L0,0 Z" style={{ stroke: 'none', fill: 'var(--primary-dark-blue, #0d2340)' }}></path>
//             </svg>
//           </div>
//           <div className="popup-form-body">
//             <form className="popup-form" onSubmit={handlePopupFormSubmit}>
//               <div className="popup-input-group">
//                 <input type="text" id="popup-name" name="fullName" placeholder="Your Name" required />
//                 <FaUser className="input-icon" />
//               </div>
//               <div className="popup-input-group">
//                 <input type="email" id="popup-email" name="email" placeholder="Your Email" required />
//                 <FaEnvelope className="input-icon" />
//               </div>
//               <div className="popup-input-group">
//                 <select id="popup-service" name="service" required defaultValue="">
//                   <option value="" disabled>Select a Service</option>
//                   {servicesList.map((service, index) => (
//                     <option key={index} value={service}>{service}</option>
//                   ))}
//                 </select>
//                 <FaConciergeBell className="input-icon" />
//               </div>
//               <div className="popup-input-group">
//                 <textarea id="popup-message" name="message" placeholder="Your Message" required></textarea>
//                 <FaPencilAlt className="input-icon" style={{top: '22px'}}/>
//               </div>
//               <button type="submit" className="popup-submit-button">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// }

// export default App;

































// import React, { useState, useEffect } from 'react';

// // Import CSS
// import './index.css';
// import './App.css';

// // Import All Components & Pages
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import AboutSection from './components/AboutSection';
// import PortfolioSection from './components/PortfolioSection';
// import ServicesSection from './components/ServicesSection';
// import TechnologiesSection from './components/TechnologiesSection';
// import CallToActionSection from './components/CallToActionSection';
// import AIChatWidget from './components/AIChatWidget';
// import Modal from './components/Modal';
// import ContactPage from './pages/ContactPage';
// import AboutPage from './pages/AboutPage';
// import PortfolioPage from './pages/PortfolioPage';
// import ServicePage from './pages/ServicePage'; // <-- UPDATED: Import the new ServicePage
// import { serviceData } from './data/serviceData'; // <-- UPDATED: Import service data

// // Import Icons for the modal form
// import { FaUser, FaEnvelope, FaPencilAlt, FaConciergeBell } from 'react-icons/fa';

// // This list is now just for the modal, not for navigation
// const servicesList = [
//   "Mobile Application", "Web Application", "Digital Marketing", "Game Development",
//   "Augmented Reality (AR)", "Virtual Reality (VR)", "Blockchain Technology",
//   "AI-Powered Solutions", "UI/UX"
// ];

// function App() {
//   // <-- UPDATED: State now holds an object to track page and a potential 'slug'
//   const [currentPage, setCurrentPage] = useState({ page: 'home', slug: null });

//   // State for your contact pop-up modal
//   const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

//   // <-- UPDATED: Effect now checks currentPage.page
//   useEffect(() => {
//     let timer;
//     if (currentPage.page === 'home') {
//       timer = setTimeout(() => {
//         setIsContactPopupOpen(true);
//       }, 5000);
//     }
//     return () => clearTimeout(timer);
//   }, [currentPage]);

//   // Handler for the modal's form submission
//   const handlePopupFormSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for your message! We will get in touch soon.');
//     setIsContactPopupOpen(false);
//   };

//   // <-- UPDATED: Navigation handler now accepts page and slug
//   const handleNavigate = (page, slug = null) => {
//     setCurrentPage({ page, slug });
//     window.scrollTo(0, 0); // Scroll to top when changing pages
//   };

//   // <-- UPDATED: renderPage logic is now more powerful
//   const renderPage = () => {
//     switch (currentPage.page) {
//       case 'home':
//         return (
//           <>
//             <Hero />
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
//       case 'service': { // <-- UPDATED: New case to handle all service pages
//         // Find the correct service from our data using the slug
//         const selectedService = serviceData.find(s => s.slug === currentPage.slug);
//         // Render the ServicePage component with the data for that service
//         return <ServicePage service={selectedService} />;
//       }
//       default:
//         return ( // Default to home page content
//           <>
//             <Hero />
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
//       {/* <-- UPDATED: Pass currentPage.page to Header for active link styling */}
//       <Header onNavigate={handleNavigate} currentPage={currentPage.page} />
      
//       <main>
//         {/* The renderPage function now handles all routing */}
//         {renderPage()}
//       </main>
      
//       <Footer />
      
//       <AIChatWidget />

//       {/* Your Modal logic remains the same and works independently */}
//       <Modal 
//         isOpen={isContactPopupOpen} 
//         onClose={() => setIsContactPopupOpen(false)}
//         customClass="contact-popup-modal"
//       >
//         <div className="contact-popup-content">
//           <button 
//             aria-label="Close modal"
//             className="popup-close-btn" 
//             onClick={() => setIsContactPopupOpen(false)}
//           >
//             ×
//           </button>
//           <div className="popup-header">
//             <h2>Get In Touch</h2>
//           </div>
//           <div className="wavy-divider">
//             <svg viewBox="0 0 500 40" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
//               <path d="M0,20 C150,40 350,0 500,20 L500,00 L0,0 Z" style={{ stroke: 'none', fill: 'var(--primary-dark-blue, #0d2340)' }}></path>
//             </svg>
//           </div>
//           <div className="popup-form-body">
//             <form className="popup-form" onSubmit={handlePopupFormSubmit}>
//               <div className="popup-input-group">
//                 <input type="text" id="popup-name" name="fullName" placeholder="Your Name" required />
//                 <FaUser className="input-icon" />
//               </div>
//               <div className="popup-input-group">
//                 <input type="email" id="popup-email" name="email" placeholder="Your Email" required />
//                 <FaEnvelope className="input-icon" />
//               </div>
//               <div className="popup-input-group">
//                 <select id="popup-service" name="service" required defaultValue="">
//                   <option value="" disabled>Select a Service</option>
//                   {servicesList.map((service, index) => (
//                     <option key={index} value={service}>{service}</option>
//                   ))}
//                 </select>
//                 <FaConciergeBell className="input-icon" />
//               </div>
//               <div className="popup-input-group">
//                 <textarea id="popup-message" name="message" placeholder="Your Message" required></textarea>
//                 <FaPencilAlt className="input-icon" style={{top: '22px'}}/>
//               </div>
//               <button type="submit" className="popup-submit-button">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </Modal>
//     </>
//   );
// }

// export default App;
















import React, { useState, useEffect } from 'react'; @@ -587,7 +585,21 @@ const apiUrl = import.meta.env.VITE_API_BASE_URL; const logoUrl = 'https://solvebytez.com/assets/images/logos/main-logo.png'; const servicesList = [ "Mobile Application", "Web Application", "Digital Marketing", "Game Development", "Augmented Reality (AR)", "Virtual Reality (VR)", "Blockchain Technology", "AI-Powered Solutions", "UI/UX" ]; const Preloader = ({ isHiding }) => ( <div className={preloader-overlay ${isHiding ? 'hiding' : ''}}><div className="preloader-gate-left"></div><div className="preloader-gate-right"></div><div className="preloader-logo-container"><img src={logoUrl} alt="Loading..." className="preloader-logo-grayscale" /><img src={logoUrl} alt="" className="preloader-logo-color" /></div></div> ); // --- UPDATED PRELOADER COMPONENT --- const Preloader = ({ isHiding }) => ( <div className={preloader-overlay ${isHiding ? 'hiding' : ''}}> <div className="preloader-gate preloader-gate-left"></div> <div className="preloader-gate preloader-gate-right"></div> <div className="preloader-logo-container"> <img src={logoUrl} alt="Loading..." className="preloader-logo-grayscale" /> <img src={logoUrl} alt="" className="preloader-logo-color" /> <div className="preloader-progress-bar"></div> {/* Added progress bar */} </div> </div> ); // --- END UPDATED PRELOADER COMPONENT --- function App() { const [isLoading, setIsLoading] = useState(true); @@ -598,113 +610,127 @@ const [isPopupSubmitting, setIsPopupSubmitting] = useState(false); const [popupStatus, setPopupStatus] = useState({ message: '', type: '' }); useEffect(() => { const hideTimer = setTimeout(() => setIsHiding(true), 2000); const removeTimer = setTimeout(() => setIsLoading(false), 2800); return () => { clearTimeout(hideTimer); clearTimeout(removeTimer); }; }, []); useEffect(() => { let timer; if (!isLoading && currentPage.page === 'home') { timer = setTimeout(() => setIsContactPopupOpen(true), 5000); } return () => clearTimeout(timer); }, [currentPage, isLoading]); useEffect(() => { const hideTimer = setTimeout(() => setIsHiding(true), 2000); // Start closing animation after 2 seconds const removeTimer = setTimeout(() => setIsLoading(false), 2800); // Remove component from DOM after 2.8 seconds (matching gate animation) return () => { clearTimeout(hideTimer); clearTimeout(removeTimer); }; }, []); useEffect(() => { let timer; if (!isLoading && currentPage.page === 'home') { timer = setTimeout(() => setIsContactPopupOpen(true), 5000); } return () => clearTimeout(timer); }, [currentPage, isLoading]); const handlePopupChange = (e) => { const { name, value } = e.target; setPopupFormData(prev => ({ ...prev, [name]: value })); }; const handlePopupFormSubmit = async (e) => { e.preventDefault(); setIsPopupSubmitting(true); setPopupStatus({ message: '', type: '' }); try { const response = await fetch(${apiUrl}/api/popup-submit, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(popupFormData) }); const result = await response.json(); if (response.ok) { setPopupStatus({ message: result.msg, type: 'success' }); setPopupFormData({ fullName: '', email: '', service: '', message: '' }); setTimeout(() => setIsContactPopupOpen(false), 2000); } else { setPopupStatus({ message: Error: ${result.msg}, type: 'error' }); } } catch (error) { console.error('Popup submission error:', error); setPopupStatus({ message: 'Failed to connect to the server.', type: 'error' }); } finally { setIsPopupSubmitting(false); } }; const handleNavigate = (page, slug = null) => { setCurrentPage({ page, slug }); window.scrollTo(0, 0); }; const renderPage = () => { switch(currentPage.page) { case 'home': return ( <> <Hero onNavigate={handleNavigate} /> <AboutSection /> <PortfolioSection /> <ServicesSection /> <TechnologiesSection /> <CallToActionSection onOpenContactModal={() => setIsContactPopupOpen(true)} /> </> ); case 'about': return <AboutPage />; case 'portfolio': return <PortfolioPage />; case 'contact': return <ContactPage />; // --- THIS IS THE CORRECTED LOGIC --- case 'service': { // Try to find the service using the slug from the state. let selectedService = serviceData.find(s => s.slug === currentPage.slug); // If no service was found (because the slug was null or invalid)... if (!selectedService) { // ...then default to the VERY FIRST service in your data file. selectedService = serviceData[0]; } // Now, render the ServicePage with a valid service object. return <ServicePage service={selectedService} />; } default: // For any other unknown page, we can just render the homepage. return ( <> <Hero onNavigate={handleNavigate} /> <AboutSection /> <PortfolioSection /> <ServicesSection /> <TechnologiesSection /> <CallToActionSection onOpenContactModal={() => setIsContactPopupOpen(true)} /> </> ); } }; return ( <> {isLoading && <Preloader isHiding={isHiding} />} {!isLoading && ( <div className="website-content"> <Header onNavigate={handleNavigate} currentPage={currentPage.page} /> <main>{renderPage()}</main> <Footer /> <AIChatWidget /> <Modal isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} customClass="contact-popup-modal"> <div className="contact-popup-content"> <button aria-label="Close modal" className="popup-close-btn" onClick={() => setIsContactPopupOpen(false)}>×</button> <div className="popup-header"><h2>Get In Touch</h2></div> <div className="wavy-divider"><svg viewBox="0 0 500 40"><path d="M0,20 C150,40 350,0 500,20 L500,00 L0,0 Z" style={{stroke:'none',fill:'var(--primary-dark-blue, #0d2340)'}}></path></svg></div> <div className="popup-form-body"> {popupStatus.message && (<div className={status-message ${popupStatus.type}}>{popupStatus.message}</div>)} <form className="popup-form" onSubmit={handlePopupFormSubmit}> {/* Form inputs... */} <div className="popup-input-group"><input type="text" name="fullName" placeholder="Your Name" value={popupFormData.fullName} onChange={handlePopupChange} required /><FaUser className="input-icon" /></div> <div className="popup-input-group"><input type="email" name="email" placeholder="Your Email" value={popupFormData.email} onChange={handlePopupChange} required /><FaEnvelope className="input-icon" /></div> <div className="popup-input-group"><select name="service" value={popupFormData.service} onChange={handlePopupChange} required><option value="" disabled>Select a Service</option>{servicesList.map((s, i) => (<option key={i} value={s}>{s}</option>))}</select><FaConciergeBell className="input-icon" /></div> <div className="popup-input-group"><textarea name="message" placeholder="Your Message" value={popupFormData.message} onChange={handlePopupChange} required></textarea><FaPencilAlt className="input-icon" style={{top:'22px'}}/></div> <button type="submit" className="popup-submit-button" disabled={isPopupSubmitting}>{isPopupSubmitting ? 'Sending...' : 'Send Message'}</button> </form> </div> </div> </Modal> </div> )} </> ); } export default App;
