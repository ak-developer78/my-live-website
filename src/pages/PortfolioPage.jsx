import React, { useEffect, useRef } from 'react';
import '../css/PortfolioPage.css'; // The path to your updated CSS

// URL for the banner background
const heroBgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgn1CsNJZ5efQHJsDgRNAxeRJcNH4mg9jcQ&s';

// Updated array with more realistic data and actual image URLs
const portfolioItems = [
    { id: 1, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/1.png', title: 'E-commerce Platform', category: 'Web Development' },
    { id: 2, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/2.png', title: 'Mobile Ordering App', category: 'Mobile App' },
    { id: 3, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/3.png', title: 'SAAS Dashboard', category: 'UI/UX Design' },
    { id: 4, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/5.png', title: 'Digital Art Marketplace', category: 'Web Development' },
    { id: 5, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/7.png', title: 'Liquid Samples Site', category: 'E-commerce' },
    { id: 6, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/8.png', title: 'Divine Fashion Store', category: 'E-commerce' },
    { id: 7, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/9.png', title: 'Government Portal', category: 'Web Development' },
    { id: 8, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/11.png', title: 'Customer Service Hub', category: 'Web Application' },
    { id: 9, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/11.png', title: 'Kids Learning App', category: 'Mobile App' },
    { id: 10, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/2.png', title: 'Mobile Ordering App', category: 'Mobile App' },
    { id: 11, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/3.png', title: 'SAAS Dashboard', category: 'UI/UX Design' },
    { id: 12, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/5.png', title: 'Digital Art Marketplace', category: 'Web Development' },
    { id: 13, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/7.png', title: 'Liquid Samples Site', category: 'E-commerce' },
    { id: 14, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/8.png', title: 'Divine Fashion Store', category: 'E-commerce' },
     { id: 15, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/8.png', title: 'Divine Fashion Store', category: 'E-commerce' },
    { id: 16, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/9.png', title: 'Government Portal', category: 'Web Development' },
    { id: 17, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/11.png', title: 'Customer Service Hub', category: 'Web Application' },
    { id: 18, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/11.png', title: 'Kids Learning App', category: 'Mobile App' },
    { id: 19, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/2.png', title: 'Mobile Ordering App', category: 'Mobile App' },
    { id: 20, imgSrc: 'https://solvebytez.com/assets/images/portfoilo/3.png', title: 'SAAS Dashboard', category: 'UI/UX Design' },
];

const PortfolioPage = () => {
    // Ref for the grid container to trigger animations
    const gridRef = useRef(null);

    // useEffect to handle the staggered entry animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // When the grid container is visible, animate its children
                        const items = gridRef.current.children;
                        Array.from(items).forEach((item, index) => {
                            // Apply a staggered delay to each item
                            setTimeout(() => {
                                item.classList.add('is-visible');
                            }, index * 150); // 150ms delay between each item
                        });
                        observer.unobserve(entry.target); // Stop observing after animation
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the grid is visible
        );

        if (gridRef.current) {
            observer.observe(gridRef.current);
        }

        return () => {
            if (gridRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(gridRef.current);
            }
        };
    }, []);

    return (
        <div className="portfolio-page">
            <section className="portfolio-hero" style={{ backgroundImage: `url(${heroBgUrl})` }}>
                <div className="container">
                    <div className="hero-content-box">
                        <h1>Portfolio</h1>
                        <p className="breadcrumb">Home - Portfolio</p>
                    </div>
                </div>
            </section>

            <section className="portfolio-grid-section">
                <div className="container">
                    <div className="section-header">
                        <span className="sub-title">Our Work</span>
                        <h2>Explore Our Recent Projects</h2>
                        <p>A glimpse into the innovative solutions and successful projects we've delivered.</p>
                    </div>
                    <div className="portfolio-grid" ref={gridRef}>
                        {portfolioItems.map(item => (
                            <div key={item.id} className="portfolio-item">
                                <img src={item.imgSrc} alt={item.title} />
                                <div className="portfolio-overlay">
                                    <div className="overlay-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage;