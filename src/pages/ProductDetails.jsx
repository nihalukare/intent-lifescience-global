import React from "react";
import Products from "../data/productsData";
import { Link, useParams } from "react-router-dom";
import { RiWhatsappLine } from "@remixicon/react";

function ProductDetails() {
  const prod_id = Number(useParams().id);

  const product = Products.find((product) => product.id === prod_id);

  return (
    <div className="container py-5">
      <div className="row g-5 align-items-start">
        <div className="col-lg-5">
          <div className="product-image-container">
            <img
              className="img-fluid rounded"
              src={product.image}
              alt={product.name}
            />
          </div>
        </div>
        <div className="col-lg-7">
          <h2>
            {product.name} - {product.dosage}
          </h2>

          <p className="fs-2">₹{product.price.toFixed(2)}</p>

          <Link className="btn btn-success w-50 p-2 d-flex justify-content-center align-items-center gap-2">
            <RiWhatsappLine />
            WhatsApp Order
          </Link>

          <div className="my-3">
            <h5>Description:</h5>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
