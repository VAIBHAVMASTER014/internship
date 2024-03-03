import React from "react";

// css files
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-section">
      <img src="/images/Rectangle 18.png" alt="" />
      <div className="footer-content">
        <div className="footer-title">
          <span>Download our app</span>
        </div>
        <div className="footer-button">
          <button>
            <img src="images/Group 11.png" alt="" />
          </button>
          <button>
            <img src="/images/Group 12.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
