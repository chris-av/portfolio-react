import React from 'react';
import { Spring } from 'react-spring';

import Card from '@/components/Card'

import { resume } from '@/data/resume.data';

const Resume = () => {
  
  const duration = 2300;
  
  return (
    <div className="resume">

      {
        resume.jobs.map((job, i) => (
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: job.delay, duration: duration }}
            key={i}
          >
            {props => (
              <Card 
                org={job.organization}
                jobtitle={job.jobtitle}
                daterange={job.range}
                description={job.description}
                styles={props}
              />
            )}
          </Spring>
        ))
      }

    </div>
  )
}

export default Resume;
