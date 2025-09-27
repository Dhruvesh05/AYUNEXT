"use client";
import React from "react";
import Image from "next/image";
import styles from "./FeaturedClients.module.css";

const clients = [
  { name: "IBM", logo: "/logos/ibm.svg" },
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Cisco", logo: "/logos/cisco.svg" },
  { name: "Intel", logo: "/logos/intel.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Flex", logo: "/logos/flex.svg" },
  { name: "SONY", logo: "/logos/sony.svg" },
  { name: "Deloitte", logo: "/logos/deloitte.svg" },
  { name: "VISA", logo: "/logos/visa.svg" },
  { name: "GE", logo: "/logos/ge.svg" },
  { name: "Hitachi", logo: "/logos/hitachi.svg" },
  { name: "Oracle", logo: "/logos/oracle.svg" },
];

export default function FeaturedClients() {
  return (
    <section id="featured-clients" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Featured Clients</h2>

        {/* <div className={styles.arcWrapper}>
          {clients.map((client, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${
                client.name === "SONY" || client.name === "VISA" ? styles.highlight : ""
              }`}
            >
              <Image 
                src={client.logo} 
                alt={client.name} 
                className={styles.logo}
                width={120}
                height={120}
                priority={true}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          ))}
        </div> */}

        <div className={styles.textBlock}>
          <h3 className={styles.subtitle}>Businesses Who Grow with Us</h3>
          <p className={styles.description}>
            We’ve helped 100+ businesses across industries achieve growth,
            efficiency, and financial success.
          </p>
        </div>
      </div>
    </section>
  );
}
