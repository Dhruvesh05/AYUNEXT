"use client";
import React from "react";
import Image from "next/image";
import styles from "./FeaturedClients.module.css";

const clients = [
  { name: "IBM", logo: "/1.png" },
  { name: "Amazon", logo: "/2.png" },
  { name: "Cisco", logo: "/3.png" },
  { name: "Intel", logo: "/4.png" },
  { name: "Google", logo: "/5.png" },
  { name: "Flex", logo: "/6.png" },
  { name: "SONY", logo: "/7.png" },
];

export default function FeaturedClients() {
  return (
    <section id="featured-clients" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Trusted Clients</h2>

        {/* ✅ Auto-Scrolling Carousel */}
        <div className={styles.carousel}>
          <div className={styles.carouselTrack}>
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className={styles.card}>
                <Image
                  src={client.logo}
                  alt={client.name}
                  className={styles.logo}
                  width={140}
                  height={140}
                  priority={true}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.textBlock}>
          <h3 className={styles.subtitle}>Businesses Who Grow with Us</h3>
          <p className={styles.description}>
            We’ve helped businesses across industries achieve growth,
            efficiency, and financial success.
          </p>
        </div>
      </div>
    </section>
  );
}
