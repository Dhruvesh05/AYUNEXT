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
      heading: "We develop tailored software solutions that meet the specific needs of businesses, focusing on leveraging technology to help companies grow and streamline operations.",
      description: "",
      imgSrc: "/bntgs1.svg",
    },
    {
      heading: "Web & Mobile Application Development",
      description:
        "Building responsive, high-performance applications for all platforms to engage customers and enhance accessibility.",
      imgSrc: "/Web&MobileApplicationDevelopment.png",
    },
    {
      heading: "Customized Business Platforms",
      description:
        "Creating bespoke enterprise systems and tools to manage specific business processes and operational workflows.",
      imgSrc: "/CustomizedBusinessPlatforms.png",
    },
    {
      heading: "Cloud-Based Solutions",
      description:
        "Implementing scalable and secure cloud infrastructure to optimize resources and enable remote access and collaboration.",
      imgSrc: "/Cloud-BasedSolutions.png",
    },
    {
      heading: "AI-Powered Automation & Analytics",
      description:
        "Integrating Artificial Intelligence for automating repetitive tasks, generating advanced insights, and improving decision-making.",
      imgSrc: "/AI-PoweredAutomation&Analytics.png",
    },
    {
      heading: "Software Maintenance & Support",
      description:
        "Ensuring the long-term reliability, security, and optimal performance of your software investments through continuous maintenance.",
      imgSrc: "/SoftwareMaintenance&Support.png",
    },
  ];

  const featureCards = [
    {
      icon: <img src="/Icon.svg" alt="" />,
      title: "1. Define & Research",
      description:
        "We gain a deep understanding of your business needs, goals, and technical landscape.",
    },
    {
      icon: <img src="/chart.svg" alt="" />,
      title: "2. Design & Tailor",
      description:
        "We design a robust, secure, and user-centric solution tailored to your specific objectives.",
    },
    {
      icon: <img src="/magicpen.svg" alt="" />,
      title: "3. Develop & Integrate",
      description:
        "We iteratively develop the solution, ensuring flawless integration and continuous testing for high performance.",
    },
    {
      icon: <img src="/shield-tick.svg" alt="" />,
      title: "4. Deliver & Support",
      description:
        "We ensure timely delivery and provide ongoing Software Maintenance & Support for sustained performance.",
    },
  ];

  return (
    <div>
      {/* ================= Hero Section ================= */}
      <section id="hero" className="hero-section">
        <img
          src="/Green.svg"
          alt="Software Development Services"
          className="hero-image"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Software Services</h1>
            <p className="hero-description">
              <h3> Beyond Code: Delivering End-to-End Solutions. </h3> Delivering End-to-End Solutions. 
Ayunext Solutions builds custom software that drives efficiency and growth. We specialize in enterprise applications, mobile development, and integrating robust platforms, ensuring your technology scales with your ambition.
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
                  Our core focus is on delivering business-focused technology. The approach is highly collaborative, ensuring we develop tailored software solutions that meet your specific needs. We dedicate time to upfront definition and design to ensure your platform is robust and scalable, specializing in everything from Cloud-Based Solutions to AI-Powered Automation. Our process culminates in flawless deployment and comprehensive Software Maintenance & Support.
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
