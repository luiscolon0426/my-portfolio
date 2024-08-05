import React from "react";
import javascript from "./assets/js-icon.svg";
import typescript from "./assets/typescript-icon.svg";
import react from "./assets/react-icon.svg";
import nodeJS from "./assets/nodeJS-icon.svg";
import html from "./assets/html-icon.svg";
import css from "./assets/css-icon.svg";
import angular from "./assets/angular-icon.svg";
import python from "./assets/python-icon.svg";
import C from "./assets/c-icon.svg";
import vsCode from "./assets/vs-code-icon.svg";
import figma from "./assets/figma-icon.svg";
import nextJS from "./assets/nextJS-icon.svg";
import gitlab from "./assets/gitlab-icon.svg";
import git from "./assets/git-icon.svg";
import github from "./assets/github-icon.svg";
import "./experience.css";

interface ExperienceProps {
  title: string;
  description: string;
}

function Experience({ title, description }: ExperienceProps) {
  return (
    <div id="experience">
      <h5>EXPERIENCED IN</h5>
      <div className="iconContainer">
        <a
          href="https://www.javascript.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={javascript} alt="JS" className="experienceIcons" />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={typescript} alt="TS" className="experienceIcons" />
        </a>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={react} alt="React" className="experienceIcons" />
        </a>
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
          <img src={nodeJS} alt="node" className="experienceIcons" />
        </a>
        <a
          href="https://html.spec.whatwg.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={html} alt="HTML" className="experienceIcons" />
        </a>
        <a
          href="https://www.w3.org/Style/CSS/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={css} alt="CSS" className="experienceIcons" />
        </a>
        <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">
          <img src={angular} alt="Angular" className="experienceIcons" />
        </a>
      </div>
      <div className="iconContainer2">
        <a
          href="https://www.python.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={python} alt="Python" className="experienceIcons" />
        </a>
        <a
          href="https://en.wikipedia.org/wiki/C_(programming_language)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={C} alt="C" className="experienceIcons" />
        </a>
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={vsCode} alt="vsCode" className="experienceIcons" />
        </a>
        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={figma} alt="Figma" className="experienceIcons" />
        </a>
        <a
          href="https://git-scm.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={git} alt="Git" className="experienceIcons" />
        </a>
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <img src={nextJS} alt="next" className="experienceIcons" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="Github" className="experienceIcons" />
        </a>
        <a
          href="https://about.gitlab.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitlab} alt="GitLab" className="experienceIcons" />
        </a>
      </div>
      <div className="TITLECONTAINER">
        <div className="EXPERIENCETITLE">Experience</div>
      </div>
      <div className="JOBS">
        {/* -----------JOB 1------------- */}

        <div className="experienceTitle">
          <div className="labelWrapper">
            <span className="companyName">Coqui Health Inc / </span>
            <span className="jobPosition">
              Software Engineer / Web Developer
            </span>
            <span className="experience">Mar 2023 - Jun 2024</span>
          </div>
        </div>
        <div className="experienceSubTitle">
          As an Engineer and Web Developer at Coqui Health, I played a pivotal
          role in developing innovative solutions for Coqui Health's core
          WebApp. Collaborating with a dynamic team of engineers, I contributed
          to the enhancement of search accuracy and efficiency. Collaborated
          with product managers to gather and understand requirements for
          feature development, leading to the successful delivery of 10+ new
          features.
        </div>

        {/* -----------JOB 2------------- */}

        {/* <div className="experienceTitle2">
          <p className="labelWrapper">
            <span className="companyName">Apple / </span>
            <span className="jobPosition">Junior Software Engineer</span>
            <span className="experience2"> Apr 2022 - Mar 2023</span>
          </p>
        </div>
        <div className="experienceSubTitle2">
          During my tenure at Apple, I held the role of Software Architect,
          where I played a key role in shaping the architecture of
          mission-critical software projects. Responsible for designing scalable
          and efficient systems, I provided technical leadership to a
          cross-functional team.
        </div> */}

        <div className="experienceTitle2">
          <p className="labelWrapper">
            <span className="companyName">Patient Onboarding System / </span>
            <span className="jobPosition">Web Developer</span>
            <span className="experience2">Sep 2023</span>
          </p>
        </div>
        <div className="experienceSubTitle3">
          Designed and implemented a user-friendly patient onboarding system,
          increasing registration efficiency. Leveraged NextJs for server-side
          rendering and React for dynamic frontend interactions, improving page
          load speed. Integrated frontend components with backend microservices
          using Typescript and GraphQL, enhancing data processing speed. Ensured
          seamless data flow between frontend and backend, reducing data
          synchronization issues.
        </div>

        {/* -----------JOB 3------------- */}

        <div className="experienceTitle3">
          <p className="labelWrapper">
            <span className="companyName">Hyperion Finance Inc / </span>
            <span className="jobPosition">Full Stack Software Engineer</span>
            <span className="experience3">Sep 2021 - Mar 2022</span>
          </p>
        </div>
        <div className="experienceSubTitle3">
          At Hyperion, I served as a Full Stack Software Engineer, focusing on
          the design and implementation of backend & frontend systems for the
          app. Working on features that involved large-scale data processing and
          user engagement features, I leveraged my expertise to ensure seamless
          functionality and scalability.
        </div>

        {/* -----------JOB 4------------- */}
      </div>
    </div>
  );
}

export default Experience;
