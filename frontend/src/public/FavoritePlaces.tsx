import React, { useState } from "react";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import "../css/.css"; // reuse existing styles
import ghorepaniImg from "../assets/ghorepani.jpg";
import lodgeImg from "../assets/lodge.jpg";
import mountainImg from "../assets/mountain.jpg";

const FavoritePlaces = () => {
  const [favoritePlaces, setFavoritePlaces] = useState([
    { name: "Ghorepani Viewpoint", type: "Viewpoint", img: ghorepaniImg },
    { name: "Annapurna Lodge", type: "Lodge", img: lodgeImg },
    { name: "Poon Hill Base", type: "POI", img: mountainImg },
  ]);

  const removePlace = (name: string) => {
    setFavoritePlaces(favoritePlaces.filter(place => place.name !== name));
  };

  return (
    <div className="dashboard-page">
      <NavbarAfterLogin />
      <div className="dashboard-main">
        <div className="dashboard-content">
          <section className="favorites-section">
            <h1>My Favorite Places</h1>
            {favoritePlaces.length === 0 ? (
              <p>You have no favorite places yet.</p>
            ) : (
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
                        <button onClick={() => removePlace(place.name)}>Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FavoritePlaces;
