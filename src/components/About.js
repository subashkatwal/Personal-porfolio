import React from "react";
import "./About.css";
import profile from "../assets/photo.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-card">
        <div className="about-img">
          <img src={profile} alt="Profile" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi! I'm <strong>Subash Katwal</strong>, an AI & Machine Learning Engineer
            passionate about building intelligent systems and practical solutions.
          </p>
          <p>
            I have experience developing full-stack applications using React, Django, Python, and SQLServer. 
            My projects include AI-based travel assistants, book recommendation systems, word prediction tools, 
            and multi-agent AI platforms that solve real-world problems.
          </p>
          <p>
            I constantly explore new technologies, expand my AI and Machine Learning expertise, 
            and share my work on GitHub to contribute to the developer community.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default About;
