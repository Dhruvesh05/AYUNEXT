"use client";
import React, { useState, useEffect, useRef } from "react";
import "./page.css";

import Services from "./services/software-development/software-development";
import AboutUs from "./knowUs/AboutUs";
import Approach from "./approach/Approach";
import ClientsSpeak from "./clients/ClientsSpeak";
import FeaturedClients from "./featuredclients/FeaturedClients";
import Blogs from "./blog/Blogs";
import Contact from "./contact/Contact"; // ✅ Import Contact component
import Footer from "./footer/Footer"; // ✅ Import Footer component

import { useRouter } from "next/navigation";

export default function HomePage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const router = useRouter();

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

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero" id="hero">
        <header>
          <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-container">
              {/* Logo */}
              <div className="nav-logo">
                <a href="#hero">
                  <img src="/Ayunextlogo.png" alt="Ayunext Logo" />
                </a>
              </div>

              {/* Nav Menu */}
              <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
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
                      <a
                        href="/services/software-development"
                        className="dropdown-item"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/services/software-development");
                          setDropdownOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        Software Development
                      </a>
                      <a
                        href="/services/digital-marketing"
                        className="dropdown-item"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/services/digital-marketing");
                          setDropdownOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        Digital Marketing
                      </a>
                      <a
                        href="/services/financial-services"
                        className="dropdown-item"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/services/financial-services");
                          setDropdownOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        Financial Services
                      </a>
                    </div>
                  )}
                </li>

                <li>
                  <a href="#clients" className="nav-link">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#contact" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>

              {/* Hamburger */}
              <div
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="word">Innovation.</span>
                <br />
                <span className="word">Finance.</span>
                <br />
                <span className="word">Growth</span>
              </h1>
              <p className="hero-description">
                Ayunext Solutions delivers business-focused technology and
                financial services to help companies grow, streamline operations,
                and secure their financial future.
              </p>
              <button className="cta-button">Get Advice</button>
            </div>

            {/* Hero Stats Box */}
            <div className="hero-stats-box">
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
        </div>
      </section>

      {/* Sections */}
      <Services />
      <AboutUs />
      <Approach />
      <ClientsSpeak />
      <FeaturedClients />
      <Blogs />  {/* Blogs Section */}
      <Contact /> {/* ✅ Contact Section now appears below Blogs */}
      <Footer />
    </div>
  );
}
