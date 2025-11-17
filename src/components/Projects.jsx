import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment gateway integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourname/ecommerce",
      live: "https://example.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Real-time task tracker with user authentication",
      tech: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/yourname/taskapp",
      live: "https://example.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Weather app using third-party APIs",
      tech: ["React", "Axios", "Weather API"],
      github: "https://github.com/yourname/weather",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
