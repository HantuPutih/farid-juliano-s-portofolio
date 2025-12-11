import { PortfolioData } from './types';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Farid Juliano",
  title: "Front End Web Developer",
  summary: "Front-End Web Developer with 3+ years of experience building and maintaining production web applications in e-commerce, online travel, and B2B environments. Strong in React.js, Next.js, Vue.js, and Nuxt.js with a focus on performance, responsiveness, and clean, maintainable code. Comfortably working closely with product, design, and backend teams to translate requirements into user-friendly interfaces and iterate quickly based on feedback and data.",
  contact: {
    email: "faridjuliano.fj@gmail.com",
    phone: "+62 859-4689-0069",
    location: "Serdang, Malaysia / Jakarta, Indonesia",
    linkedin: "https://linkedin.com/in/farid-juliano/",
    github: "https://github.com/HantuPutih"
  },
  experience: [
    {
      id: 1,
      company: "PT. MNC Aladin Indonesia",
      role: "Front End Engineer",
      period: "04/2022 – 08/2024",
      description: [
        "Maintained and enhanced AladinMall.id (e-commerce) and misteraladin.com (online travel) web platforms using React.js, Next.js, Vue.js, and Nuxt.js.",
        "Implemented new features for campaigns, promotions, and content pages, supporting marketing and business teams in launching initiatives faster.",
        "Refactored legacy components into reusable modules, improving readability and reducing duplication across multiple pages.",
        "Introduced reusable components (cards, filters, banners), reducing development time for new pages.",
        "Integrated REST and GraphQL APIs, handling complex data states, filtering, and pagination on the client side.",
        "Collaborated in an agile team (daily stand-ups, sprint planning, retrospectives) and participated in code reviews and debugging.",
        "Worked with designers and product owners to refine UI/UX, fix visual issues, and ensure responsive layouts across devices."
      ]
    },
    {
      id: 2,
      company: "Rakata.id",
      role: "Part Time Front End Engineer",
      period: "12/2023 – 04/2024",
      description: [
        "Maintained and improved the Rakata.id online e-reader platform with a focus on mobile web users.",
        "Optimized page layouts, typography, and navigation to improve readability and overall user experience.",
        "Fixed UI bugs and inconsistencies, ensuring new content types and features remain visually consistent.",
        "Tech stack: TypeScript, Next.js, React.js, SCSS, REST API."
      ]
    },
    {
      id: 3,
      company: "PT. Electronic Data Interchange Indonesia",
      role: "Front End Engineer",
      period: "10/2021 – 03/2022",
      description: [
        "Developed and maintained front-end components for an OSS web application using Vue.js and Nuxt.js.",
        "Built reusable UI components and layout patterns with SCSS and Bootstrap to keep styling consistent across the app.",
        "Followed front-end best practices for project structure, component organization, and code style to keep the codebase maintainable and scalable.",
        "Collaborated with QA and users to test features, identify UI issues, and refine behavior based on feedback."
      ]
    },
    {
      id: 4,
      company: "Majapahit Technology",
      role: "Front End Engineer",
      period: "04/2021 – 09/2022",
      description: [
        "Implemented front-end features for multiple web applications using Vue.js and Nuxt.js.",
        "Created reusable components and page templates to accelerate development of new sections.",
        "Ensured responsive and cross-browser compatible UIs using SCSS and Bootstrap."
      ]
    }
  ],
  education: [
    {
      id: 1,
      institution: "Universiti Putra Malaysia",
      degree: "Master of Software Engineering (MSE)",
      period: "2024 - Expected Oct 2026",
      details: [
        "Coursework in software engineering, modules include Software Measurement, Requirements Engineering, Software Development Methodology, Software Testing, and Project Management for Software Construction.",
        "Gaining practical experience in defining and measuring software quality, writing and evaluating SRS documents, designing test strategies, and managing software projects using structured methods and Agile practices."
      ]
    },
    {
      id: 2,
      institution: "Hacktiv8 Bootcamp",
      degree: "Full Stack JavaScript Developer Immersive Program",
      period: "2021 – 2022",
      details: [
        "Intensive full-time program focused on modern JavaScript, covering Node.js, Express, PostgreSQL, React, and REST APIs.",
        "Built several full-stack projects in teams using Git, Agile practices, code reviews, and deployment workflows."
      ]
    },
    {
      id: 3,
      institution: "Universitas Indonesia",
      degree: "Bachelor’s Degree in German Studies (CGPA: 3.25)",
      period: "2016 – 2020",
      details: [
        "Focus on German language, literature, and culture with emphasis on analytical thinking and structured writing."
      ]
    }
  ],
  skills: [
    {
      category: "Front-End",
      items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS/Sass"]
    },
    {
      category: "Frameworks / Libraries",
      items: ["React.js", "Next.js", "Vue.js", "Nuxt.js"]
    },
    {
      category: "Styling / UI",
      items: ["Tailwind CSS", "Bootstrap", "Responsive Web Design"]
    },
    {
      category: "Data & APIs",
      items: ["REST API", "GraphQL"]
    },
    {
      category: "Tools & Practices",
      items: ["Git", "npm/yarn", "Webpack", "Agile (Scrum/Kanban)", "Code Review"]
    },
    {
      category: "Additional",
      items: ["PostgreSQL (basic)", "React Native (basic)", "Swift (beginner)"]
    }
  ],
  languages: [
    { language: "Indonesia", proficiency: "Native" },
    { language: "English", proficiency: "IELTS Academic band 7.0" },
    { language: "German", proficiency: "B1" },
    { language: "Japanese", proficiency: "Beginner" }
  ]
};

export const SOCIAL_LINKS = [
  { icon: <Mail className="w-5 h-5" />, href: `mailto:${PORTFOLIO_DATA.contact.email}`, label: "Email" },
  { icon: <Linkedin className="w-5 h-5" />, href: PORTFOLIO_DATA.contact.linkedin, label: "LinkedIn" },
  { icon: <Github className="w-5 h-5" />, href: PORTFOLIO_DATA.contact.github, label: "GitHub" },
  { icon: <Phone className="w-5 h-5" />, href: `tel:${PORTFOLIO_DATA.contact.phone.replace(/[^0-9+]/g, '')}`, label: "Call" },
];