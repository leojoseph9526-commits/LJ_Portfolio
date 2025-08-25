import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Let's connect! You can reach me at:</p>
      <ul>
        <li>Email: <a href="mailto:leo@example.com">leo@example.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/leo" target="_blank" rel="noreferrer">linkedin.com/in/leo</a></li>
        <li>GitHub: <a href="https://github.com/leo" target="_blank" rel="noreferrer">github.com/leo</a></li>
      </ul>
    </section>
  );
};

export default Contact;
