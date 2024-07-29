// Home.tsx

import React, { useState } from "react";
import "./home.css";
import "./button.css";
import resumePdf from "./assets/resume.pdf"; // Import the resume PDF
import profileImage from "./assets/profile-image.svg";
import Modal from "./modal";

interface HomeProps {
  title: string;
}

function Home({ title }: HomeProps) {
  const [showModal, setShowModal] = useState(false);

  const handleCVPreview = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div id="home">
      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-img" />
        <p className="greeting">
          Hello! I Am <span className="name-highlight">Luis Colon</span>
        </p>
      </div>
      <h1>
        Software <span>Engineer</span>
      </h1>
      <h1>
        Web <span>Developer</span>
      </h1>
      <h1>
        UI UX <span>Designer</span>
      </h1>
      <p className="description">
        Dynamic Software Engineer with 3+ years in web development, specializing
        in React, React Native, and JavaScript. Proven in enhancing UIs and
        modernizing codebases. Certified in Full Stack Engineering and UI/UX
        design. Bilingual in English and Spanish. Ready for a new challenge!
      </p>
      <div className="buttons">
        <button className="btn-primary">Get in Touch</button>
        <button className="btn-secondary" onClick={handleCVPreview}>
          CV Preview
        </button>
      </div>
      <div className="tech-icons"></div>

      <Modal
        show={showModal}
        onClose={handleCloseModal}
        resumeUrl={resumePdf}
      />
    </div>
  );
}

export default Home;
