import React from 'react';

export const portfolio = [
  {
    organization: "Wise Attend",
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
    jobtitle: "Frontend",
    description: () => (
      <div>
        <p>Landing page for <a target="_blank" href="http://togethersafelyapp.com/" rel="noopener noreferrer">a social network app.</a></p>
      </div>
    ),
    delay: 1400
  }
]