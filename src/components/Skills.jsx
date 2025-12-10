import React from 'react';

export default function Skills() {
  const skills = {
    "Frontend": ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Redux toolkit", "Redux thunk", "Redux saga", "MUI" ],
    "Backend": ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
    "Tools": ["Git", "GitHub", "VS Code", "Postman", "Docker","AWS"],
    "Other": ["MERN Stack", "Responsive Design", "Problem Solving", "Agile"]
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <ul>
                {skillList.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
