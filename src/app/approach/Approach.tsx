"use client";
import React from "react";
import styles from "./Approach.module.css";
import { FaSearch, FaLightbulb, FaCogs, FaHandshake } from "react-icons/fa";

export default function Approach() {
  return (
    <section id="approach" className={styles.approachSection}>
      <div className={styles.container}>
        {/* Title */}
        <h1 className={styles.title}>Our Approach</h1>

        {/* Description */}
        <p className={styles.description}>
          We follow a client-first approach built on understanding, research,
          customization, and long-term support. By carefully analyzing client
          needs and market trends, we craft tailored strategies that deliver
          measurable results. With a focus on efficiency, timely delivery, and
          continuous support, we ensure lasting success for every project.
        </p>

        {/* Timeline - Horizontal */}
        <div className={styles.timeline}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaSearch className={styles.icon} />
            </div>
            <h2 className={styles.cardHeading}>Understanding</h2>
            <p className={styles.cardDescription}>
              We begin by actively listening to our clients, analyzing their challenges, and identifying their unique needs to ensure our solutions align perfectly with their expectations.
            </p>
          </div>

          {/* Card 2 */}
          <div className={`${styles.card} ${styles.highlight}`}>
            <div className={styles.iconWrapper}>
              <FaLightbulb className={styles.icon} />
            </div>
            <h2 className={styles.cardHeading}>Researching</h2>
            <p className={styles.cardDescription}>
              In-depth analysis of competitors and current market trends allows us to create strategies that not only stand out but also give our clients a competitive edge.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <FaCogs className={styles.icon} />
            </div>
            <h2 className={styles.cardHeading}>Designing</h2>
            <p className={styles.cardDescription}>
              Every business is different, so we design customized strategies and solutions that directly address the client’s objectives, ensuring measurable results.
            </p>
          </div>

          {/* Card 4 */}
          <div className={`${styles.card} ${styles.highlight}`}>
            <div className={styles.iconWrapper}>
              <FaHandshake className={styles.icon} />
            </div>
            <h2 className={styles.cardHeading}>Ensuring</h2>
            <p className={styles.cardDescription}>
              We prioritize efficiency by delivering projects on time while also providing continuous support and updates to maintain long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
