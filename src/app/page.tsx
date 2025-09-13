import "./page.css";
import Services from "./services/software-development/software-development";

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        {/* Navigation */}
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

      {/* ✅ Imported Services Section */}
      <Services />
    </div>
  );
}
