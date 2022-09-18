import React from 'react';

export const portfolio = [
  {
    organization: "South Coast College",
    active: true,
    jobtitle: "Independent Contractor - Developer",
    description: () => (
      <div>
        <p>Converted an out-of-commission C# application into a full stack Single Page App written in Javascript (React).</p>
        <p>Worked closely with the college admninistrators to understand the business logic and reimplement using React for frontend and Node/Express + Postgres.</p>
        <p>Coordinated with students and teachers to incorporate feedback and implement new features.</p>
      </div>
    )
  },
  {
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
    delay: 1000
  },
  {
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
    delay: 1200
  },
  {
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
