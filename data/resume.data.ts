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
      "Improved load times by 80% by using NextJS, moving client-side computations off of the client into the server and lowering bundle size.",
      "Modernized backend, using Sanity as a headless CMS solution, empowering the client to define their own schemas.",
      "Implemented a cohesive design system, reducing the amount of stylesheet code by 23%.",
      "Created an interactive, reader-like experience for users to navigate chapters and volumes of content.",
    ],
    tags: ["NextJS", "TypeScript", "server components", "Sanity.io", "Vercel", "caching",],
  },
  {
    id: "49b9a8b5393675c47c69",
    organization: "South Coast College",
    range: "January 2022 - March 2022",
    jobtitle: "Full Stack Engineer",
    description: [
      "Authored an interactive leaderboard for real time words per minute rankings for the college’s stenography program.",
      "Performed business analysis with college administrators, students and other stakeholders.",
      "Implemented a ReactJS frontend and NodeJS backend architecture for simplicity, composability, and scalability.",
      "Deployed application via Azure and designed a CI/CD pipeline to decrease deployment times and catch errors in development.",
    ],
    tags: ["ReactJS", "NodeJS", "ExpressJS", "Azure Cloud Services", "PostgreSQL", "CI/CD", "GitHub", "Git", "GitHub Actions", "Wireframes", "REST API",],
  },
  {
    id: "e34b074a4f4e0035be2b",
    organization: "Wise Attend",
    range: "August 2020 - February 2021",
    jobtitle: "Frontend Engineer",
    description: [
      "Created promotional website for ed-tech startup using NextJS to leverage caching and server-side rendering, improving SEO ranking and user experience.",
      "Architected backend service to ingest prospect emails via a custom subscription service, ensuring a successful marketing push in the early state of the startup.",
      "Implemented headless CMS solution for managing the site’s blog, increasing the efficiency of the editing process and lower time to publish by 40%.",
    ],
    tags: ["React", "NextJS", "ExpressJS", "TailwindCSS", "REST", "SEO", "Headless CMS", "Sanity.io", ], },
  {
    id: "32e533eba2a7dce65caf",
    organization: "Lands End",
    range: "",
    jobtitle: "Web Developer",
    description: [
      "Landing page for real estate firm specializing in the acquisition of industrial estate.",
      "Increased Search Engine Optimization rankings, leading to increased leads and prospective clientele.",
    ],
    tags: ["Webflow", "search engine optimization", "content management system",],
  },
  {
    id: "cf8d31eebf514038289a;",
    organization: "MomentOm",
    range: "",
    jobtitle: "Frontend Engineer",
    description: [
      "Provided direct engineering support in the initial phase of the project, scaffolding the integration between the ReactJS frontend and real time communication with Google Firebase",
      "Offered advise on consultation on website design and the design system implementation.",
    ],
    tags: ["ReactJS", "Google Firebase", "Express", "NodeJS"]
  },
  {
    id: "2678aa159f464ce6de5b",
    organization: "Together App",
    range: "",
    jobtitle: "Frontend Engineer",
    description: [
      "Created a landing page for an entrepreneur who wanted to create a social media platform based upon wellness.",
      "Landing page architected with a simple React frontend with search engine optimization.",
      "Advised client on design system to meet their branding requirements."
    ],
    tags: ["ReactJS", "TailwindCSS"],
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
    tags: ["Python", "dbt", "SQL", "Airflow", "GCP", "Hex", "Bash", "shell", "Superblocks", "DNC Portal", "BigQuery", "ETL", "data pipelines", "data orchestration", "web scraping"],
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
    tags: ["Python", "SQL", "R", "sftp", "shell", "Bash", "NodeJS", "Google Drive API", "R", "XML", "data cleaning", "ETL", "Salesforce", "Tableau", "PowerSchool",],
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
    tags: ["Python", "R", "Google Drive API", "Data Cleaning", "ETL", "Tableau", "PowerSchool",],
  },
];

export const resume: Resume = { jobs, freelance, }
