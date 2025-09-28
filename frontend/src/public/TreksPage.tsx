import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import "../css/TreksPage.css";

// Import images
import trek1 from "../assets/pachpokhari.jpg";
import trek2 from "../assets/Annapurna-Sunrise.jpg";
import trek3 from "../assets/makalu.jpg";
import trek4 from "../assets/timbung pokhari.jpg";
import trek5 from "../assets/thorang.jpg";

// Trek & Hike Data with category
const treks = [
  {
    id: "everest-base-camp",
    title: "Everest Base Camp",
    description: "A journey to the base of the world’s highest mountain – an unforgettable adventure.",
    image: trek1,
    category: "trek",
    details: "Everest Base Camp trek takes you through Sherpa villages, monasteries, and breathtaking views of the Himalayas. It’s a lifetime experience for adventure seekers. Duration: 12–14 days. Best time: March–May & September–November."
  },
  {
    id: "annapurna-circuit",
    title: "Annapurna Circuit",
    description: "Explore diverse landscapes, from subtropical forests to alpine peaks.",
    image: trek2,
    category: "trek",
    details: "The Annapurna Circuit is one of the most famous treks in the world. Cross Thorong La Pass and enjoy stunning Himalayan panoramas. Duration: 15–20 days. Best time: March–May & September–November."
  },
  {
    id: "poon-hill",
    title: "Poon Hill",
    description: "A short yet rewarding trek with sunrise views over Annapurna and Dhaulagiri.",
    image: trek3,
    category: "hike",
    details: "Poon Hill Trek is perfect for beginners. In 4–5 days, hike through rhododendron forests and Gurung villages. Best time: March–May & September–November."
  },
  {
    id: "langtang-valley",
    title: "Langtang Valley",
    description: "A trek combining rich culture, wildlife, and stunning Himalayan views.",
    image: trek4,
    category: "trek",
    details: "Langtang Valley Trek explores Langtang National Park. See glaciers, yak pastures, and Tibetan-style villages. Duration: 7–10 days. Best time: March–May & September–November."
  },
  {
    id: "manaslu-circuit",
    title: "Manaslu Circuit",
    description: "A remote and less-crowded trek around the world’s eighth highest mountain.",
    image: trek5,
    category: "trek",
    details: "Manaslu Circuit Trek offers pristine landscapes, traditional villages, and challenging trails. Duration: 14–18 days. Best time: March–May & September–November."
  }
];

const TreksPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Filter treks based on search term and category
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

      {/* Treks Grid */}
      <section className="treks-list">
        <h2>Popular Treks & Hikes</h2>
        <div className="treks-grid">
          {filteredTreks.length > 0 ? (
            filteredTreks.map((trek) => (
              <div className="trek-card" key={trek.id}>
                <img src={trek.image} alt={trek.title} />
                <div className="trek-info">
                  <h3>{trek.title}</h3>
                  <p>{trek.description}</p>
                  <Link to={`/treks/${trek.id}`}>
                    <button className="trek-btn">View Details</button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No treks or hikes found.</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TreksPage;
