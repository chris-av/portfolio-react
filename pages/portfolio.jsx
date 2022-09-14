import React from 'react';
import styled from 'styled-components';
import Card from '@/components/Card';
import LayoutPadding from '@/styles/LayoutPadding';

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
      { portfolio.map((portf, i) => (
          <animated.div style={styles[i]} key={i}>
            <Card
              org={portf.organization}
              jobtitle={portf.jobtitle}
              daterange={portf.range}
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

