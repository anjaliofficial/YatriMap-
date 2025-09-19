import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaSignOutAlt,
  FaBell,
  FaCog,
} from "react-icons/fa";
import "../css/NavbarAfterLogin.css";

const NavbarAfterLogin: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo" onClick={() => navigate("/")}>
        TrekkerAI
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
      </ul>

      {/* Right Icons */}
      <div className="navbar-icons">
        <FaBell
          className="icon"
          onClick={() => alert("Notifications clicked")}
        />
        <FaCog
          className="icon"
          onClick={() => alert("Settings clicked")}
        />
        <FaUser
          className="icon"
          onClick={() => navigate("/profile")}
        />
        <FaSignOutAlt
          className="icon logout"
          onClick={() => navigate("/login")}
        />
      </div>
    </nav>
  );
};

export default NavbarAfterLogin;
