import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiMountains, GiTrophy, GiHiking } from "react-icons/gi";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import "../css/Dashboard.css";

const Dashboard = () => {
  const [activeAdventure, setActiveAdventure] = useState<string | null>(null);

  const treks = [
    { name: "Poon Hill", type: "Trek", difficulty: "Easy", duration: "3 days" },
    { name: "Mardi Himal", type: "Trek", difficulty: "Intermediate", duration: "5 days" },
    { name: "Annapurna Circuit", type: "Trek", difficulty: "Advanced", duration: "12 days" },
  ];

  const hikes = [
    { name: "Nagarkot Sunrise", type: "Hike", difficulty: "Easy", duration: "1 day" },
    { name: "Dhampus Loop", type: "Hike", difficulty: "Intermediate", duration: "2 days" },
  ];

  const badges = [
    { name: "100 km Hiked", icon: <GiTrophy /> },
    { name: "5 Treks Completed", icon: <GiTrophy /> },
    { name: "Elevation Master", icon: <GiTrophy /> },
  ];

  const notifications = [
    "Weather alert: Snow on Annapurna Circuit",
    "New AI trek recommendation available",
    "Your Mardi Himal trek starts in 2 days",
  ];

  const handleAdventureClick = (name: string) => {
    setActiveAdventure(name);
    alert(`Showing details for ${name}`);
  };

  return (
    <div className="dashboard-page">
      <NavbarAfterLogin />

      <div className="dashboard-main">
        <div className="dashboard-content">

          {/* Hero Section */}
          <section className="welcome-banner">
            <h1>Welcome Back, John!</h1>
            <p>Plan your next adventure or check your stats</p>
            <div className="hero-actions">
              <button className="btn-action">Start New Trek</button>
              <button className="btn-action">Start New Hike</button>
              <button className="btn-action">Upload GPX</button>
              <button className="btn-action">AI Recommendations</button>
            </div>
          </section>

          {/* Stats Section */}
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Distance</h3>
              <p>120 km</p>
            </div>
            <div className="stat-card">
              <h3>Elevation Gain</h3>
              <p>4500 m</p>
            </div>
            <div className="stat-card">
              <h3>Completed Adventures</h3>
              <p>8</p>
            </div>
          </div>

          {/* Map Section */}
          <section className="map-section">
            <h2>
              <FaMapMarkerAlt /> Your Routes
            </h2>
            <div className="map-placeholder">
              <p>Interactive Map Placeholder</p>
            </div>
          </section>

          {/* AI Recommended Adventures */}
          <section className="ai-adventures-section">
            <h2>AI Recommended Treks & Hikes</h2>
            <div className="adventures-carousel">
              {[...treks, ...hikes].map((adv) => (
                <div
                  key={adv.name}
                  className={`adventure-card ${adv.type.toLowerCase()}`}
                  onClick={() => handleAdventureClick(adv.name)}
                >
                  {adv.type === "Trek" ? <GiMountains className="adventure-icon" /> : <GiHiking className="adventure-icon" />}
                  <h3>{adv.name}</h3>
                  <p>{adv.difficulty}</p>
                  <p>{adv.duration}</p>
                  <span className="adventure-type">{adv.type}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="achievements-section">
            <h2>Achievements & Badges</h2>
            <div className="achievements-carousel">
              {badges.map((badge) => (
                <div key={badge.name} className="badge-card">
                  {badge.icon}
                  <p>{badge.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Notifications */}
          <section className="notifications-section">
            <h2>Notifications</h2>
            <ul>
              {notifications.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </section>

        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
