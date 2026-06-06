import { useState } from "react";
import { Link } from "react-router-dom";
import { Flame } from "lucide-react";
import Filters from "../components/Filters";
import Products from "../components/Products";
import productsData from "../data/productsData";
import { RiSearchLine, RiFilterLine, RiCloseLine } from "@remixicon/react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("");

  const handleCategoryChange = (slug) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  };

  const handleClearAll = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSortBy("");
  };

  // Filter & Sort Products
  const filteredProducts = productsData
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.categorySlug);

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "popularity") {
        return a.popularity - b.popularity;
      }
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      if (sortBy === "latest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      if (sortBy === "price-asc") {
        // Sort alphabetically by name (low to high representation)
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "price-desc") {
        // Sort reverse-alphabetically by name (high to low representation)
        return b.name.localeCompare(a.name);
      }
      return 0; // Default sorting (by ID)
    });

  return (
    <div className="container py-4 py-md-3">
      {/* Infinite Product Carousel Section Header */}
      <div className="mb-md-2 text-center px-2">
        <div className="d-flex align-items-center justify-content-center gap-2 mb-md-2">
          <span className="trending-badge">
            <Flame size={13} className="me-1" />
            Trending Now
          </span>
        </div>
        <h2 className="carousel-section-title">Our Hot Selling Products</h2>
      </div>

      {/* Infinite Product Carousel */}
      <div className="infinite-carousel-container mb-4 mb-md-5">
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
                <h6 className="carousel-card-title">{product.name}</h6>
                {product.dosage && (
                  <span className="carousel-card-dosage">{product.dosage}</span>
                )}
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

      <div className="row g-4">
        {/* Sidebar for Desktop */}
        <div className="col-md-4 col-xl-3 d-none d-md-block">
          <div className="sticky-top" style={{ top: "100px", zIndex: 10 }}>
            {/* Desktop Search */}
            <div className="mb-4">
              <form onSubmit={(e) => e.preventDefault()}>
                <label
                  className="form-label fw-semibold fs-5 mb-2"
                  htmlFor="searchProduct"
                >
                  Search
                </label>
                <div className="input-group">
                  <input
                    id="searchProduct"
                    className="form-control"
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <span className="input-group-text bg-transparent text-muted border-start-0 border-end border-top border-bottom">
                    <RiSearchLine size={18} />
                  </span>
                </div>
              </form>
            </div>

            {/* Filters sidebar panel */}
            <Filters
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
            />

            {/* Clear All button */}
            {(selectedCategories.length > 0 ||
              searchQuery !== "" ||
              sortBy !== "") && (
              <button
                className="btn btn-outline-danger w-100 mt-3 d-flex align-items-center justify-content-center gap-2"
                onClick={handleClearAll}
              >
                <RiCloseLine size={18} /> Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Catalog Body */}
        <div className="col-md-8 col-xl-9">
          {/* Mobile Controls Panel */}
          <div className="d-md-none mb-4">
            <div className="d-flex gap-2">
              <button
                className="btn btn-primary d-flex align-items-center gap-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#filtersOffcanvas"
              >
                <RiFilterLine size={18} /> Categories
                {selectedCategories.length > 0 && (
                  <span className="badge bg-danger rounded-pill">
                    {selectedCategories.length}
                  </span>
                )}
              </button>

              <div className="flex-grow-1">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                      className="btn btn-outline-secondary border-start-0"
                      type="submit"
                    >
                      <RiSearchLine size={18} />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Clear all active filters alert banner for Mobile */}
            {(selectedCategories.length > 0 ||
              searchQuery !== "" ||
              sortBy !== "") && (
              <div className="mt-3 d-flex align-items-center justify-content-between p-2 bg-secondary bg-opacity-10 border rounded-3">
                <span className="text-secondary small">Filters active</span>
                <button
                  className="btn btn-link btn-sm p-0 text-danger text-decoration-none fw-bold"
                  onClick={handleClearAll}
                >
                  Reset All
                </button>
              </div>
            )}
          </div>

          {/* Catalog Top bar */}
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
            <p className="mb-0 text-secondary fw-semibold">
              Showing {filteredProducts.length} of {productsData.length}{" "}
              products
            </p>

            <div className="w-100 w-sm-auto">
              <select
                type="text"
                className="form-select w-100"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{ minWidth: "200px" }}
              >
                <option value="">Default Sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="latest">Sort by latest</option>
                <option value="price-asc">Sort by name: A to Z</option>
                <option value="price-desc">Sort by name: Z to A</option>
              </select>
            </div>
          </div>

          {/* Products List component */}
          <Products products={filteredProducts} />
        </div>
      </div>

      {/* Offcanvas Drawer for Mobile Filters */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="filtersOffcanvas"
        style={{
          maxWidth: "320px",
          borderRight: "1px solid var(--border-color)",
        }}
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold">Select Categories</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body p-4">
          <Filters
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
          />
          {(selectedCategories.length > 0 ||
            searchQuery !== "" ||
            sortBy !== "") && (
            <button
              className="btn btn-outline-danger w-100 mt-4 d-flex align-items-center justify-content-center gap-2"
              onClick={handleClearAll}
              data-bs-dismiss="offcanvas"
            >
              <RiCloseLine size={18} /> Clear All Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
