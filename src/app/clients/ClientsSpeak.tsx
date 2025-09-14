"use client";
import React, { useEffect, useRef } from "react";
import styles from "./ClientsSpeak.module.css";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  { quote: "Ayunext transformed our digital strategy completely!", name: "Alice Johnson", domain: "E-commerce" },
  { quote: "The team delivered beyond our expectations.", name: "Michael Smith", domain: "Finance" },
  { quote: "Innovative solutions that actually work.", name: "Sophie Lee", domain: "Healthcare" },
  { quote: "Professional, timely, and reliable.", name: "David Brown", domain: "Education" },
];

export default function ClientsSpeak() {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const speed = 1; // pixels per frame
    let id1: number, id2: number;

    const loop1 = () => {
      if (scrollRef1.current) {
        scrollRef1.current.scrollLeft += speed;
        if (scrollRef1.current.scrollLeft >= scrollRef1.current.scrollWidth / 2) {
          scrollRef1.current.scrollLeft = 0;
        }
      }
      id1 = requestAnimationFrame(loop1);
    };

    const loop2 = () => {
      if (scrollRef2.current) {
        scrollRef2.current.scrollLeft -= speed;
        if (scrollRef2.current.scrollLeft <= 0) {
          scrollRef2.current.scrollLeft = scrollRef2.current.scrollWidth / 2;
        }
      }
      id2 = requestAnimationFrame(loop2);
    };

    id1 = requestAnimationFrame(loop1);
    id2 = requestAnimationFrame(loop2);

    return () => {
      cancelAnimationFrame(id1);
      cancelAnimationFrame(id2);
    };
  }, []);

  return (
    <section id="clients" className={styles.clientsSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Clients Speak</h1>
        <p className={styles.description}>
          At Ayunext, we believe our true success is measured by the trust and satisfaction of our clients.
          Every partnership is a journey, and these testimonials reflect how our solutions have helped
          businesses grow, innovate, and achieve long-term success.
        </p>

        {/* Carousel 1 */}
        <div className={styles.carouselWrapper} ref={scrollRef1}>
          <div className={styles.carouselContent}>
            {testimonials.concat(testimonials).map((t, idx) => (
              <div key={idx} className={styles.card}>
                <FaQuoteLeft className={styles.symbol} />
                <p className={styles.quote}>{t.quote}</p>
                <h3 className={styles.name}>{t.name}</h3>
                <span className={styles.domain}>{t.domain}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel 2 */}
        <div className={styles.carouselWrapper} ref={scrollRef2}>
          <div className={styles.carouselContent}>
            {testimonials.concat(testimonials).map((t, idx) => (
              <div key={idx} className={styles.card}>
                <FaQuoteLeft className={styles.symbol} />
                <p className={styles.quote}>{t.quote}</p>
                <h3 className={styles.name}>{t.name}</h3>
                <span className={styles.domain}>{t.domain}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
