import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen relative text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
      {/* Animated Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base Background */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-[#020617] transition-colors duration-300" />
        
        {/* Ambient Gradient Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[80px] opacity-70 animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-400/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[80px] opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-400/30 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[100px] opacity-70 animate-blob animation-delay-4000" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        
        <main>
          <div id="about">
              <Hero isDarkMode={isDarkMode} />
          </div>
          
          <Experience />
          <Skills />
          <Education />
        </main>

        <Contact />
      </div>
    </div>
  );
};

export default App;