import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      {/* Main Section Title */}
      <h2 className="section-title">Skills</h2>

      {/* Cards Container */}
      <div className="cards-container">
        <div className="skills">
          <h3>Skills & Technologies</h3>
          <div className="skills-grid">
            <span>Python & Django</span>
            <span>AI and Machine Learning</span>
            <span>SQLServer</span>
            <span>GitHub & Docker</span>
            <span>Figma & Design Systems</span>
          </div>
        </div>

        <div className="learning">
          <h3>Currently Learning</h3>
          <div className="tags">
            <span>Agentic AI</span>
            <span>ReactJS</span>
            <span>R</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
