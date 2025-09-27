import React from "react";
import "./hero.css";

// Import components
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import FeaturedClients from "../featuredclients/FeaturedClients";
import ClientsSpeak from "../clients/ClientsSpeak";

const HeroSection = () => {
  const infoBoxes = [
    {
      heading: "Software Services",
      description: "",
      imgSrc: "/HeroSection.svg",
    },
    {
      heading: "Retirement Planning",
      description:
        "Secure your golden years with a well-structured retirement plan. From estimating future needs to designing sustainable income streams, we ensure your retirement is financially comfortable and stress-free.",
      imgSrc: "/image-25@2x.png",
    },
    {
      heading: "Tax Saving Solutions",
      description:
        "Minimize your tax burden with smart, legal strategies. We guide you through investment options and planning techniques that reduce liabilities and maximize your savings.",
      imgSrc: "/image-26@2x.png",
    },
    {
      heading: "Goal-Based Financial Planning",
      description:
        "Financial planning is not one-size-fits-all. We help you define your objectives and create actionable strategies to reach them efficiently—whether it’s buying a home, funding education, or planning for a dream vacation.",
      imgSrc: "/image-27-1@2x.png",
    },
    {
      heading: "Mutual Fund Investments",
      description:
        "Invest in a diversified range of mutual funds managed by experienced professionals. Our approach balances risk and reward, helping you grow your wealth steadily while keeping your financial goals in focus.",
      imgSrc: "/image-27@2x.png",
    },
    {
      heading: "Wealth Growth",
      description:
        "Ensure sustainable growth of your assets with long-term strategies tailored to your goals. Our experts help optimize and diversify your portfolio for consistent performance.",
      imgSrc: "/image-24@2x.png",
    },
  ];

  const featureCards = [
    {
      icon: "💡",
      title: "Researching",
      description:
        "In-depth analysis of competitors and market trends allows us to create strategies that give our clients a competitive edge.",
    },
    {
      icon: "⚡",
      title: "Understanding",
      description:
        "We begin by actively listening to our clients, analyzing their challenges, and identifying their unique needs.",
    },
    {
      icon: "🔒",
      title: "Designing",
      description:
        "Our solutions are designed with precision and creativity to ensure functionality and user satisfaction.",
    },
    {
      icon: "🌍",
      title: "Ensuring",
      description:
        "We prioritize efficiency by delivering projects on time while also providing continuous support and updates.",
    },
  ];

  return (
    <div>
      {/* ================= Hero Section ================= */}
      <section id="hero" className="hero-section">
        <img
          src="/sd.webp"
          alt="Software Development Services"
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Software Services</h1>
            <p className="hero-description">
              Ayunext Solutions also provides professional financial services
              through certified and registered partners. Our offerings include:
            </p>
          </div>
        </div>
      </section>

      {/* ================= Bento Grid Section ================= */}
      <div id="about-us" className="info-bento-grid">
        {infoBoxes.map((box, index) => (
          <div
            key={index}
            className={`info-bento-card ${index === 0 ? "info-bento-card-large" : ""}`}
            style={{ backgroundImage: `url(${box.imgSrc})` }}
          >
            <div className="info-bento-overlay">
              <h2 className={index === 0 ? "hero-bento-title" : ""}>
                {box.heading}
              </h2>
              {index !== 0 && <p>{box.description}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* ================= Feature Section ================= */}
      <section className="feature-section">
        <h2 className="feature-heading">Our Approach</h2>

        <div className="feature-image-container">
          <img
            src="/OurApproach.svg"
            alt="Our Approach"
            className="feature-main-image"
          />
          <div className="feature-blur-box">
            <p>
              We follow a client-first approach built on understanding,
              research, customization, and long-term support. By carefully
              analyzing client needs and market trends, we craft tailored
              strategies that deliver measurable results. With a focus on
              efficiency, timely delivery, and continuous support, we ensure
              lasting success for every project.
            </p>
          </div>
        </div>

        <div className="feature-cards">
          {featureCards.map((card, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Featured Clients ================= */}
      <FeaturedClients />

      {/* ================= Clients Speak ================= */}
      <section id="clients-speak">
        <ClientsSpeak />
      </section>

      {/* ================= Contact Section ================= */}
      <section id="contact">
        <Contact />
      </section>

      {/* ================= Footer ================= */}
      <Footer />
    </div>
  );
};

export default HeroSection;
