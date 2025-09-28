import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import "../css/TreksPage.css";

// Images
import trek1 from "../assets/pachpokhari.jpg";
import trek2 from "../assets/Annapurna-Sunrise.jpg";
import trek3 from "../assets/maslanu1.jpg";
import trek4 from "../assets/timbung pokhari.jpg";
import trek5 from "../assets/thorang.jpg";
import trek6 from "../assets/Yama yangri.jpg"; // new hike image

// Trek & Hike Data
const treks = [
  { id: "everest-base-camp", title: "Everest Base Camp", description: "A journey to the base of the world’s highest mountain.", image: trek1, category: "trek", details: "12–14 days. Best: Mar–May & Sep–Nov." },
  { id: "annapurna-circuit", title: "Annapurna Circuit", description: "Explore diverse landscapes from forests to alpine peaks.", image: trek2, category: "trek", details: "15–20 days. Best: Mar–May & Sep–Nov." },
  { id: "poon-hill", title: "Poon Hill", description: "Short trek with sunrise views over Annapurna.", image: trek3, category: "hike", details: "4–5 days. Best: Mar–May & Sep–Nov." },
  { id: "langtang-valley", title: "Langtang Valley", description: "A trek combining rich culture and stunning Himalayan views.", image: trek4, category: "trek", details: "7–10 days. Best: Mar–May & Sep–Nov." },
  { id: "manaslu-circuit", title: "Manaslu Circuit", description: "A remote and less-crowded trek around the 8th highest mountain.", image: trek5, category: "trek", details: "14–18 days. Best: Mar–May & Sep–Nov." },
  { id: "amayangri", title: "Amayangri Hike", description: "Beautiful hike with panoramic views and less crowd.", image: trek6, category: "hike", details: "5–6 days. Best: Mar–May & Sep–Nov." },
];

const TreksPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Filter treks based on search term & category
  const filteredTreks = treks.filter(
    (trek) =>
      (categoryFilter === "all" || trek.category === categoryFilter) &&
      (trek.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trek.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="treks-page">
      <NavbarAfterLogin />

      {/* Hero Section */}
      <section className="treks-hero">
        <div className="treks-hero-content">
          <h1>Discover Nepal’s Best Treks & Hikes</h1>
          <p>From the mighty Himalayas to serene valleys, find your perfect adventure.</p>

          {/* Search */}
          <div className="treks-search">
            <input
              type="text"
              placeholder="Search treks or hikes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="treks-filters">
            <button className={categoryFilter === "all" ? "active" : ""} onClick={() => setCategoryFilter("all")}>All</button>
            <button className={categoryFilter === "trek" ? "active" : ""} onClick={() => setCategoryFilter("trek")}>Treks</button>
            <button className={categoryFilter === "hike" ? "active" : ""} onClick={() => setCategoryFilter("hike")}>Hikes</button>
          </div>
        </div>
      </section>

      {/* Treks/Hikes Grid */}
      <section className="ai-treks-carousel">
        {filteredTreks.length > 0 ? filteredTreks.map((trek) => (
          <div className="ai-trek-card" key={trek.id}>
            <span className={`adventure-type ${trek.category}`}>{trek.category}</span>
            <img src={trek.image} alt={trek.title} className="ai-trek-image" />
            <div className="card-content">
              <h3>{trek.title}</h3>
              <p>{trek.description}</p>
            </div>
            <div className="adventure-actions">
              <Link to={`/treks/${trek.id}`}><button className="btn-small view-route">View Details</button></Link>
              <button className="btn-small add-favorites">Add to Favorites</button>
            </div>
          </div>
        )) : (
          <p className="no-results">No treks or hikes found.</p>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default TreksPage;
