import React from 'react';
import { useSpring, animated } from 'react-spring';

import Card from '@/components/Card'
import LayoutPadding from '@/styles/LayoutPadding';

import { resume } from '@/data/resume.data';

const Resume = () => {
  
  const duration = 2300;

  const styles = resume.jobs.map((r, i) => useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: r.delay,
    config: { duration: duration }
  }));
  
  return (
    <LayoutPadding>
      {
        resume.jobs.map((job, i) => (
          <animated.div style={styles[i]} key={i}>
            <Card 
              org={job.organization}
              jobtitle={job.jobtitle}
              daterange={job.range}
              description={job.description}
            />
          </animated.div>
        ))
      }

    </LayoutPadding>
  )
}

export default Resume;
