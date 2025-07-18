// src/components/ContactPage.js

import React, { useState } from 'react';
import '../css/ContactPage.css'; // Make sure this path is correct
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const servicesList = [
    "Mobile Application", "Web Application", "Digital Marketing", "Game Development",
    "Augmented Reality (AR)", "Virtual Reality (VR)", "Blockchain Technology",
    "AI-Powered Solutions", "UI/UX"
];

// URLs for the background images
const heroBgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSokYc69V9-vs8ugCMeISj-0yLRxsF-6BMIeQ&s';
const infoCardBgUrl = 'https://solvebytez.com/assets/images/backgrounds/page-header-bg.jpg';

const ContactPage = () => {
    // State management for the form
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', service: '', message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your message has been sent.`);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    return (
        <div className="contact-page-container">
            {/* --- NEW: Hero Banner Section --- */}
            <section className="contact-hero-banner" style={{ backgroundImage: `url(${heroBgUrl})` }}>
                <div className="container">
                    <div className="banner-content">
                        <h1>Contact Us</h1>
                        <p>Home - Contact</p>
                    </div>
                </div>
            </section>

            {/* --- Main Content Section (Form + Info Card) --- */}
            <section className="contact-main-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Left Side: The Form */}
                        <div className="contact-form-wrapper">
                            <h3>Get In Touch</h3>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group"><label htmlFor="name">Your name</label><input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /></div>
                                    <div className="form-group"><label htmlFor="email">Your email address</label><input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /></div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group"><label htmlFor="phone">Your phone number</label><input type="tel" id="phone" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required /></div>
                                    <div className="form-group"><label htmlFor="service">Service Required</label><select id="service" name="service" value={formData.service} onChange={handleChange} required><option value="" disabled>Service</option>{servicesList.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
                                </div>
                                <div className="form-group full-width"><label htmlFor="message">Let us know what you need.</label><textarea id="message" name="message" placeholder="Let us know what you need." value={formData.message} onChange={handleChange} required></textarea></div>
                                <button type="submit" className="submit-btn">Send Message</button>
                            </form>
                        </div>
                        {/* Right Side: The Blue Info Card */}
                        <div className="contact-info-card" style={{ backgroundImage: `linear-gradient(rgba(29, 69, 130, 0.88), rgba(13, 35, 64, 0.92)), url(${infoCardBgUrl})` }}>
                            <h3>Don't hesitate to contact us</h3>
                            <div className="info-item"><div className="info-icon"><FaPhoneAlt /></div><div className="info-text"><span>Call Us</span><p>+91-9599179795</p></div></div>
                            <div className="info-item"><div className="info-icon"><FaEnvelope /></div><div className="info-text"><span>Write to Us</span><p>solvebytez@gmail.com</p></div></div>
                            <div className="info-item"><div className="info-icon"><FaMapMarkerAlt /></div><div className="info-text"><span>Our Location</span><p>Rahul Vihar 2, Pratap Vihar, Sector 12, Ghaziabad 201009, (Uttar Pradesh)</p></div></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;