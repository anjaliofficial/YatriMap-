import React from "react";
import { Link } from "react-router-dom";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";

// Trek Data inside component
const treks = [
  {
    id: "everest-base-camp",
    title: "Everest Base Camp",
    description: "A journey to the base of the world’s highest mountain – an unforgettable adventure.",
    image: "/assets/pachpokhari.jpg",
    details:
      "Everest Base Camp trek takes you through Sherpa villages, monasteries, and breathtaking views of the Himalayas. It’s a lifetime experience for adventure seekers."
  },
  {
    id: "annapurna-circuit",
    title: "Annapurna Circuit",
    description: "Explore diverse landscapes, from subtropical forests to alpine peaks.",
    image: "/assets/Annapurna-Sunrise.jpg",
    details:
      "The Annapurna Circuit is one of the most famous treks in the world, crossing Thorong La Pass and offering stunning Himalayan panoramas."
  },
  {
    id: "poon-hill",
    title: "Poon Hill",
    description: "A short yet rewarding trek with sunrise views over Annapurna and Dhaulagiri.",
    image: "/assets/makalu.jpg",
    details:
      "Poon Hill is perfect for beginners. The highlight is the sunrise view, where the mountains glow golden against the sky."
  },
  {
    id: "langtang-valley",
    title: "Langtang Valley",
    description: "A trek combining rich culture, wildlife, and stunning Himalayan views.",
    image: "/assets/timbung pokhari.jpg",
    details:
      "Langtang Valley offers Tamang culture, diverse flora and fauna, and panoramic views of snow-capped peaks."
  },
  {
    id: "manaslu-circuit",
    title: "Manaslu Circuit",
    description: "A remote and less-crowded trek around the world’s eighth highest mountain.",
    image: "/assets/thorang.jpg",
    details:
      "Manaslu Circuit is known for its pristine beauty, challenging trails, and authentic Himalayan culture."
  }
];

const TreksPage: React.FC = () => {
  return (
    <div className="treks-page">
      <NavbarAfterLogin />

      {/* Hero Section */}
      <section className="treks-hero">
        <div className="treks-hero-content">
          <h1>Discover Nepal’s Best Treks</h1>
          <p>
            From the mighty Himalayas to serene valleys, find your perfect trekking adventure.
          </p>
        </div>
      </section>

      {/* Treks Grid */}
      <section className="treks-list">
        <h2>Popular Treks</h2>
        <div className="treks-grid">
          {treks.map((trek) => (
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
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TreksPage;
