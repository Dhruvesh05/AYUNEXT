"use client";
import React, { useState, useEffect, useRef } from "react";
import "./page.css";

import Services from "./services/Services";
import AboutUs from "./knowUs/AboutUs";
import Approach from "./approach/Approach";
import ClientsSpeak from "./clients/ClientsSpeak";
import FeaturedClients from "./featuredclients/FeaturedClients";
import Blogs from "./blog/Blogs";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const router = useRouter();

  // Smooth scrolling
  const handleSmoothScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      setDropdownOpen(false);
    }
  };

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
                <a href="#hero" onClick={(e) => handleSmoothScroll(e, "hero")}>
                  <img src="/Ayunextlogo.png" alt="Ayunext Logo" />
                </a>
              </div>

              {/* Nav Menu */}
              <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                <li>
                  <a
                    href="#hero"
                    className="nav-link"
                    onClick={(e) => handleSmoothScroll(e, "hero")}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="nav-link"
                    onClick={(e) => handleSmoothScroll(e, "about")}
                  >
                    About Us
                  </a>
                </li>

                {/* Services + Dropdown */}
                <li className="services-nav" ref={dropdownRef}>
                  <a
                    href="#services"
                    className="nav-link"
                    onClick={(e) => handleSmoothScroll(e, "services")}
                  >
                    Services
                  </a>
                  <button
                    className="dropdown-arrow"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    ▼
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
                  <a
                    href="#clients"
                    className="nav-link"
                    onClick={(e) => handleSmoothScroll(e, "clients")}
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="nav-link"
                    onClick={(e) => handleSmoothScroll(e, "contact")}
                  >
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
          {/* Left Side */}
          <div className="hero-left">
            <h1 className="hero-title">Innovation.</h1> 
            <h1 className="hero-title">Finance. Growth.</h1>
            <p className="hero-description">
              Ayunext Solutions delivers business-focused technology and
              financial services to help companies grow, streamline operations,
              and secure their financial future. Our mission is to combine
              innovation with practical solutions that drive measurable results
              for our clients.
            </p>
            <button className="cta-button">Get Advice</button>
          </div>

          {/* Right Side Boxes */}
          <div className="hero-right">
            <div className="info-box">
              <h3>50+</h3>
              <p>Clients served</p>
            </div>
            <div className="info-box">
              <h3>100+</h3>
              <p>Successful Projects</p>
            </div>
            <div className="info-box">
              <h3>95 %</h3>
              <p>Positive Feedback</p>
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
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
