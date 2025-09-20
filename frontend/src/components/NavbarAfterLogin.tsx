import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt, FaBell, FaCog } from "react-icons/fa";
import logo from "../assets/logo.png"; 
import "../css/NavbarAfterLogin.css";

const NavbarAfterLogin: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
      </div>

      {/* Right side: links + icons */}
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/treks">Treks</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <div className="navbar-icons">
          <FaBell className="icon" onClick={() => alert("Notifications clicked")} />
          <FaCog className="icon" onClick={() => alert("Settings clicked")} />
          <FaUser className="icon" onClick={() => navigate("/profile")} />
          <FaSignOutAlt className="icon logout" onClick={() => navigate("/login")} />
        </div>
      </div>
    </nav>
  );
};

export default NavbarAfterLogin;
