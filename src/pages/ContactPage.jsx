// src/components/ContactPage.js

import React, { useState } from 'react';
import '../css/ContactPage.css'; // Make sure this path is correct
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, FaUsers, FaHeadset } from 'react-icons/fa';

const servicesList = [
    "Mobile Application", "Web Application", "Digital Marketing", "Game Development",
    "Augmented Reality (AR)", "Virtual Reality (VR)", "Blockchain Technology",
    "AI-Powered Solutions", "UI/UX"
];

// --- MAIN CONTACT PAGE COMPONENT ---
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
            {/* Hero Banner Section */}
            <section className="contact-hero-banner">
                <div className="container">
                    <div className="banner-content">
                        <h1>Contact Us</h1>
                        <p>Home - Contact</p>
                    </div>
                </div>
            </section>

            {/* Main Contact Form Section */}
            <section className="contact-form-section">
                <div className="container">
                    <div className="contact-form-wrapper">
                        {/* Left Side: The Form */}
                        <div className="form-container">
                            <h3>Get In Touch</h3>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row"><div className="form-group"><input type="text" id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required /></div><div className="form-group"><input type="email" id="email" name="email" placeholder="Your email address" value={formData.email} onChange={handleChange} required /></div></div>
                                <div className="form-row"><div className="form-group"><input type="tel" id="phone" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required /></div><div className="form-group"><select id="service" name="service" value={formData.service} onChange={handleChange} required><option value="" disabled>Service Required</option>{servicesList.map(s => <option key={s} value={s}>{s}</option>)}</select></div></div>
                                <div className="form-group full-width"><textarea id="message" name="message" placeholder="Let us know what you need." value={formData.message} onChange={handleChange} required></textarea></div>
                                <button type="submit" className="submit-btn">Send Message</button>
                            </form>
                        </div>
                        {/* Right Side: The Blue Info Box */}
                        <div className="contact-info-box">
                            <h3>Don't hesitate to contact us</h3>
                            <div className="info-item"><div className="info-icon"><FaPhoneAlt /></div><div className="info-text"><span>Call Us</span><p>+91-9599179795</p></div></div>
                            <div className="info-item"><div className="info-icon"><FaEnvelope /></div><div className="info-text"><span>Write to Us</span><p>info@solvebytez.com</p></div></div>
                            <div className="info-item"><div className="info-icon"><FaMapMarkerAlt /></div><div className="info-text"><span>Our Address</span><p>Rahul Vihar 2, Pratap Vihar, Ghaziabad</p></div></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- NEW SECTIONS ADDED BELOW --- */}
            <WhyChooseUs />
            <ClientLogos />
            <FaqSection />

        </div>
    );
};

// --- NEW SUB-COMPONENT: WHY CHOOSE US ---
const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <div className="container">
        <h2 className="section-title">Your Success is Our Priority</h2>
        <div className="why-choose-us-grid">
          <div className="why-choose-us-card">
            <div className="why-choose-us-icon"><FaUsers /></div>
            <h4>Expert Team</h4>
            <p>Our specialists bring years of industry experience and a passion for technology to every project.</p>
          </div>
          <div className="why-choose-us-card">
            <div className="why-choose-us-icon"><FaShieldAlt /></div>
            <h4>Quality Assurance</h4>
            <p>We follow rigorous testing protocols to ensure your product is secure, scalable, and bug-free.</p>
          </div>
          <div className="why-choose-us-card">
            <div className="why-choose-us-icon"><FaHeadset /></div>
            <h4>Dedicated Support</h4>
            <p>Our friendly support team is always available to assist you with any questions or issues that may arise.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- NEW SUB-COMPONENT: CLIENT LOGOS ---
const clientLogosData = [
  'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg',
  'https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg',
  'https://cdn.worldvectorlogo.com/logos/microsoft-azure-2.svg',
  'https://cdn.worldvectorlogo.com/logos/docker.svg',
  'data:image/jpeg;base64,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',
  'https://cdn.worldvectorlogo.com/logos/react-2.svg'
];

const ClientLogos = () => {
  return (
    <section className="client-logos-section">
      <div className="container">
        <h3 className="client-logos-header">Trusted by Innovative Companies Worldwide</h3>
        <div className="client-logos-grid">
          {clientLogosData.map((logo, index) => (
            <div className="client-logo-item" key={index}>
              <img src={logo} alt={`Client logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- NEW SUB-COMPONENT: FAQ SECTION ---
const faqData = [
  { question: "What is the typical timeline for a new project?", answer: "A typical project timeline ranges from 4 to 12 weeks depending on the complexity and features. We provide a detailed project plan with milestones at the beginning of every engagement." },
  { question: "How do you ensure the quality of your work?", answer: "We have a multi-stage quality assurance process that includes peer code reviews, automated testing, manual testing, and user acceptance testing (UAT) to ensure a high-quality, bug-free final product." },
  { question: "Do you provide support after the project is launched?", answer: "Yes, we offer various post-launch support and maintenance packages. We can provide ongoing technical support, updates, and feature enhancements to ensure your application runs smoothly." },
  { question: "What technologies do you specialize in?", answer: "We specialize in modern web and mobile technologies including React, Node.js, Python, and native iOS/Android development. We also have deep expertise in cloud services like AWS and Google Cloud." }
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div className={`faq-item ${openIndex === index ? 'active' : ''}`} key={index}>
                            <button className="faq-question" onClick={() => toggleFaq(index)}>
                                <span>{item.question}</span>
                                <span className="faq-toggle-icon"></span>
                            </button>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default ContactPage;