import React from "react";
import "./contact.css";
import { EmailIconIcon } from "./assets/email-icon";

interface ContactProps {
  message: string;
}

function Contact({ message }: ContactProps) {
  return (
    <div className="contact-root" id="contact">
      <div className="contact-content">
        <div className="contact-title">Contact</div>
        <div className="contact-description">
          <p>
            Seasoned Full Stack Software Engineer with 3+ years of hands-on
            experience in designing and implementing robust, scalable, and
            innovative web solutions. Adept at leveraging a comprehensive skill
            set encompassing front-end and back-end technologies
          </p>
        </div>
        <div className="contact-email">
          <div className="email-icon">
            <EmailIconIcon />
          </div>
          <i className="email-icon"></i> luiscolon0426@gmail.com
        </div>
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/luis-colon0426/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/luiscolon0426"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
