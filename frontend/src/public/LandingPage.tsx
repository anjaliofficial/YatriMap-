import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Facebook, Instagram, Twitter } from "lucide-react";
import "../css/LandingPage.css";
import mountainBg from "../assets/mountain_bg.jpg";

// Trek Data
interface Trek {
  title: string;
  desc: string;
  img: string;
}
const treksData: Trek[] = [
  { title: "Poon Hill Trek", desc: "A short and scenic trek with stunning sunrise views over the Annapurnas.", img: "/khopra.jpg" },
  { title: "Mardi Himal Trek", desc: "A hidden gem offering breathtaking landscapes and quiet trails.", img: "/water.jpg" },
  { title: "Annapurna Circuit Trek", desc: "A classic long-distance trek around the majestic Annapurna massif.", img: "/Poonhill.jpg" },
];

// Testimonials Data
interface Testimonial {
  name: string;
  msg: string;
  img: string;
}
const testimonialsData: Testimonial[] = [
  { name: "Amit Gurung", msg: "Trek Nepal made my first Annapurna trek unforgettable. Highly recommended!", img: "/testimonial1.jpg" },
  { name: "Sita Sharma", msg: "Easy planning and amazing community. Loved sharing my trekking experience!", img: "/testimonial2.jpg" },
  { name: "Ramesh Thapa", msg: "Beautiful trails and seamless app experience. I’ll be back for more treks!", img: "/testimonial3.jpg" },
];

// Animation
const fadeInUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

// Trek Card
const TrekCard: React.FC<{ trek: Trek; index: number }> = ({ trek, index }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    whileHover={{ y: -10, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
    className="trek-card"
  >
    <img src={trek.img} alt={trek.title} />
    <div className="trek-content">
      <h3>{trek.title}</h3>
      <p>{trek.desc}</p>
    </div>
  </motion.div>
);

// Testimonial Card
const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => (
  <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: index * 0.2 }} className="testimonial-card">
    <img src={testimonial.img} alt={testimonial.name} />
    <p>"{testimonial.msg}"</p>
    <h4>{testimonial.name}</h4>
  </motion.div>
);

// Hero Section
const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="hero">
      <motion.div className="hero-bg" style={{ backgroundImage: `url(${mountainBg})`, y: y1 }} />
      <motion.div className="hero-content">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Discover, Plan & Log Your Treks in Nepal
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          Explore the majestic Himalayas, plan your adventure, and share your trekking experiences with a vibrant community.
        </motion.p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-cta">
          Explore Treks
        </motion.button>
      </motion.div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="scroll-indicator">
        <div className="scroll-circle"></div>
      </motion.div>
    </section>
  );
};

// Landing Page
const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      <header className="navbar">
        <div className="logo"><span className="logo-text">Trek Nepal</span></div>
        <nav className="nav-links">
          <ScrollLink to="explore" smooth duration={800}>Explore Treks</ScrollLink>
          <ScrollLink to="testimonials" smooth duration={800}>Testimonials</ScrollLink>
          <ScrollLink to="cta" smooth duration={800}>Get Started</ScrollLink>
        </nav>
        <div className="auth-buttons">
          <button className="btn-login">Login</button>
          <motion.button whileHover={{ scale: 1.05 }} className="btn-signup">Sign Up</motion.button>
        </div>
      </header>

      <Hero />

      <section id="explore" className="treks-section">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Popular Treks</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>Embark on unforgettable journeys through Nepal’s most iconic trails.</motion.p>
        <div className="treks-grid">{treksData.map((trek, index) => <TrekCard key={index} trek={trek} index={index} />)}</div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <div className="testimonials-content">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>What Our Trekkers Say</motion.h2>
          <div className="testimonials-grid">{testimonialsData.map((t, index) => <TestimonialCard key={index} testimonial={t} index={index} />)}</div>
        </div>
      </section>

      <section id="cta" className="cta-section">
        <h2>Ready for Your Next Adventure?</h2>
        <p>Join Trek Nepal today and start planning your dream trek in the Himalayas!</p>
        <button className="btn-cta">Get Started</button>
      </section>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>Site Map</h4>
            <ul><li>Home</li><li>Popular Treks</li><li>Testimonials</li><li>Get Started</li></ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul><li>Privacy Policy</li><li>Terms of Service</li></ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul><li>Contact Us</li><li>FAQ</li></ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons"><Facebook className="icon"/><Instagram className="icon"/><Twitter className="icon"/></div>
          </div>
        </div>
        <p className="footer-bottom">© 2025 Trek Nepal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
