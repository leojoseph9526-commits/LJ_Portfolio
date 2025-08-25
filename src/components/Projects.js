import React from "react";
import "./Projects.css";

const projects = [
  { title: "Portfolio Website", link: "https://github.com/yourusername/portfolio" },
  { title: "E-commerce App", link: "https://github.com/yourusername/ecommerce" },
  { title: "Blog Platform", link: "https://github.com/yourusername/blog" },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h3>{proj.title}</h3>
            <a href={proj.link} target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
