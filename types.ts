export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  details?: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  languages: Language[];
}