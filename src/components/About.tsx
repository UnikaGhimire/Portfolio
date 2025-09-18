import React from 'react';

const About = () => {
  const skills = [
  { name: 'Python Programming', icon: '🐍', description: 'Writing clean and efficient code with Python' },
  { name: 'Machine Learning', icon: '🤖', description: 'Building and training models to solve real-world problems' },
  { name: 'Web Development', icon: '🌐', description: 'Developing responsive and user-friendly websites' },
  { name: 'PyTorch', icon: '🔥', description: 'Implementing deep learning models with PyTorch' },
  { name: 'Flask', icon: '🛠️', description: 'Building lightweight and scalable web applications' },
  { name: 'Continuous Learning', icon: '🚀', description: 'Always staying curious and improving skills' }
];


  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-light text-3xl md:text-4xl mb-6 text-foreground tracking-tight">
            About
          </h2>
          <div className="w-16 h-px bg-foreground/20 mx-auto"></div>
        </div>
        
        <div className="soft-card max-w-3xl mx-auto mb-16">
          <h3 className="font-light text-2xl mb-6 text-foreground text-center tracking-tight">
            Professional Excellence
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 text-center font-light">
            I'm a passionate Python programmer and machine learning enthusiast, dedicated to building smart, efficient, and scalable solutions. I specialize in turning data-driven challenges into innovative applications that create real impact.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed text-center font-light">
            My approach blends analytical problem-solving with innovative coding, transforming complex challenges into smart, practical solutions. I'm passionate about machine learning, web development, and continuously sharpening my skills to stay ahead in the ever-evolving tech landscape.
          </p>
        </div>

        <div className="soft-card">
          <h3 className="font-light text-2xl mb-8 text-foreground text-center tracking-tight">
            Core Expertise
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-background border border-border/20 p-4 hover:border-border/40 transition-all duration-300 text-center"
              >
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-2xl mb-2">{skill.icon}</span>
                  <div>
                    <h4 className="font-medium text-xs text-foreground tracking-wide uppercase mb-1">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-muted-foreground font-light leading-tight">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;