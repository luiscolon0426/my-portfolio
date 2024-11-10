import React from "react";
import "./projects.css";

interface Project {
  title: string;
  description?: string;
  link?: string;
  image?: string;
}

const projectData: Project[] = [
  // {
  //   title: "CoinTrace",
  //   description: "Work in Progress (link to design)",
  //   link: "https://www.figma.com/design/wnBLoXpnkGX4p0HdrOhqrI/CoinTrace-Design-System?node-id=32833-466&t=jmExuryiQO2Vo6cp-1",
  //   // image: ${forkify},
  // },
  {
    title: "Forkify",
    description: "Recipe-App",
    link: "https://github.com/luiscolon0426/Forkify-App",
    // image: "./assets/forkify.svg",
  },
  {
    title: "Zneaker",
    description: "Sneaker App Design",
    link: "https://luiscolon0426.editorx.io/zneaker",
  },
];

interface ProjectsProps {
  title: string;
  description: string;
}

function Projects({ title, description }: ProjectsProps) {
  return (
    <div id="projects">
      <div className="PROJECTSCONTAINER">
        <h1 className="PROJECTSTITLE">PROJECTS</h1>
        <div className="allProjects">
          {projectData.map((project, index) => (
            <div key={index} className="projectCard">
              {/* <img
                src={project.image}
                alt={project.title}
                className="projectImage"
              /> */}
              <div className="projectInfo">
                <h2 className="projectTitle">{project.title}</h2>
                <p className="projectDescription">{project.description}</p>
                <a
                  href={project.link}
                  className="projectLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here to visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
