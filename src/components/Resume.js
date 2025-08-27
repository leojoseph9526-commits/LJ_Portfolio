import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>My Resume</h2>

      {/* View CV inside the page */}
      <div className="resume-viewer">
        <iframe
          src="/Leo_Joseph.pdf"
          title="Resume"
          frameBorder="0"
          className="resume-iframe"
        ></iframe>
      </div>

      {/* Download Button */}
      <div className="download-btn">
        <a href="/Leo_Joseph.pdf" download>
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Resume;
