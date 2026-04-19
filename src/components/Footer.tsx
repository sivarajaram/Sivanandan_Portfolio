import React from 'react';
import { Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-backend-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-backend-text">
          <Terminal size={20} className="text-backend-accent" />
          <span className="font-mono text-sm">Designed & Engineered by Sivanandan R</span>
        </div>
        
        <div className="text-sm text-backend-text font-mono flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()}</span> 
          <span className="text-backend-border">|</span>
          <span>System Status: <span className="text-green-500">Online</span></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
