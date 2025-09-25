import React from "react";
import "./hero.css";

// Import Contact and Footer components
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import FeaturedClients from "../featuredclients/FeaturedClients";
import ClientsSpeak from "../clients/ClientsSpeak"; // ✅ Import ClientsSpeak

const HeroSection = () => {
  const infoBoxes = [
    {
      heading: "Portfolio Management",
      description:
        "Build a strong financial future with a carefully managed portfolio. Our experts continuously monitor your investments to ensure optimal growth, stability, and alignment with your risk profile.",
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
        "Financial planning is not one-size-fits-all. We help you define your objectives, whether it’s buying a home, funding education, or planning for a dream vacation, & create actionable strategies to reach them efficiently.",
      imgSrc: "/image-27-1@2x.png",
    },
    {
      heading: "Mutual Fund Investments",
      description:
        "Invest in a diversified range of mutual funds managed by experienced professionals. Our approach balances risk and reward, helping you grow your wealth steadily while keeping your financial goals in focus.",
      imgSrc: "/image-27@2x.png",
    },
    {
      heading: "Portfolio Management",
      description:
        "Build a strong financial future with a carefully managed portfolio. Our experts continuously monitor your investments to ensure optimal growth, stability, and alignment with your risk profile.",
      imgSrc: "/image-24@2x.png",
    },
  ];

  const featureCards = [
    {
      icon: "💡",
      title: "Reasearching",
      description:
        "In-depth analysis of competitors and current market trends allows us to create strategies that not only stand out but also give our clients a competitive edge.",
    },
    {
      icon: "⚡",
      title: "Understanding",
      description:
        "We begin by actively listening to our clients, analyzing their challenges, and identifying their unique needs to ensure our solutions align perfectly with their expectations.",
    },
    {
      icon: "🔒",
      title: "Designing",
      description:
        "We begin by actively listening to our clients, analyzing their challenges, and identifying their unique needs to ensure our solutions align perfectly with their expectations.",
    },
    {
      icon: "🌍",
      title: "Ensuring",
      description:
        "We prioritize efficiency by delivering projects on time while also providing continuous support and updates to maintain long-term success.",
    },
  ];

  return (
    <div>
      {/* ================= Hero Section ================= */}
      <section id="hero" className="hero-section">
        <div className="hero-background">
          <div className="diagonal-shape"></div>
        </div>

        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">Digital Marketing</h1>
            <p className="hero-description">
              Ayunext Solutions also provides professional financial services
              through certified and registered partners. Our offerings include
            </p>
          </div>

          <div className="hero-right">{/* Optional hero image */}</div>
        </div>
      </section>

      {/* ================= About Us Section ================= */}
      <div id="about-us" className="info-bento-grid">
        {infoBoxes.map((box, index) => (
          <div
            className="info-bento-card"
            key={index}
            style={{ backgroundImage: `url(${box.imgSrc})` }}
          >
            <div className="info-bento-overlay">
              <h2>{box.heading}</h2>
              <p>{box.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= Full Image Section ================= */}
      <section className="feature-section">
        <div className="feature-image-container">
          <h2 className="feature-heading">Our Approach</h2>
          <img
            src="/OurApproach.svg"
            alt="Feature"
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

        {/* Feature Cards Row */}
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

      <FeaturedClients />

      {/* ================= Clients Speak Section ================= */}
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
