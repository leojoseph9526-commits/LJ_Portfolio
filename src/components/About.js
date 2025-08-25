import React from "react";
import "./About.css";
import profileImg from "../assets/profile.jpeg"; // replace with your profile photo

function About() {
  return (
    <section className="about">
      {/* Left Side - Profile Image */}
      <div className="about-left">
        <img src={profileImg} alt="Leo Joseph" className="about-img" />
        <a
          href="mailto:leojoseph1568@gmail.com"
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Contact Me
        </a>
        <a
          href="https://www.linkedin.com/in/leo-joseph1568/"
          className="btn linkedin"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>

      {/* Right Side - About Info */}
      <div className="about-right">
        <h1>About Me</h1>
        <p>
          Hi 👋, I’m <b>Leo Joseph</b>, a <b>Software Engineer</b> with over{" "}
          <b>2 years of experience</b> in building scalable and user-friendly
          web applications. I specialize in <b>React.js, Node.js, and Django</b>,
          and have also worked in IT operations and digital strategy.
        </p>

        <h2>Key Skills</h2>
        <ul className="about-skills">
          <li>⚛️ React.js</li>
          <li>🌿 Node.js</li>
          <li>🐍 Django</li>
          <li>🗄️ MySQL & PostgreSQL</li>
          <li>🎨 Figma / UI Design</li>
          <li>☁️ Microsoft 365 / GitLab</li>
        </ul>

        <h2>Career Timeline</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="date">Jan 2025 – Jun 2025</span>
            <h3>IT & Digital Operations Associate</h3>
            <h4>Nook Home Properties, Dubai</h4>
            <p>
              Managed IT infrastructure, WordPress websites, SEO, and digital
              marketing strategies. Led a team of social media executives,
              optimized internal systems, and improved business workflows.
            </p>
          </div>

          <div className="timeline-item">
            <span className="date">Jul 2023 – Nov 2024</span>
            <h3>Software Engineer</h3>
            <h4>iLearningEngines India Pvt. Ltd, Trivandrum</h4>
            <p>
              Developed LMS platforms using React.js and Node.js. Designed UI
              with Figma, optimized databases, created APIs, and contributed to
              AI-powered test generation features.
            </p>
          </div>
        </div>

        <h2>Beyond Work</h2>
        <p>
          Outside of coding, I enjoy <b>traveling</b> ✈️ and <b>photography</b> 📸.
          I’m also an active member of <b>ACM</b> and founder of <b>Talkster</b>,
          a platform supporting career preparation.
        </p>
      </div>
    </section>
  );
}

export default About;
