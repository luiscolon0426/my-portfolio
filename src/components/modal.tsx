// Modal.tsx

import React from "react";
import "./modal.css";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  resumeUrl: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, resumeUrl }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <iframe
          src={resumeUrl}
          title="Resume Preview"
          className="modal-iframe"
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
