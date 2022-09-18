import React from 'react';
import styled from 'styled-components';
import Card from '@/components/Card';

import { useSpring, animated } from 'react-spring';
import { portfolio } from '@/data/portfolio.data';

const Portfolio = () => {
  const duration = 2300;

  const styles = portfolio.map(p => useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: p.delay,
    config: { duration: duration },
  }));

  return (
    <Container>
      { portfolio.filter(p => p.active === true).map((portf, i) => (
          <animated.div style={styles[i]} key={i}>
            <Card
              org={portf.organization}
              jobtitle={portf.jobtitle}
              description={portf.description}
            />
          </animated.div>
        )) }
    </Container>
  )
}


const Container = styled.div`
  padding: 2rem 0;
`;

export default Portfolio;

