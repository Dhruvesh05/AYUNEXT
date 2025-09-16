"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
// Reuse software-development.css to keep consistent design
import "../software-development/software-development.css";

export default function FinancialServicesPage() {
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
                    <Link
                      href="/services/digital-marketing"
                      className="dropdown-item"
                    >
                      Digital Marketing
                    </Link>
                    <Link
                      href="/services/financial-services"
                      className="dropdown-item"
                    >
                      Financial Services
                    </Link>
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
        <h1 className="service-title">Financial Services</h1>
        <p className="service-subtitle">
          Expert financial solutions to manage, grow, and protect your wealth.
        </p>
      </section>

      <section className="service-content">
        <div className="service-box">
          <h2>Financial Planning</h2>
          <p>
            Customized financial plans to help you achieve long-term security
            and growth.
          </p>
        </div>

        <div className="service-box">
          <h2>Tax & Compliance</h2>
          <p>
            Stay compliant while maximizing tax efficiency with expert guidance.
          </p>
        </div>

        <div className="service-box">
          <h2>Investment Solutions</h2>
          <p>
            Diversified investment strategies tailored to your unique goals and
            risk profile.
          </p>
        </div>

        <div className="service-box">
          <h2>Risk Management</h2>
          <p>
            Identify, assess, and mitigate financial risks to safeguard your
            assets.
          </p>
        </div>
      </section>
    </div>
  );
}
