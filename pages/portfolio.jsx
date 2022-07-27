import React from 'react';
import Card from '@/components/Card';

import { Spring } from 'react-spring';
import { portfolio } from '@/data/portfolio.data';

const Portfolio = () => {
  const duration = 2300;
  return (
    <div className="portfolio">

      { portfolio.map((portf, i) => (
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: portf.delay, duration: duration }}
          key={i}
        >
          {props => (
            <Card
              org={portf.organization}
              jobtitle={portf.jobtitle}
              daterange={portf.range}
              description={portf.description}
              styles={props}
              key={i}
            />
          )}
        </Spring>
      )) }
    </div>
  )
}

export default Portfolio;

