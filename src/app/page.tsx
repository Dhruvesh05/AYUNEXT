import "./page.css";

export default function HomePage() {
  return (
    <div className="homepage">
      

      {/* Hero Section */}
      <section className="hero">{/* Navigation */}
      <header>
  <div className="logo">
    <img src="/Ayunextlogo.png" alt="Ayunext Logo" />
  </div>

  <nav className="navbar">
    <div className="nav-container">
      <ul className="nav-menu">
        <li><a href="#home" className="nav-link active">Home</a></li>
        <li><a href="#about" className="nav-link">About Us</a></li>
        <li><a href="#services" className="nav-link">Services</a></li>
        <li><a href="#resources" className="nav-link">Resources</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>

      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</header>


        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Innovation.<br />
                Finance. Growth
              </h1>
              <p className="hero-description">
                Ayunext Solutions delivers business-focused technology and financial services to help companies grow,
                streamline operations, and secure their financial future. Our mission is to combine innovation with
                practical solutions that drive measurable results for our clients.
              </p>
              <button className="cta-button">Get Advice</button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Clients served</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Successful Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Positive Feedback</div>
              </div>
            </div>
          </div>

          <div className="hero-decorations">
            <div className="plus-icon plus-1">+</div>
            <div className="plus-icon plus-2">+</div>
            <div className="plus-icon plus-3">+</div>
            <div className="plus-icon plus-4">+</div>
            <div className="plus-icon plus-5">+</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-container">
          <h2 className="services-title">Our Services</h2>

          <div className="services-categories">
            <div className="category"><h3 className="category-title">Software Development</h3></div>
            <div className="category"><h3 className="category-title">Digital Marketing</h3></div>
            <div className="category"><h3 className="category-title">Financial Services</h3></div>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <h4 className="service-title">Web and Mobile Applications</h4>
              <p className="service-description">
                Cross-platform apps that are fast, reliable, and user-friendly to engage your customers anywhere.
              </p>
              <div className="plus-icon service-plus">+</div>
            </div>

            <div className="service-card">
              <h4 className="service-title">Cloud-Based Solutions</h4>
              <p className="service-description">Scalable and secure cloud apps for modern businesses.</p>
            </div>

            <div className="service-card">
              <h4 className="service-title">Customized Business Platforms</h4>
              <p className="service-description">
                Tailored solutions designed to automate workflows and boost business efficiency.
              </p>
            </div>

            <div className="service-card">
              <h4 className="service-title">AI-Powered Automation</h4>
              <p className="service-description">
                Leverage Artificial Intelligence for data insights, automate repetitive tasks, improve efficiency, and
                stay ahead of the competition.
              </p>
            </div>

            <div className="service-card large-card">
              <div className="service-image">
                <img src="/HeroSection.svg" alt="Software Development" />
              </div>
              <div className="plus-icon service-plus-large">+</div>
            </div>

            <div className="service-card connect-card">
              <button className="connect-button">Connect now →</button>
            </div>

            <div className="service-card">
              <h4 className="service-title">Software Maintenance & Support</h4>
              <p className="service-description">
                24/7 support and continuous upgrades to ensure your systems always perform at their best.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
