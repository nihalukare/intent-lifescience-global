import React from "react";

import productsData from "../data/productsData";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <>
      <div className="row g-3">
        {productsData.map((product) => (
          <div key={product.id} className="col-6 col-md-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
