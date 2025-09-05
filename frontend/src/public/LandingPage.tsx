import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";

import { Link as ScrollLink } from "react-scroll";
import { Facebook, Instagram, Twitter } from "lucide-react";
import "../css/LandingPage.css";

// Trek Data
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

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Trek Card
interface TrekCardProps {
  trek: Trek;
  index: number;
}

const TrekCard: React.FC<TrekCardProps> = ({ trek, index }) => (
  <motion.div
    key={index}
    variants={fadeInUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    whileHover={{ y: -10, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
    className="trek-card"
  >
    <img src={trek.img} alt={trek.title} className="trek-image" />
    <div className="trek-content">
      <h3>{trek.title}</h3>
      <p>{trek.desc}</p>
    </div>
  </motion.div>
);

// Footer Section
interface FooterSectionProps {
  title: string;
  links: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div className="footer-section">
    <h4>{title}</h4>
    <ul>
      {links.map((link, i) => (
        <li key={i}>{link}</li>
      ))}
    </ul>
  </div>
);

// Hero Section with Parallax
const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="hero">
      {/* Parallax Background */}
      <motion.div
        style={{ y: y1 }}
        className="hero-bg"
      />

      {/* Foreground Content */}
      <motion.div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover, Plan & Log Your Treks in Nepal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Explore the majestic Himalayas, plan your adventure, and share your
          trekking experiences with a vibrant community.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-cta"
        >
          Explore Treks
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="scroll-indicator"
      >
        <div className="scroll-circle"></div>
      </motion.div>
    </section>
  );
};

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
          <ScrollLink to="explore" smooth={true} duration={800}>
            Explore Treks
          </ScrollLink>
          <ScrollLink to="my-hikes" smooth={true} duration={800}>
            My Hikes
          </ScrollLink>
          <ScrollLink to="achievements" smooth={true} duration={800}>
            Achievements
          </ScrollLink>
        </nav>
        <div className="auth-buttons">
          <button className="btn-login">Login</button>
          <motion.button whileHover={{ scale: 1.05 }} className="btn-signup">
            Sign Up
          </motion.button>
        </div>
      </header>

      {/* Hero */}
      <Hero />

      {/* Popular Treks */}
      <section id="explore" className="treks-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Popular Treks
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Embark on unforgettable journeys through Nepal’s most iconic trails.
        </motion.p>
        <div className="treks-grid">
          {treksData.map((trek, index) => (
            <TrekCard key={index} trek={trek} index={index} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <FooterSection
            title="Site Map"
            links={["Home", "Popular Treks", "My Hikes", "Community"]}
          />
          <FooterSection title="Legal" links={["Privacy Policy", "Terms of Service"]} />
          <FooterSection title="Support" links={["Contact Us", "FAQ"]} />
          <div className="footer-section">
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
