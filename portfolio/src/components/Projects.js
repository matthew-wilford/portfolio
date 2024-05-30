import "../assets/styles/projects.css";
import portfolio from "../assets/images/portfolio.jpg";
import CLI from "../assets/images/CLI.png";
import placeholder from "../assets/images/placeholder.jpg";

export default function Projects() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="text-center text-secondary">
          <h1 className="pageTitle">My Projects</h1>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="card mx-3 mb-3">
          <img src={portfolio} className="card-img-top" alt="Portfolio" />
          <div className="card-body">
            <h5 className="card-title">Portfolio</h5>
            <p className="card-text">My website portfolio.</p>
            <a
              href="https://github.com/matthew-wilford/Website-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="card mx-3 mb-3">
          <img src={CLI} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Endpoint and RESTful API Project</h5>
            <p className="card-text">
              This is a project taken from my Modern Web Applications class.
            </p>
            <a
              href="https://github.com/matthew-wilford/endpoint-RESTfulAPI-practice"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="card mx-3 mb-3">
          <img src={placeholder} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Project Title</h5>
            <p className="card-text">Undergoing maintenance.</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center mt-3">
        <div className="text-center text-secondary mb-5">
          <a
            href="https://github.com/matthew-wilford"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-danger"
          >
            See All Projects
          </a>
        </div>
      </div>
    </div>
  );
}
