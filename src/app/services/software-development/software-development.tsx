import styles from './BentoGrid.module.css';

const SoftwareDevelopment = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Services</h1>

        <div className={styles.serviceCategories}>
          <div className={styles.category}>Software Development</div>
          <div className={styles.category}>Digital Marketing</div>
          <div className={styles.category}>Financial Services</div>
        </div>

        <div className={styles.bentoGrid}>
          {/* Top Row */}
          <div className={`${styles.gridItem} ${styles.webMobile}`}>
            <h3>Web and Mobile Applications</h3>
            <p>Cross-platform apps that are fast, reliable, and user-friendly to engage your customers anywhere.</p>
          </div>

          <div className={`${styles.gridItem} ${styles.cloudSolutions}`}>
            <h3>Cloud-Based Solutions</h3>
            <p>Scalable and secure cloud apps for modern businesses.</p>
          </div>

          <div className={`${styles.gridItem} ${styles.businessPlatforms}`}>
            <h3>Customized Business Platforms</h3>
            <p>Tailored solutions designed to automate workflows and boost business efficiency.</p>
          </div>

          {/* Middle Row */}
          <div className={`${styles.gridItem} ${styles.aiAutomation}`}>
            <h3>AI-Powered Automation</h3>
            <p>Leverage Artificial Intelligence to gain insights, automate repetitive tasks, improve efficiency, and stay ahead of the competition.</p>
          </div>

          <div className={`${styles.gridItem} ${styles.connectButton}`}>
            <button className={styles.ctaButton}>
              Connect now <span className={styles.arrow}>→</span>
            </button>
          </div>

          <div className={`${styles.gridItem} ${styles.codeImage}`}>
            <div className={styles.codeDisplay}>
              <div className={styles.codeHeader}>
                <div className={styles.windowControls}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={styles.codeContent}>
                <div className={styles.codeLine}>
                  <span className={styles.keyword}>const</span>{' '}
                  <span className={styles.variable}>query</span> ={' '}
                  <span className={styles.string}>SELECT FROM TechTerms</span>;
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.keyword}>return</span>{' '}
                  <span className={styles.variable}>$dataArray</span>;
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.comment}>Quiz load query failed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className={`${styles.gridItem} ${styles.maintenance}`}>
            <h3>Software Maintenance & Support</h3>
            <p>24/7 support and continuous upgrades to ensure your systems always perform at their best.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareDevelopment;
