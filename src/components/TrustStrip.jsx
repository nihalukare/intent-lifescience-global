import React from "react";
import { Lock, MessageSquare, Pill, CreditCard, Monitor } from "lucide-react";

function TrustStrip() {
  return (
    <div className="trust-strip-band mb-4">
      <div className="container">
        <div className="trust-strip-inner">
          <div className="trust-strip-item">
            <Lock size={16} className="trust-strip-icon" />
            <span className="trust-strip-label">Discreet Shipping</span>
          </div>
          <div className="trust-strip-item">
            <MessageSquare size={16} className="trust-strip-icon" />
            <span className="trust-strip-label">Live Chat Support</span>
          </div>
          <div className="trust-strip-item">
            <Pill size={16} className="trust-strip-icon" />
            <span className="trust-strip-label">Quality Pills Only</span>
          </div>
          <div className="trust-strip-item">
            <CreditCard size={16} className="trust-strip-icon" />
            <span className="trust-strip-label">Multiple Payments</span>
          </div>
          <div className="trust-strip-item">
            <Monitor size={16} className="trust-strip-icon" />
            <span className="trust-strip-label">Order Tracking</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustStrip;
