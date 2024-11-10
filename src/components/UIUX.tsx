import React from "react";
import "./uiux.css";

const UIUX = () => {
  return (
    <section id="uiux" className="section">
      <h2>UI/UX Design Work</h2>
      {/* <p>
        I believe in creating user-centered designs that solve real-world
        problems. My process involves understanding user needs, iterating based
        on feedback, and delivering visually compelling interfaces that provide
        a seamless experience.
      </p> */}

      {/* Figma Projects */}
      <div className="case-studies">
        <div className="case-study">
          <h3>CoinTrace</h3>
          <p>
            Concept of a Money tracking app that focus on simplicity and
            accessibility letting users use the tool totally for free and
            without giving up any important data.
          </p>
          <a
            className="design-link"
            href="https://www.figma.com/design/ezp81LoAeetGcDS4O7EMpy/CoinTrace-Design-System-OG?t=4hSXPrgxuAdo0TQ1-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project on Figma
          </a>
        </div>

        <div className="case-study">
          <h3>Zneaker - Sneaker App Design</h3>
          <p>
            A conceptual design for a sneaker shopping app, focused on providing
            users with a seamless product discovery experience.
          </p>
          <a
            className="design-link"
            href="https://luiscolon0426.editorx.io/zneaker"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project on EditorX
          </a>
        </div>

        {/* Add more Figma project cards here as needed */}
      </div>
    </section>
  );
};

export default UIUX;
