import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">Subash Katwal</div>

      {/* Hamburger first (mobile) */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Nav links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="home" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            Education
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
