import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  Map,
  MessageCircle,
  Calendar,
  Settings,
  LogOut,
  Bell,
  Search,
  User,
} from "lucide-react";
import "../css/Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">TrekNepal</h2>
        <nav>
          <ul>
            <li><Home size={20} /> Home</li>
            <li><Map size={20} /> Treks</li>
            <li><MessageCircle size={20} /> Messages</li>
            <li><Calendar size={20} /> Bookings</li>
            <li><Settings size={20} /> Settings</li>
            <li className="logout"><LogOut size={20} /> Logout</li>
          </ul>
        </nav>
      </aside>

      {/* Main Dashboard */}
      <div className="main-dashboard">
        {/* Top Navbar */}
        <header className="topbar">
          <div className="search-box">
            <Search size={18} />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="topbar-icons">
            <Bell size={22} className="icon" />
            <User size={22} className="icon" />
          </div>
        </header>

        {/* Content */}
        <motion.div
          className="dashboard-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Welcome Banner */}
          <div className="welcome-banner">
            <h1>Welcome Back, Anjali 👋</h1>
            <p>Here’s your trekking dashboard overview.</p>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <h3>15</h3>
              <p>Total Treks</p>
            </div>
            <div className="stat-card">
              <h3>8</h3>
              <p>Upcoming Bookings</p>
            </div>
            <div className="stat-card">
              <h3>24</h3>
              <p>Messages</p>
            </div>
            <div className="stat-card">
              <h3>4.9 ★</h3>
              <p>Avg. Rating</p>
            </div>
          </div>

          {/* Recent Activity + Chart */}
          <div className="grid-2">
            <div className="activity-section">
              <h2>Recent Activity</h2>
              <ul>
                <li>📌 Booked Everest Base Camp Trek</li>
                <li>💬 New message from Guide Sita</li>
                <li>✅ Payment confirmed for Annapurna Circuit</li>
              </ul>
            </div>

            <div className="chart-section">
              <h2>Analytics</h2>
              <p>[Insert Trekking Trends Chart here]</p>
            </div>
          </div>

          {/* Profile */}
          <div className="profile-section">
            <h2>Your Profile</h2>
            <div className="profile-card">
              <img
                src="https://i.pravatar.cc/100"
                alt="profile"
                className="profile-pic"
              />
              <div>
                <h3>Anjali Bista</h3>
                <p>Experienced Trekker</p>
                <button className="btn-update">Update Profile</button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
