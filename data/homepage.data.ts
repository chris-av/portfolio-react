type FocusArea = {
  id: string;
  title: string;
  description: string;
  focus: string[];
};

export type Experience = {
  id: string;
  domain: string;
  organization: string;
  jobtitle: string;
  range: string;
  summary: string;
  // Matches a Job's `anchor` in resume.data.ts, linked as /resume#<resumeAnchor>.
  resumeAnchor: string;
};

type Discipline = {
  id: string;
  number: string;
  title: string;
  focusHeading?: string;
  focusAreas: FocusArea[];
  experience: Experience[];
};

export const pitch = {
  role: "Software Engineer · Data Systems & Integrations",
  headline: "I build software that connects systems, improves workflows, and makes complex data useful.",
  body: "My work spans enterprise applications, data pipelines, API integrations, and production-critical tools—often in close collaboration with the people who depend on them.",
};

const systemsFocusAreas: FocusArea[] = [
  {
    id: "enterprise-applications",
    title: "Enterprise Applications & Integrations",
    description: "I extend existing platforms and build custom applications that fit real operational needs. From API-backed interfaces and business-rule validations to manufacturing execution systems, I focus on making complex software work reliably within the systems organizations already use.",
    focus: ["Enterprise software", "REST APIs", "C#", "TypeScript", "Angular", "SQL"],
  },
  {
    id: "data-engineering",
    title: "Data Engineering & System Migrations",
    description: "I design and maintain workflows that move, transform, and validate data across systems. My experience includes orchestrated analytics pipelines, cloud data warehouses, and enterprise migrations involving tens of thousands of operational records. I prioritize data quality, traceability, and repeatable processes.",
    focus: ["Python", "SQL", "dbt", "Airflow", "BigQuery", "Snowflake", "ETL/ELT"],
  },
  {
    id: "automation",
    title: "Automation & Operational Tooling",
    description: "I turn repetitive, error-prone work into maintainable software. That includes scheduled data collection, reporting, integrations with external services, and tools that help teams understand and act on their data. I care about observability, clear failure modes, and solutions that remain useful after deployment.",
    focus: ["Python", "APIs", "Cloud functions", "Workflow automation", "Monitoring"],
  },
];

const systemsExperience: Experience[] = [
  {
    id: "manufacturo",
    domain: "Manufacturing Systems",
    organization: "Manufacturo",
    jobtitle: "Solutions Consultant",
    range: "2025–Present",
    summary: "Design and deploy customer-specific solutions for manufacturing execution systems used by aerospace and defense manufacturers. Work directly with stakeholders to translate production requirements into software supporting traceability, validations, reporting, and data migrations. Help transition tens of thousands of work orders, inventory records, and quality records between enterprise systems while validating data for production continuity.",
    resumeAnchor: "manufacturo",
  },
  {
    id: "dnc",
    domain: "Campaign Data Infrastructure",
    organization: "Democratic National Committee",
    jobtitle: "Analytics Engineer",
    range: "2024",
    summary: "Built and maintained data workflows with dbt, Airflow, and BigQuery in a fast-moving campaign environment. Supported engineering and analytics teams across battleground states, investigated data quality issues, and contributed to election-night reporting through automated collection of precinct-level results.",
    resumeAnchor: "dnc",
  },
  {
    id: "la-promise-fund",
    domain: "Education Data Systems",
    organization: "LA Promise Fund",
    jobtitle: "Data & Analytics Manager",
    range: "2020–2024",
    summary: "Built data ingestion and reporting workflows for large-scale academic datasets, integrated school information systems with external services, and worked with education stakeholders to deliver operational reporting and data products.",
    resumeAnchor: "la-promise-fund",
  },
];

const webFocusAreas: FocusArea[] = [
  {
    id: "web-applications",
    title: "Building Applications People Actually Use",
    description: "I build full-stack applications that make complex information and workflows accessible to the people who use them. My web engineering work includes interactive interfaces, API-backed features, content platforms, and business applications. I focus on performance, maintainability, and designing software around real user needs—not just a particular frontend framework.",
    focus: ["TypeScript", "React", "Next.js", "Angular", "Node.js", "REST APIs", "SQL"],
  },
];

const webExperience: Experience[] = [
  {
    id: "eminent-translations",
    domain: "Content Platform Modernization",
    organization: "Eminent Translations",
    jobtitle: "Full Stack Engineer",
    range: "2022–2024",
    summary: "Modernized a content-heavy web application using Next.js and a headless CMS, moving expensive client-side work to the server and reducing bundle size to improve load times by 80%. Built a consistent design system and an interactive reading experience while making content management more flexible for the client.",
    resumeAnchor: "eminent-translations",
  },
  {
    id: "ledafilms",
    domain: "Business Operations Application",
    organization: "Ledafilms",
    jobtitle: "Full Stack Engineer",
    range: "2022–2023",
    summary: "Architected a secure application for managing licenses, contracts, and other critical business records. Designed data-entry workflows and interfaces, and introduced a frontend queue for triggering computationally expensive cloud operations without blocking the user experience.",
    resumeAnchor: "ledafilms",
  },
  {
    id: "manufacturo-interfaces",
    domain: "Manufacturing Interfaces",
    organization: "Manufacturo",
    jobtitle: "Solutions Consultant",
    range: "2025–Present",
    summary: "Build custom interfaces and operational tooling for manufacturing execution systems, connecting frontend workflows with APIs, services, and production data. Translate customer requirements into applications supporting manufacturing traceability, validations, and reporting.",
    resumeAnchor: "manufacturo",
  },
];

export const disciplines: Discipline[] = [
  {
    id: "systems-data",
    number: "01",
    title: "Systems & Data Engineering",
    focusHeading: "What I Work On",
    focusAreas: systemsFocusAreas,
    experience: systemsExperience,
  },
  {
    id: "web-application",
    number: "02",
    title: "Web & Application Engineering",
    focusAreas: webFocusAreas,
    experience: webExperience,
  },
];
