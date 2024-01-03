import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar bg-secondary shadow py-4 navbar-expand-sm">
      <Link to="/Website-Portfolio/" className="navbar-brand ps-4">
        Matthew Wilford
      </Link>
      <button
        className="navbar-toggler btn-primary pe-4 border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse px-4" id="navbarNav">
        <ul className="navbar-nav ms-auto pe-4">
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/projects">Projects</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </ul>
      </div>
    </nav>
  );
}

function CustomLink({ to, children }) {
  return (
    <li className="nav-item">
      <Link to={to} className="nav-link">
        {children}
      </Link>
    </li>
  );
}
