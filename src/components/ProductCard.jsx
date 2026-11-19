import React from "react";

function ProductCard({ car }) {
  const { name, brand, price, image, description, category, year } = car;

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={image} alt={`${brand} ${name}`} loading="lazy" />
        <span className="product-badge">{category}</span>
      </div>
      <div className="product-body">
        <div className="product-meta">
          <span className="product-brand">{brand}</span>
          <span className="product-year">{year}</span>
        </div>
        <h3 className="product-name">{name}</h3>
        <p className="product-desc">{description}</p>
        <div className="product-footer">
          <span className="product-price">${price.toLocaleString("en-US")}</span>
          <button className="product-btn" type="button">
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
