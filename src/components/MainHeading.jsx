import React from "react";
import { Flame } from "lucide-react";

function MainHeading() {
  return (
    <div className="mb-md-2 text-center px-2">
      <div className="d-flex align-items-center justify-content-center gap-2 mb-md-2">
        <span className="trending-badge">
          <Flame size={13} className="me-1" />
          Trending Now
        </span>
      </div>
      <h2 className="carousel-section-title">Our Hot Selling Products</h2>
    </div>
  );
}

export default MainHeading;
