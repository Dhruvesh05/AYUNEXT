"use client";
import React, { useState, useEffect } from "react";
import "./page.css";

export default function SoftwareDevelopment() {
  const [activeBox, setActiveBox] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const services = [
    { title: "Web Development", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit ut turpis auctor vehicula." },
    { title: "Mobile Applications", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit ut turpis auctor vehicula." },
    { title: "UI/UX Design", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit ut turpis auctor vehicula." },
    { title: "Cloud Solutions", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit ut turpis auctor vehicula." },
    { title: "Maintenance & Support", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit ut turpis auctor vehicula." },
  ];

  // navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleBox = (index: number) => {
    setActiveBox(activeBox === index ? null : index);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
     

      {/* ================= SERVICES ================= */}
      <section className="servicePage">
        <div className="titleWrapper">
          <h1 className="serviceTitle">Software Development</h1>
        </div>

        <div className="serviceGrid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`serviceBox ${activeBox === index ? "active" : ""}`}
              onClick={() => toggleBox(index)}
            >
              <h2 className="boxTitle">{service.title}</h2>
              {activeBox === index && (
                <p className="boxDesc">{service.desc}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
