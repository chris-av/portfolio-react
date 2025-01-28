type Job = {
  id: string;
  organization: string;
  jobtitle: string;
  range?: string;
  description: string[];
  tags?: string[]
};

type Resume = {
  jobs: Job[];
  freelance: Job[]
};

export const freelance: Job[] = [
  {
    id: "b07e8c1e14fbdbc5e3be",
    organization: "Eminent Translations",
    jobtitle: "Full Stack Engineer",
    range: "November 2022 - May 2024",
    description: [
      "Modernized backend, using Sanity as a headless",
      "Worked closely with the college admninistrators to understand the business logic and reimplement using React for frontend and Node/Express + Postgres.",
      "Coordinated with students and teachers to incorporate feedback and implement new features.",
    ],
    tags: ["NodeJS", "Express", "React", "Azure", "C#", "Webhooks", "REST"]
  },
  {
    id: "49b9a8b5393675c47c69",
    organization: "South Coast College",
    range: "January 2022 - March 2022",
    jobtitle: "Full Stack Engineer",
    description: [
      "Converted an out-of-commission C# application into a full stack Single Page App written in Javascript (React).",
      "Worked closely with the college admninistrators to understand the business logic and reimplement using React for frontend and Node/Express + Postgres.",
      "Coordinated with students and teachers to incorporate feedback and implement new features.",
    ],
    tags: ["NodeJS", "Express", "React", "Azure", "C#", "Webhooks", "REST"]
  },
  {
    id: "e34b074a4f4e0035be2b",
    organization: "Wise Attend",
    range: "August 2020 - February 2021",
    jobtitle: "Frontend Engineer",
    description: [
      "Landing page for an online proctoring solution geared towards educators.",
      "Started as a front end project but ultimately became a full stack, React - Mongo project to fulfill client requirements for an interrange experience and mailing solution.",
    ],
    tags: ["React", "NextJS", "MongoDB", "Sanity.io", "Webhooks", "SSR"]
  },
  {
    id: "32e533eba2a7dce65caf",
    organization: "Lands End",
    range: "",
    jobtitle: "Web Developer",
    description: [
      "Landing page for real estate firm specializing in the acquisition of industrial estate and adding value for prospective clients."
    ],
    tags: ["Webflow", "SEO", "CMS"]
  },
  {
    id: "cf8d31eebf514038289a;",
    organization: "MomentOm",
    range: "",
    jobtitle: "Frontend Engineer",
    description: [
      "Landing page for a wellness app",
      "Scaffolded an integrated ReactJS and Firebase project structure for the app itself and offered technical support and advice for the team that took the project on full time.",
    ],
    tags: ["React", "Google Firebase", "Express", "NodeJS"]
  },
  {
    id: "2678aa159f464ce6de5b",
    organization: "Together App",
    range: "",
    jobtitle: "Frontend Engineer",
    description: [
      "Landing page for a social network app."
    ],
    tags: ["React", "TailwindCSS"],
  }
];

export const jobs: Job[] = [
  {
    id: "630d165be8cd61ea3cd792513c32ec9c",
    organization: 'Democratic National Committee',
    jobtitle: 'Analytics Engineer',
    range: 'May 2024 - November 2024',
    description: [
      "Led direct engineering support for all battleground states, supporting over 15 data directors and over 40 data engineers across the campaign.",
      "Created and orchestrated data pipelines in dbt and Airflow for identifying leads for prospective volunteers and canvassing opportunities.",
      "Maintained the campaign’s Google Cloud Functions to implement feature requests, improving reliability and consistency.",
      "Leveraged the Jira/Slack APIs to automate task delegation, facilitating the rapid onboarding of volunteers in the final stretch of the campaign.",
      "Scraped county websites to obtain real time, precinct-level vote counts to be ingested by our data pipelines during election night reporting.",
    ],
    tags: ["Python", "dbt", "Airflow", "GCP", "Bash", "Superblocks", "DNC Portal", "BigQuery", "ETL", "data pipelines", "web scraping"],
  },
  {
    id: "38993e84-2048-11ed861d-0242ac120002",
    organization: 'LA Promise Fund',
    jobtitle: 'Data and Analytics Manager',
    range: 'March 2020 - Present',
    description: [
      "Designed and implemented an efficient data pipeline for ingesting raw academic data from the Los Angeles Unified School District (LAUSD) spanning millions of records.",
      "Delivered mission-critical academic reports and other data products for the National School Improvement program, providing insight into student academic performance for several principals across the Slate-Z/South Los Angeles region.",
      "Successfully negotiated the renewal of the organization’s data memorandum with LAUSD by outlining a clear mission and delivery timetable of data products to stakeholders both in the school district and across our departments.",
      "Extended features in our Student Information Systems (PowerSchool) by writing custom plugins in SQL, NodeJS, and Python, automating data delivery to key vendors supporting our schools.",
    ],
    tags: ["Python", "Node.js", "R", "XML", "Data Cleaning", "ETL", "Salesforce", "Tableau"],
  },
  {
    id: "38994532-2048-11ed861d-0242ac120002",
    organization: 'Alliance College-Ready Public Schools',
    jobtitle: 'Operations Analyst',
    range: 'Sep 2017 - Aug 2019',
    description: [
      "Automated workflows and tooling to ingest data from all 30 schools in our network, increasing the efficiency of our state reporting cycle.",
      "Oversaw the improvement of our network's overall P&L by providing guidance to schools on adminstering a more effective breakfast and lunch program",
      "Conducted analyses in R and Python to perform data matching across different vendor files, increasing the networks' overall reimbursement rate from federal programs.",
      "Led trainings in both the home office and at school sites in the importance of a data-oriented strategy.",
    ],
    tags: ["Python", "R", "Google Drive API", "Data Cleaning", "ETL", "Tableau"],
  },
];

export const resume: Resume = { jobs, freelance, }
