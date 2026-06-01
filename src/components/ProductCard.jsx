import React from "react";
import { Link } from "react-router-dom";
import { RiWhatsappLine } from "@remixicon/react";

function ProductCard({ product }) {
  return (
    <div className="card mb-5">
      <img className="card-img-top" src={`${product.image}`} alt="no-image" />
      <div className="card-body text-center">
        <Link to={`/products/${product.id}`} className="card-title">
          {product.name}
        </Link>
        <Link className="btn btn-success d-flex justify-content-center align-items-center gap-2">
          <RiWhatsappLine />
          WhatsApp Order
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
