import React from "react";
import UIUX from "./components/UIUX";
import "./global.css";
import "./nav.css";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
// import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="uiux">UI UX</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Home title={""} />
      <Experience />
      <UIUX />
      <Projects title={""} description={""} />
      <Contact message={""} />
    </div>
  );
}

export default App;
