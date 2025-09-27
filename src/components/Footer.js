import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        {/* About Section */}
        <div className="footer-about">
          <h3>Subash Katwal</h3>
          <p>
            Full Stack Developer building impactful web and AI solutions
             with a focus on innovation and user-friendly experiences
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="home" smooth={true} duration={500} offset={-70}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500} offset={-70}>About</Link></li>
            <li><Link to="education" smooth={true} duration={500} offset={-70}>Education</Link></li>
            <li><Link to="projects" smooth={true} duration={500} offset={-70}>Projects</Link></li>
            <li><Link to="skills" smooth={true} duration={500} offset={-70}>Skills</Link></li>
            <li><Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="icons">
            <a
              href="https://www.facebook.com/subash154"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/subashkatwal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://twitter.com/katwalsubashh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="mailto:subashkatwal112@gmail.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Subash Katwal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
