//   import React, { useState, useEffect } from 'react';
// import '../css/B.css'
//   const BackToTopButton = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     // Show button when page is scrolled down
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     // Set up a scroll event listener when the component mounts
//     useEffect(() => {
//       window.addEventListener('scroll', toggleVisibility);
//       // Clean up the listener when the component unmounts
//       return () => {
//         window.removeEventListener('scroll', toggleVisibility);
//       };
//     }, []);

//     // Smoothly scroll to the top of the page
//     const scrollToTop = () => {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       });
//     };

//     return (
//       <button
//         className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
//         onClick={scrollToTop}
//         aria-label="Go to top"
//       >
//         <i className="fas fa-arrow-up"></i>
//       </button>
//     );
//   };

//   export default BackToTopButton;