import React from "react";
import Filters from "../components/Filters";
import Products from "../components/Products";
import productsData from "../data/productsData";
import { RiSearchLine } from "@remixicon/react";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 py-3">
          {/* Mobile Controls */}
          <div className="d-flex gap-2 d-md-none mb-3">
            <button
              className="btn btn-outline-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#filtersOffcanvas"
            >
              Categories
            </button>

            <div className="flex-grow-1">
              <form>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search products..."
                  />
                  <button className="btn btn-outline-secondary" type="submit">
                    <RiSearchLine />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="d-none d-md-block mb-3">
            <form>
              <div className="mb-3">
                <label
                  className="form-label fw-medium fs-5"
                  htmlFor="searchProduct"
                >
                  Search
                </label>
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search products..."
                  />
                  <button className="btn btn-outline-secondary" type="submit">
                    <RiSearchLine />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <aside className="d-none d-md-block">
            <Filters />
          </aside>
        </div>

        {/* Products */}
        <div className="col-md-8 py-md-5 py-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p>Showing {productsData.length} products</p>
            <div>
              <select type="text" className="form-select">
                <option value="">Default Sorting</option>
                <option value="">Sort by popularity</option>
                <option value="">Sort by average rating</option>
                <option value="">Sort by latest</option>
                <option value="">Sort by price: low to high</option>
                <option value="">Sort by price: high to low</option>
              </select>
            </div>
          </div>
          <Products />
        </div>
      </div>

      {/* Offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="filtersOffcanvas"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Categories</h5>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <Filters />
        </div>
      </div>
    </div>
  );
}

export default Home;
