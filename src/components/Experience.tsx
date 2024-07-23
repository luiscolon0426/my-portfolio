import React from "react";

interface ExperienceProps {
  title: string;
  description: string;
}

function Experience({ title, description }: ExperienceProps) {
  return (
    <div id="experience">
      <h3>Experience With</h3>
      <div></div>
    </div>
  );
}

export default Experience;
