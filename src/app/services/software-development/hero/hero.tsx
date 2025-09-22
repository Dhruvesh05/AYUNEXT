import React from 'react';
import './hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Purple diagonal background */}
      <div className="hero-background">
        <div className="diagonal-shape"></div>
      </div>
      
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-left">
          <h1 className="hero-title">Software Services</h1>
          <p className="hero-description">
            Ayunext Solutions also provides professional 
            financial services through certified and 
            registered partners. Our offerings include
          </p>
        </div>
        
        {/* Right Image */}
        <div className="hero-right">
        </div>
      </div>
      

    </section>
  );
};

export default HeroSection;