import React from "react";

interface ProjectsProps {
  title: string;
  description: string;
}

function Projects({ title, description }: ProjectsProps) {
  return (
    <div id="projects">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Projects;
