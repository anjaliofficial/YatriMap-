import React from "react";
import { Link } from "react-router-dom";
import NavbarAfterLogin from "../components/NavbarAfterLogin"; 
import Footer from "../components/Footer"; 

// Trek images
import pachpokhari from "../assets/pachpokhari.jpg"; 
import annapurna from "../assets/Annapurna-Sunrise.jpg"; 
import makalu from "../assets/makalu.jpg"; 
import timbung from "../assets/timbung pokhari.jpg"; 
import thorang from "../assets/thorang.jpg"; 
import dudhkunda from "../assets/dudhkunda.jpg"; 

const TreksPage: React.FC = () => {
  return (
    <div className="treks-page">
      {/* Navbar */}
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

          <div className="trek-card">
            <img src={pachpokhari} alt="Panch Pokhari Trek" />
            <div className="trek-info">
              <h3>Panch Pokhari Trek</h3>
              <p>
                A sacred journey to five alpine lakes surrounded by stunning Himalayan landscapes.
              </p>
              <Link to="/treks/panchpokhari" className="trek-btn">View Details</Link>
            </div>
          </div>

          <div className="trek-card">
            <img src={annapurna} alt="Annapurna Sunrise Trek" />
            <div className="trek-info">
              <h3>Annapurna Sunrise Trek</h3>
              <p>
                Famous for breathtaking sunrise views over the Annapurna range from Poon Hill.
              </p>
              <Link to="/treks/annapurna" className="trek-btn">View Details</Link>
            </div>
          </div>

          <div className="trek-card">
            <img src={makalu} alt="Makalu Base Camp Trek" />
            <div className="trek-info">
              <h3>Makalu Base Camp Trek</h3>
              <p>
                A challenging trek to the base of the world’s fifth highest peak, Mount Makalu.
              </p>
              <Link to="/treks/makalu" className="trek-btn">View Details</Link>
            </div>
          </div>

          <div className="trek-card">
            <img src={timbung} alt="Timbung Pokhari Trek" />
            <div className="trek-info">
              <h3>Timbung Pokhari Trek</h3>
              <p>
                A hidden gem in eastern Nepal, with crystal-clear lake views and local culture.
              </p>
              <Link to="/treks/timbung" className="trek-btn">View Details</Link>
            </div>
          </div>

          <div className="trek-card">
            <img src={thorang} alt="Thorong La Pass Trek" />
            <div className="trek-info">
              <h3>Thorong La Pass Trek</h3>
              <p>
                Cross one of the highest trekking passes in the world with spectacular scenery.
              </p>
              <Link to="/treks/thorang" className="trek-btn">View Details</Link>
            </div>
          </div>

          <div className="trek-card">
            <img src={dudhkunda} alt="Dudh Kunda Trek" />
            <div className="trek-info">
              <h3>Dudh Kunda Trek</h3>
              <p>
                A pilgrimage trek to the holy lake at the foot of Numbur Himal, rich in culture.
              </p>
              <Link to="/treks/dudhkunda" className="trek-btn">View Details</Link>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TreksPage;
