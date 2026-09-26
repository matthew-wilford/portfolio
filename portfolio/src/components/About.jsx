import "../assets/styles/about.css";
import aImg from "../assets/images/aboutImg.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import GenesysMark from "../assets/icons/genesys.svg?react";

const techStack = [
  { name: "HTML", icon: <FaHtml5 />, color: "#e34f26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572b6" },
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#5fa04e" },
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
  { name: "Express.js", icon: <SiExpress />, color: "#303030" },
  { name: "Genesys Cloud", icon: <GenesysMark />, color: "#ff451a" },
];

export default function About() {
  return (
    <div className="container page-shell mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="text-center text-lg-start">
            <h1 className="text-secondary display-1 pageTitle pb-3">
              About Me
            </h1>
            <div className="combined-text">
              <h1 className="text-dark">My name is </h1>
              <h1 className="text-secondary name">Matthew Wilford!</h1>
            </div>
            <p className="text-dark pt-3 about-description">
              I’m a full‑stack developer who enjoys collaborating with others
              and is passionate about advocating for diversity in tech. Curiosity
              drives my work, and I see technology as a powerful tool for solving
              real‑world problems. Currently, I build Chatbot and Voicebot solutions
              at Eli Lilly.
            </p>

            <div className="tech-stack-section mt-4">
              <h3 className="tech-stack-title text-secondary mb-3">
                Tech Stack Experience
              </h3>
              <div className="tech-stack-grid">
                {techStack.map(({ name, icon, color }) => (
                  <div className="tech-card" key={name}>
                    <div className="tech-icon" style={{ color }}>
                      {icon}
                    </div>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <div className="text-center text-lg-start">
            <img
              className="img-fluid shadow aImg"
              src={aImg}
              alt="Me leaning against a wall"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
