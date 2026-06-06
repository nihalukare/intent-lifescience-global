import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-wrap bg-secondary-subtle">
      <div className="container py-5">
        <div className="row g-4 justify-content-between">
          {/* Brand & Description Column */}
          <div className="col-md-6 col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="footer-brand-image">
                <img
                  className="w-100 h-100 object-fit-contain"
                  src="/images/brand-image.png"
                  alt="brand-image"
                />
              </div>
              <h5 className="fw-bold mb-0 text-primary">
                Intent Lifescience Global
              </h5>
            </div>
            <p className="text-secondary small leading-relaxed">
              Intent Lifescience Global is a trusted Wholesaler and leading
              business specializing in high-quality therapeutic formulations and
              antidepressant products.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5
              className="fw-semibold mb-3 text-primary"
              style={{ fontSize: "1.1rem" }}
            >
              Quick Links
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link
                  to="/"
                  className="text-secondary text-decoration-none hover-link"
                >
                  Whatsapp
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-secondary text-decoration-none hover-link"
                >
                  Telegram
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@intentlifescience.com"
                  className="text-secondary text-decoration-none hover-link"
                >
                  Mail
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe / Newsletter Column */}
          <div className="col-md-6 col-lg-4">
            <h5
              className="fw-semibold mb-3 text-primary"
              style={{ fontSize: "1.1rem" }}
            >
              Newsletter
            </h5>
            <p className="text-secondary small mb-3">
              Subscribe to get updates on stock arrivals and latest product
              releases.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="d-flex flex-column flex-sm-row gap-2"
            >
              <input
                type="email"
                id="emailSubscribe"
                className="form-control"
                placeholder="name@example.com"
                required
              />
              <button className="btn btn-primary text-uppercase px-4">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Footer Bar */}
      <div className="footer-bottom text-center py-4 border-top border-light border-opacity-10">
        <div className="container">
          <p className="mb-0 small text-secondary">
            Copyright &copy; 2026 Intent Lifescience Global Enterprises. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
