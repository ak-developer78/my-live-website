// src/components/ServicePage.js

import React, { useState, useEffect, useRef } from 'react'; // <-- IMPORT useEffect and useRef
import '../css/ServicePage.css';

// --- ContactFormSection and servicesList remain the same ---
const servicesList = ["Mobile Application", "Web Application", "Digital Marketing", "Game Development", "Augmented Reality (AR)", "Virtual Reality (VR)", "Blockchain Technology", "AI-Powered Solutions", "UI/UX"];
const ContactFormSection = () => { /* ... your form component code ... */
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
    const handleChange = (e) => { const { name, value } = e.target; setFormData(prevData => ({ ...prevData, [name]: value })); };
    const handleSubmit = (e) => { e.preventDefault(); console.log('Form Submitted:', formData); alert(`Thank you, ${formData.name}! Your message has been sent.`); setFormData({ name: '', email: '', phone: '', service: '', message: '' }); };
    return (
        <section className="contact-form-section">
            <div className="container">
                <div className="contact-form-wrapper">
                    <div className="form-container">
                        <h3>Get In Touch</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row"><div className="form-group"><label htmlFor="name">Your name</label><input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /></div><div className="form-group"><label htmlFor="email">Your email address</label><input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /></div></div>
                            <div className="form-row"><div className="form-group"><label htmlFor="phone">Your phone number</label><input type="tel" id="phone" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required /></div><div className="form-group"><label htmlFor="service">Service Required</label><select id="service" name="service" value={formData.service} onChange={handleChange} required><option value="" disabled>Service</option>{servicesList.map(s => <option key={s} value={s}>{s}</option>)}</select></div></div>
                            <div className="form-group full-width"><label htmlFor="message">Let us know what you need.</label><textarea id="message" name="message" placeholder="Let us know what you need." value={formData.message} onChange={handleChange} required></textarea></div>
                            <button type="submit" className="send-message-btn">Send Message</button>
                        </form>
                    </div>
                    <div className="contact-info-box">
                        <h3>Don't hesitate to contact us</h3>
                        <div className="contact-item"><i className="fas fa-phone-alt"></i><div><span>Call Us</span><p>+91-9599179795</p></div></div>
                        <div className="contact-item"><i className="fas fa-envelope"></i><div><span>Write to Us</span><p>solvebytez@gmail.com</p></div></div>
                        <div className="contact-item"><i className="fas fa-map-marker-alt"></i><div><span>Our Address</span><p>Rahul Vihar 2, Pratap Vihar, Sector 12, Ghaziabad 201009, (Uttar Pradesh)</p></div></div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const ServicePage = ({ service }) => {
    // --- NEW: A ref to attach to the grid for event delegation ---
    const gridRef = useRef(null);

    // --- NEW: This effect handles all the mouse-tracking logic for the 3D effect ---
    useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const handleMouseMove = (e) => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            // Calculate mouse position relative to the card center
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Calculate rotation values (adjust the divisor for more/less tilt)
            const rotateY = (x / 20).toFixed(2);
            const rotateX = (-y / 20).toFixed(2);
            
            // Calculate shine position
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            // Apply styles via CSS custom properties for performance
            card.style.setProperty('--rotate-x', `${rotateX}deg`);
            card.style.setProperty('--rotate-y', `${rotateY}deg`);
            card.style.setProperty('--mouse-x', `${mouseX}px`);
            card.style.setProperty('--mouse-y', `${mouseY}px`);
        };

        const handleMouseLeave = (e) => {
            const card = e.currentTarget;
            // Reset styles when the mouse leaves
            card.style.setProperty('--rotate-x', '0deg');
            card.style.setProperty('--rotate-y', '0deg');
        };

        // Attach event listeners to each card in the grid
        const cards = grid.querySelectorAll('.feature-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseleave', handleMouseLeave);
        });

        // Cleanup: remove event listeners when the component unmounts
        return () => {
            cards.forEach(card => {
                card.removeEventListener('mousemove', handleMouseMove);
                card.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [service]); // Rerun effect if the service (and thus the cards) change

    if (!service) {
        return <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}><h2>Service Not Found</h2><p>The service you are looking for does not exist.</p></div>;
    }

    return (
        <div className="service-page">
            <section className="service-hero">
                <div className="container">
                    <div className="hero-content-box"><h1>{service.heroTitle}</h1><p>Home - {service.heroTitle}</p></div>
                </div>
            </section>
            
            <section className="service-content-section">
                <div className="container">
                    <h2>{service.mainTitle}</h2>
                    <p className="service-description">{service.description}</p>
                    {/* Attach the ref to the grid container */}
                    <div className="service-features-grid" ref={gridRef}>
                        {service.features.map((feature, index) => (
                            <div className="feature-card" key={index}>
                                {/* NEW: A div for the shine effect */}
                                <div className="card-shine"></div>
                                <div className="card-image-wrapper"><img src={feature.image} alt={feature.title} className="card-image" /></div>
                                <div className="card-content">
                                    <h4 className="card-title">{feature.title}</h4>
                                    <p className="card-text">{feature.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <ContactFormSection />
        </div>
    );
};

export default ServicePage;