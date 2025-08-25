import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Let's connect! You can reach me at:</p>
      <ul>
        <li>Email: <a href="mailto:leo@example.com">leojoseph9526@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/leo-joseph1568" target="_blank" rel="noreferrer">linkedin.com/in/leo</a></li>
        <li>GitHub: <a href="https://github.com/leo" target="_blank" rel="noreferrer">github.com/leo</a></li>
      </ul>
    </section>
  );
};

export default Contact;
