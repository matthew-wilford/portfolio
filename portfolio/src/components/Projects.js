import { Link } from "react-router-dom";
import "../assets/styles/projects.css";
import placeholder from "../assets/images/placeholder.jpg";
import github from "../assets/icons/github.svg";
import linkIcon from "../assets/icons/linkIcon.svg";

export default function Projects() {
  return (
    <div className="container">
      <div className="row mt-5 justify-content-center align-items-center">
        <div className="text-center text-secondary">
          <h1 className="pageTitle">My Projects</h1>
        </div>
      </div>
      <div className="row mt-3 justify-content-center align-items-center">
        <div className="card col-lg-4 mb-3 mb-lg-0 border-0 bg-primary">
          <div className="text-center text-lg-start position-relative">
            <div className="card-img-container">
              <img
                className="card-img rounded-4"
                src={placeholder}
                alt="Project"
              />
            </div>
            <div className="card-overlay rounded-4">
              <div className="card-overlay-content text-lg-start">
                <h1 className="card-title">Web Portfolio</h1>
                <h1 className="card-techStacks">
                  JavaScript, NodeJS, ReactJS, CSS, Bootstrap
                </h1>
                <p className="card-text text-lg-start">
                  This project I designed a web portfolio. The user can leverage
                  several features including sending an email to my inbox.
                </p>
                <a
                  href="https://github.com/matthew-wilford/Website-Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="GitHub" src={github} alt="GitHub Icon" />
                </a>
                <Link
                  to="/Website-Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="Link" src={linkIcon} alt="Link Icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card col-lg-4 border-0 bg-primary">
          <div className="text-center text-lg-start position-relative">
            <div className="card-img-container">
              <img
                className="card-img rounded-4"
                src={placeholder}
                alt="Project"
              />
            </div>
            <div className="card-overlay rounded-4">
              <div className="card-overlay-content text-lg-start">
                <h1 className="card-title">Project Title</h1>
                <h1 className="card-techStacks">
                  Tech Stacks
                </h1>
                <p className="card-text text-lg-start">
                  Project Summary
                </p>
                <img className="GitHub" src={github} alt="GitHub Icon" />
                <img className="Link" src={linkIcon} alt="Link Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 justify-content-center align-items-center">
        <div className="card col-lg-4 mb-3 mb-lg-0 border-0 bg-primary">
          <div className="text-center text-lg-start position-relative">
            <div className="card-img-container">
              <img
                className="card-img rounded-4"
                src={placeholder}
                alt="Project"
              />
            </div>
            <div className="card-overlay rounded-4">
              <div className="card-overlay-content text-lg-start">
                <h1 className="card-title">Project Title</h1>
                <h1 className="card-techStacks">
                  Tech Stacks
                </h1>
                <p className="card-text text-lg-start">
                  Project summary
                </p>
                <img className="GitHub" src={github} alt="GitHub Icon" />
                <img className="Link" src={linkIcon} alt="Link Icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="card col-lg-4 mb-5 mb-lg-0 border-0 bg-primary">
          <div className="text-center text-lg-start position-relative">
            <div className="card-img-container">
              <img
                className="card-img rounded-4"
                src={placeholder}
                alt="Project"
              />
            </div>
            <div className="card-overlay rounded-4">
              <div className="card-overlay-content text-lg-start">
                <h1 className="card-title">Project Title</h1>
                <h1 className="card-techStacks">
                  Tech Stacks
                </h1>
                <p className="card-text text-lg-start">
                  Project summary
                </p>
                <img className="GitHub" src={github} alt="GitHub Icon" />
                <img className="Link" src={linkIcon} alt="Link Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
