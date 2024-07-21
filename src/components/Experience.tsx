import React from "react";

interface ExperienceProps {
  title: string;
  description: string;
}

function Experience({ title, description }: ExperienceProps) {
  return (
    <div id="experience">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Experience;
