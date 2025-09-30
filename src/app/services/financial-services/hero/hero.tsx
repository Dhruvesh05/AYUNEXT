import React from "react";
import Image from "next/image";
import "./hero.css";

// Import components
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import FeaturedClients from "../featuredclients/FeaturedClients";
import ClientsSpeak from "../clients/ClientsSpeak";

const HeroSection = () => {
  const infoBoxes = [
    {
      heading: "We provide professional financial services through certified and registered partners to help clients achieve financial independence and secure their financial future.",
      description: "",
      imgSrc: "/bntgf1.svg",
    },
    {
      heading: "Mutual Fund Investments",
      description:
        "Guiding clients on strategic investments in diversified mutual funds to grow capital and align with risk tolerance.",
      imgSrc: "f1.png",
    },
    {
      heading: "Goal-Based Financial Planning",
      description:
        "Creating structured plans focused on achieving specific personal or business financial milestones, such as buying a house or funding education.",
      imgSrc: "f2.png",
    },
    {
      heading: "Tax Saving Solutions",
      description:
        "Advising on compliant and effective investment and planning strategies to legally minimize tax liabilities.",
      imgSrc: "/f3.png",
    },
    {
      heading: "Wealth Creation and Portfolio Management",
      description:
        "Designing and managing diversified investment portfolios aimed at long-term capital growth and wealth accumulation.",
      imgSrc: "/f4.png",
    },
    {
      heading: "Retirement Planning",
      description:
        "Developing tailored strategies to ensure financial security and independence during retirement years.",
      imgSrc: "/f5.png",
    },
  ];

  const featureCards = [
    {
      icon: <img src="/Icon.svg" alt="" />,
      title: "1. Assess & Understand",
      description:
        "We clearly understand your financial requirements and current situation to form a planning baseline.",
    },
    {
      icon: <img src="/chart.svg" alt="" />,
      title: "2. Define & Plan",
      description:
        "We define your objectives and design a Goal-Based Financial Planning strategy for long-term independence.",
    },
    {
      icon: <img src="/magicpen.svg" alt="" />,
      title: "3. Strategize & Implement",
      description:
        "We provide continuous support and portfolio management to keep your plan on track as goals change.",
    },
    {
      icon: <img src="/shield-tick.svg" alt="" />,
      title: "4. Monitor & Adjust",
      description:
        "We ensure timely delivery and provide ongoing Software Maintenance & Support for sustained performance.",
    },
  ];

  return (
    <div>
      {/* ================= Hero Section ================= */}
      <section id="hero" className="hero-section">
        <img
          src="/Blue.svg"
          alt="Software Development Services"
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Financial Services</h1>
            <p className="hero-description">
              <h3> Secure Your Financial Future.</h3> Ayunext Solutions provides professional financial services through certified and registered partners. Our offerings include Goal-Based Financial Planning, Wealth Creation and Portfolio Management, and Tax Saving Solutions to help you achieve financial independence.
            </p>
            <a
              href="#contact"
              className="hero-cta-button"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              Get Advice
            </a>
          </div>
        </div>
      </section>

      {/* ================= Bento Grid Section ================= */}
      <div id="about-us">
        <h2 className="bento-section-title">Our Facilities</h2>
        <div className="info-bento-grid">
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
      </div>

      {/* ================= Feature Section ================= */}
      <section className="feature-section">
        <div className="feature-container">
          <h2 className="feature-heading">Our Approach</h2>

          <div className="feature-content-wrapper">
            <div className="feature-image-container">
              <Image
                src="/OurApproach.svg"
                alt="Our Approach"
                className="feature-main-image"
                width={1200}
                height={600}
                priority
              />
              <div className="feature-blur-box">
                <p>
                  Our approach to finance is built on reliability and trust, delivered through certified and registered partners. We provide comprehensive, goal-based guidance to help secure your financial future. This involves a disciplined process of assessing your current standing, defining your financial goals (like Retirement Planning ), and implementing expert solutions like Tax Saving Solutions and Wealth Creation. We provide the expertise needed for financial independence, allowing you to focus on your business.
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
          </div>
        </div>
      </section>      {/* ================= Featured Clients ================= */}
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
