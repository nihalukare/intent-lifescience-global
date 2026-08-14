import React from "react";
import productsData from "../data/productsData";
import { Link } from "react-router-dom";

function ProductCarousel() {
  return (
    <div className="infinite-carousel-container mb-md-4">
      <div className="infinite-carousel-track">
        {/* First loop of items */}
        {productsData.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={`carousel-1-${product.id}`}
            className="carousel-card text-decoration-none"
          >
            <div className="carousel-card-img-wrap">
              <img src={product.image} alt={product.name} loading="lazy" />
            </div>
            <div className="carousel-card-content">
              <h6 className="carousel-card-title">
                {product.name}
                {product.dosage && (
                  <span className="carousel-card-dosage">{product.dosage}</span>
                )}
              </h6>
            </div>
          </Link>
        ))}
        {/* Second loop of identical items for seamless scrolling */}
        {productsData.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={`carousel-2-${product.id}`}
            className="carousel-card text-decoration-none"
          >
            <div className="carousel-card-img-wrap">
              <img src={product.image} alt={product.name} loading="lazy" />
            </div>
            <div className="carousel-card-content">
              <h6 className="carousel-card-title">{product.name}</h6>
              {product.dosage && (
                <span className="carousel-card-dosage">{product.dosage}</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;
