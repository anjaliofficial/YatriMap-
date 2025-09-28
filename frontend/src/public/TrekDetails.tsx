import React from "react";
import { useParams, Link } from "react-router-dom";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import "../css/TrekDetails.css";

// Images for treks
import trek1 from "../assets/pachpokhari.jpg";
import trekEBC1 from "../assets/EBC.jpg";
import trekEBC2 from "../assets/EBC2.jpg";
import trekEBC3 from "../assets/EBC3.jpg";

import trek2 from "../assets/Annapurna-Sunrise.jpg";
import trekAC1 from "../assets/annapurna 1.jpg";
import trekAC2 from "../assets/annapurna2.jpg";

import trek3 from "../assets/maslanu1.jpg";
import trekPH1 from "../assets/Poonhill.jpg";
import trekPH2 from "../assets/poonhill1.jpg";

import trek4 from "../assets/timbung pokhari.jpg";
import trekLT1 from "../assets/langtang1.jpg";
import trekLT2 from "../assets/langtang2.jpg";
import trekLT3 from "../assets/lagtang3.jpg";

import trek5 from "../assets/thorang.jpg";
import trekMC1 from "../assets/maslanu2.jpg";
import trekMC2 from "../assets/maslanu3.jpg";

// Trek data with extra details
const treks = [
  {
    id: "everest-base-camp",
    title: "Everest Base Camp",
    images: [trek1, trekEBC1, trekEBC2, trekEBC3],
    description:
      "Everest Base Camp trek takes you through Sherpa villages, monasteries, and breathtaking Himalayan views. You’ll visit Namche Bazaar, Tengboche Monastery, and see iconic peaks like Everest, Lhotse, and Ama Dablam.",
    duration: "12–14 days",
    bestSeason: "March–May & September–November",
    roadConditions: "Mostly mountainous trails with stone paths, some steep sections.",
    alternativeRoutes: "Gokyo Lakes route, Three Passes Trek.",
    transport: "Accessible by jeep/bus to Lukla; flights available from Kathmandu.",
    difficulty: "Challenging",
    altitude: "5,364 m (Everest Base Camp)",
    highlights: "Ama Dablam view, Sherpa culture, Tengboche Monastery",
    cost: {
      foreigner: {
        trekPackage: "$1200–$1500",
        permit: "$50–$60",
        guide: "$20/day",
        accommodation: "$10–$20/night",
      },
      citizen: {
        trekPackage: "NPR 60,000–90,000",
        permit: "NPR 2000",
        guide: "NPR 1500/day",
        accommodation: "NPR 500–1000/night",
      },
    },
    hotels: "Tea houses in villages; basic to moderate facilities.",
    location: "27.9881,86.9250",
  },
  {
    id: "annapurna-circuit",
    title: "Annapurna Circuit",
    images: [trek2, trekAC1, trekAC2],
    description:
      "The Annapurna Circuit is a world-famous trek circling the Annapurna massif, offering diverse climates and cultures. You’ll cross Thorong La Pass (5,416 m) and enjoy views of Annapurna, Dhaulagiri, and Machapuchare.",
    duration: "15–20 days",
    bestSeason: "March–May & September–November",
    roadConditions: "Well-trodden paths; some steep passes like Thorong La.",
    alternativeRoutes: "Short Annapurna Base Camp extension.",
    transport: "Bus to Besisahar or Pokhara; private jeeps optional.",
    difficulty: "Moderate to Challenging",
    altitude: "5,416 m (Thorong La Pass)",
    highlights: "Diverse cultures, Thorong La, Machapuchare views",
    cost: {
      foreigner: {
        trekPackage: "$1100–$1400",
        permit: "$40–$50",
        guide: "$18/day",
        accommodation: "$8–$15/night",
      },
      citizen: {
        trekPackage: "NPR 50,000–80,000",
        permit: "NPR 1500",
        guide: "NPR 1200/day",
        accommodation: "NPR 400–800/night",
      },
    },
    hotels: "Tea houses and lodges along route.",
    location: "28.5565,83.8200",
  },
  {
    id: "poon-hill",
    title: "Poon Hill",
    images: [trek3, trekPH1, trekPH2],
    description:
      "Poon Hill trek is ideal for beginners or short-duration travelers, with stunning sunrise views over Annapurna. You hike through rhododendron forests and Gurung villages.",
    duration: "4–5 days",
    bestSeason: "March–May & September–November",
    roadConditions: "Moderate trail through forests and small villages.",
    alternativeRoutes: "Ghorepani–Tadapani loop.",
    transport: "Bus or jeep to Nayapul from Pokhara.",
    difficulty: "Easy",
    altitude: "3,210 m (Poon Hill)",
    highlights: "Sunrise over Annapurna, Gurung villages, rhododendron forests",
    cost: {
      foreigner: {
        trekPackage: "$250–$400",
        permit: "$20–$25",
        guide: "$15/day",
        accommodation: "$5–$10/night",
      },
      citizen: {
        trekPackage: "NPR 12,000–18,000",
        permit: "NPR 500",
        guide: "NPR 1000/day",
        accommodation: "NPR 300–600/night",
      },
    },
    hotels: "Tea houses and guesthouses.",
    location: "28.3869,83.9112",
  },
  {
    id: "langtang-valley",
    title: "Langtang Valley",
    images: [trek4, trekLT1, trekLT2, trekLT3],
    description:
      "Langtang Valley trek explores Langtang National Park with glaciers, yaks, and Tibetan-style villages.",
    duration: "7–10 days",
    bestSeason: "March–May & September–November",
    roadConditions: "Moderate trails; some rocky paths and river crossings.",
    alternativeRoutes: "Langtang Gosaikunda loop.",
    transport: "Bus to Syabrubesi from Kathmandu.",
    difficulty: "Moderate",
    altitude: "4,984 m (Langtang Lirung)",
    highlights: "Glaciers, yaks, Tibetan villages, Gosaikunda Lake",
    cost: {
      foreigner: {
        trekPackage: "$500–$700",
        permit: "$30–$40",
        guide: "$18/day",
        accommodation: "$8–$15/night",
      },
      citizen: {
        trekPackage: "NPR 25,000–35,000",
        permit: "NPR 1000",
        guide: "NPR 1200/day",
        accommodation: "NPR 400–700/night",
      },
    },
    hotels: "Tea houses in villages; basic facilities.",
    location: "28.1970,85.4885",
  },
  {
    id: "manaslu-circuit",
    title: "Manaslu Circuit",
    images: [trek5, trekMC1, trekMC2],
    description:
      "Manaslu Circuit trek offers pristine landscapes, traditional villages, and challenging trails. Restricted area permit required.",
    duration: "14–18 days",
    bestSeason: "March–May & September–November",
    roadConditions: "Remote trails; steep passes like Larkya La (5160 m).",
    alternativeRoutes: "Manaslu–Annapurna link route.",
    transport: "Bus or jeep to Arughat from Kathmandu.",
    difficulty: "Challenging",
    altitude: "5,160 m (Larkya La Pass)",
    highlights: "Traditional villages, pristine landscapes, high passes",
    cost: {
      foreigner: {
        trekPackage: "$1200–$1500",
        permit: "$50–$60",
        guide: "$20/day",
        accommodation: "$10–$20/night",
      },
      citizen: {
        trekPackage: "NPR 60,000–90,000",
        permit: "NPR 2000",
        guide: "NPR 1500/day",
        accommodation: "NPR 500–1000/night",
      },
    },
    hotels: "Tea houses along route; basic amenities.",
    location: "28.5365,84.5350",
  },
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

      {/* Hero Image */}
      <section className="trek-hero">
        <img src={trek.images[0]} alt={trek.title} />
        <div className="hero-title">{trek.title}</div>
      </section>

      {/* Image Gallery (remaining images) */}
      <section className="trek-image-gallery">
        {trek.images.slice(1).map((img, idx) => (
          <img key={idx} src={img} alt={`${trek.title} ${idx + 2}`} />
        ))}
      </section>

      {/* Trek Details */}
      <main className="trek-detail-content">
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
            <h3>Difficulty</h3>
            <p>{trek.difficulty}</p>
          </div>
          <div>
            <h3>Altitude</h3>
            <p>{trek.altitude}</p>
          </div>
          <div>
            <h3>Highlights</h3>
            <p>{trek.highlights}</p>
          </div>
          <div>
            <h3>Cost Details</h3>
            <p>
              <strong>Foreigner:</strong> <br />
              Trek Package: {trek.cost.foreigner.trekPackage} <br />
              Permit: {trek.cost.foreigner.permit} <br />
              Guide: {trek.cost.foreigner.guide} <br />
              Accommodation: {trek.cost.foreigner.accommodation} <br /><br />
              <strong>Citizen:</strong> <br />
              Trek Package: {trek.cost.citizen.trekPackage} <br />
              Permit: {trek.cost.citizen.permit} <br />
              Guide: {trek.cost.citizen.guide} <br />
              Accommodation: {trek.cost.citizen.accommodation}
            </p>
          </div>
          <div>
            <h3>Hotels / Tea Houses</h3>
            <p>{trek.hotels}</p>
          </div>
        </div>

        {/* Map */}
        <div className="trek-map">
          <h3>Location Map</h3>
          <iframe
            title="Trek Location"
            src={`https://www.google.com/maps?q=${trek.location}&hl=es;z=12&output=embed`}
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
