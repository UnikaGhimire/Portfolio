import React from 'react';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src={profileImage}
            alt="Unika's profile"
            className="w-40 h-40 mx-auto rounded-full object-cover shadow-glow border-4 border-primary/20"
          />
        </div>
        
        <h1 className="font-light text-5xl md:text-6xl mb-6 text-foreground tracking-tight">
          Hello, I'm Unika Ghimire
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          An AI learner shaping ideas into real-world applications
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-foreground text-background font-light text-sm tracking-wide uppercase hover:bg-foreground/80 transition-colors duration-300"
          >
            View Work
          </button>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-foreground/20 text-foreground font-light text-sm tracking-wide uppercase hover:border-foreground/40 transition-colors duration-300"
          >
            Contact
          </button>
        </div>
        
        <div className="mt-16">
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;