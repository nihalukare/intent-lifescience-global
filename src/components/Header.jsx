import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

function Header({ theme, toggleTheme }) {
  return (
    <header className="sticky-header sticky-top py-2 py-md-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {/* Logo / Brand Name */}
          <Link to="/" className="d-flex align-items-center text-decoration-none text-reset">
            <div className="header-img me-3">
              <img
                className="w-100 h-100 object-fit-contain"
                src="/images/brand-image.png"
                alt="Intent Lifescience Global"
              />
            </div>
            <h1 className="brand-title d-none d-sm-block">Intent Lifescience Global</h1>
            <h1 className="brand-title d-block d-sm-none" style={{ fontSize: "1.2rem" }}>Intent Lifescience</h1>
          </Link>

          {/* Action Buttons */}
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-primary btn-sm btn-md-normal">
              Other Products
            </button>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
