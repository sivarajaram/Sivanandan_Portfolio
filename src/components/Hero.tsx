import React from 'react';
import { Code2, Globe, Mail, ArrowRight, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center section-padding pt-0">
      <div className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-backend-accent/10 border border-backend-accent/20 text-backend-accent text-sm font-mono">
          <Database size={14} />
          <span>System Architecting in Progress</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-backend-textHigh tracking-tight leading-tight">
          Hi, I'm Sivanandan R. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            I craft scalable backends.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl text-backend-text leading-relaxed">
          I'm a Full Stack Developer specializing in backend engineering. 
          I build robust REST APIs, manage complex databases, and architect scalable system solutions 
          using Java and Spring Boot.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a 
            href="#projects" 
            className="flex items-center gap-2 bg-backend-textHigh text-backend-dark px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
          >
            Explore My Work <ArrowRight size={18} />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-md border border-backend-border hover:border-backend-text hover:text-backend-textHigh transition-colors"
          >
            <Code2 size={20} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-md border border-backend-border hover:border-backend-text hover:text-backend-textHigh transition-colors"
          >
            <Globe size={20} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
