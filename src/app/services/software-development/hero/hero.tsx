import React from 'react';
import './hero.css';

// Import Contact and Footer components
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

const HeroSection = () => {
  const infoBoxes = [
    {
      heading: 'Retirement Planning',
      description:
        'Secure your golden years with a well-structured retirement plan. From estimating future needs to designing sustainable income streams, we ensure your retirement is financially comfortable and stress-free.',
      imgSrc: '/HeroSection.svg',
    },
    {
      heading: 'Tax Saving Solutions',
      description:
        'Minimize your tax burden with smart, legal strategies. We guide you through investment options and planning techniques that reduce liabilities and maximize your savings.',
      imgSrc: '/HeroSection.svg',
    },
    {
      heading: 'Goal-Based Financial Planning',
      description:
        'Financial planning is not one-size-fits-all. We help you define your objectives, whether it’s buying a home, funding education, or planning for a dream vacation, & create actionable strategies to reach them efficiently.',
      imgSrc: '/HeroSection.svg',
    },
    {
      heading: 'Mutual Fund Investments',
      description:
        'Invest in a diversified range of mutual funds managed by experienced professionals. Our approach balances risk and reward, helping you grow your wealth steadily while keeping your financial goals in focus.',
      imgSrc: '/HeroSection.svg',
    },
    {
      heading: 'Portfolio Management',
      description:
        'Build a strong financial future with a carefully managed portfolio. Our experts continuously monitor your investments to ensure optimal growth, stability, and alignment with your risk profile.',
      imgSrc: '/HeroSection.svg',
    },
  ];

  const featureCards = [
    {
      icon: '💡',
      title: 'Reasearching',
      description:
        'In-depth analysis of competitors and current market trends allows us to create strategies that not only stand out but also give our clients a competitive edge.',
    },
    {
      icon: '⚡',
      title: 'Understanding',
      description:
        'We begin by actively listening to our clients, analyzing their challenges, and identifying their unique needs to ensure our solutions align perfectly with their expectations.',
    },
    {
      icon: '🔒',
      title: 'Designing',
      description:
        'We begin by actively listening to our clients, analyzing their challenges, and identifying their unique needs to ensure our solutions align perfectly with their expectations.',
    },
    {
      icon: '🌍',
      title: 'Ensuring',
      description:
        'We prioritize efficiency by delivering projects on time while also providing continuous support and updates to maintain long-term success.',
    },
  ];

  return (
    <div>
      {/* ================= Hero Section ================= */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="diagonal-shape"></div>
        </div>

        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">Software Services</h1>
            <p className="hero-description">
              Ayunext Solutions also provides professional financial services
              through certified and registered partners. Our offerings include
            </p>
          </div>

          <div className="hero-right">{/* Optional hero image */}</div>
        </div>
      </section>

      {/* ================= About Us Section ================= */}
      <div id="about-us">
        {infoBoxes.map((box, index) => (
          <section
            className={`info-section ${index % 2 !== 0 ? 'reverse' : ''}`}
            key={index}
          >
            <div className="info-container">
              <div className="info-box-wrapper">
                <div className="info-box-red">
                  <h2>{box.heading}</h2>
                  <p>{box.description}</p>
                </div>
              </div>
              <div className="info-image">
                <img src={box.imgSrc} alt={box.heading} />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ================= Full Image Section ================= */}
      <section className="feature-section">
        <h2 className="feature-heading">Our Approach</h2>
        <div className="feature-image-container">
          <img
            src="/OurApproach.svg"
            alt="Feature"
            className="feature-main-image"
          />
          <div className="feature-blur-box">
            <p>
              We follow a client-first approach built on understanding, research,
              customization, and long-term support. By carefully analyzing client
              needs and market trends, we craft tailored strategies that deliver
              measurable results. With a focus on efficiency, timely delivery, and
              continuous support, we ensure lasting success for every project.
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
