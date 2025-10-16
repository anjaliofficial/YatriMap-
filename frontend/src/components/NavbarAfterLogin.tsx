// src/components/NavbarAfterLogin.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt, FaBell, FaCog } from "react-icons/fa";
import logo from "../assets/logo.png";
import "../css/NavbarAfterLogin.css";

const NavbarAfterLogin: React.FC = () => {
  const navigate = useNavigate();

  // Handler for Logout
  const handleLogout = () => {
    // In a real app, clear authentication tokens/state
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo" onClick={() => navigate("/dashboard")}>
        <img src={logo} alt="Logo" />
      </div>

      {/* Right side: links + icons */}
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/dashboard">Dashboard</Link></li> 
          <li><Link to="/treks">Treks</Link></li>
          <li><Link to="/favoriteplaces">Favorites</Link></li>
          <li><Link to="/aboutuspage">About</Link></li>
        </ul>

        <div className="navbar-icons">
          <FaBell className="icon" onClick={() => navigate("/notifications")} />
          <FaCog className="icon" onClick={() => navigate("/settings")} />
          <FaUser className="icon" onClick={() => navigate("/profile")} /> 
          <FaSignOutAlt className="icon logout" onClick={handleLogout} />
        </div>
      </div>
    </nav>
  );
};

export default NavbarAfterLogin;
