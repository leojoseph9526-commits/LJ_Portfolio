import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>My Resume</h2>

      {/* View CV inside the page */}
      <div className="resume-viewer">
        <iframe
          src="/Resume_lj.pdf"
          title="Resume"
          frameBorder="0"
          className="resume-iframe"
        ></iframe>
      </div>

      {/* Download Button */}
      <div className="download-btn">
        <a href="/Resume_lj.pdf" download>
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Resume;
