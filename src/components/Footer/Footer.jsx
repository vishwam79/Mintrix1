import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section">
          <h2 className="footer-title">Mintrix</h2>
          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <a href="#" className="footer-link">Read more..</a>
        </div>

        {/* Links Sections */}
        <div className="footer-links">
          {/* Quick Links Section */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-item">Home</a></li>
              <li><a href="#" className="footer-item">Features</a></li>
              <li><a href="#" className="footer-item">Pricing</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-item">FAQ</a></li>
              <li><a href="#" className="footer-item">Call Center</a></li>
            </ul>
          </div>

          {/* More Information Section */}
          <div>
            <h3 className="footer-heading">More Information</h3>
            <ul className="footer-list">
              <li><a href="#" className="footer-item">Faq</a></li>
              <li><a href="#" className="footer-item">Call Center</a></li>
              <li><a href="#" className="footer-item">Savvy.com</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="footer-heading">Follow our social media</h3>
          <div className="social-media">
            <a href="#" className="social-icon">F</a>
            <a href="#" className="social-icon">T</a>
            <a href="#" className="social-icon">I</a>
            <a href="#" className="social-icon">Y</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="copyright">
        <p className='copyright-text'>© Mintrix 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
