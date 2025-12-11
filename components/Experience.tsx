import React from 'react';
import Section from './Section';
import { PORTFOLIO_DATA } from '../constants';
import { Calendar, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {PORTFOLIO_DATA.experience.map((job, index) => (
          <div key={job.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-accent">
              <Briefcase className="w-5 h-5" />
            </div>
            
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h3 className="font-bold text-lg text-slate-900">{job.company}</h3>
                <span className="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded bg-accent/10 text-accent">
                   {job.role}
                </span>
              </div>
              <div className="flex items-center text-slate-500 text-sm mb-4">
                <Calendar className="w-4 h-4 mr-1.5" />
                {job.period}
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 text-sm">
                {job.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;