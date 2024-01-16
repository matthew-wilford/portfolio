import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const handleHomepageClick = () => {
    setIsNavCollapsed(true);
  };

  return (
    <nav className="navbar bg-secondary shadow py-4 navbar-expand-sm">
      <Link
        to="/Website-Portfolio/"
        className="navbar-brand custom-navbar-brand ps-4"
        onClick={handleHomepageClick}
      >
        Matthew Wilford
      </Link>
      <button
        className="navbar-toggler custom-toggler pe-4 border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse px-4 ${
          isNavCollapsed ? "" : "show"
        }`}
        id="navbarNav"
      >
        <ul className="navbar-nav ms-auto pe-4">
          <CustomLink
            to="/Website-Portfolio/about"
            handleNavCollapse={handleNavCollapse}
          >
            About
          </CustomLink>
          <CustomLink
            to="/Website-Portfolio/projects"
            handleNavCollapse={handleNavCollapse}
          >
            Projects
          </CustomLink>
          <CustomLink
            to="/Website-Portfolio/contact"
            handleNavCollapse={handleNavCollapse}
          >
            Contact
          </CustomLink>
        </ul>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, handleNavCollapse }) {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link" onClick={handleNavCollapse}>
        {children}
      </Link>
    </li>
  );
}
