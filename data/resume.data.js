import React from 'react';

export const resume = {
  jobs: [
    {
      organization: 'LA Promise Fund',
      jobtitle: 'Data and Analytics Manager',
      range: '03/2020 - Present',
      description: () => (
        <div>
          Data Manager for the National School Improvement Program and the Career Pathways program, programmatically consumed large volumes of data using R/Python to derive insights into student performance and academic trends.
          Maintains School Information System (SIS), database management (SQL) and designed SIS APIs for custom applications, command line programs, and data access.
          Created workflows in Node and Python to leverage Google APIs to quickly clean and access organizational data.
        </div>
      ),
      delay: 1000
    },
    {
      organization: 'Independent Contractor',
      jobtitle: 'Web Developer',
      range: '11/2019 - Present',
      description: () => (
        <div>
          Created full stack sites for a few clients.
          Completed projects that fulfilled business requirements and exceeded client expectations for each project.
          Used ReactJS library to create dynamic, smooth SPAs and maintained code repository for client.
          Have created many projects for clients franging from simple landing pages, to full stack projects.
        </div>
      ),
      delay: 1200
    },
    {
      organization: 'Alliance College-Ready Public Schools',
      jobtitle: 'Operations Analyst',
      range: '09/2017 - 08/2019',
      description: () => (
        <div>
          Data analyst for the Operations Department.
          Tasked with creating a dashboard for department to inform strategic initiatives.
          Exceeded expectations by creating a dashboard using R-Shiny for a prototype then utilizing Tableau to visualize data to tell the story of complex, disparate data across different functional areas.
        </div>
      ),
      delay: 1600
    },
  ]
}