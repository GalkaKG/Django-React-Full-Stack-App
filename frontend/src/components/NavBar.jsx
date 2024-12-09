import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/NavBar.scss";
import {
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by checking the access token in localStorage
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Remove token from storage
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to the login page
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#hero">SkillSphere</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#how-it-works">How It Works</a>
        </li>
        <li>
          <a href="#featured-courses">Courses</a>
        </li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <FaUserCircle className="dropdown-icon" />
          {dropdownOpen && (
            <ul className="dropdown-menu">
              {isLoggedIn ? (
                <>
                  <li>
                    <FaUser className="dropdown-menu-icon" />
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li onClick={handleLogout}>
                    <FaSignOutAlt className="dropdown-menu-icon" />
                    Logout
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <FaUserPlus className="dropdown-menu-icon" />
                    <Link to="/register">Join Us</Link>
                  </li>
                  <li>
                    <FaSignInAlt className="dropdown-menu-icon" />
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
