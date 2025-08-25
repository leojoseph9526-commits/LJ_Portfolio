import React from "react";
import "./Contact.css";
import { 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaInstagram, 
  FaFacebook 
} from "react-icons/fa";
import { SiThreads } from "react-icons/si"; // Threads icon from simple-icons

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Let’s connect! You can find me on these platforms:</p>

      <div className="contact-icons">
        <a
          href="mailto:leojoseph9526@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon email"
        >
          <FaEnvelope />
          <span>Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/leo-joseph1568"
          target="_blank"
          rel="noreferrer"
          className="icon linkedin"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/leojoseph9526"
          target="_blank"
          rel="noreferrer"
          className="icon github"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="icon instagram"
        >
          <FaInstagram />
          <span>Instagram</span>
        </a>

        <a
          href="https://facebook.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="icon facebook"
        >
          <FaFacebook />
          <span>Facebook</span>
        </a>

        <a
          href="https://www.threads.net/@yourusername"
          target="_blank"
          rel="noreferrer"
          className="icon threads"
        >
          <SiThreads />
          <span>Threads</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
