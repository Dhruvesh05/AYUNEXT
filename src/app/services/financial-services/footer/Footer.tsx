"use client";
import React from "react";
import styles from "./Footer.module.css";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Smooth scroll helper
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo and Description */}
        <div className={styles.about}>
          <img
            src="/Ayunextlogo.png"
            alt="Ayunext Logo"
            className={styles.logo}
          />
          <p className={styles.description}>
            Ayunext Solutions delivers business-focused technology and financial
            services to help companies grow, streamline operations, and secure
            their financial future. Our mission is to combine innovation with
            practical solutions that drive measurable results for our clients.
          </p>
          <button
            onClick={() => {
              const hero = document.getElementById("hero");
              if (hero) {
                hero.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={styles.backToTop}
          >
            Back to Top
          </button>


          {/* Social Media Icons */}
          <div className={styles.socialIcons}>
            <a
              href="https://www.linkedin.com/company/ayunextsolutions/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/ayunext"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/ayunextsolutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.linksSection}>
          <h4>Quick Links</h4>
          <ul className={styles.links}>
            {[
              { id: "hero", label: "Home" },
              { id: "about-us", label: "About Us" },
              { id: "hero", label: "Services" },
              { id: "ClientsSpeak", label: "Testimonials" },
              { id: "contact", label: "Contact Us" },
            ].map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className={styles.servicesSection}>
          <h4>Services</h4>
          <ul className={styles.links}>
            <li>Software Development</li>
            <li>Cross-Platform Apps</li>
            <li>Digital Marketing</li>
            <li>Financial Consulting</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>
      </div>

      <div className={styles.copy}>
        &copy; {new Date().getFullYear()} Ayunext Solutions. All rights
        reserved.
      </div>
    </footer>
  );
}
