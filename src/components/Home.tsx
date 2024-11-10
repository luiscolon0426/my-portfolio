import React from "react";
import "./home.css";
import "./button.css";
import resumePdf from "./assets/resume.pdf"; // Import the resume PDF
import profileImage from "./assets/profile-image.svg";
import Modal from "./modal";

interface HomeProps {
  title: string;
}

function Home({ title }: HomeProps) {
  const [showCVModal, setShowCVModal] = React.useState(false);

  const handleCVPreview = () => {
    setShowCVModal(true);
  };

  const handleCloseCVModal = () => {
    setShowCVModal(false);
  };

  const handleGetInTouch = () => {
    window.location.href =
      "mailto:luiscolon0426@gmail.com?subject=Inquiry&body=Hello Luis,";
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
        <button className="btn-primary" onClick={handleGetInTouch}>
          Get in Touch
        </button>
        <button className="btn-secondary" onClick={handleCVPreview}>
          CV Preview
        </button>
      </div>
      <div className="tech-icons"></div>

      <Modal
        show={showCVModal}
        onClose={handleCloseCVModal}
        resumeUrl={resumePdf}
      />
    </div>
  );
}

export default Home;
