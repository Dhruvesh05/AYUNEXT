"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./page.css";

export default function DigitalMarketingPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close dropdown on outside click
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

  return (
    <div className="digital-marketing-page">
      {/* ✅ Navbar copied from homepage */}
      <header>
        <nav className="navbar">
          <div className="nav-container">
            {/* Nav Menu with Logo */}
            <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
              <li className="nav-logo">
                <Link href="/">
                  <img src="/Ayunextlogo.png" alt="Ayunext Logo" />
                </Link>
              </li>
              <li>
                <Link href="/" className="nav-link">
                  Home
                </Link>
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
                    <Link
                      href="/services/software-development"
                      className="dropdown-item"
                    >
                      Software Development
                    </Link>
                    <Link
                      href="/services/digital-marketing"
                      className="dropdown-item"
                    >
                      Digital Marketing
                    </Link>
                    <a href="#services" className="dropdown-item">
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

      {/* ✅ Page Content */}
      <section className="service-hero">
        <h1 className="service-title">Digital Marketing</h1>
        <p className="service-subtitle">
          Helping your business grow online with smart and data-driven marketing strategies.
        </p>
      </section>

      <section className="service-content">
        <div className="service-box">
          <h2>SEO & Content Marketing</h2>
          <p>
            Improve your search rankings and attract the right audience with optimized content strategies.
          </p>
        </div>

        <div className="service-box">
          <h2>Social Media Marketing</h2>
          <p>
            Engage with your audience and build brand loyalty across major social platforms.
          </p>
        </div>

        <div className="service-box">
          <h2>Paid Advertising (PPC)</h2>
          <p>
            Drive targeted traffic and maximize ROI with effective Google Ads and social media campaigns.
          </p>
        </div>
      </section>
    </div>
  );
}
