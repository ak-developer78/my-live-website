// src/components/UniquePortfolio.js  <-- NOTE THE NEW FILENAME

import React from 'react';
import '../css/PortfolioSection.css'; // We will create this new CSS file next

// Data for the portfolio cards (no changes here)
const portfolioData = [
  { image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Corporate Website Redesign', category: 'Web Application', description: 'A complete overhaul of a major corporate website to improve user engagement and modernize its brand identity.' },
  { image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'E-commerce Platform', category: 'Web Application', description: 'Developed a scalable e-commerce solution with a custom CMS and integrated payment gateways for a growing retail brand.' },
  { image: 'https://images.pexels.com/photos/6943232/pexels-photo-6943232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'AR Furniture Placement App', category: 'Augmented Reality', description: 'An innovative AR mobile app that allows users to visualize furniture in their own space before buying.' },
  { image: 'https://images.pexels.com/photos/4315822/pexels-photo-4315822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Fitness Tracker Mobile App', category: 'Mobile Application', description: 'A sleek and intuitive mobile app for tracking workouts, nutrition, and progress with social sharing features.' },
  { image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Project Management Dashboard', category: 'Web Application', description: 'A feature-rich dashboard for teams to manage tasks, timelines, and resources efficiently in one place.' },
  { image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'VR Training Simulation', category: 'Virtual Reality', description: 'An immersive VR simulation for industrial training, reducing risks and improving learning retention.' },
];

const Portfolio = () => {
  return (
    // UNIQUE CLASS: The main container for the entire section
    <section className="unique-portfolio-section">
      <div className="unique-portfolio-container">
        {/* UNIQUE CLASS: The header for the section */}
        <div className="unique-portfolio-header">
          <h3 className="unique-portfolio-subheading">Our Work</h3>
          <h2 className="unique-portfolio-mainheading">Explore Our Recent Projects</h2>
          <p>
            We take pride in our work. Here’s a selection of projects that showcase our skills and dedication to quality.
          </p>
        </div>

        {/* UNIQUE CLASS: The grid that holds all the cards */}
        <div className="unique-portfolio-grid">
          {portfolioData.map((project, index) => (
            // UNIQUE CLASS: This is the main card element that needs to be hovered
            <div className="unique-portfolio-card" key={index}>
              <img src={project.image} alt={project.title} className="unique-portfolio-image" />
              {/* UNIQUE CLASS: This overlay contains all the text and slides up on hover */}
              <div className="unique-portfolio-overlay">
                <div className="unique-portfolio-content">
                  <p className="unique-portfolio-category">{project.category}</p>
                  <h4 className="unique-portfolio-title">{project.title}</h4>
                  <p className="unique-portfolio-description">{project.description}</p>
                  <a href="#view-project" className="unique-portfolio-link">
                    View Project <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;