import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-modern mt-5">
      <div className="footer-content">
        <h5 className="footer-text">
          © {new Date().getFullYear()} <span className="name">Vaibhav Dubey</span> ❤️  
          All Rights Reserved.
        </h5>

        {/* Social Icons */}
        <div className="footer-icons mt-2">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
