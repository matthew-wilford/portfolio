import { Link } from "react-router-dom";
import "../assets/styles/home.css";
import myImg from "../assets/images/myImg.jpg";
import { ReactComponent as GitHub } from "../assets/icons/github.svg";
import { ReactComponent as LinkedIn } from "../assets/icons/linkedin.svg";
import { ReactComponent as ResumeIcon } from "../assets/icons/resume.svg";

const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf?v=2026-07-01`;

export default function Home() {
  return (
    <div className="container home-page mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="text-center text-lg-start">
            <img
              className="img-fluid shadow hImg"
              src={myImg}
              alt="Casual headshot"
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
              I am a full-stack developer. <br />
              Let's get connected!
            </h1>
            <div className="d-flex align-items-center">
              <a href="#contact" className="me-4">
                <button className="contact-btn btn btn-secondary rounded-pill">
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
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <ResumeIcon className="hResume" alt="Resume Download Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
