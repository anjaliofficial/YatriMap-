import React from "react";
import Header from "../components/NavbarAfterLogin";
import Footer from "../components/Footer";
import "../css/AboutusPage.css";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Header />

      {/* Hero Section - ENHANCED with a strong tagline */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Pioneering Digital Transformation</h1>
          <p>
            We are **Innovators** and **Problem-Solvers** dedicated to building
            digital solutions that power the future. Since 2020, we've blended
            creativity and cutting-edge technology to empower businesses and
            people worldwide. **Your success is not just our mission—it's our shared journey.**
          </p>
          <a href="#company-story" className="btn-primary">Discover Our Journey</a>
        </div>
      </section>

      {/* Company Story - ENHANCED with more narrative and milestones */}
      <section className="about-story" id="company-story">
        <h2>Our Journey: From Idea to Global Impact</h2>
        <p>
          Founded in a small garage in Silicon Valley in **2020** by a team of three passionate
          developers, our company started with a simple, yet powerful mission: to combine
          human-centric design with robust technology to significantly **improve everyday
          digital experiences**. We quickly gained traction by focusing on complex problems
          in the e-commerce and fintech spaces.
        </p>
        <p>
          Over the years, our growth has been fueled by continuous learning, adaptation,
          and a relentless commitment to our clients. We have expanded our expertise
          into cloud architecture, AI-driven solutions, and enterprise-level system
          integration. Today, we proudly serve **200+ clients globally**, delivering
          impactful digital solutions that not only meet current business needs but
          also anticipate future market trends.
        </p>
      </section>

      {/* Mission / Vision / Values - ENHANCED with more detail in each box */}
      <section className="about-mission">
        <div className="mission-box">
          <h3><span role="img" aria-label="Rocket">🚀</span> Our Mission</h3>
          <p>
            Our core mission is to provide **cutting-edge technology** and **user-focused solutions**
            that consistently deliver measurable value. We aim to be the strategic partner that
            helps individuals, communities, and businesses navigate and thrive in the digital age.
          </p>
        </div>
        <div className="mission-box">
          <h3><span role="img" aria-label="Binoculars">🔭</span> Our Vision</h3>
          <p>
            To be recognized as a **global leader in digital innovation** and a benchmark for
            client partnership. We aspire to shape the future of technology by fostering a culture
            of creativity, trust, excellence, and sustainable development.
          </p>
        </div>
        <div className="mission-box">
          <h3><span role="img" aria-label="Diamond">💎</span> Our Values</h3>
          <ul>
            <li>**Integrity:** We operate with transparency and uphold the highest ethical standards.</li>
            <li>**Innovation:** We relentlessly pursue new ideas and technologies to drive progress.</li>
            <li>**Collaboration:** We believe the best results come from working together—with clients and colleagues.</li>
            <li>**Customer Success:** We are passionately invested in achieving tangible, long-term success for our clients.</li>
          </ul>
        </div>
      </section>

      {/* Core Competencies (NEW SECTION) */}
      <section className="about-competencies">
        <h2>Our Core Competencies</h2>
        <div className="competency-grid">
          <div className="competency-card">
            <h4>Cloud & SaaS Development</h4>
            <p>Building scalable, secure, and resilient cloud-native applications on AWS, Azure, and GCP.</p>
          </div>
          <div className="competency-card">
            <h4>Data & AI Solutions</h4>
            <p>Leveraging machine learning and big data analytics to drive smarter business decisions.</p>
          </div>
          <div className="competency-card">
            <h4>UX/UI & Product Design</h4>
            <p>Creating intuitive, accessible, and delightful user experiences that convert and retain users.</p>
          </div>
          <div className="competency-card">
            <h4>Enterprise Systems Integration</h4>
            <p>Seamlessly connecting disparate systems to optimize workflows and maximize operational efficiency.</p>
          </div>
        </div>
      </section>
      
      ---

      {/* Why Choose Us - ENHANCED with compelling bullet points */}
      <section className="about-why">
        <h2>Why Partner with Us?</h2>
        <div className="why-us-content">
          <div className="why-us-text">
            <p>
              Choosing a technology partner is a critical decision. We distinguish ourselves through a unique blend of technical mastery, client-focused flexibility, and a proven track record of delivering measurable ROI.
            </p>
            <ul>
              <li><span role="img" aria-label="Check">✅</span> **Global Trust, Local Focus:** Trusted by 200+ clients globally, we offer enterprise-level experience with the personalized attention of a boutique firm.</li>
              <li><span role="img" aria-label="Star">⭐</span> **Experienced and Passionate Team:** Our multi-disciplinary team consists of certified architects, engineers, and designers who are passionate about quality code and elegant solutions.</li>
              <li><span role="img" aria-label="Lightbulb">💡</span> **Tailored Innovative Solutions:** We don't believe in one-size-fits-all. Our solutions are custom-designed to tackle your unique business challenges and maximize your competitive advantage.</li>
              <li><span role="img" aria-label="Growth">📈</span> **Commitment to Quality & Long-Term Growth:** Our partnership extends beyond project launch; we focus on maintainability, scalability, and supporting your continuous growth.</li>
            </ul>
          </div>
          
        </div>
      </section>

      ---

      {/* Team Section - ENHANCED with a focus on team culture */}
      <section className="about-team">
        <h2>Meet Our Leaders and Innovators</h2>
        <p className="team-intro">
          Our team is the heart of our success. We're a diverse group of thinkers, builders, and strategists united by a passion for technology and a commitment to our client's vision. Get to know the people guiding our journey.
        </p>
        <div className="team-grid">
          <div className="team-card">
            <img src="/images/team1.jpg" alt="Jane Doe, CEO & Founder" />
            <h3>Jane Doe</h3>
            <p>CEO & Founder</p>
            <span className="bio-snippet">A visionary leader who spearheads our strategic direction and culture of innovation.</span>
          </div>
          <div className="team-card">
            <img src="/images/team2.jpg" alt="John Smith, CTO" />
            <h3>John Smith</h3>
            <p>CTO</p>
            <span className="bio-snippet">The technical architect behind our most successful platforms, specializing in cloud security and AI.</span>
          </div>
          <div className="team-card">
            <img src="/images/team3.jpg" alt="Sarah Lee, Head of Design" />
            <h3>Sarah Lee</h3>
            <p>Head of Design</p>
            <span className="bio-snippet">An award-winning UX specialist focused on creating accessible and intuitive user experiences.</span>
          </div>
          {/* Added a fourth team member for more detail */}
          <div className="team-card">
            <img src="/images/team4.jpg" alt="Michael Chen, VP of Client Success" />
            <h3>Michael Chen</h3>
            <p>VP of Client Success</p>
            <span className="bio-snippet">Dedicated to ensuring every client partnership is fruitful, long-lasting, and exceeds expectations.</span>
          </div>
        </div>
      </section>

      ---

      {/* Contact Section - UNCHANGED, as it's already comprehensive */}
      <section className="about-contact">
        <h2>Contact Us: Let's Build Something Great Together</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Have questions about our services, want to join our team, or discuss a new project? Reach out through any of the channels below. We look forward to hearing from you!</p>
            <ul>
              <li><span role="img" aria-label="Location Pin">📍</span> **Headquarters:** 123 Innovation Street, Tech City, CA 90210</li>
              <li><span role="img" aria-label="Email">📧</span> **General Inquiries:** contact@company.com</li>
              <li><span role="img" aria-label="Phone">📞</span> **Phone:** +1 (555) 123-4567</li>
            </ul>
          </div>
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <input type="text" placeholder="Your Full Name" required />
              <input type="email" placeholder="Work Email" required />
              <input type="text" placeholder="Subject (e.g., Partnership Inquiry)" required />
              <textarea placeholder="Tell us about your project or question..." rows={5} required></textarea>
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