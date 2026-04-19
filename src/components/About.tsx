import React from 'react';
import { Server, Code2, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-backend-textHigh">
          <span className="text-backend-accent font-mono text-xl mr-2">01.</span>
          About Me
        </h2>
        <div className="h-px bg-backend-border flex-grow max-w-xs"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4 text-backend-text leading-relaxed text-lg">
          <p>
            I am a final-year Computer Science and Business Systems student with a strong engineering foundation 
            and hands-on experience building end-to-end web applications. My core expertise lies in designing scalable backend 
            architectures, writing clean RESTful APIs, and optimizing database interactions.
          </p>
          <p>
            Beyond academic foundations, I am actively interning at a startup while independently managing 
            live web deployment projects for local businesses. This dual experience has tuned my problem-solving abilities 
            and my understanding of how technical systems drive business logic in real-world environments.
          </p>
          <p>
            When I'm not configuring a server or debugging logic flaws, I am consistently solving Data Structures 
            and Algorithms problems or conceptualizing new ways to improve system performance.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="bg-backend-card p-5 rounded-lg border border-backend-border flex items-start gap-4 hover:border-backend-accent/50 transition-colors">
            <Server className="text-backend-accent mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-backend-textHigh font-semibold mb-1">Backend Architecture</h3>
              <p className="text-sm">Driven by Spring Boot and Laravel to build secure, scalable, and efficient server-side systems.</p>
            </div>
          </div>
          <div className="bg-backend-card p-5 rounded-lg border border-backend-border flex items-start gap-4 hover:border-backend-accent/50 transition-colors">
            <Globe className="text-backend-accent mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-backend-textHigh font-semibold mb-1">API Integration & Development</h3>
              <p className="text-sm">Expertise in RESTful principles, secure JWT authentication, and external service communication.</p>
            </div>
          </div>
          <div className="bg-backend-card p-5 rounded-lg border border-backend-border flex items-start gap-4 hover:border-backend-accent/50 transition-colors">
            <Code2 className="text-backend-accent mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-backend-textHigh font-semibold mb-1">Algorithmic Problem Solving</h3>
              <p className="text-sm">150+ DSA problems solved, focusing on optimizing time and space complexity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
