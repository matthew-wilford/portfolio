import "../assets/styles/projects.css";
import placeholder from "../assets/images/placeholder.jpg";
import portfolio from "../assets/images/portfolio.jpg";

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
          <img src={placeholder} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
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
        <div className="card mx-3 mb-3">
          <img src={placeholder} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
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
    </div>
  );
}
