import React from "react";
import Header from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import "../css/AboutusPage.css";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Header />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            We are innovators and problem-solvers, creating solutions that empower
            businesses and people worldwide. Your success is our mission.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2020, our company started with a simple mission: to combine
          creativity and technology to improve everyday experiences. Over the years,
          we have grown to serve 200+ clients globally, delivering impactful digital
          solutions that make a difference.
        </p>
      </section>

      {/* Mission / Vision / Values */}
      <section className="about-mission">
        <div className="mission-box">
          <h3>Our Mission</h3>
          <p>
            To provide cutting-edge technology and user-focused solutions that bring
            value to individuals, communities, and businesses.
          </p>
        </div>
        <div className="mission-box">
          <h3>Our Vision</h3>
          <p>
            To be recognized as a global leader in digital innovation, shaping the
            future with creativity, trust, and excellence.
          </p>
        </div>
        <div className="mission-box">
          <h3>Our Values</h3>
          <p>
            Integrity, Innovation, Collaboration, and Customer Success are the core
            values that drive everything we do.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Trusted by 200+ clients globally</li>
          <li>✔ Experienced and passionate team</li>
          <li>✔ Innovative solutions tailored to your needs</li>
          <li>✔ Commitment to quality and long-term growth</li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="/images/team1.jpg" alt="Team Member" />
            <h3>Jane Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-card">
            <img src="/images/team2.jpg" alt="Team Member" />
            <h3>John Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-card">
            <img src="/images/team3.jpg" alt="Team Member" />
            <h3>Sarah Lee</h3>
            <p>Head of Design</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-contact">
        <h2>Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Have questions or want to work with us? Reach out through any of the channels below:</p>
            <ul>
              <li>📍 123 Innovation Street, Tech City</li>
              <li>📧 contact@company.com</li>
              <li>📞 +1 (555) 123-4567</li>
            </ul>
          </div>
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows={5} required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
