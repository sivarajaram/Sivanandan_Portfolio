import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      skills: ["Java", "SQL", "JavaScript", "PHP"]
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "REST APIs", "JWT", "Laravel"]
    },
    {
      title: "Database",
      skills: ["MySQL", "Supabase", "Database Design"]
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS (EC2, VPC, IAM)", "Git", "Postman"]
    },
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "Tailwind"]
    },
    {
      title: "Core Concepts",
      skills: ["OOP", "DSA", "System Design", "Networking (TCP/IP, HTTP)"]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-backend-textHigh">
          <span className="text-backend-accent font-mono text-xl mr-2">02.</span>
          Technical Stack
        </h2>
        <div className="h-px bg-backend-border flex-grow max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="bg-backend-card p-6 rounded-lg border border-backend-border hover:border-backend-accent/30 transition-colors group"
          >
            <h3 className="text-backend-textHigh font-mono font-semibold mb-4 text-lg border-b border-backend-border pb-2 group-hover:border-backend-accent/50 transition-colors">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <li 
                  key={i} 
                  className="bg-backend-dark text-sm px-3 py-1.5 rounded-md border border-backend-border text-backend-text group-hover:text-backend-textHigh transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
