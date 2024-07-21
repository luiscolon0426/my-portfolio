import React from "react";
import "./App.css";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <Home title={""} />
      <Experience
        title="My Experience"
        description="Details about my experience"
      />
      <Projects title="My Projects" description="Details about my projects" />
      <Contact message="Feel free to reach out!" />
    </div>
  );
}

export default App;
