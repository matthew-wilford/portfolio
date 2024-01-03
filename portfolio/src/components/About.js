import "../assets/styles/about.css";
import aImg from "../assets/images/aboutImg.jpg";

export default function About() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="text-center text-lg-start">
            <h1 className="text-secondary display-1 pageTitle pb-3">About Me</h1>
            <div className="combined-text">
              <h1 className="text-dark">My name is</h1>
              <h1> </h1>
              <h1 className="text-secondary">Matthew Wilford</h1>
              <h1>!</h1>
            </div>
            <h1 className="text-dark pt-3">
              I am a Full Stack developer who enjoys collaborating with others
              and is passionate about advocating for diversity in tech! <br /> I
              am curiosity-driven and value tech as a tool to solve real-world
              problems. I have a background in Computer Science and Liberal
              Studies at Cheyney University.
            </h1>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="text-center text-lg-start">
            <img
              className="img-fluid shadow aImg"
              src={aImg}
              alt="Me inside the National Center for Civil and Human Rights in Atlanta, GA"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
