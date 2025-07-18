import React, { useState, useEffect } from 'react';
import '../css/Hero.css'
const slides = [
  { title: 'AR & VR:', subtitle: 'Redefine user experiences with futuristic technologies.', imgUrl: 'https://solvebytez.com/assets/images/background/3.webp' },
  { title: 'Web Applications:', subtitle: 'Stunning designs with seamless functionality.', imgUrl: 'https://solvebytez.com/assets/images/background/1.webp' },
  { title: 'Mobile Applications:', subtitle: 'Intuitive and user-friendly mobile experiences.', imgUrl: 'https://solvebytez.com/assets/images/background/2.webp' }
];
  
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textAnimationClass, setTextAnimationClass] = useState('pop-in-bouncy');
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      // Trigger animations
      setTextAnimationClass('fade-out');
      setIsFlipping(true);

      const timeoutId = setTimeout(() => {
        // Update index after animations start
        setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
        
        // Reset animations for the new slide
        setTextAnimationClass('pop-in-bouncy');
        setIsFlipping(false);
      }, 1000); // This should match the flip animation duration

      return () => clearTimeout(timeoutId);
    }, 5000); // Time per slide

    return () => clearInterval(slideInterval);
  }, []);

  const activeSlide = slides[currentIndex];
  // Preload the next image
  const nextSlide = slides[(currentIndex + 1) % slides.length];

  return (
    <main id='hero' className="hero-section">
      {/* Container for the 3D flip effect */}
      <div className={`hero-flip-container ${isFlipping ? 'is-flipping' : ''}`}>
        <div className="hero-bg-slide front" style={{ backgroundImage: `url(${activeSlide.imgUrl})` }}></div>
        <div className="hero-bg-slide back" style={{ backgroundImage: `url(${nextSlide.imgUrl})` }}></div>
      </div>
      
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className={`hero-text ${textAnimationClass}`}>
          <h1>{activeSlide.title}</h1>
          <p>{activeSlide.subtitle}</p>
          <div className="hero-cta">
            <button className="cta-button primary">Our Services</button>
            <button className="cta-button secondary">Contact Us</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;