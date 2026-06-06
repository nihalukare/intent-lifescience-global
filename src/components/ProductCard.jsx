import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsappBtn";
import categories from "../data/categoriesData";

function ProductCard({ product }) {
  // Find category name
  const category = categories.find((c) => c.slug === product.categorySlug);
  const categoryName = category ? category.name : "Healthcare";

  return (
    <div className="product-grid-card">
      <Link to={`/products/${product.id}`} className="product-img-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="card-badge">{categoryName}</span>
      </Link>
      
      <div className="product-card-body">
        <Link to={`/products/${product.id}`} className="product-card-title">
          {product.name}
        </Link>
        
        {product.dosage && (
          <div className="product-card-dosage">{product.dosage}</div>
        )}
        
        <p className="product-card-desc">{product.description}</p>
        
        <div className="mt-auto pt-2">
          <WhatsAppButton productName={product.name} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
