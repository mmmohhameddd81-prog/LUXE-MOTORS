import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: "✦",
    title: "Curated Selection",
    text: "Hand-picked luxury and sports cars from the world's most prestigious brands.",
  },
  {
    icon: "◆",
    title: "Certified Quality",
    text: "Every vehicle is inspected and certified to meet our strict performance standards.",
  },
  {
    icon: "★",
    title: "Exceptional Service",
    text: "Personalized guidance and seamless ownership from first drive to delivery.",
  },
];

function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="hero-eyebrow">Premium Cars. Exceptional Experience.</span>
            <h1>
              Discover Your Next <span>Luxury Drive.</span>
            </h1>
            <p>
              Explore a curated collection of the world's finest luxury and sports
              cars. From iconic performance machines to refined grand tourers,
              LUXE MOTORS brings exceptional automobiles to discerning drivers.
            </p>
            <div className="hero-actions">
              <Link to="/cars" className="btn btn-primary">
                Explore Cars →
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
              alt="Premium luxury sports car"
            />
            <div className="hero-badge">
              <strong>4.9★</strong> rated by 1,200+ clients
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to find your perfect car?</h2>
          <p>
            Browse our full collection of premium vehicles and discover the one
            that speaks to you.
          </p>
          <Link to="/cars" className="btn btn-dark">
            Explore Collection
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;