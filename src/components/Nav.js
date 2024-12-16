import React, { useState } from "react";
import { Link } from "react-router-dom";
import littlelemon_logo from "../images/littlelemon_logo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <img src={littlelemon_logo} alt="Little Lemon Logo" />
        </div>
      </div>
      <div className="nav-btn" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
      <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reserve Table</Link>
        </li>
        <li>
          <Link to="#">Order Online</Link>
        </li>
        <li>
          <Link to="#">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
