"use client";
import React from "react";
import styles from "./Services.module.css";
import { FaCode, FaBullhorn, FaChartLine } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  const services = [
    {
      title: "Software Development",
      icon: <FaCode />,
      desc: "Custom web and mobile applications tailored to your business needs with scalable and secure solutions.",
      link: "/services/software-development",
    },
    {
      title: "Digital Marketing",
      icon: <FaBullhorn />,
      desc: "Boost your online presence with SEO, social media, and digital strategies that drive measurable growth.",
      link: "/services/digital-marketing",
    },
    {
      title: "Financial Services",
      icon: <FaChartLine />,
      desc: "Expert financial consulting to streamline operations, manage risks, and secure your company’s future.",
      link: "/services/financial-services",
    },
  ];

  const handleServiceClick = (link: string) => {
    router.push(link);
  };

  const handleKeyDown = (event: React.KeyboardEvent, link: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      router.push(link);
    }
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <img
              src="/Ayunextlogo.png"
              alt="Ayunext Solutions"
              className={styles.logo}
            />
          </div>
          <h2 className={styles.title}>
            Powering Businesses with The Infinite Integration of Technology & Services
          </h2>
          <p className={styles.subtitle}>
            Explore the services that matter most to you
          </p>
        </div>
        <div className={styles.cards}>
          {services.map((service, index) => (
            <button
              key={index}
              className={styles.card}
              onClick={() => handleServiceClick(service.link)}
              onKeyDown={(event) => handleKeyDown(event, service.link)}
              aria-label={`Learn more about ${service.title}`}
              type="button"
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <div className={styles.icon} aria-hidden="true">
                  {service.icon}
                </div>
                <p className={styles.description}>{service.desc}</p>
                <span className={styles.getAdvice}>Get Advice</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
