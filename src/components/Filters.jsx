import React, { useState } from "react";
import { MoveUp, MoveDown } from "lucide-react";
import categories from "../data/categoriesData";

function Filters() {
  const [visibleCount, setVisibleCount] = useState(15);

  const visiblCategories = categories.slice(0, visibleCount);

  return (
    <div className="bg-primary-subtle py-4 px-5 rounded">
      <h2>Filters</h2>
      <h3>Categories</h3>

      {visiblCategories?.map((category) => (
        <div className="form-check mb-3" key={category.id}>
          <input
            className="form-check-input"
            type="checkbox"
            id={`${category.slug}`}
          />
          <label className="form-check-label" htmlFor={`${category.slug}`}>
            {category.name}
          </label>
        </div>
      ))}

      <button
        className="btn btn-link"
        onClick={() => {
          visibleCount >= categories.length
            ? setVisibleCount(15)
            : setVisibleCount(visibleCount + 5);
        }}
      >
        {visibleCount >= categories.length ? "view less" : "view more"}
      </button>
      {/* {visibleCount >= categories.length ? <MoveUp /> : <MoveDown />} */}
    </div>
  );
}

export default Filters;
