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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
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
  );
};

export default App;