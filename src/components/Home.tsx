import React from "react";

interface HomeProps {
  title: string;
}

function Home({ title }: HomeProps) {
  return (
    <div id="home">
      <h1>{title}</h1>
      <p>Hi, I'm Luis Colon. I'm a web developer...</p>
    </div>
  );
}

export default Home;
