import React from "react";
import { Link } from "react-router-dom";
import { RiWhatsappLine } from "@remixicon/react";
import WhatsAppButton from "./WhatsappBtn";

function ProductCard({ product }) {
  const message = `
  Hi 👋 Thanks for your enquiry😊

💊 Please share: Medicine Name + Strength + Quantity
✅ I’ll check availability & send you the best price quotation quickly
  `;
  return (
    <div className="card mb-5">
      <img className="card-img-top" src={`${product.image}`} alt="no-image" />
      <div className="card-body text-center">
        <div className="mb-3">
          <Link
            to={`/products/${product.id}`}
            className="card-title fw-medium fs-4 mb-3"
          >
            {product.name}
          </Link>
        </div>

        <WhatsAppButton productName={product.name} />
      </div>
    </div>
  );
}

export default ProductCard;
