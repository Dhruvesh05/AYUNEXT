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
            // ✅ Navigate to new page instead of only switching tab
            onClick={() => router.push("/services/software-development")}
          >
            Software Development
          </button>

          <button
            className={`${styles.category} ${activeTab === 1 ? styles.active : ""}`}
            onClick={() => setActiveTab(1)}
          >
            Digital Marketing
          </button>

          <button
            className={`${styles.category} ${activeTab === 2 ? styles.active : ""}`}
            onClick={() => setActiveTab(2)}
          >
            Financial Services
          </button>
        </div>

        {/* Horizontal Carousel (remains for other tabs) */}
        <div className={styles.scrollWrapper} ref={scrollRef}>
          <div
            className={styles.scrollContent}
            style={{
              display: "flex",
              width: "300%",
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {/* Only Digital Marketing & Financial Services remain here */}
            <div className={styles.scrollItem} style={{ width: "33.3333%" }}>
              <div className={styles.bentoGrid}>
                <div className={`${styles.gridItem} ${styles.webMobile}`}>
                  <h3>SEO & Content Marketing</h3>
                  <p>Improve your search rankings and attract organic traffic.</p>
                </div>
                <div className={`${styles.gridItem} ${styles.cloudSolutions}`}>
                  <h3>Social Media Campaigns</h3>
                  <p>Engage with your audience across multiple platforms.</p>
                </div>
                <div className={`${styles.gridItem} ${styles.businessPlatforms}`}>
                  <h3>Performance Analytics</h3>
                  <p>Track campaign performance with real-time dashboards and insights.</p>
                </div>
                <div className={`${styles.gridItem} ${styles.aiAutomation}`}>
                  <h3>Email Marketing</h3>
                  <p>Personalized campaigns to nurture leads and drive conversions.</p>
                </div>
                <div className={`${styles.gridItem} ${styles.connectButton}`}>
                  <button className={styles.ctaButton}>
                    Let’s Grow 🚀 <span className={styles.arrow}>→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Financial Services */}
            <div className={styles.scrollItem} style={{ width: "33.3333%" }}>
              <div className={styles.bentoGrid}>
                <div className={`${styles.gridItem} ${styles.webMobile}`}>
                  <h3>Financial Planning</h3>
                  <p>Customized strategies to grow and manage wealth.</p>
                </div>
                <div className={`${styles.gridItem} ${styles.cloudSolutions}`}>
                  <h3>Tax & Compliance</h3>
                  <p>Stay compliant while maximizing efficiency.</p>
                </div>
                <div className={`${styles.gridItem} ${styles.businessPlatforms}`}>
                  <h3>Investment Solutions</h3>
                  <p>Smart investment strategies tailored for your goals.</p>
                </div>
                <div className={`${styles.gridItem} ${styles.aiAutomation}`}>
                  <h3>Risk Management</h3>
                  <p>Identify, assess, and minimize potential risks.</p>
                </div>
                <div className={`${styles.gridItem} ${styles.connectButton}`}>
                  <button className={styles.ctaButton}>
                    Secure Future 💼 <span className={styles.arrow}>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareDevelopment;
