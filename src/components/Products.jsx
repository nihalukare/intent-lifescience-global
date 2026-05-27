import React from "react";

import productsData from "../data/productsData";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <>
      <div className="products-grid">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Products;
