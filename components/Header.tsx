import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import gsap from 'gsap';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // GSAP Animation: Slide down from top
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5 // Wait a bit for other things to load
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
          Farid<span className="text-accent">.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
           <button 
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-900 dark:text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg border-t dark:border-slate-800 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-accent py-2 block border-b border-slate-100 dark:border-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;