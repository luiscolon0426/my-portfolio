import React from "react";
import "./projects.css";

interface ProjectsProps {
  title: string;
  description: string;
}

function Projects({ title, description }: ProjectsProps) {
  return (
    <div id="projects">
      <div className="PROJECTSCONTAINER">
        <h1 className="PROJECTSTITLE">PROJECTS</h1>
        <div className="allProjects"></div>
      </div>
    </div>
  );
}

export default Projects;
