import React from "react";
import { motion, Variants } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import "./LandingPage.css";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Type for Trek object
interface Trek {
  title: string;
  desc: string;
  img: string;
}

const treksData: Trek[] = [
  {
    title: "Poon Hill Trek",
    desc: "A short and scenic trek with stunning sunrise views over the Annapurnas.",
    img: "/poonhill.jpg",
  },
  {
    title: "Mardi Himal Trek",
    desc: "A hidden gem offering breathtaking landscapes and quiet trails.",
    img: "/mardi.jpg",
  },
  {
    title: "Annapurna Circuit Trek",
    desc: "A classic long-distance trek around the majestic Annapurna massif.",
    img: "/annapurna.jpg",
  },
];

const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <motion.div
            className="logo-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <span className="logo-text">Trek Nepal</span>
        </div>
        <nav className="nav-links">
          <a href="#explore">Explore Treks</a>
          <a href="#my-hikes">My Hikes</a>
          <a href="#achievements">Achievements</a>
        </nav>
        <div className="auth-buttons">
          <button className="btn-ghost">Login</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="hero-title"
        >
          Discover, Plan & Log Your Treks in Nepal
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="hero-subtitle"
        >
          Explore the majestic Himalayas, plan your adventure, and share your
          trekking experiences with a vibrant community.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button className="btn-cta">Explore Treks</button>
        </motion.div>
      </section>

      {/* Popular Treks */}
      <section id="explore" className="treks-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="treks-title"
        >
          Popular Treks
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="treks-subtitle"
        >
          Embark on unforgettable journeys through Nepal’s most iconic trails.
        </motion.p>

        <div className="treks-grid">
          {treksData.map((trek, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="trek-card"
            >
              <img src={trek.img} alt={trek.title} className="trek-image" />
              <div className="trek-content">
                <h3>{trek.title}</h3>
                <p>{trek.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Site Map</h4>
            <ul>
              <li>Home</li>
              <li>Popular Treks</li>
              <li>My Hikes</li>
              <li>Community</li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <div className="social-icons">
              <Facebook className="icon" />
              <Instagram className="icon" />
              <Twitter className="icon" />
            </div>
          </div>
        </div>
        <p className="footer-bottom">© 2024 Trek Nepal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
