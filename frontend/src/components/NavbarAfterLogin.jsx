import React from "react";
import { FaHome, FaMapMarkedAlt, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../css/NavbarAfterLogin.css";

const NavbarAfterLogin: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="logo" onClick={() => navigate("/dashboard")}>
        TrekkerAI
      </div>
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
          <li className="logout" onClick={() => navigate("/login")}>
            <FaSignOutAlt /> Logout
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarAfterLogin;
