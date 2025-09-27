import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="education-title">Education & Certifications</h2>
        <p className="education-subtitle">
          My academic background and professional certifications that fuel my
          passion for technology.
        </p>

        <h3 className="section-heading">Academic Background</h3>

        {/* Card 1 */}
        <div className="edu-card">
  <div className="edu-info">
    <h4 className="degree">Bachelor of Science in Computer Science and Information Technology (BSc CSIT)</h4>
    <p className="university">
      Tribhuvan University <span>• Kathmandu, Nepal</span>
    </p>
    <ul>
      <li>Analyzed core CSIT curriculum including Mathematics & Statistics</li>
      <li>Engaged in practical projects integrating Machine Learning and AI concepts</li>
      <li>Explored  Data Structures & Algorithms, and Programming Languages</li>
    </ul>
  </div>
  <div className="edu-details">
    <span className="date">2022 - Present</span>
    {/* <p>GPA:</p>
    <p className="gpa">3.8/4.0</p> */}
  </div>
</div>


        {/* Card 2 */}
        <div className="edu-card">
          <div className="edu-info">
            <h4 className="degree">+2 Science</h4>
            <p className="university">
              NEB<span>•Kathmandu, Nepal</span>
            </p>
            {/* <ul>
              <li>Magna Cum Laude graduate</li>
              <li>President of Computer Science Student Association</li>
            </ul> */}
          </div>
          <div className="edu-details">
            <span className="date">2020 - 2022</span>
            <p>GPA:</p>
            <p className="gpa">3.70/4.0</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
