// Footer.tsx
import React from "react";
import "../css/Footer.css"; // Make sure you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Site Map */}
        <div className="footer-section">
          <h4>Site Map</h4>
          <ul>
            <li>Home</li>
            <li>Popular Treks</li>
            <li>Testimonials</li>
            <li>Get Started</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <span className="icon">FB</span>
            <span className="icon">IG</span>
            <span className="icon">TW</span>
          </div>
        </div>
      </div>

      <p className="footer-bottom">© 2025 Trek Nepal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
