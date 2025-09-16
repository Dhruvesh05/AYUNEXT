"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Import Next.js router
import styles from "./BentoGrid.module.css";

const SoftwareDevelopment = ({ scrollToTab }: { scrollToTab?: number }) => {
  const [activeTab, setActiveTab] = useState(scrollToTab || 0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // ✅ For navigation

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: (scrollRef.current.scrollWidth / 3) * activeTab,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Services</h1>

        {/* Tabs / Buttons */}
        <div className={styles.serviceCategories}>
          <button
            className={`${styles.category} ${activeTab === 0 ? styles.active : ""}`}
            onClick={() => router.push("/services/software-development")}
          >
            Software Development
          </button>

          <button
            className={`${styles.category} ${activeTab === 1 ? styles.active : ""}`}
            onClick={() => router.push("/services/digital-marketing")}
          >
            Digital Marketing
          </button>

          <button
            className={`${styles.category} ${activeTab === 2 ? styles.active : ""}`}
            onClick={() => router.push("/services/financial-services")}
          >
            Financial Services
          </button>
        </div>

        {/* ✅ Remove old Financial Services carousel since it has its own page */}
      </div>
    </section>
  );
};

export default SoftwareDevelopment;
