import React, { useEffect, useRef } from 'react';
import { PORTFOLIO_DATA, SOCIAL_LINKS } from '../constants';
import { ArrowDown, MapPin } from 'lucide-react';
import ThreeBackground from './ThreeBackground';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade in and slide up for text elements
      gsap.from(elementsRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });

      // Bounce animation for the scroll arrow
      gsap.to(".scroll-arrow", {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  // Reset refs on render to avoid duplication
  elementsRef.current = [];

  return (
    <section ref={heroRef} className="min-h-screen flex flex-col justify-center items-center relative pt-20 px-4 text-center overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />

      <div className="space-y-6 max-w-4xl z-10 relative">
        <div ref={addToRefs} className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4 border border-accent/20 backdrop-blur-md shadow-sm">
          Available for Hire
        </div>
        
        <h1 ref={addToRefs} className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight drop-shadow-sm">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">{PORTFOLIO_DATA.name}</span>
        </h1>
        
        <h2 ref={addToRefs} className="text-2xl md:text-3xl text-slate-700 font-medium drop-shadow-sm">
          {PORTFOLIO_DATA.title}
        </h2>

        <div ref={addToRefs} className="flex items-center justify-center text-slate-600 gap-2 text-lg drop-shadow-sm">
          <MapPin className="w-5 h-5" />
          <span>{PORTFOLIO_DATA.contact.location}</span>
        </div>

        <div ref={addToRefs} className="mt-8">
          <p className="max-w-2xl mx-auto text-slate-800 text-lg leading-relaxed">
            {PORTFOLIO_DATA.summary}
          </p>
        </div>

        <div ref={addToRefs} className="flex flex-wrap gap-4 justify-center mt-8">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm text-slate-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-slate-200 group"
              aria-label={link.label}
            >
              <div className="text-slate-600 group-hover:text-accent transition-colors">
                {link.icon}
              </div>
              <span className="font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-arrow opacity-80">
        <a href="#experience" className="text-slate-400 hover:text-accent transition-colors">
          <ArrowDown className="w-8 h-8 drop-shadow-sm" />
        </a>
      </div>
    </section>
  );
};

export default Hero;