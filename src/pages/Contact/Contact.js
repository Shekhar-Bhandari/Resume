import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const ContactPage = () => {
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
          <a href="mailto:shekharbhandari0123@gmail.com" className="social-link">
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
