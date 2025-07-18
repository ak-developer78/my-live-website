import React, { useState, useEffect, useRef } from 'react';
import '../css/AboutPage.css'; // Make sure this path is correct
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBullseye, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

// Image URLs
const heroBgUrl = 'https://solvebytez.com/assets/images/background/1.webp';
const aboutImg1Url = 'https://solvebytez.com/assets/images/about/about-four.webp';
const aboutImg2Url = 'https://solvebytez.com/assets/images/about/about-four-2.webp';
const contactBgShapeUrl = 'https://solvebytez.com/assets/images/shapes/contact-form-shape-1.png';

const AboutPage = () => {
    // State and handlers for the form
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

    // --- Refs for all sections we want to animate on scroll ---
    const missionVisionRef = useRef(null);
    const contactSectionRef = useRef(null);

    // --- useEffect to handle all scroll-triggered animations ---
    useEffect(() => {
        const elementsToObserve = [missionVisionRef.current, contactSectionRef.current];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    // If the element is intersecting (visible), add the 'is-visible' class
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Stop observing after animation
                    }
                });
            },
            { threshold: 0.15 } // Trigger when 15% of the element is visible
        );

        elementsToObserve.forEach(el => {
            if (el) observer.observe(el);
        });

        // Cleanup observer on component unmount
        return () => {
            elementsToObserve.forEach(el => {
                if (el) observer.unobserve(el);
            });
        };
    }, []); // Empty dependency array ensures this runs only once

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your message has been sent.`);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    return (
        <div className="about-us-page">
            {/* 1. Ken Burns Effect Banner */}
            <section className="about-hero" style={{ backgroundImage: `url(${heroBgUrl})` }}>
                <div className="container">
                    <div className="hero-content-box">
                        <h1>About Us</h1>
                        <p className="breadcrumb">Home - About</p>
                    </div>
                </div>
            </section>

            {/* 2. Intro Section (Static) */}
            <section className="about-intro section-padding">
                <div className="container grid-layout">
                    <div className="intro-content">
                        <span className="sub-heading">IT Support For Business</span>
                        <h2>Your Trusted Partner In IT Excellence</h2>
                        <p>We are passionate about empowering businesses with innovative IT solutions that drive growth, efficiency, and success. With a team of dedicated professionals and cutting-edge technology, we bring your ideas to life, transforming challenges into opportunities.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                    <div className="intro-images">
                        <img src={aboutImg1Url} alt="Team collaborating" className="about-img-1" />
                        <img src={aboutImg2Url} alt="Professional on a video call" className="about-img-2" />
                    </div>
                </div>
            </section>

            {/* 3. Flipping Cards Section */}
            <section className="mission-vision section-padding" ref={missionVisionRef}>
                <div className="container">
                    <div className="section-title">
                        <span className="sub-heading">IT SUPPORT FOR BUSINESS</span>
                        <h2>Preparing for your success trusted source in IT services.</h2>
                    </div>
                    <div className="mission-vision-grid">
                        <div className="card-flipper">
                            <div className="card-front"><FaBullseye className="card-icon" /><h3>Mission of Solvebytez</h3><p>Our mission is to evolve as a global brand renowned for delivering cutting-edge IT solutions and fostering innovation.</p><span className="hover-indicator">Hover for Details</span></div>
                            <div className="card-back"><h3>Our Core Mission</h3><ul><li><FaCheckCircle className="list-icon" /> Delivering superior software.</li><li><FaCheckCircle className="list-icon" /> Pushing technology boundaries.</li><li><FaCheckCircle className="list-icon" /> Ensuring client success.</li></ul></div>
                        </div>
                        <div className="card-flipper">
                            <div className="card-front"><FaLightbulb className="card-icon" /><h3>Vision of Solvebytez</h3><p>We envision a future where technology bridges gaps and empowers individuals and organizations worldwide.</p><span className="hover-indicator">Hover for Details</span></div>
                            <div className="card-back"><h3>Our Future Vision</h3><ul><li><FaCheckCircle className="list-icon" /> Leading digital transformation.</li><li><FaCheckCircle className="list-icon" /> Making technology accessible.</li><li><FaCheckCircle className="list-icon" /> Inspiring future innovators.</li></ul></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Rotating Contact Form Section */}
            <section className="about-contact section-padding" ref={contactSectionRef}>
                <div className="container">
                    <div className="contact-box-wrapper">
                        <div className="contact-form-area">
                            <h3>Get In Touch</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-row"><input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required /><input type="email" name="email" placeholder="Your email address" value={formData.email} onChange={handleChange} required /></div>
                                <div className="form-row"><input type="tel" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required /><select name="service" value={formData.service} onChange={handleChange} required><option value="" disabled>Service Required</option><option value="Game Devlopment">Web Game Devlopment</option><option value="Web Application">Web Application</option><option value="Ai">Ai </option><option value="Mobile Application">Mobile Application</option><option value="Digital Marketing">Digital Marketing</option></select></div>
                                <textarea name="message" placeholder="Let us know what you need." rows="5" value={formData.message} onChange={handleChange} required></textarea>
                                <button type="submit" className="btn btn-dark">Send Message</button>
                            </form>
                        </div>
                        <div className="contact-details-area" style={{ backgroundImage: `url(${contactBgShapeUrl})` }}>
                            <h3>Don't hesitate to contact us</h3>
                            <ul><li><FaPhoneAlt className="contact-icon" /><div><span>Call Us</span><strong>+91-9599179795</strong></div></li><li><FaEnvelope className="contact-icon" /><div><span>Write to Us</span><strong>info@solvebytez.com</strong></div></li><li><FaMapMarkerAlt className="contact-icon" /><div><span>Our Address</span><strong>Rahul Vihar 2, Pratap Vihar, Ghaziabad</strong></div></li></ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;