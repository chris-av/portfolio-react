import React from 'react';
import Card from '@/components/Card';

import { useSpring, animated } from '@react-spring/web';
import { portfolio } from '@/data/portfolio.data';

export default function Portfolio() {
  const duration = 2300;

  const styles = portfolio.map(p => useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: p.delay,
    config: { duration: duration },
  }));

  return (
    <div className="py-[2rem]">
      { portfolio.filter(p => p.active === true).map((portf, i) => (
          <animated.div style={styles[i]} key={i}>
            <Card
              org={portf.organization}
              daterange={""}
              jobtitle={portf.jobtitle}
              description={portf.description}
              styles={{}}
            />
          </animated.div>
        )) }
    </div>
  )
}


