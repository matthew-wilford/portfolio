import "../assets/styles/projects.css";
import portfolio from "../assets/images/portfolio.jpg";
import CLI from "../assets/images/CLI.png";
import travelGuide from "../assets/images/travelGuide.png";

export default function Projects() {
  return (
    <div className="container mt-5">
      <div className="section-shell p-4 p-lg-5 rounded-4 shadow-sm">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 text-center">
            <h1 className="text-secondary display-1 pageTitle pb-3">
              My Projects
            </h1>
          </div>
        </div>

        <div className="project-panel row align-items-center mb-5">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="project-image-wrapper">
              <img
                src={travelGuide}
                className="project-image"
                alt="Travel guide project preview"
              />
            </div>
          </div>
          <div className="col-lg-7 text-center text-lg-start">
            <span className="project-label">Bootcamp project</span>
            <h2 className="project-title">Travel Guide</h2>
            <p className="project-description">
              A web application using two APIs to provide travel information.
            </p>
            <a
              href="https://github.com/matthew-wilford/travel-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary rounded-pill project-btn"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="project-panel row align-items-center mb-5 flex-lg-row-reverse">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="project-image-wrapper">
              <img
                src={CLI}
                className="project-image"
                alt="CLI and RESTful API project preview"
              />
            </div>
          </div>
          <div className="col-lg-7 text-center text-lg-start">
            <span className="project-label">Course project</span>
            <h2 className="project-title">Endpoint and RESTful API</h2>
            <p className="project-description">
              A backend-focused application built during my Modern Web
              Applications class.
            </p>
            <a
              href="https://github.com/matthew-wilford/endpoint-RESTfulAPI-practice"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary rounded-pill project-btn"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="project-panel row align-items-center mb-5">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="project-image-wrapper">
              <img
                src={portfolio}
                className="project-image"
                alt="Portfolio project preview"
              />
            </div>
          </div>
          <div className="col-lg-7 text-center text-lg-start">
            <span className="project-label">Featured project</span>
            <h2 className="project-title">Portfolio</h2>
            <p className="project-description">
              A polished personal website that showcases my work, skills, and
              contact options.
            </p>
            <a
              href="https://github.com/matthew-wilford/Website-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary rounded-pill project-btn"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="row justify-content-center align-items-center mt-3">
          <div className="col-12 text-center text-secondary mb-5">
            <a
              href="https://github.com/matthew-wilford"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary rounded-pill"
            >
              See All Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
