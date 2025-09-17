"use client";
import React, { useState, useEffect, useRef } from "react";
import "../page.css"; // ✅ Reuse same CSS for navbar styling
import { useRouter } from "next/navigation";
import Footer from "../footer/Footer"; // ✅ Import footer

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const router = useRouter();

  // ✅ Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Smooth scroll handler (only for homepage)
  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    } else {
      // if not on homepage, redirect to homepage + anchor
      e.preventDefault();
      router.push(`/#${targetId}`);
      setMenuOpen(false);
    }
  };

  return (
    <div>
      {/* ✅ Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <a href="/" onClick={(e) => handleSmoothScroll(e, "hero")}>
              <img src="/Ayunextlogo.png" alt="Ayunext Logo" />
            </a>
          </div>

          {/* Nav Menu */}
          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li>
              <a
                href="/hero"
                className="nav-link"
                onClick={(e) => handleSmoothScroll(e, "hero")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="nav-link"
                onClick={(e) => handleSmoothScroll(e, "about")}
              >
                About Us
              </a>
            </li>

            {/* Services + Dropdown */}
            <li className="services-nav" ref={dropdownRef}>
              <a
                href="/services"
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
                href="/clients"
                className="nav-link"
                onClick={(e) => handleSmoothScroll(e, "clients")}
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="/contact"
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

      {/* ✅ Page Content */}
      <main>{children}</main>

      {/* ✅ Footer (same as homepage) */}
      <Footer />
    </div>
  );
}
