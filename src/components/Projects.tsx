import React, { useState, useEffect } from 'react';
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const mockProjects = [
    {
      id: 1,
      title: "Hospital Management System",
      description: "This is a Hospital Management System created with python utilizing various libraries like Tkinter and Matplotlib.",
      image: project1Image,
      technologies: ["Python", "Tkinter", "GUI"],
      link: "https://github.com/UnikaGhimire/Hospital-Management-System"
    },
    {
      id: 2,
      title: "Hackfinity : Hackathon Website",
      description: "Hackfinity 2025 is a website designed to showcase and manage a variety of events using HTML and CSS.",
      image: project2Image,
      technologies: ["HTML", "UX/UI", "CSS"],
      link: "https://github.com/UnikaGhimire/Hackfinity"
    },
    {
      id: 3,
      title: "Car Auction Website",
      description: "A simple car auction website made using Flask. It has a simple GUI and is user-friendly.",
      image: project3Image,
      technologies: ["Backend", "Flask", "Python"],
      link: "https://github.com/UnikaGhimire/Car-Auction-Website"
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProjects(mockProjects);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-light text-3xl md:text-4xl mb-6 text-foreground tracking-tight">
              Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="soft-card animate-pulse">
                <div className="bg-muted h-48 rounded-2xl mb-4"></div>
                <div className="bg-muted h-4 rounded mb-2"></div>
                <div className="bg-muted h-3 rounded mb-4"></div>
                <div className="flex gap-2">
                  <div className="bg-muted h-6 w-16 rounded-full"></div>
                  <div className="bg-muted h-6 w-20 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-light text-3xl md:text-4xl mb-6 text-foreground tracking-tight">
            Projects
          </h2>
          <div className="w-16 h-px bg-foreground/20 mx-auto"></div>
          <p className="text-base text-muted-foreground mt-6 max-w-2xl mx-auto font-light leading-relaxed">
            Selected work showcasing design and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="soft-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h3 className="font-medium text-lg mb-2 text-foreground tracking-wide">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-foreground/5 text-foreground/60 text-xs font-light tracking-wide uppercase border border-foreground/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block text-center bg-foreground text-background py-3 font-light text-sm tracking-wide uppercase hover:bg-foreground/80 transition-colors duration-300 rounded"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
