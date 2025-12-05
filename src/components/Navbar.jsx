import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  

  // Always apply dark mode when Navbar loads
  useEffect(() => {
    document.body.className = "dark-screen";
    localStorage.setItem("darkMode", true);
  }, []);

  return (
    <nav className="modern-nav">
      <div className="container-fluid nav-inner">

        {/* Brand */}
        <Link className="brand" to="/">
          <span className="brand-glow">Code</span>Paste
        </Link>

        {/* Links */}
        <ul className="nav-links">
          <li>
            <Link className="nav-link-modern" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link-modern" to="/paste">Paste</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
