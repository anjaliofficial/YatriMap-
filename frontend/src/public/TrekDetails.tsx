import React from "react";
import { useParams, Link } from "react-router-dom";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import "../css/TrekDetailPage.css";

// Same images
import trek1 from "../assets/pachpokhari.jpg";
import trek2 from "../assets/Annapurna-Sunrise.jpg";
import trek3 from "../assets/makalu.jpg";
import trek4 from "../assets/timbung pokhari.jpg";
import trek5 from "../assets/thorang.jpg";

// Trek data
const treks = [
  {
    id: "everest-base-camp",
    title: "Everest Base Camp",
    image: trek1,
    details:
      "Everest Base Camp trek takes you through Sherpa villages, monasteries, and breathtaking views of the Himalayas. It’s a lifetime experience for adventure seekers. You’ll visit Namche Bazaar, Tengboche Monastery, and see iconic peaks like Everest, Lhotse, and Ama Dablam. Duration: 12–14 days. Best time: March–May & September–November."
  },
  {
    id: "annapurna-circuit",
    title: "Annapurna Circuit",
    image: trek2,
    details:
      "The Annapurna Circuit is one of the most famous treks in the world, circling the Annapurna massif. You’ll pass through varied climates and cultures, cross Thorong La Pass (5,416 m), and enjoy views of Annapurna, Dhaulagiri, and Machapuchare. Duration: 15–20 days. Best time: March–May & September–November."
  },
  {
    id: "poon-hill",
    title: "Poon Hill",
    image: trek3,
    details:
      "Poon Hill Trek is perfect for beginners or travelers short on time. In 4–5 days, hike through rhododendron forests and Gurung villages. The sunrise view from Poon Hill (3,210 m) is breathtaking and one of the most famous in Nepal. Best time: March–May & September–November."
  },
  {
    id: "langtang-valley",
    title: "Langtang Valley",
    image: trek4,
    details:
      "Langtang Valley Trek explores Langtang National Park, home to diverse flora and fauna. You’ll see glaciers, yak pastures, and Tibetan-style villages. Duration: 7–10 days. Less crowded than Everest or Annapurna treks, offering peaceful trekking experience. Best time: March–May & September–November."
  },
  {
    id: "manaslu-circuit",
    title: "Manaslu Circuit",
    image: trek5,
    details:
      "Manaslu Circuit Trek offers pristine landscapes, traditional villages, and challenging trails. Cross the Larkya La Pass (5,160 m) and enjoy untouched beauty. Restricted area permit is required. Duration: 14–18 days. Best time: March–May & September–November."
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
