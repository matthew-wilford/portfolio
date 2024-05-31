import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./assets/styles/styles.css";
import "./assets/styles/main.scss";

function App() {

    return (
      <div className="app-container bg-primary">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/portfolio/" element={<Home />} />
            <Route path="/portfolio/about" element={<About />} />
            <Route path="/portfolio/projects" element={<Projects />} />
            <Route path="/portfolio/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
}

export default App;
