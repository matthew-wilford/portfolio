import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/navbar.css";

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar bg-danger shadow py-4 navbar-expand-sm">
      <button
        className="navbar-toggler custom-toggler pe-4 ms-auto border-0"
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
        } text-center`}
        id="navbarNav"
      >
        <ul className="navbar-nav mx-auto">
          <CustomLink to="/portfolio" handleNavCollapse={handleNavCollapse}>
            Home
          </CustomLink>
          <CustomLink
            to="/portfolio/about"
            handleNavCollapse={handleNavCollapse}
          >
            About
          </CustomLink>
          <CustomLink
            to="/portfolio/projects"
            handleNavCollapse={handleNavCollapse}
          >
            Projects
          </CustomLink>
          <CustomLink
            to="/portfolio/contact"
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
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className="mx-5">
      <Link
        to={to}
        className={`btn btn-outline-secondary rounded-pill nav-btn ${
          isActive ? "active" : ""
        }`}
        onClick={handleNavCollapse}
      >
        {children}
      </Link>
    </li>
  );
}
