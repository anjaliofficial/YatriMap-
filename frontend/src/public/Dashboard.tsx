// Dashboard.tsx
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiMountains, GiTrophy } from "react-icons/gi";
import "../css/Dashboard.css";
import NavbarBeforeLogin from "../component/Navbar"; // adjust path if needed
import Footer from "../component/Footer"; // import Footer

const Dashboard = () => {
  const [activeTrek, setActiveTrek] = useState<string | null>(null);

  const treks = [
    { name: "Poon Hill", difficulty: "Easy", duration: "3 days" },
    { name: "Mardi Himal", difficulty: "Intermediate", duration: "5 days" },
    { name: "Annapurna Circuit", difficulty: "Advanced", duration: "12 days" },
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

  const handleTrekClick = (name: string) => {
    setActiveTrek(name);
    alert(`Showing details for ${name}`);
  };

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <NavbarBeforeLogin />

      {/* Hero Section */}
      <section className="dashboard-hero">
        <h1>Welcome Back, John!</h1>
        <p>Plan your next adventure or check your stats</p>
        <div className="hero-actions">
          <button className="btn-action">Start New Trek</button>
          <button className="btn-action">Upload GPX</button>
          <button className="btn-action">View Stats</button>
          <button className="btn-action">AI Recommendations</button>
        </div>
      </section>

      {/* Mini Stats */}
      <section className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Distance</h3>
          <p>120 km</p>
        </div>
        <div className="stat-card">
          <h3>Elevation Gain</h3>
          <p>4500 m</p>
        </div>
        <div className="stat-card">
          <h3>Completed Treks</h3>
          <p>8</p>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="dashboard-map">
        <h2>
          <FaMapMarkerAlt /> Your Routes
        </h2>
        <div className="map-placeholder">Map will display here</div>
      </section>

      {/* AI Recommendations */}
      <section className="dashboard-ai-treks">
        <h2>AI Recommended Treks</h2>
        <div className="ai-treks-carousel">
          {treks.map((trek) => (
            <div
              key={trek.name}
              className="ai-trek-card"
              onClick={() => handleTrekClick(trek.name)}
            >
              <GiMountains className="trek-icon" />
              <h3>{trek.name}</h3>
              <p>{trek.difficulty}</p>
              <p>{trek.duration}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="dashboard-achievements">
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
      <section className="dashboard-notifications">
        <h2>Notifications</h2>
        <ul>
          {notifications.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
