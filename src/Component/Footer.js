import React from "react";
import logo from "./pic/khin.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <a href="https://github.com/ClaraKhin" rel="noreferrer" target="_blank">
          <img src={logo} alt="khin-logo" />
        </a>

        <p>Copyright &copy; 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
