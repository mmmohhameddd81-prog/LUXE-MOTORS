import React from "react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: "✦",
    title: "Hand-Picked Collection",
    text: "Every vehicle is chosen for its engineering, design, and character — never anything ordinary.",
  },
  {
    icon: "◆",
    title: "Certified Quality",
    text: "Each car is thoroughly inspected and prepared to meet our exacting standards before delivery.",
  },
  {
    icon: "★",
    title: "Expert Guidance",
    text: "Our specialists take the time to understand your needs and match you with the right car.",
  },
  {
    icon: "⚡",
    title: "Passion for Performance",
    text: "We share your enthusiasm for precision engineering and the pure joy of driving.",
  },
  {
    icon: "◇",
    title: "Transparent Experience",
    text: "Clear information and honest advice at every step, from first enquiry to final handover.",
  },
  {
    icon: "◆",
    title: "Ownership Support",
    text: "Our relationship continues long after delivery, with service guidance and ongoing care.",
  },
];

function About() {
  return (
    <main className="page">
      <section className="about-hero">
        <div className="container">
          <span className="eyebrow">Premium Cars. Exceptional Experience.</span>
          <h1 style={{ marginTop: 16 }}>About LUXE MOTORS</h1>
          <p>
            LUXE MOTORS is a premium automotive destination for drivers who expect
            more from every mile. We bring together iconic luxury and sports cars,
            deep expertise, and a buying experience built entirely around you.
          </p>
        </div>
      </section>

      <section className="about-block">
        <div className="container about-grid">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
              alt="Premium sports cars displayed in a showroom"
            />
          </div>
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Founded on a genuine passion for exceptional automobiles, LUXE MOTORS
              began with a simple belief: finding the right car should feel just as
              remarkable as driving it. What started as a small, carefully chosen
              collection has grown into a trusted destination for discerning drivers.
            </p>
            <p>
              Today we represent the world's most celebrated marques — from
              Mercedes-Benz and BMW to Porsche, Ferrari, and Lamborghini. Every
              vehicle in our collection is selected for its quality, performance, and
              presence, then inspected and prepared to the highest standard.
            </p>
            <div className="about-stats">
              <div className="stat">
                <strong>20+</strong>
                <span>Premium Vehicles</span>
              </div>
              <div className="stat">
                <strong>8</strong>
                <span>Iconic Brands</span>
              </div>
              <div className="stat">
                <strong>1,200+</strong>
                <span>Drivers Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#fff",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="container">
          <div className="about-grid reverse" style={{ padding: "60px 0" }}>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80"
                alt="Red Ferrari supercar in a premium showroom"
              />
            </div>
            <div className="about-content">
              <h2>Our Mission</h2>
              <p>
                Our mission is to connect passionate drivers with the cars they have
                always imagined. We combine deep automotive knowledge with a
                personal, transparent approach — so every decision, from the first
                enquiry to the final handover, feels effortless.
              </p>
              <p>
                We do more than sell cars. We help you find the one that fits your
                life, your taste, and the way you want to drive — with expert advice
                and no pressure along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-block">
        <div className="container about-grid">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80"
              alt="Blue sports coupe on an open desert road"
            />
          </div>
          <div className="about-content">
            <h2>Our Vision</h2>
            <p>
              To be the most trusted name in premium automotive retail — a brand
              recognised not only for the cars we offer, but for the experience we
              create around them.
            </p>
            <p>
              We envision a future where exceptional performance, elegant design, and
              outstanding service define every journey. As the automotive world
              evolves, we remain focused on what matters most: the connection between
              a driver and their car.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "var(--color-white)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "80px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <span className="eyebrow">The LUXE MOTORS Difference</span>
          <h2 className="section-heading" style={{ marginTop: 16 }}>
            Why Choose Us?
          </h2>
          <p className="section-subtitle">
            Choosing a car is a decision worth getting right. Here is what sets our
            collection and our service apart.
          </p>
          <div className="values-grid" style={{ textAlign: "left" }}>
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <div className="feature-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Find the car that moves you.</h2>
          <p>
            Explore our collection of luxury, sports, SUV, and electric vehicles and
            discover the one built for your next chapter.
          </p>
          <Link to="/cars" className="btn btn-dark">
            Explore Collection
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
