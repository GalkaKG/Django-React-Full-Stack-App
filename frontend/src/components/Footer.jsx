import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* SkillSphere Description */}
        <div className="footer-description">
          <p>SkillSphere is a collaborative platform for learners, mentors, and creators to grow together.</p>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social-media">
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Careers Link */}
        <div className="footer-careers">
          <Link to="/careers">Careers</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SkillSphere. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
