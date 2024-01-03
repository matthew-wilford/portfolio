import "../assets/styles/home.css";
import myImg from "../assets/images/myImg.jpg";
import { ReactComponent as GitHub } from "../assets/icons/github.svg";
import { ReactComponent as LinkedIn } from "../assets/icons/linkedin.svg";
import { ReactComponent as ResumeIcon } from "../assets/icons/resume.svg";

export default function Home() {
  return (
    <div className="container bs-danger">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="text-center text-lg-start">
            <img
              className="img-fluid rounded-circle shadow hImg"
              src={myImg}
              alt="Headshot"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="text-lg-start text-dark">
            <div className="combined-text">
              <h1>Hi, I'm</h1>
              <h1> </h1>
              <h1 className="text-secondary">Matt</h1>
              <h1>!</h1>
              <span class="wave">👋🏾</span>
            </div>
            <h1 className="text-dark">
              I am a Full Stack developer. <br />
              Let's get connected!
            </h1>
            <div className="d-flex align-items-center">
              <a href="/Website-Portfolio/contact" className="me-4">
                <button className="btn btn-danger rounded-pill">
                  Contact Me
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-wilford-33a431202/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn className="hLL" />
              </a>
              <a
                href="https://github.com/matthew-wilford"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub className="hGitHub" alt="GitHub Icon" />
              </a>
              <a
                href="../../resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ResumeIcon className="hResume" alt="Resume Download Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
