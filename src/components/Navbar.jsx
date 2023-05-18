import React from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="navbar--element">
        About
      </Link>
      <Link to="/skills" className="navbar--element">
        Skills
      </Link>
      <Link to="/projects" className="navbar--element">
        Projects
      </Link>
      <Link to="/contact" className="navbar--element">
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
