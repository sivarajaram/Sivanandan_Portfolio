import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-backend-dark/90 backdrop-blur-md border-b border-backend-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-backend-textHigh hover:text-backend-accent transition-colors">
            <Terminal size={24} className="text-backend-accent" />
            <span className="font-mono font-bold text-lg tracking-tight">Sivanandan R</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-backend-text hover:text-backend-textHigh transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="px-4 py-2 text-sm font-mono font-medium text-backend-accent border border-backend-accent/30 rounded-md hover:bg-backend-accent/10 transition-colors"
            >
              Let's Talk
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-backend-text hover:text-backend-textHigh"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-backend-dark border-b border-backend-border">
          <div className="px-4 py-4 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-backend-text hover:text-backend-textHigh hover:translate-x-1 transition-transform"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="text-backend-accent font-mono mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
