import React, { useState } from "react";
import NavbarAfterLogin from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import "../css/FavoritePlaces.css";
import ghorepaniImg from "../assets/ghorepani.jpg";
import lodgeImg from "../assets/lodge.jpg";
import mountainImg from "../assets/mountain.jpg";

const FavoritePlaces = () => {
  const [favoritePlaces, setFavoritePlaces] = useState([
    { name: "Ghorepani Viewpoint", type: "Viewpoint", img: ghorepaniImg },
    { name: "Annapurna Lodge", type: "Lodge", img: lodgeImg },
    { name: "Poon Hill Base", type: "POI", img: mountainImg },
    { name: "Sunrise Peak", type: "Viewpoint", img: ghorepaniImg },
    { name: "ABC Lodge", type: "Lodge", img: lodgeImg },
    { name: "Himalayan View", type: "POI", img: mountainImg },
  ]);

  const removePlace = (name) => {
    setFavoritePlaces(favoritePlaces.filter(place => place.name !== name));
  };

  return (
    <div className="favorites-page">
      <NavbarAfterLogin />

      {/* Title Section */}
      <div className="favorites-title">
        <h1>✨ Favorite Places</h1>
        <p>Keep track of your most loved destinations</p>
      </div>

      {/* Main Grid Section */}
      <div className="favorites-main">
        <div className="favorites-container">
          {favoritePlaces.length === 0 ? (
            <p className="empty-text">You have no favorite places yet.</p>
          ) : (
            favoritePlaces.map((place) => (
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
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FavoritePlaces;
