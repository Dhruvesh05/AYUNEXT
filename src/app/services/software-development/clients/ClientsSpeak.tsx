"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./ClientsSpeak.module.css";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  { quote: "Ayunext built us a Customized Business Platform that perfectly streamlined our complex workflows. The efficiency gains were immediate and significant.", name: "", position: "Custom Platform" },
  { quote: "Their team delivered a high-performance mobile application ahead of schedule. It's stable, intuitive, and exactly what we needed to engage our customers", name: "", position: "Mobile App" },
  { quote: "We leveraged their AI-Powered Automation & Analytics to overhaul our data reporting. We now have insights in minutes that used to take days. Truly transformative", name: "", position: "Cloud/AI" },
];

const stats = [
  { number: "50+", label: "Clients Served" },
  { number: "95%", label: "Positive Feedback" },
  { number: "100+", label: "Successful Projects" },
];

export default function ClientsSpeak() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const length = testimonials.length;
  const carouselRef = useRef<HTMLDivElement>(null);

  // Touch state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextTestimonial = () => setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  const prevTestimonial = () => setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${current * 100}%)`;
    }
  }, [current]);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return; // pause autoplay on hover
    const interval = setInterval(nextTestimonial, 3000); // every 3s
    return () => clearInterval(interval);
  }, [isPaused, current]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextTestimonial(); // swipe left
    else if (distance < -50) prevTestimonial(); // swipe right
  };

  return (
    <section id="ClientsSpeak" className={styles.clientsSection}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.leftContent}>
          <h1 className={styles.title}>Our Clients Speak</h1>
          <p className={styles.subtitle}>
            At Ayunext, our true success is measured by the trust and satisfaction of our clients. 
            Every partnership is a journey, and these testimonials reflect how our solutions have helped
            businesses grow, innovate, and achieve long-term success.
          </p>

          {/* Stats Section */}
          <div className={styles.stats}>
            {stats.map((s, idx) => (
              <div key={idx} className={styles.statItem}>
                <div className={styles.statNumber}>{s.number}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Carousel */}
        <div className={styles.rightContent}>
          <div 
            className={styles.testimonialWrapper}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button className={styles.navButton} onClick={prevTestimonial}>
              <FaArrowLeft />
            </button>

            <div
              className={styles.carouselViewport}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className={styles.carouselTrack} ref={carouselRef}>
                {testimonials.map((t, idx) => (
                  <div key={idx} className={styles.testimonialCard}>
                    <div className={styles.quoteIcon}>
                      <FaQuoteLeft />
                    </div>
                    <div className={styles.testimonialContent}>
                      <p className={styles.quote}>{t.quote}</p>
                      <div className={styles.author}>
                        <h3 className={styles.authorName}>{t.name}</h3>
                        <span className={styles.authorPosition}>{t.position}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className={styles.navButton} onClick={nextTestimonial}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
