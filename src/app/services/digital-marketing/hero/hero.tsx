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
      heading: "We help businesses build a strong digital presence and reach their ideal customers by integrating creativity and advanced marketing strategies",
      description: "",
      imgSrc: "/bntgd1.svg",
    },
    {
      heading: "Social Media Management",
      description:
        "Strategically managing and creating content for social platforms to foster community, increase brand visibility, and drive engagement.",
      imgSrc: "d1.png",
    },
    {
      heading: "Search Engine Optimization (SEO)",
      description:
        "Optimizing your website and content to achieve higher rankings in search results, increasing organic (unpaid) traffic and visibility.",
      imgSrc: "d2.png",
    },
    {
      heading: "Content Creation and Marketing",
      description:
        "Developing high-quality, relevant content (text, images, video) to attract, engage, and convert a defined target audience.",
      imgSrc: "/d3.png",
    },
    {
      heading: "Paid Advertising Campaigns",
      description:
        "Planning, executing, and optimizing targeted ads on platforms like Google Ads and Meta Ads to deliver immediate results and conversions.",
      imgSrc: "/d4.png",
    },
    {
      heading: "Brand Strategy and Online Reputation Management",
      description:
        "Defining your brand's unique identity and actively monitoring and improving public perception across digital channels.",
      imgSrc: "/d5.png",
    },
  ];

  const featureCards = [
    {
      icon: <img src="/Icon.svg" alt="" />,
      title: "1. Research & Define",
      description:
        "We research competitors and markets to define your ideal customer and set clear, measurable goals.",
    },
    {
      icon: <img src="/chart.svg" alt="" />,
      title: "2. Strategize & Plan",
      description:
        "We design a tailored plan covering SEO, Content Creation, and Paid Advertising Campaigns.",
    },
    {
      icon: <img src="/magicpen.svg" alt="" />,
      title: "3. Execute & Optimize",
      description:
        "We implement campaigns and utilize Analytics and Performance Tracking to make real-time optimizations.",
    },
    {
      icon: <img src="/shield-tick.svg" alt="" />,
      title: "4. Review & Grow",
      description:
        "We provide timely reports and ensure your strategy continually evolves for maximum reach and brand growth.",
    },
  ];

  return (
    <div>
      {/* ================= Hero Section ================= */}
      <section id="hero" className="hero-section">
        <img
          src="/Orange.svg"
          alt="Software Development Services"
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Digital Marketing</h1>
            <p className="hero-description">
              <h3> Maximize Your Reach. Convert Your Audience.</h3>  Ayunext Solutions crafts data-driven digital strategies designed to grow your brand, increase traffic, and deliver measurable ROI. We specialize in SEO, PPC, social media management, and content that speaks directly to your ideal customer.

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
                  We implement a data-driven approach to help businesses build a strong digital presence. Our strategy integrates creativity with precision, using market insights to develop campaigns that speak directly to your ideal customers. We utilize a full suite of services, from Search Engine Optimization (SEO) and Content Creation to targeted Paid Advertising Campaigns. The goal is simple: maximize your online reach and ensure every action is backed by Analytics and Performance Tracking.
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
