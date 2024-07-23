import React from "react";
import "./global.css";
import "./nav.css";
import Home from "./components/Home";
import Experience from "./components/Experience";

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
      {/* 🏗️COMING SOON🚧 */}
      <Experience title={""} description={""} />
      {/* <Projects/> */}
      {/* <Contact/> */}
      {/* 🏗️COMING SOON🚧 */}
    </div>
  );
}

export default App;
