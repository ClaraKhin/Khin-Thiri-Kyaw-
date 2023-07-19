import React from "react";
import logo from "./pic/khin.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <img src={logo} alt="khin-logo" />
        <p>&copy; 2023. All rights served by Khin.</p>
      </div>
    </footer>
  );
};

export default Footer;
