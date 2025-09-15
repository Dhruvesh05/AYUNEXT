"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./software-development.css";

export default function SoftwareDevelopmentPage() {
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
    <div className="software-dev-page">
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
                    <a href="/services/digital-marketing" className="dropdown-item">
                      Digital Marketing
                    </a>
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
        <h1 className="service-title">Software Development</h1>
        <p className="service-subtitle">
          Building scalable, modern, and secure software solutions tailored for
          your business.
        </p>
      </section>

      <section className="service-content">
        <div className="service-box">
          <h2>Custom Web Applications</h2>
          <p>
            We design and develop custom web apps using the latest frameworks
            like React, Next.js, and Spring Boot.
          </p>
        </div>

        <div className="service-box">
          <h2>Mobile Applications</h2>
          <p>
            Native and cross-platform apps built with performance and user
            experience in mind.
          </p>
        </div>

        <div className="service-box">
          <h2>Cloud & DevOps</h2>
          <p>
            From cloud migration to CI/CD pipelines, we ensure your software
            runs smoothly at scale.
          </p>
        </div>
      </section>
    </div>
  );
}
