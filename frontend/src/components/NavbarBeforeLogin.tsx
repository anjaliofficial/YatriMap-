import React from "react";
import { Link } from "react-router-dom";
import "../css/NavbarBeforeLogin.css";
import logo from "../assets/logo.png";

const NavbarBeforeLogin: React.FC = () => {
  return (
    <nav className="navbar-before-login">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="YatriMap Logo" className="logo-img" />
          </Link>
        </div>

        {/* Links */}
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/treks">Treks</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="navbar-auth">
          <Link to="/login" className="btn-login">Login</Link>
          <Link to="/signup" className="btn-signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBeforeLogin;
