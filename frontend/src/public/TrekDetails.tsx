import React from "react";
import { useParams, Link } from "react-router-dom";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import "../css/TrekDetails.css";

// Trek images
import trek1 from "../assets/pachpokhari.jpg";
import trek2 from "../assets/Annapurna-Sunrise.jpg";
import trek3 from "../assets/maslanu1.jpg";
import trek4 from "../assets/timbung pokhari.jpg";
import trek5 from "../assets/thorang.jpg";
import trek6 from "../assets/Yama yangri.jpg"; // optional extra trek

// Trek data
const treks = [
  {
    id: "everest-base-camp",
    title: "Everest Base Camp",
    images: [
      trek1,
      require("../assets/EBC.jpg"),
      require("../assets/EBC2.jpg"),
      require("../assets/EBC3.jpg")
    ],
    description:
      "Everest Base Camp trek takes you through Sherpa villages, monasteries, and breathtaking Himalayan views.",
    duration: "12–14 days",
    bestSeason: "March–May & September–November",
    roadConditions: "Mostly mountainous trails with stone paths, some steep sections.",
    alternativeRoutes: "Gokyo Lakes route, Three Passes Trek.",
    transport: "Accessible by jeep/bus to Lukla; flights available from Kathmandu.",
    cost: { foreigner: "$1200–$1500", citizen: "NPR 60,000–90,000" },
    hotels: "Tea houses in villages; basic to moderate facilities."
  },
  {
    id: "annapurna-circuit",
    title: "Annapurna Circuit",
    images: [
      trek2,
      require("../assets/Annapurna-Sunrise.jpg"),
      require("../assets/annapurna 1.jpg"),
      require("../assets/annapurna2.jpg")

    ],
    description:
      "The Annapurna Circuit is a world-famous trek circling the Annapurna massif, offering diverse climates and cultures.",
    duration: "15–20 days",
    bestSeason: "March–May & September–November",
    roadConditions: "Well-trodden paths; some steep passes like Thorong La (5416 m).",
    alternativeRoutes: "Short Annapurna Base Camp extension.",
    transport: "Bus to Besisahar or Pokhara; private jeeps optional.",
    cost: { foreigner: "$1100–$1400", citizen: "NPR 50,000–80,000" },
    hotels: "Tea houses and lodges along route."
  },
  {
    id: "poon-hill",
    title: "Poon Hill",
    images: [
      trek3,
      require("../assets/Poonhill.jpg"),
      require("../assets/poonhill1.jpg"),
      require("../assets/poonhill2.jpg")

    ],
    description:
      "Poon Hill trek is ideal for beginners or short-duration travelers, with stunning sunrise views over Annapurna.",
    duration: "4–5 days",
    bestSeason: "March–May & September–November",
    roadConditions: "Moderate trail through rhododendron forests and Gurung villages.",
    alternativeRoutes: "Ghorepani–Tadapani loop.",
    transport: "Bus or jeep to Nayapul from Pokhara.",
    cost: { foreigner: "$250–$400", citizen: "NPR 12,000–18,000" },
    hotels: "Tea houses and guesthouses."
  },
  {
    id: "langtang-valley",
    title: "Langtang Valley",
    images: [
      trek4,
      require("../assets/langtang1.jpg"),
      require("../assets/lagtang3.jpg"),
      require("../assets/langtang2.jpg")

    ],
    description:
      "Langtang Valley trek explores Langtang National Park with glaciers, yaks, and Tibetan-style villages.",
    duration: "7–10 days",
    bestSeason: "March–May & September–November",
    roadConditions: "Moderate trails; some rocky paths and river crossings.",
    alternativeRoutes: "Langtang Gosaikunda loop.",
    transport: "Bus to Syabrubesi from Kathmandu.",
    cost: { foreigner: "$500–$700", citizen: "NPR 25,000–35,000" },
    hotels: "Tea houses in villages; basic facilities."
  },
  {
    id: "manaslu-circuit",
    title: "Manaslu Circuit",
    images: [
      trek5,
      require("../assets/maslanu1.jpg"),
      require("../assets/maslanu2.jpg"),
      require("../assets/maslanu3.jpg")

    ],
    description:
      "Manaslu Circuit trek offers pristine landscapes, traditional villages, and challenging trails. Restricted area permit required.",
    duration: "14–18 days",
    bestSeason: "March–May & September–November",
    roadConditions: "Remote trails; steep passes like Larkya La (5160 m).",
    alternativeRoutes: "Manaslu–Annapurna link route.",
    transport: "Bus or jeep to Arughat from Kathmandu.",
    cost: { foreigner: "$1200–$1500", citizen: "NPR 60,000–90,000" },
    hotels: "Tea houses along route; basic amenities."
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

      {/* Image Gallery */}
      <section className="trek-image-gallery">
        {trek.images.map((img, idx) => (
          <img key={idx} src={img} alt={`${trek.title} ${idx + 1}`} />
        ))}
      </section>

      {/* Trek Details */}
      <main className="trek-detail-content">
        <h1>{trek.title}</h1>
        <p>{trek.description}</p>

        <div className="trek-info-grid">
          <div>
            <h3>Duration</h3>
            <p>{trek.duration}</p>
          </div>
          <div>
            <h3>Best Season</h3>
            <p>{trek.bestSeason}</p>
          </div>
          <div>
            <h3>Road Conditions</h3>
            <p>{trek.roadConditions}</p>
          </div>
          <div>
            <h3>Alternative Routes</h3>
            <p>{trek.alternativeRoutes}</p>
          </div>
          <div>
            <h3>Transport</h3>
            <p>{trek.transport}</p>
          </div>
          <div>
            <h3>Cost</h3>
            <p>Foreigner: {trek.cost.foreigner} <br /> Citizen: {trek.cost.citizen}</p>
          </div>
          <div>
            <h3>Hotels / Tea Houses</h3>
            <p>{trek.hotels}</p>
          </div>
        </div>

        <Link to="/treks">
          <button className="trek-btn">← Back to Treks</button>
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default TrekDetailPage;
