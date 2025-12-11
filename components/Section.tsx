import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 md:px-8 max-w-5xl mx-auto scroll-mt-20 ${className}`}>
      <h2 className="text-3xl font-bold mb-8 md:mb-12 text-slate-800 dark:text-slate-100 border-b-4 border-accent inline-block pb-1">
        {title}
      </h2>
      <div className="animate-fade-in-up">
        {children}
      </div>
    </section>
  );
};

export default Section;