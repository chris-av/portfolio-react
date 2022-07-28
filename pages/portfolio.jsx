import React from 'react';
import Card from '@/components/Card';

// import { Spring } from 'react-spring';
import { useSpring, animated } from 'react-spring';
import { portfolio } from '@/data/portfolio.data';

const Portfolio = () => {
  const duration = 2300;

  const styles = portfolio.map((p, i) => useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: p.delay,
    config: { duration: duration },
  }));

  console.log(styles);

  return (
    <div className="portfolio">
      { portfolio.map((portf, i) => (
          <animated.div style={styles[i]}>
            <Card
              org={portf.organization}
              jobtitle={portf.jobtitle}
              daterange={portf.range}
              description={portf.description}
              key={i}
            />
          </animated.div>
        )) }
    </div>
  )
}


export default Portfolio;

