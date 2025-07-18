// src/pages/ServicePage.js

import React, { useState } from 'react'; // Import useState
import '../css/ServicePage.css';

// Define the list of services for the dropdown in the form
const servicesList = [
    "Mobile Application", "Web Application", "Digital Marketing", "Game Development",
    "Augmented Reality (AR)", "Virtual Reality (VR)", "Blockchain Technology",
    "AI-Powered Solutions", "UI/UX"
];

// --- UPDATED: ContactFormSection is now a stateful component ---
const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a server or email service
        console.log('Form Submitted:', formData);
        alert(`Thank you, ${formData.name}! Your message has been sent.`);
        // Reset form after submission
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    return (
        <section className="contact-form-section">
            <div className="container">
                <div className="contact-form-wrapper">
                    {/* Left side: The Form */}
                    <div className="form-container">
                        <h3>Get In Touch</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Your name</label>
                                    <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your email address</label>
                                    <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Your phone number</label>
                                    <input type="tel" id="phone" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="service">Service Required</label>
                                    <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                                        <option value="" disabled>Service</option>
                                        {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <label htmlFor="message">Let us know what you need.</label>
                                <textarea id="message" name="message" placeholder="Let us know what you need." value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="send-message-btn">Send Message</button>
                        </form>
                    </div>

                    {/* Right side: The Blue Info Box */}
                    <div className="contact-info-box">
                        <h3>Don't hesitate to contact us</h3>
                        <div className="contact-item">
                            <i className="fas fa-phone-alt"></i>
                            <div>
                                <span>Call Us</span>
                                <p>+91-9599179795</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <span>Write to Us</span>
                                <p>solvebytez@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <span>Our Address</span>
                                <p>Rahul Vihar 2, Pratap Vihar, Sector 12, Ghaziabad 201009, (Uttar Pradesh)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// The ServicePage component remains the same as before
const ServicePage = ({ service }) => {
    if (!service) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2>Service Not Found</h2>
                <p>The service you are looking for does not exist or has not been configured yet.</p>
            </div>
        );
    }
    return (
        <div className="service-page">
            <section className="service-hero">
                <div className="container">
                    <h1>Services</h1>
                    <p>Home - {service.heroTitle}</p>
                </div>
            </section>
            <section className="service-content-section">
                <div className="container">
                    <h2>{service.mainTitle}</h2>
                    <p className="service-description">{service.description}</p>
                    <div className="service-features-grid">
                        {service.features.map((feature, index) => (
                            <div className="feature-card" key={index}>
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