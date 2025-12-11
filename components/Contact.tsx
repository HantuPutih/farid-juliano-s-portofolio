import React from 'react';
import Section from './Section';
import { SOCIAL_LINKS, PORTFOLIO_DATA } from '../constants';
import { Mail, ArrowUp } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-16 pb-8 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Let's Connect</h2>
        <p className="text-slate-600 mb-8 text-lg">
          I'm currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href={`mailto:${PORTFOLIO_DATA.contact.email}`}
          className="inline-flex items-center gap-2 bg-accent hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </a>

        <div className="flex justify-center gap-6 mt-12 mb-12">
          {SOCIAL_LINKS.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="text-slate-400 hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <div className="p-2 rounded-full hover:bg-slate-100 transition-colors">
                {link.icon}
              </div>
            </a>
          ))}
        </div>

        <div className="text-sm text-slate-500 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 hover:text-accent transition-colors"
          >
            Back to Top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;