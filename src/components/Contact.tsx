import React from 'react';
import { Mail, Phone, Code2, Globe, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24 pb-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-backend-textHigh">
          <span className="text-backend-accent font-mono text-xl mr-2">05.</span>
          Let's Connect
        </h2>
        <div className="h-px bg-backend-border flex-grow max-w-xs"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-backend-text mb-8 leading-relaxed">
            I am currently looking for new opportunities as a Backend / Full Stack Developer. 
            Whether you have a question, a project you need architected, or just want to say hi, 
            my inbox is always open. 
          </p>
          
          <div className="space-y-6">
            <a 
              href="mailto:rajaramsiva19@gmail.com" 
              className="flex items-center gap-4 text-backend-text hover:text-backend-accent transition-colors w-fit"
            >
              <div className="p-3 bg-backend-card border border-backend-border rounded-lg">
                <Mail size={20} />
              </div>
              <span className="font-mono text-sm">rajaramsiva19@gmail.com</span>
            </a>
            
            <a 
              href="tel:+919445104205" 
              className="flex items-center gap-4 text-backend-text hover:text-backend-accent transition-colors w-fit"
            >
              <div className="p-3 bg-backend-card border border-backend-border rounded-lg">
                <Phone size={20} />
              </div>
              <span className="font-mono text-sm">+91 9445104205</span>
            </a>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-backend-card border border-backend-border rounded-lg text-backend-text hover:text-backend-textHigh hover:border-backend-textHigh transition-colors"
              >
                <Code2 size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-backend-card border border-backend-border rounded-lg text-backend-text hover:text-backend-textHigh hover:border-backend-textHigh transition-colors"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-backend-card p-6 md:p-8 rounded-xl border border-backend-border">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-backend-text mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-backend-dark border border-backend-border rounded-md px-4 py-2.5 text-backend-textHigh focus:outline-none focus:border-backend-accent transition-colors font-mono text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-backend-text mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-backend-dark border border-backend-border rounded-md px-4 py-2.5 text-backend-textHigh focus:outline-none focus:border-backend-accent transition-colors font-mono text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-backend-text mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-backend-dark border border-backend-border rounded-md px-4 py-2.5 text-backend-textHigh focus:outline-none focus:border-backend-accent transition-colors font-mono text-sm resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-backend-accent/10 border border-backend-accent text-backend-accent px-4 py-3 rounded-md hover:bg-backend-accent hover:text-backend-dark transition-colors font-mono font-bold font-sm"
            >
              <Send size={18} />
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
