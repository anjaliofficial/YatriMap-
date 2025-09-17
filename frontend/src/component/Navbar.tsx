// NavbarBeforeLogin.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../css/NavbarBeforeLogin.css";

const NavbarBeforeLogin: React.FC = () => {
  return (
    <nav className="navbar-before-login">
      <div className="navbar-container">
        {/* Logo *yes/}
        <div className="navbar-logo">
          <Link to="/">Trek Nepal</Link>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/treks">Treks</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="navbar-auth">
          <Link to="/login" className="btn-login">
            Login
          </Link>
          <Link to="/signup" className="btn-signup">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBeforeLogin;
