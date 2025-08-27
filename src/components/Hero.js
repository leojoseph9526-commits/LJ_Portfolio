import React from "react";
import "./Hero.css";
import myImage from "../assets/me.jpeg";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="hero">
      {/* Top Hero Section */}
      <div className="hero-content">
        <img src={myImage} alt="Leo Joseph" className="hero-img" />
        <div className="hero-text">
          <h1>Hello, I'm Leo Joseph 👋</h1>
          <ReactTyped
  strings={[
    "Software Engineer 💻",
    "React.js Developer ⚛️",
    "Node.js Enthusiast 🌿",
    "Django Explorer 🐍",
    "Tech Problem Solver 🚀",
  ]}
  typeSpeed={50}
  backSpeed={30}
  loop
/>
        </div>
      </div>

      {/* About Preview Section */}

<div className="about-preview">
  <h2>About Me</h2>
  
  <div className="about-grid">
    <div className="about-card">
      <div className="card-inner">
        <div className="card-front">👨‍💻 Who Am I</div>
        <div className="card-back">
        <p>
    I’m <b>Leo Joseph</b>, a passionate <b>Software Engineer</b> who loves{' '}
    <span>building <b>interactive apps</b> and solving <b>real-world problems</b>.</span>
  </p>
        </div>
      </div>
    </div>

    <div className="about-card">
      <div className="card-inner">
        <div className="card-front">⚡ What I Do</div>
        <div className="card-back">
        <p>
    Crafts scalable <b>Websites</b> with <b>React</b>, <b>Node.js</b>, and <b>Django</b>,{' '}
    focusing on <b>performance</b>, <b>clean code</b>, and <b>great design</b>.
  </p>
        </div>
      </div>
    </div>

    <div className="about-card">
      <div className="card-inner">
        <div className="card-front">🎯 My Goal</div>
        <div className="card-back">
        <p>
    To grow as a <b>full-stack engineer</b> and contribute to <b>impactful projects</b>{' '}
    that make <b>technology work beautifully</b>.
  </p>
        </div>
      </div>
    </div>
  </div>

  <p className="quote">“Code is like humor. When you have to explain it, it’s bad.”</p>
  <a href="/about" className="btn">Read My Journey →</a>
</div>

      {/* Contact Section */}
      <div className="contact-preview">
        <h2>Let's Connect</h2>
       <div className="contact-icons-wrapper">
        <div className="contact-icons">
          <a href="mailto:leojoseph9526@gmail.com" target="_blank" rel="noreferrer" className="icon email"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/leo-joseph1568" target="_blank" rel="noreferrer" className="icon linkedin"><FaLinkedin /></a>
          <a href="https://github.com/leojoseph9526-commits" target="_blank" rel="noreferrer" className="icon github"><FaGithub /></a>
          <a href="https://www.instagram.com/l_j._.737?igsh=MW5xMjQwMmJjcm0yaQ==" target="_blank" rel="noreferrer" className="icon instagram"><FaInstagram /></a>
          <a href="https://www.facebook.com/share/1GRdM2FG4P/" target="_blank" rel="noreferrer" className="icon facebook"><FaFacebook /></a>
          <a href="https://www.threads.com/@l_j._.737" target="_blank" rel="noreferrer" className="icon threads"><SiThreads /></a>
        </div>
      </div>      
    </div>      
    </section>
  );
};

export default Hero;
