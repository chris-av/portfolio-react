import React from 'react';

export const portfolio = [
  {
    id: "b07e8c1e14fbdbc5e3be",
    organization: "Eminent Translations",
    active: true,
    jobtitle: "Independent Contractor - Developer",
    description: () => (
      <div>
        <p>Modernized backend, using Sanity as a headless</p>
        <p>Worked closely with the college admninistrators to understand the business logic and reimplement using React for frontend and Node/Express + Postgres.</p>
        <p>Coordinated with students and teachers to incorporate feedback and implement new features.</p>
      </div>
    ),
    delay: 0,
    tags: ["NodeJS", "Express", "React", "Azure", "C#", "Webhooks", "REST"]
  },
  {
    id: "49b9a8b5393675c47c69",
    organization: "South Coast College",
    active: true,
    jobtitle: "Independent Contractor - Developer",
    description: () => (
      <div>
        <p>Converted an out-of-commission C# application into a full stack Single Page App written in Javascript (React).</p>
        <p>Worked closely with the college admninistrators to understand the business logic and reimplement using React for frontend and Node/Express + Postgres.</p>
        <p>Coordinated with students and teachers to incorporate feedback and implement new features.</p>
      </div>
    ),
    delay: 0,
    tags: ["NodeJS", "Express", "React", "Azure", "C#", "Webhooks", "REST"]
  },
  {
    id: "e34b074a4f4e0035be2b",
    organization: "Wise Attend",
    active: true,
    jobtitle: "Front and Backend",
    description: () => (
      <div>
        <p>
          Landing page for <a target="_blank" href="https://wiseattend.com" rel="noopener noreferrer">an online proctoring solution geared towards educators</a>. 
        </p>
        <p>Started as a front end project but ultimately became a full stack, React-Mongo project to fulfill client requirements for an interactive experience and mailing solution.</p>
      </div>
    ),
    delay: 1000,
    tags: ["React", "NextJS", "MongoDB", "Sanity.io", "Webhooks", "SSR"]
  },
  {
    id: "aa40d71a2934be5e0444",
    organization: "Lands End",
    active: true,
    jobtitle: "Web Developer",
    description: () => (
      <div>
        <p>Landing page for real estate firm specializing in the acquisition of industrial estate and adding value for prospective clients.</p>
      </div>
    ),
    delay: 1000,
    tags: ["Webflow", "SEO", "CMS"]
  },
  {
    id: "32e533eba2a7dce65caf",
    organization: "MomentOm",
    active: false,
    jobtitle: "Frontend",
    description: () => (
      <div>
        <p>
          Landing page for a <a target="_blank" href="http://momentomapp.com/" rel="noopener noreferrer">wellness app</a>
        </p>
        <p>Scaffolded an integrated ReactJS and Firebase project structure for the app itself and offered technical support and advice for the team that took the project on full time.</p>
      </div>
    ),
    delay: 1200,
    tags: ["React", "Google Firebase", "Express", "NodeJS"]
  },
  {
    id: "2678aa159f464ce6de5b",
    organization: "Together App",
    active: false,
    jobtitle: "Frontend",
    description: () => (
      <div>
        <p>Landing page for <a target="_blank" href="http://togethersafelyapp.com/" rel="noopener noreferrer">a social network app.</a></p>
      </div>
    ),
    delay: 1400
  }
]
