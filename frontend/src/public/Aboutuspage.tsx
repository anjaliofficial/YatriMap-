import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Header />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>
            We are passionate about delivering innovative digital solutions that
            inspire and empower people. Our mission is to create experiences
            that make a lasting impact.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="about-mission">
        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>
            To provide cutting-edge technology and user-focused solutions that
            bring value to individuals, communities, and businesses.
          </p>
        </div>
        <div className="mission-box">
          <h2>Our Vision</h2>
          <p>
            To be recognized as a global leader in digital innovation, shaping
            the future with creativity, trust, and excellence.
          </p>
        </div>
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

      <Footer />
    </div>
  );
};

export default About;
