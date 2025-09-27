import React, { useState } from "react";
import "./Projects.css";
import project1 from "../assets/event.jpg"; 
import project2 from "../assets/books.jpg"; 
import project3 from "../assets/NTA.jpg"; 
import project4 from "../assets/word-predictor.webp"; 
import project5 from "../assets/RAG.webp";  
import project6 from "../assets/agentic-ai.jpeg"; 

const allProjects = [
  {
    title: "EventHub - Event Management System",
    desc: "Event platform with calendar and user-friendly registration.",
    tech: ["React", "Python", "Django"],
    img: project1,
    demo: "https://example.com/eventhub", 
  },
  {
    title: "Nepal Travel Assistant - Guide App",
    desc: "Tourist app with trip cost, recommendations, and permits.",
    tech: ["Python", "Django","ML"],
    img: project3,
    demo: "https://example.com/nepal-travel", 
  },
  {
    title: "Agentic AI",
    desc: "Multi-agent AI for tasks like hiring and decision support.",
    tech: ["Django", "React", "OpenAI"],
    img: project6,
    demo: "https://example.com/agentic-ai", 
  },
  {
    title: "Book Recommendation System",
    desc: "Suggests books based on user preferences and patterns.",
    tech: ["React", "Python", "SQLServer"],
    img: project2,
    demo: "https://example.com/book-recommendation", 
  },
  {
    title: "Word Predictor Using LSTMs",
    desc: "LSTM-based tool for predictive typing and text generation.",
    tech: ["React", "Python", "LSTMs"],
    img: project4,
    demo: "https://example.com/word-predictor", 
  },
  {
    title: "Chat Application",
    desc: "Real-time chat app with knowledge base and authentication.",
    tech: ["React", "Django", "SQLite"],
    img: project5,
    demo: "https://example.com/chat-app", 
  },
];

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewAll = () => {
    if (visibleCount === 3) {
      setVisibleCount(6);
    } else {
      window.location.href = "https://github.com/subashkatwal?tab=repositories"; // replace with your link later
    }
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Featured Projects</h2>
      <p className="projects-subtitle">
        Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
      </p>

      <div className="projects-grid">
        {allProjects.slice(0, visibleCount).map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.img} alt={proj.title} className="project-img" />
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className="tech-stack">
              {proj.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
            {proj.demo && (
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-btn"
              >
                View Live Demo
              </a>
            )}
          </div>
        ))}
      </div>

      <button className="view-btn" onClick={handleViewAll}>
        {visibleCount === 3 ? "View All Projects" : "Go to GitHub"}
      </button>
    </section>
  );
}
