import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/unika-ghimire"
    },
    {
      name: "GitHub",
      url: "https://github.com/UnikaGhimire"
    }
  ];

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="font-light text-lg text-foreground mb-2 tracking-wide">
            Unika Ghimire
          </h3>
          <p className="text-sm text-muted-foreground font-light">
            Eager to learn and build real world solutions
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-6">
          {socials.map((social) => (
            <a 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 font-light tracking-wide uppercase"
            >
              {social.name}
            </a>
          ))}
        </div>
        
        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground font-light tracking-wide">
            © {currentYear} Unika Ghimire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
