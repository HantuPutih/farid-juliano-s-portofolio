import React from 'react';
import Section from './Section';
import { PORTFOLIO_DATA } from '../constants';
import { GraduationCap, Globe } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education & Languages">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Education Column */}
        <div className="lg:col-span-2 space-y-8">
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-6 text-slate-800 dark:text-slate-100">
            <GraduationCap className="w-6 h-6 text-accent" />
            Academic Background
          </h3>
          
          <div className="space-y-8">
            {PORTFOLIO_DATA.education.map((edu, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-700">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-900"></div>
                <div className="mb-1">
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">{edu.institution}</h4>
                  <p className="text-accent font-medium">{edu.degree}</p>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-mono">{edu.period}</p>
                {edu.details && (
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 text-sm mt-2">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="leading-relaxed">{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Languages Column */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 sticky top-24">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-6 text-slate-800 dark:text-slate-100">
              <Globe className="w-6 h-6 text-accent" />
              Languages
            </h3>
            <div className="space-y-4">
              {PORTFOLIO_DATA.languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center border-b border-slate-100 dark:border-slate-700 pb-2 last:border-0 last:pb-0">
                  <span className="font-medium text-slate-700 dark:text-slate-200">{lang.language}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;