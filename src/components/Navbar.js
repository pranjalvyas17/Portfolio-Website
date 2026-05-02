import { Link } from "react-scroll";
import React from "react";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Pranjal Portfolio Website</h2>

      <ul>
        <li>
          <Link to="hero" smooth={true} duration={500} offset={-70}>
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-70}>
            <FaUser /> About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-70}>
            <FaCode /> Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            <FaProjectDiagram /> Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            <FaEnvelope /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;