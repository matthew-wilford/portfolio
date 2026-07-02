import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./assets/styles/styles.css";
import "./assets/styles/main.scss";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container bg-primary">
      <Navbar />
      <div className="content">
        <section id="home" className="reveal-section"><Home /></section>
        <section id="about" className="reveal-section"><About /></section>
        <section id="projects" className="reveal-section"><Projects /></section>
        <section id="contact" className="reveal-section"><Contact /></section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
