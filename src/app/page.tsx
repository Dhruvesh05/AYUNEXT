"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Overlay Content */}
      <div className={styles.overlay}>
        <header className={styles.header}>
          
        </header>

        <div className={styles.centerContent}>
          <h1 className={styles.title}><div className={styles.logo}>
            <img src="/Ayunextlogo.png" alt="Ayunext Solutions" />
          </div></h1>
          <p className={styles.subtitle}>
            Ayunext Solutions delivers business-focused technology and financial
            services to help companies grow, streamline operations, and secure
            their financial future. Our mission is to combine innovation with
            practical solutions that drive measurable results for our clients.
          </p>
        </div>
      </div>

      {/* Background Services Section */}
      <div className={styles.services}>
        {/* Digital Marketing */}
        <div className={`${styles.card} ${styles.marketing}`}>
          <div className={styles.cardBackground}></div>
          <div className={styles.cardContent}>
            <h2>Digital Marketing</h2>
            <Link href="/services/digital-marketing">
              <button className={styles.button}>Get Advice</button>
            </Link>
          </div>
        </div>

        {/* Software Services */}
        <div className={`${styles.card} ${styles.software}`}>
          <div className={styles.cardBackground}></div>
          <div className={styles.cardContent}>
            <h2>Software Services</h2>
            <Link href="/services/software-development">
              <button className={styles.button}>Get Advice</button>
            </Link>
          </div>
        </div>

        {/* Financial Services */}
        <div className={`${styles.card} ${styles.financial}`}>
          <div className={styles.cardBackground}></div>
          <div className={styles.cardContent}>
            <h2>Financial Services</h2>
            <Link href="/services/financial-services">
              <button className={styles.button}>Get Advice</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
