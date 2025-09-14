"use client";
import React, { useState, useEffect, useRef } from "react";
import "./page.css";
import Services from "./services/software-development/software-development";
import AboutUs from "./knowUs/AboutUs";
import Approach from "./approach/Approach"; // ✅ New Approach section

export default function HomePage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState<number | null>(null);

  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll to services section and set active tab
  const handleServiceClick = (tabIndex: number) => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
      setActiveServiceTab(tabIndex);
    }
    setDropdownOpen(false);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero" id="hero">
        <header>
          <div className="logo">
            <img src="/Ayunextlogo.png" alt="Ayunext Logo" />
          </div>
          <nav className="navbar">
            <div className="nav-container">
              <ul className="nav-menu">
                <li>
                  <a href="#hero" className="nav-link active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#approach" className="nav-link">
                    Approach
                  </a>
                </li>

                {/* Dropdown */}
                <li className="dropdown" ref={dropdownRef}>
                  <button
                    className="nav-link dropdown-toggle"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    Services <span className="arrow">▼</span>
                  </button>
                  {dropdownOpen && (
                    <div className="dropdown-menu">
                      <button
                        className="dropdown-item"
                        onClick={() => handleServiceClick(0)}
                      >
                        Software Development
                      </button>
                      <button
                        className="dropdown-item"
                        onClick={() => handleServiceClick(1)}
                      >
                        Digital Marketing
                      </button>
                      <button
                        className="dropdown-item"
                        onClick={() => handleServiceClick(2)}
                      >
                        Financial Services
                      </button>
                    </div>
                  )}
                </li>

                <li>
                  <a href="#resources" className="nav-link">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>

              {/* Hamburger Menu */}
              <div
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="mobile-menu">
                <a href="#hero" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About Us
                </a>
                <a href="#approach" onClick={() => setMenuOpen(false)}>
                  Approach
                </a>
                <a href="#services" onClick={() => setMenuOpen(false)}>
                  Services
                </a>
                <a href="#resources" onClick={() => setMenuOpen(false)}>
                  Resources
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </div>
            )}
          </nav>
        </header>

        {/* Hero Content */}
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Innovation.
                <br />
                Finance. Growth
              </h1>
              <p className="hero-description">
                Ayunext Solutions delivers business-focused technology and
                financial services to help companies grow, streamline
                operations, and secure their financial future.
              </p>
              <button className="cta-button">Get Advice</button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Clients served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Successful Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Positive Feedback</div>
              </div>
            </div>
          </div>

          {/* Decorations */}
          <div className="hero-decorations">
            <div className="plus-icon plus-1">+</div>
            <div className="plus-icon plus-2">+</div>
            <div className="plus-icon plus-3">+</div>
            <div className="plus-icon plus-4">+</div>
            <div className="plus-icon plus-5">+</div>
          </div>
        </div>
      </section>

      {/* ✅ Services Section */}
      <Services scrollToTab={activeServiceTab ?? undefined} />

      {/* ✅ About Us Section */}
      <AboutUs />

      {/* ✅ Approach Section */}
      <Approach />
    </div>
  );
}
