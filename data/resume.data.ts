type Job = {
  id: string;
  organization: string;
  jobtitle: string;
  range: string;
  description: string[];
};

type Resume = {
  jobs: Job[];
};

export const resume: Resume = {
  jobs: [
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
      ]
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
      ]
    },
    {
      id: "3899412c-2048-11ed861d-0242ac120002",
      organization: 'Freelance',
      jobtitle: 'Freelance Software Engineer',
      range: 'Nov 2019 - Present',
      description: [
        "Provide direct engineering support and consultations for tech founders, and engineers on approaches to building modern, scaleable web technologies.",
        "Give direct data engineering support for academics and researchers in adopting best practices for producing scaleable, reproducible code.",
        "Created customized configuration setups and scripts for professional software engineers to enhance their development environment experience.",
      ]
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
      ]
    },
  ]
}
