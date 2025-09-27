import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero container">
      <h1>
        Hi, I'm <span className="highlight">Subash Katwal</span>
      </h1>
      <h3>AI & Machine Learning Engineer</h3>
      <p>
        I create intelligent systems with a focus on deep learning, natural language processing, and data-driven solutions.
      </p>
      <div>
        {/* View My Work → GitHub */}
        <a
          href="https://github.com/subashkatwal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-primary">View My Work</button>
        </a>

       
        <a
          href="https://drive.google.com/file/d/1tGO8tLxL94jE-0Do0IMZDYMS7QjIoAN3/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-outline">Download CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
