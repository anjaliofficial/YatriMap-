import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiMountains, GiHiking, GiTrophy } from "react-icons/gi";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import "../css/Dashboard.css";
// Assuming these assets exist or are defined:
import ghorepaniImg from "../assets/ghorepani.jpg";
import lodgeImg from "../assets/lodge.jpg";
import mountainImg from "../assets/mountain.jpg";

const Dashboard: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Helper function to link adventure names to specific trek detail page
  const viewRoute = (name: string) => {
    // Simple slug conversion (e.g., "Poon Hill" -> "poon-hill")
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/treks/${slug}`);
  };

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
    { name: "Ghorepani Viewpoint", type: "Viewpoint", img: ghorepaniImg },
    { name: "Annapurna Lodge", type: "Lodge", img: lodgeImg },
    { name: "Poon Hill Base", type: "POI", img: mountainImg },
  ];

  const notifications = [
    "Weather alert: Snow on Annapurna Circuit",
    "New AI trek recommendation available",
    "Your Mardi Himal trek starts in 2 days",
  ];

  return (
    <div className="dashboard-page">
      <NavbarAfterLogin />

      <div className="dashboard-main">
        <div className="dashboard-content">

          {/* ================= SECTION 1 ================= */}
          <div className="dashboard-section section-one">

            {/* Welcome Banner */}
            <section className="welcome-banner">
              <h1>Welcome Back, John!</h1>
              <p>Plan your next adventure or check your stats</p>
              <div className="hero-actions">
                {/* Linked to the Treks listing page */}
                <button onClick={() => navigate("/treks")}>Start New Trek</button>
                <button>Upload GPX</button>
                <button>View Stats</button>
                <button>AI Recommendations</button>
              </div>
            </section>

            {/* Stats */}
            <div className="stats-grid">
              <div className="stat-card"><h3>Total Distance</h3><p>120 km</p></div>
              <div className="stat-card"><h3>Elevation Gain</h3><p>4500 m</p></div>
              <div className="stat-card"><h3>Completed Treks</h3><p>8</p></div>
            </div>

            {/* AI Treks */}
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
                      <button 
                        className="btn-small view-route"
                        onClick={() => viewRoute(adv.name)} // Use the new handler
                      >
                        View Route
                      </button>
                      <button className="btn-small add-favorites">Add to Favorites</button>
                      <button className="btn-small start-hike-log">Start Hike Log</button>
                    </div>
                    <span className={`adventure-type ${adv.type.toLowerCase()}`}>{adv.type}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ================= SECTION 2 ================= */}
          <div className="dashboard-section section-two">

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

            {/* Map */}
            <section className="map-section">
              <h2><FaMapMarkerAlt /> Interactive Map</h2>
              <div className="map-placeholder">Map will display here</div>
            </section>

            {/* Alerts */}
            <section className="notifications-section">
              <h2>Safety & Alerts</h2>
              <ul onClick={() => navigate("/notifications")}> {/* Added click handler */}
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
                <button onClick={() => navigate("/favoriteplaces")}>Filter Treks / Favorites</button> {/* Linked */}
                <button>Share Treks</button>
              </div>
            </section>

            {/* Community */}
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
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;