import { useState } from "react";
import "../assets/styles/navbar.css";

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar bg-danger shadow py-4 navbar-expand-lg">
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
          <NavItem href="#home" handleNavCollapse={handleNavCollapse}>
            Home
          </NavItem>
          <NavItem href="#about" handleNavCollapse={handleNavCollapse}>
            About
          </NavItem>
          <NavItem href="#projects" handleNavCollapse={handleNavCollapse}>
            Projects
          </NavItem>
          <NavItem href="#contact" handleNavCollapse={handleNavCollapse}>
            Contact
          </NavItem>
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ href, children, handleNavCollapse }) {
  return (
    <li className="mx-5">
      <a
        href={href}
        className="btn btn-outline-secondary rounded-pill nav-btn"
        onClick={handleNavCollapse}
      >
        {children}
      </a>
    </li>
  );
}
