import React from "react";
import "../css/Aboutuspage.css";

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          We are passionate about building meaningful digital experiences that
          inspire, connect, and empower.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="mission-box">
          <h2>Our Mission</h2>
          <p>
            To deliver innovative and user-friendly solutions that simplify
            lives, foster creativity, and promote growth.
          </p>
        </div>
        <div className="mission-box">
          <h2>Our Vision</h2>
          <p>
            To be a trusted global leader in technology and design, shaping a
            brighter digital future for everyone.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="https://via.placeholder.com/200" alt="Jane Doe" />
            <h3>Jane Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src="https://via.placeholder.com/200" alt="John Smith" />
            <h3>John Smith</h3>
            <p>Head of Design</p>
          </div>
          <div className="team-card">
            <img src="https://via.placeholder.com/200" alt="Emily Johnson" />
            <h3>Emily Johnson</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-box">
            <h3>Innovation</h3>
            <p>We constantly explore new ideas and push boundaries.</p>
          </div>
          <div className="value-box">
            <h3>Integrity</h3>
            <p>We believe in honesty, transparency, and trust.</p>
          </div>
          <div className="value-box">
            <h3>Excellence</h3>
            <p>We strive for the highest quality in everything we do.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
