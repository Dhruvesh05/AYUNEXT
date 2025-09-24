"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import "./page.css";

import HeroSection from "./hero/hero";

export default function SoftwareDevelopment() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const router = useRouter();

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Smooth scroll helper
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <a href="/page" onClick={(e) => handleSmoothScroll(e, "hero")}>
              <img src="/Ayunextlogo.png" alt="Ayunext Logo" />
            </a>
          </div>

          {/* Nav Menu */}
          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li>
              <a
                href="/page"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("#software-development"); // Navigate to HomePage
                }}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about-us"
                className="nav-link"
                onClick={(e) => handleSmoothScroll(e, "about-us")}
              >
                About Us
              </a>
            </li>

            {/* Services + Dropdown */}
            <li className="services-nav" ref={dropdownRef}>
              <a className="nav-link">
                <button
                  className="dropdown-arrow"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Services ▼
                </button>
              </a>
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

     
      {/* ================= OTHER SECTIONS ================= */}
      <HeroSection/>
      
    </>
  );
}
