import React from "react";
import "./App.css";
import Home from "./components/Home";

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
      {/* <Experience/> */}
      {/* <Projects/> */}
      {/* <Contact/> */}
      {/* 🏗️COMING SOON🚧 */}
    </div>
  );
}

export default App;
