import React from 'react';
import '../css/PortfolioSection.css';

// Updated data with descriptions for a richer card experience
const portfolioData = [
  {
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Corporate Website Redesign',
    category: 'Web Application',
    description: 'A complete overhaul of a major corporate website to improve user engagement and modernize its brand identity.',
  },
  {
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'E-commerce Platform',
    category: 'Web Application',
    description: 'Developed a scalable e-commerce solution with a custom CMS and integrated payment gateways for a growing retail brand.',
  },
  {
    image: 'https://images.pexels.com/photos/6943232/pexels-photo-6943232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'AR Furniture Placement App',
    category: 'Augmented Reality',
    description: 'An innovative AR mobile app that allows users to visualize furniture in their own space before buying.',
  },
  {
    image: 'https://images.pexels.com/photos/4315822/pexels-photo-4315822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Fitness Tracker Mobile App',
    category: 'Mobile Application',
    description: 'A sleek and intuitive mobile app for tracking workouts, nutrition, and progress with social sharing features.',
  },
  {
    image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Project Management Dashboard',
    category: 'Web Application',
    description: 'A feature-rich dashboard for teams to manage tasks, timelines, and resources efficiently in one place.',
  },
  {
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'VR Training Simulation',
    category: 'Virtual Reality',
    description: 'An immersive VR simulation for industrial training, reducing risks and improving learning retention.',
  },
  // Add more projects if you like
];

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h3 className="sub-heading">Our Work</h3>
          <h2 className="main-heading">Explore Our Recent Projects</h2>
          <p className="section-intro">
            We take pride in our work. Here’s a selection of projects that showcase our skills and dedication to quality.
          </p>
        </div>
        <div className="portfolio-grid">
          {portfolioData.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <div className="portfolio-overlay">
                <div className="portfolio-content">
                  <p className="portfolio-category">{project.category}</p>
                  <h4 className="portfolio-title">{project.title}</h4>
                  <p className="portfolio-description">{project.description}</p>
                  <a href="#view-project" className="portfolio-link">
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

export default PortfolioSection;