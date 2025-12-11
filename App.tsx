import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative text-slate-900 transition-colors duration-300 overflow-hidden">
      {/* Animated Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base Background */}
        <div className="absolute inset-0 bg-slate-50 transition-colors duration-300" />
        
        {/* Ambient Gradient Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/30 rounded-full mix-blend-multiply blur-[80px] opacity-70 animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-400/30 rounded-full mix-blend-multiply blur-[80px] opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-400/30 rounded-full mix-blend-multiply blur-[100px] opacity-70 animate-blob animation-delay-4000" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        
        <main>
          <div id="about">
              <Hero />
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