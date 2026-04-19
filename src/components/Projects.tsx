import React from 'react';
import { ExternalLink, Code2, TerminalSquare } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Hospital Management System",
      problem: "Needed a centralized system to efficiently manage complex hospital operations, handle patient records securely, and streamline doctor appointments.",
      techStack: ["Java", "Spring Boot", "SQL", "REST APIs"],
      features: [
        "Developed backend services for secure CRUD operations on patient records.",
        "Implemented RESTful endpoints for appointment scheduling and doctor management.",
        "Ensured robust database integration and data integrity mapping."
      ],
      architecture: "Layered Architecture (Controller -> Service -> Repository)",
      github: "https://github.com"
    },
    {
      title: "Marketplace E-Commerce Backend",
      problem: "Small and semi-urban businesses required a platform to list products without heavy onboarding friction or performance bottlenecks.",
      techStack: ["Spring Boot", "MySQL", "JWT", "Microservices Concepts"],
      features: [
        "Designed a highly scalable backend architecture to handle dynamic product catalogs.",
        "Worked on optimized product listing features with paginated database queries.",
        "Implemented role-based access control and secure user session management."
      ],
      architecture: "Monolithic modular design focusing on API response latency",
      github: "https://github.com"
    },
    {
      title: "AstroTamil 360",
      problem: "Mobile application required a secure and fast backend for generating OTPs, handling login authentication, and serving content to mobile clients.",
      techStack: ["Laravel", "PHP", "MySQL", "REST APIs"],
      features: [
        "Developed production-ready mobile API endpoints for real-time data delivery.",
        "Implemented secure Login Authentication using OTP Generation protocols.",
        "Engineered reliable backend services specifically optimized for low-latency mobile client communication."
      ],
      architecture: "MVC Pattern integrated with robust API endpoint routing",
      github: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-backend-textHigh">
          <span className="text-backend-accent font-mono text-xl mr-2">03.</span>
          Technical Projects
        </h2>
        <div className="h-px bg-backend-border flex-grow max-w-xs"></div>
      </div>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col border border-backend-border bg-backend-card rounded-xl overflow-hidden hover:border-backend-border/80 transition-colors">
            
            {/* Top Bar for terminal aesthetic */}
            <div className="bg-backend-dark/50 border-b border-backend-border px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TerminalSquare size={16} className="text-backend-text" />
                <span className="text-xs font-mono text-backend-text">{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
              </div>
              <div className="flex items-center gap-3">
                <a href={project.github} className="text-backend-text hover:text-backend-accent transition-colors">
                  <Code2 size={18} />
                </a>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h3 className="text-2xl font-bold text-backend-textHigh">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-backend-accent bg-backend-accent/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-backend-textHigh mb-2">Problem Statement</h4>
                    <p className="text-backend-text text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-backend-textHigh mb-2">System Architecture</h4>
                    <p className="text-backend-text text-sm font-mono bg-backend-dark p-3 rounded border border-backend-border">
                      {project.architecture}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-backend-textHigh mb-3">Backend Highlights</h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-backend-accent mt-1 text-xs">▹</span>
                        <span className="text-sm text-backend-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
