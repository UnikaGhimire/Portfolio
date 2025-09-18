import React from 'react';
import { Button } from './ui/button';

const Resume = () => {
  const experience = [
    {
      title: "Executive Member",
      company: "Oratory Club, SSRC",
      period: "2025 – Present",
      description: "Help organize events, promote public speaking, manage logistics, and encourage participation."
    },
    {
      title: "Data Fellow",
      company: "Sunway Student Research Center",
      period: "2024 – Present",
      description: "Accessed DataCamp premium courses including Machine Learning and Python for advanced learning."
    }
  ];

  const education = [
    {
      degree: "BSc. (Hons) in Computer Science and Artificial Intelligence",
      school: "Sunway College Kathmandu",
      period: "11/2024 – Present",
      specialization: "Computer Science & AI"
    },
    {
      degree: "+2 Science",
      school: "GEMS School",
      period: "2022 – 2024",
      specialization: "Science"
    }
  ];

  const skills = [
    "Python", "OOP", "Flask",
    "Problem-Solving", "Logical Thinking", "Debugging",
    "MS Word", "Report Writing",
    "Presentation & Public Speaking",
    "Leadership & Team Management",
    "Communication & Collaboration",
    "Canva", "Figma", "UI/UX Design", "Prototyping"
  ];

  return (
    <section id="resume" className="py-24 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl mb-4 text-foreground tracking-tight">
            Resume
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
            I am a Computer Science student with an interest in AI, Machine Learning, and IoT. 
            I enjoy building projects, solving problems using technology, and have participated in 
            various hackathons. I bring strong problem-solving, teamwork, and communication skills.
          </p>

          <a 
            href="/Unika-Ghimire-CV.pdf" 
            download="Unika-Ghimire-Resume.pdf"
          >
            <Button 
              variant="outline"
              className="px-8 py-3"
            >
              Download Resume PDF
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h3 className="text-2xl mb-8 text-foreground">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-border pl-6 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-1"></div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">{exp.title}</h4>
                    <p className="text-sm text-primary">{exp.company}</p>
                    <p className="text-xs text-muted-foreground">{exp.period}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">

            <div>
              <h3 className="text-2xl mb-8 text-foreground">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-primary">{edu.school}</p>
                    <p className="text-xs text-muted-foreground">{edu.period}</p>
                    <p className="text-sm text-muted-foreground">{edu.specialization}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-8 text-foreground">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-background border border-border rounded-full text-sm text-foreground hover:bg-muted/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
