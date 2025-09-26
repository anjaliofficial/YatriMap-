import React, { useState } from "react";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import "../css/FavoritePlaces.css";
import ghorepaniImg from "../assets/ghorepani.jpg";
import lodgeImg from "../assets/lodge.jpg";
import mountainImg from "../assets/mountain.jpg";

const FavoritePlaces = () => {
  const [favoritePlaces, setFavoritePlaces] = useState([
    { name: "Ghorepani Viewpoint", type: "viewpoint", img: ghorepaniImg },
    { name: "Annapurna Lodge", type: "lodge", img: lodgeImg },
    { name: "Poon Hill Base", type: "poi", img: mountainImg },
  ]);

  const removePlace = (name: string) => {
    setFavoritePlaces(favoritePlaces.filter(p => p.name !== name));
  };

  // Detect large screen for horizontal
  const isHorizontal = window.innerWidth > 1200;

  return (
    <div className="favorites-page">
      <NavbarAfterLogin />
      <div className="favorites-main">
        <div className="favorites-content">
          <section className="favorites-section">
            <h1>My Favorite Places</h1>
            {favoritePlaces.length === 0 ? (
              <p>You have no favorite places yet.</p>
            ) : (
              <div className={`favorites-grid ${isHorizontal ? "horizontal" : "vertical"}`}>
                {favoritePlaces.map(place => (
                  <div key={place.name} className="favorite-card">
                    <span className={`card-type-badge ${place.type}`}>{place.type.toUpperCase()}</span>
                    <img src={place.img} alt={place.name} />
                    <div className="favorite-info">
                      <h3>{place.name}</h3>
                      <p>{place.type}</p>
                      <div className="favorite-actions">
                        <button>View on Map</button>
                        <button>Start Hike Log</button>
                        <button onClick={() => removePlace(place.name)}>Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FavoritePlaces;
