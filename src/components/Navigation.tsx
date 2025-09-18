import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', isAnchor: true },
    { name: 'About', href: '#about', isAnchor: true },
    { name: 'Projects', href: '#projects', isAnchor: true },
    { name: 'Contact', href: '#contact', isAnchor: true },

  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-light text-lg text-foreground tracking-wide">
            Unika Ghimire
          </div>
          
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              item.isAnchor ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="font-light text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
                >
                  {item.name}
                </button>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="font-light text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
                >
                  {item.name}
                </NavLink>
              )
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className="block w-full h-0.5 bg-foreground rounded"></span>
              <span className="block w-full h-0.5 bg-foreground rounded"></span>
              <span className="block w-full h-0.5 bg-foreground rounded"></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            {navItems.map((item) => (
              item.isAnchor ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 font-light text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
                >
                  {item.name}
                </button>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left py-3 font-light text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
                >
                  {item.name}
                </NavLink>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;