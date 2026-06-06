import { Link, useParams } from "react-router-dom";
import { RiWhatsappLine, RiArrowLeftLine } from "@remixicon/react";
import productsData from "../data/productsData";
import categories from "../data/categoriesData";
import ProductCard from "../components/ProductCard";

function ProductDetails() {
  const { id } = useParams();
  const prod_id = Number(id);

  const product = productsData.find((p) => p.id === prod_id);

  // If product not found
  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2 className="fw-bold mb-3">Product Not Found</h2>
        <p className="text-muted mb-4">The product you are looking for does not exist or has been removed.</p>
        <Link to="/" className="btn btn-primary d-inline-flex align-items-center gap-2">
          <RiArrowLeftLine size={18} /> Back to Catalog
        </Link>
      </div>
    );
  }

  // Get active category details
  const category = categories.find((c) => c.slug === product.categorySlug);
  const categoryName = category ? category.name : "Healthcare Products";

  // Dynamic specifications lookup based on chemical properties
  const getProductSpecs = (prod) => {
    const specs = {
      genericName: "Generic Formulation",
      form: "Tablet",
      packaging: "10 Tablets / Strip",
      therapeuticClass: "Therapeutic formulation"
    };

    const nameLower = prod.name.toLowerCase();
    if (nameLower.includes("zopi")) {
      specs.genericName = "Zopiclone";
      specs.form = "Tablet";
      specs.packaging = "10 Tablets / Strip";
      specs.therapeuticClass = "Anxiolytics / Sleep Relief";
    } else if (nameLower.includes("pregab")) {
      specs.genericName = "Pregabalin";
      specs.form = "Capsule";
      specs.packaging = "10 Capsules / Strip";
      specs.therapeuticClass = "Neuropathic Analgesic";
    } else if (nameLower.includes("cenforce") || nameLower.includes("kamagra") || nameLower.includes("super p")) {
      specs.genericName = nameLower.includes("super p") ? "Sildenafil Citrate + Dapoxetine" : "Sildenafil Citrate";
      specs.form = nameLower.includes("jelly") ? "Oral Jelly" : "Tablet";
      specs.packaging = nameLower.includes("jelly") ? "7 Sachets / Pack" : "10 Tablets / Strip";
      specs.therapeuticClass = "Men's Health Formulation";
    } else if (nameLower.includes("gabapentin")) {
      specs.genericName = "Gabapentin";
      specs.form = "Tablet";
      specs.packaging = "10 Tablets / Strip";
      specs.therapeuticClass = "Anticonvulsant / Nerve Pain";
    }
    return specs;
  };

  const specs = getProductSpecs(product);

  // WhatsApp Enquiry details
  const phoneNumber = "918698109212";
  const message = `Hi 👋 Thanks for your enquiry😊

I am interested in: ${product.name} (${product.dosage || "Generic"})

💊 Please share: Medicine Name + Strength + Quantity
✅ I'll check availability & send you the best price quotation quickly`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  // Find related products (same category, excluding current product)
  const relatedProducts = productsData
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 3); // limit to 3 related products

  return (
    <div className="container py-4 py-md-5">
      {/* Back Button */}
      <div className="mb-4">
        <Link to="/" className="btn btn-outline-secondary d-inline-flex align-items-center gap-2 border-0 bg-transparent ps-0">
          <RiArrowLeftLine size={18} /> Back to Catalog
        </Link>
      </div>

      {/* Product Information Card */}
      <div className="details-container mb-5">
        <div className="row g-4 g-lg-5 align-items-center">
          {/* Product Image Column */}
          <div className="col-md-5">
            <div className="product-image-container">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.name}
              />
            </div>
          </div>

          {/* Product Details Column */}
          <div className="col-md-7">
            <span className="details-category">{categoryName}</span>
            <h2 className="details-title">{product.name}</h2>
            
            {product.dosage && (
              <span className="details-dosage-pill">{product.dosage}</span>
            )}

            {/* Specifications Table */}
            <table className="details-table">
              <tbody>
                <tr>
                  <th>Composition</th>
                  <td>{specs.genericName}</td>
                </tr>
                <tr>
                  <th>Form</th>
                  <td>{specs.form}</td>
                </tr>
                <tr>
                  <th>Packaging</th>
                  <td>{specs.packaging}</td>
                </tr>
                <tr>
                  <th>Therapeutic Class</th>
                  <td>{specs.therapeuticClass}</td>
                </tr>
              </tbody>
            </table>

            {/* Action Buttons */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success w-100 py-3 fs-5 fw-bold d-flex justify-content-center align-items-center gap-2 mb-3 mt-4"
            >
              <RiWhatsappLine size={24} /> WhatsApp Order Enquiry
            </a>
            
            <p className="text-muted text-center small">
              💬 Standard availability check and direct pricing query.
            </p>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-5 pt-4 border-top">
          <h4 className="fw-bold mb-3">Product Description</h4>
          <p className="text-secondary leading-relaxed" style={{ fontSize: "1.05rem" }}>
            {product.description}
          </p>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="related-section">
          <h3 className="fw-bold mb-4">Related Formulations</h3>
          <div className="row g-4">
            {relatedProducts.map((relatedProd) => (
              <div key={relatedProd.id} className="col-6 col-md-4">
                <ProductCard product={relatedProd} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
