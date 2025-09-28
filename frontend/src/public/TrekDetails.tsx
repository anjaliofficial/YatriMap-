import React from "react";
import { useParams, Link } from "react-router-dom";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";

// Same trek data used in TreksPage
const treks = [
  {
    id: "everest-base-camp",
    title: "Everest Base Camp",
    image: "/assets/pachpokhari.jpg",
    details:
      "Everest Base Camp trek takes you through Sherpa villages, monasteries, and breathtaking views of the Himalayas. It’s a lifetime experience for adventure seekers."
  },
  {
    id: "annapurna-circuit",
    title: "Annapurna Circuit",
    image: "/assets/Annapurna-Sunrise.jpg",
    details:
      "The Annapurna Circuit is one of the most famous treks in the world, crossing Thorong La Pass and offering stunning Himalayan panoramas."
  },
  {
    id: "poon-hill",
    title: "Poon Hill",
    image: "/assets/makalu.jpg",
    details:
      "Poon Hill is perfect for beginners. The highlight is the sunrise view, where the mountains glow golden against the sky."
  },
  {
    id: "langtang-valley",
    title: "Langtang Valley",
    image: "/assets/timbung pokhari.jpg",
    details:
      "Langtang Valley offers Tamang culture, diverse flora and fauna, and panoramic views of snow-capped peaks."
  },
  {
    id: "manaslu-circuit",
    title: "Manaslu Circuit",
    image: "/assets/thorang.jpg",
    details:
      "Manaslu Circuit is known for its pristine beauty, challenging trails, and authentic Himalayan culture."
  }
];

const TrekDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const trek = treks.find((t) => t.id === id);

  if (!trek) {
    return (
      <div>
        <NavbarAfterLogin />
        <main style={{ padding: "40px", textAlign: "center" }}>
          <h2>Trek not found</h2>
          <Link to="/treks">
            <button style={{ marginTop: "20px" }}>Back to Treks</button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="trek-detail-page">
      <NavbarAfterLogin />

      {/* Hero */}
      <section className="trek-detail-hero">
        <img src={trek.image} alt={trek.title} className="trek-detail-image" />
        <div className="trek-detail-overlay">
          <h1>{trek.title}</h1>
        </div>
      </section>

      {/* Content */}
      <main className="trek-detail-content">
        <p>{trek.details}</p>
        <Link to="/treks">
          <button className="trek-btn">← Back to Treks</button>
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default TrekDetailPage;
