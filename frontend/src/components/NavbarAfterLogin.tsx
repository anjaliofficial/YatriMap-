import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaSignOutAlt, FaBell, FaCog, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png";
import "../css/NavbarAfterLogin.css";

const NavbarAfterLogin: React.FC = () => {
  const navigate = useNavigate();

  // Handler for Logout - simple redirect for now
  const handleLogout = () => {
    // In a real app, this would clear authentication tokens/state
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/dashboard")}>
        <img src={logo} alt="Logo" />
      </div>

      {/* Right side: links + icons */}
      <div className="navbar-right">
        <ul className="navbar-links">
          {/* Link to Dashboard as 'Home' for logged-in users */}
          <li><Link to="/dashboard">Dashboard</Link></li> 
          <li><Link to="/treks">Treks</Link></li>
          <li><Link to="/favoriteplaces">Favorites</Link></li> {/* New link */}
          <li><Link to="/aboutuspage">About</Link></li> {/* Corrected path */}
        </ul>

        <div className="navbar-icons">
          {/* Icons navigate to specific routes */}
          <FaBell className="icon" onClick={() => navigate("/notifications")} />
          <FaCog className="icon" onClick={() => navigate("/settings")} />
          {/* Assuming FaUser takes the user to their profile/dashboard */}
          <FaUser className="icon" onClick={() => navigate("/profile")} /> 
          <FaSignOutAlt className="icon logout" onClick={handleLogout} />
        </div>
      </div>
    </nav>
  );
};

export default NavbarAfterLogin;