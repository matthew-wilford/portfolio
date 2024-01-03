import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./assets/styles/styles.css"
import "./assets/styles/main.scss"

function App() {

    return (
      <div class="background bg-primary">
        <Navbar />
        <div>
          <Routes>
            <Route path="/Website-Portfolio/" element={<Home />} />
            <Route path="/Website-Portfolio/about" element={<About />} />
            <Route path="/Website-Portfolio/projects" element={<Projects />} />
            <Route path="/Website-Portfolio/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    )
}

export default App;
