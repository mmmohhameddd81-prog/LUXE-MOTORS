import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = [
  "All",
  "Sports Cars",
  "SUVs",
  "Sedans",
  "Electric Cars",
  "Luxury Cars",
];

function Products() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? products
      : products.filter((car) => car.category === active);

  return (
    <main className="page">
      <section className="products-hero">
        <div className="container">
          <span className="eyebrow">Premium Cars. Exceptional Experience.</span>
          <h1 style={{ marginTop: 16 }}>Our Cars</h1>
          <p>
            Explore our hand-picked collection of luxury, sports, SUV, sedan, and
            electric vehicles — each one selected for performance, design, and
            presence.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="filter-bar">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-chip ${active === category ? "active" : ""}`}
              onClick={() => setActive(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <p className="results-count">
          Showing {filtered.length} of {products.length} vehicles
        </p>

        <div className="products-grid">
          {filtered.map((car) => (
            <ProductCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Products;
