import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">Subash Katwal</div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="home" smooth={true} duration={500} offset={-70}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-70}>About</Link></li>
        <li><Link to="education" smooth={true} duration={500} offset={-70}>Education</Link></li>
        <li><Link to="projects" smooth={true} duration={500} offset={-70}>Projects</Link></li>
        <li><Link to="skills" smooth={true} duration={500} offset={-70}>Skills</Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-70}>Contact</Link></li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
