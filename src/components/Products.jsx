import productsData from "../data/productsData";
import ProductCard from "./ProductCard";

function Products({ products = productsData }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-5 border rounded-4 bg-secondary-subtle bg-opacity-25 my-4">
        <h4 className="fw-bold mb-2">No Products Found</h4>
        <p className="text-muted mb-0">
          Try clearing some filters or search keywords to see matching products.
        </p>
      </div>
    );
  }

  return (
    <div className="row g-3 g-md-4">
      {products.map((product) => (
        <div key={product.id} className="col-6 col-lg-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default Products;
