import React from "react";
import { Search } from "lucide-react";

function Header() {
  return (
    <div className="border border-2 border-bottom sticky-top bg-white">
      <div className="container py-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="header-img me-2">
              <img
                className="w-100"
                src="/images/brand-image.png"
                alt="brand-image"
              />
            </div>
            <h1>Intent Lifescience Global</h1>
          </div>

          <div className="d-flex gap-5">
            <button className="btn btn-primary">Our Other Products</button>
            <div>
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
