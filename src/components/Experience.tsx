import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Rabbit QR",
      location: "Coimbatore",
      date: "Dec 2025 - March 2026",
      tasks: [
        "Developed comprehensive full-stack web applications, integrating modern frontend architectures with deep backend systems.",
        "Engineered and maintained robust web application features, ensuring seamless data flow and business logic execution.",
        "Collaborated remotely with development teams to design and implement highly scalable and efficient API functionalities."
      ]
    },
    {
      role: "Founder / Freelance Web Developer",
      company: "Creva Solutions",
      location: "Remote",
      date: "Jan 2025 - Present",
      tasks: [
        "Designed, developed, and deployed end-to-end web applications for local business clients.",
        "Communicated directly with stakeholders to gather technical requirements and architect appropriate backend solutions.",
        "Managed complete deployment lifecycles, hosting infrastructure, and continuous maintenance."
      ]
    },
    {
      role: "AWS Intern",
      company: "Revolite Technology",
      location: "Remote",
      date: "Jul 2024 - Aug 2024",
      tasks: [
        "Deployed and managed cloud application environments utilizing AWS EC2, VPC, and S3.",
        "Implemented robust IAM policies to ensure secure access control across the development infrastructure.",
        "Learned and applied fundamentals of cloud networking and highly available, scalable system deployments."
      ]
    }
  ];

  const achievements = [
    "Solved 150+ programming and algorithmic problems in Java on LeetCode.",
    "Successfully founded and managed an IT service initiative, delivering live applications.",
    "Participated in Python Programming Workshop conducted by IIT Chennai.",
    "Completed certified Power BI data analytics workshop.",
    "Awarded NCC 'C' Certificate with 'A' Grade after three years of intensive training."
  ];

  return (
    <section id="experience" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-backend-textHigh">
          <span className="text-backend-accent font-mono text-xl mr-2">04.</span>
          Professional Experience
        </h2>
        <div className="h-px bg-backend-border flex-grow max-w-xs"></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 md:pl-8 border-l border-backend-border hover:border-backend-accent/50 transition-colors">
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-backend-accent ring-4 ring-backend-dark"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-backend-textHigh">
                  {exp.role} <span className="text-backend-accent">@ {exp.company}</span>
                </h3>
                <span className="text-sm font-mono text-backend-text bg-backend-card px-3 py-1 rounded">
                  {exp.date}
                </span>
              </div>
              
              <ul className="mt-4 space-y-3">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-backend-accent mt-1 text-xs">▹</span>
                    <span className="text-sm text-backend-text leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <div className="bg-backend-card/50 p-6 rounded-lg border border-backend-border sticky top-32">
            <h3 className="text-lg font-bold text-backend-textHigh mb-6 flex items-center gap-2">
              Achievements & Certs
            </h3>
            <ul className="space-y-4">
              {achievements.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-backend-text pb-4 border-b border-backend-border/50 last:border-0 last:pb-0">
                  <span className="text-backend-accent mt-0.5">⚡</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
