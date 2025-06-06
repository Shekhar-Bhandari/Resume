import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1000);
  };

  return (
    <div className="contact">
      {/* Navbar */}
      <div className="navbar">
        <Link className="link" to="/">Home</Link>
 
        <Link className="link" to="/contact">Contact</Link>
      </div>

      {/* Contact Header */}
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p className="contact-subtitle">
          Let's discuss your project and bring your ideas to life
        </p>
      </div>

      <div className="contact-content">
        {/* Contact Info Section */}
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p>shekharbhandari0123@example.com</p>
            <a href="mailto:shekharbhandari0123@example.com" className="contact-link">
              Send Email
            </a>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <h3>Phone</h3>
            <p>+977 9810751189</p>
            <a href="tel:+9779810751189" className="contact-link">
              Call Now
            </a>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <h3>Location</h3>
            <p>Kathmandu, Nepal</p>
            <span className="contact-link">Available for Remote Work</span>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <i className="fa-brands fa-github"></i>
            </div>
            <h3>GitHub</h3>
            <p>Check out my projects</p>
            <a href="https://github.com/Shekhar-Bhandari" target="_blank" rel="noopener noreferrer" className="contact-link">
              View Profile
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-section">
          <h2>Send Me a Message</h2>
          
          {submitMessage && (
            <div className="success-message">
              <i className="fa-solid fa-check-circle"></i>
              {submitMessage}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project or inquiry..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin"></i>
                  Sending...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane"></i>
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Social Links */}
      <div className="social-section">
        <h3>Connect With Me</h3>
        <div className="social-links">
          <a href="https://github.com/Shekhar-Bhandari" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/shekhar-bhandari-1b2652368/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://x.com/ShekharBha99161" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa-brands fa-twitter"></i>
            <span>Twitter</span>
          </a>
          <a href="mailto:shekharbhandari0123@gmail.com.com" className="social-link">
            <i className="fa-solid fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="contact-footer">
        <p>&copy; 2024 Shekhar Bhandari. All rights reserved.</p>
        <p>Let's build something amazing together!</p>
      </div>
    </div>
  );
};

export default ContactPage;