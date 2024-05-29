import { useEffect } from "react";
import { Route, Routes, useHistory, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./assets/styles/styles.css";
import "./assets/styles/main.scss";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Store the current page URL in local storage before navigating to a new page
    localStorage.setItem("previousLocation", location.pathname);
  }, [location.pathname]);

  return (
    <div className="background bg-primary">
      <Navbar />
      <div>
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
