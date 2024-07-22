import React from "react";
import "./home.css";
import "./button.css";
interface HomeProps {
  title: string;
}

function Home({ title }: HomeProps) {
  return (
    <div id="home">
      <h1>Software Engineer</h1>
      <h1>Web Developer</h1>
      <h1>UI UX Designer</h1>
      <p>
        Dynamic Software Engineer with 3+ years in web development, specializing
        in React, React Native, and JavaScript. Proven in enhancing UIs and
        modernizing codebases. Certified in Full Stack Engineering and UI/UX
        design. Bilingual in English and Spanish. Ready for a new challenge!
      </p>
      <button>Get in Touch</button>
      <button>Download CV</button>
    </div>
  );
}

export default Home;
