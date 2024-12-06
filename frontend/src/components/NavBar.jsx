import React from "react";
import "./styles/NavBar.scss"; // Import the styles

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#hero">SkillSphere</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#featured-courses">Courses</a></li>
        <li><a href="#cta">Join Us</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
