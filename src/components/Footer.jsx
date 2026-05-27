import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-secondary-subtle py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-brand-image mb-3">
                <img
                  className="w-100"
                  src="/images/brand-image.png"
                  alt="brand-image"
                />
              </div>
              <h5>Intent Lifescience Global</h5>
              <p>
                Intent Lifescience Global is a trusted Wholesaler and leading
                business specializing in high-quality Antidepressant Tablets.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <Link>Contact Us</Link>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                id="emailSubscribe"
                className="form-control mb-3"
                placeholder="name@example.com"
              />
              <button className="btn btn-warning text-uppercase text-light fw-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary-subtle text-center border border-top border-light py-4">
        Copyright &copy; 2026 Intent Lifescience Global Enterprises
      </div>
    </>
  );
}

export default Footer;
