import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiMountains, GiHiking, GiTrophy } from "react-icons/gi";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import "../css/Dashboard.css";

const Dashboard = () => {
  const [activeAdventure, setActiveAdventure] = useState<string | null>(null);

  const adventures = [
    { name: "Poon Hill", type: "Trek", difficulty: "Easy", duration: "3 days" },
    { name: "Mardi Himal", type: "Trek", difficulty: "Intermediate", duration: "5 days" },
    { name: "Annapurna Circuit", type: "Trek", difficulty: "Advanced", duration: "12 days" },
    { name: "Nagarkot Sunrise", type: "Hike", difficulty: "Easy", duration: "1 day" },
    { name: "Dhampus Loop", type: "Hike", difficulty: "Intermediate", duration: "2 days" },
  ];

  const badges = [
    { name: "100 km Hiked", icon: <GiTrophy /> },
    { name: "5 Treks Completed", icon: <GiTrophy /> },
    { name: "Elevation Master", icon: <GiTrophy /> },
  ];

  const favoritePlaces = [
    { name: "Ghorepani Viewpoint", type: "Viewpoint", img: "https://source.unsplash.com/400x200/?mountains" },
    { name: "Annapurna Lodge", type: "Lodge", img: "https://source.unsplash.com/400x200/?lodge" },
    { name: "Poon Hill Base", type: "POI", img: "https://source.unsplash.com/400x200/?hill" },
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

          {/* Hero Banner */}
          <section className="welcome-banner">
            <h1>Welcome Back, John!</h1>
            <p>Plan your next adventure or check your stats</p>
            <div className="hero-actions">
              <button className="btn-action">Start New Trek</button>
              <button className="btn-action">Upload GPX</button>
              <button className="btn-action">View Stats</button>
              <button className="btn-action">AI Recommendations</button>
            </div>
          </section>

          {/* Hiking Stats */}
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
              <h3>Completed Treks</h3>
              <p>8</p>
            </div>
          </div>

          {/* AI Recommended Treks & Hikes */}
          <section className="ai-adventures-section">
            <h2>AI Recommended Treks & Hikes</h2>
            <div className="ai-treks-carousel">
              {adventures.map((adv) => (
                <div key={adv.name} className="ai-trek-card">
                  <div className="icon-wrapper">
                    {adv.type === "Trek" ? <GiMountains className="trek-icon" /> : <GiHiking className="trek-icon" />}
                  </div>
                  <div className="card-content">
                    <h3>{adv.name}</h3>
                    <p className="difficulty">{adv.difficulty}</p>
                    <p className="duration">{adv.duration}</p>
                  </div>
                  <div className="adventure-actions">
                    <button className="btn-small">View Route</button>
                    <button className="btn-small">Add to Favorites</button>
                    <button className="btn-small">Start Hike Log</button>
                  </div>
                  <span className={`adventure-type ${adv.type.toLowerCase()}`}>{adv.type}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements & Badges */}
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

          {/* Favorite Places */}
          <section className="favorites-section">
            <h2>Favorite Places</h2>
            <div className="favorites-grid">
              {favoritePlaces.map((place) => (
                <div key={place.name} className="favorite-card">
                  <img src={place.img} alt={place.name} />
                  <div className="favorite-info">
                    <h3>{place.name}</h3>
                    <p>{place.type}</p>
                    <div className="favorite-actions">
                      <button>View on Map</button>
                      <button>Start Hike Log</button>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Map */}
          <section className="map-section">
            <h2><FaMapMarkerAlt /> Interactive Map</h2>
            <div className="map-placeholder">Map will display here</div>
          </section>

          {/* Safety & Alerts */}
          <section className="notifications-section">
            <h2>Safety & Alerts</h2>
            <ul>
              {notifications.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </section>

          {/* Quick Actions */}
          <section className="quick-actions-section">
            <h2>Quick Actions</h2>
            <div className="quick-actions">
              <button>Upload New Hike</button>
              <button>Start New Trek Log</button>
              <button>Filter Treks / Favorites</button>
              <button>Share Treks</button>
            </div>
          </section>

          {/* Community / Social */}
          <section className="community-section">
            <h2>Community / Social Features</h2>
            <div className="community-cards">
              <div className="community-card"><h3>Leaderboards</h3></div>
              <div className="community-card"><h3>User Reviews</h3></div>
              <div className="community-card"><h3>Photo Gallery</h3></div>
              <div className="community-card"><h3>Group Challenges</h3></div>
            </div>
          </section>

        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
