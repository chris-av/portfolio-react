type FocusArea = {
  id: string;
  title: string;
  description: string;
  focus: string[];
};

type Experience = {
  id: string;
  domain: string;
  organization: string;
  jobtitle: string;
  range: string;
  summary: string;
};

export const pitch = {
  role: "Software Engineer · Data Systems & Integrations",
  headline: "I build software that connects systems, improves workflows, and makes complex data useful.",
  body: "My work spans enterprise applications, data pipelines, API integrations, and production-critical tools—often in close collaboration with the people who depend on them.",
};

export const focusAreas: FocusArea[] = [
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

export const selectedExperience: Experience[] = [
  {
    id: "manufacturo",
    domain: "Manufacturing Systems",
    organization: "Manufacturo",
    jobtitle: "Solutions Consultant",
    range: "2025–Present",
    summary: "Design and deploy customer-specific solutions for manufacturing execution systems used by aerospace and defense manufacturers. Work directly with stakeholders to translate production requirements into software supporting traceability, validations, reporting, and data migrations. Help transition tens of thousands of work orders, inventory records, and quality records between enterprise systems while validating data for production continuity.",
  },
  {
    id: "dnc",
    domain: "Campaign Data Infrastructure",
    organization: "Democratic National Committee",
    jobtitle: "Analytics Engineer",
    range: "2024",
    summary: "Built and maintained data workflows with dbt, Airflow, and BigQuery in a fast-moving campaign environment. Supported engineering and analytics teams across battleground states, investigated data quality issues, and contributed to election-night reporting through automated collection of precinct-level results.",
  },
  {
    id: "la-promise-fund",
    domain: "Education Data Systems",
    organization: "LA Promise Fund",
    jobtitle: "Data & Analytics Manager",
    range: "2020–2024",
    summary: "Built data ingestion and reporting workflows for large-scale academic datasets, integrated school information systems with external services, and worked with education stakeholders to deliver operational reporting and data products.",
  },
];
