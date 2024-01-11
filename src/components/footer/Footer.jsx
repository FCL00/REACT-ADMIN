import React from "react";
import "./Footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <span>Shoppy</span>
      <span>©{currentYear} Shoppy Admin Dashboard</span>
    </div>
  );
};

export default Footer;
