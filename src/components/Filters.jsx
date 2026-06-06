import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import categories from "../data/categoriesData";

function Filters({ selectedCategories = [], onCategoryChange }) {
  const [visibleCount, setVisibleCount] = useState(12);

  const visibleCategories = categories.slice(0, visibleCount);

  const handleToggleCount = () => {
    if (visibleCount >= categories.length) {
      setVisibleCount(12);
    } else {
      setVisibleCount(prev => Math.min(prev + 12, categories.length));
    }
  };

  return (
    <div className="filters-panel">
      <h2>Filters</h2>
      <h3>Categories</h3>

      <div className="d-flex flex-column mb-3">
        {visibleCategories.map((category) => {
          const isChecked = selectedCategories.includes(category.slug);
          return (
            <label className="custom-checkbox" key={category.id} htmlFor={category.slug}>
              <input
                type="checkbox"
                id={category.slug}
                checked={isChecked}
                onChange={() => onCategoryChange && onCategoryChange(category.slug)}
              />
              <span className="checkmark"></span>
              <span>{category.name}</span>
            </label>
          );
        })}
      </div>

      <button
        className="btn btn-link p-0 text-decoration-none d-flex align-items-center gap-1 fw-semibold text-accent"
        onClick={handleToggleCount}
        style={{ fontSize: "0.9rem" }}
      >
        {visibleCount >= categories.length ? (
          <>
            View Less <ChevronUp size={16} />
          </>
        ) : (
          <>
            View More ({categories.length - visibleCount} more) <ChevronDown size={16} />
          </>
        )}
      </button>
    </div>
  );
}

export default Filters;
