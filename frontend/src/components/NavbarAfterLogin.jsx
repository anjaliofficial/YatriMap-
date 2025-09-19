import React from "react";
import {
  FaHome,
  FaMapMarkedAlt,
  FaUser,
  FaSignOutAlt,
  FaBell,
  FaCog,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../css/NavbarAfterLogin.css";

const NavbarAfterLogin: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo" onClick={() => navigate("/dashboard")}>
        TrekkerAI
      </div>

      {/* Navigation */}
      <nav>
        <ul>
          <li onClick={() => navigate("/dashboard")}>
            <FaHome /> Dashboard
          </li>
          <li onClick={() => navigate("/treks")}>
            <FaMapMarkedAlt /> Treks
          </li>
          <li onClick={() => navigate("/profile")}>
            <FaUser /> Profile
          </li>
        </ul>
      </nav>

      {/* Bottom Icons */}
      <div className="sidebar-bottom">
        <div
          className="sidebar-icon"
          onClick={() => alert("Notifications clicked")}
        >
          <FaBell /> <span className="notification-dot"></span>
        </div>
        <div className="sidebar-icon" onClick={() => alert("Settings clicked")}>
          <FaCog />
        </div>
        <div className="sidebar-icon logout" onClick={() => navigate("/login")}>
          <FaSignOutAlt /> Logout
        </div>
      </div>
    </div>
  );
};

export default NavbarAfterLogin;
