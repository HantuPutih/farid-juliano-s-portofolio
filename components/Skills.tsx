import React from 'react';
import Section from './Section';
import { PORTFOLIO_DATA } from '../constants';
import { Code2, Layout, Database, Terminal, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Front-End')) return <Code2 className="w-5 h-5" />;
    if (category.includes('Frameworks')) return <Layout className="w-5 h-5" />;
    if (category.includes('Styling')) return <Layers className="w-5 h-5" />;
    if (category.includes('Data')) return <Database className="w-5 h-5" />;
    return <Terminal className="w-5 h-5" />;
  };

  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.skills.map((skillGroup, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-accent/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4 text-accent">
              {getIcon(skillGroup.category)}
              <h3 className="font-semibold text-lg text-slate-900">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-colors duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;