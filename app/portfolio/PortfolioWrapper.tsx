"use client";
import { useSpring, animated } from '@react-spring/web';
import { portfolio } from '@/data/portfolio.data';
import Card from '@/components/Card';

export default function ClientWrapper() {
  const duration = 10;
  const styles = portfolio.map(p => useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: p.delay,
    config: { duration: duration },
  }));
  return (
    <div>
      { portfolio.filter(p => p.active === true).map((portf, i) => (
          <animated.div style={styles[i]} key={i}>
            <Card
              org={portf.organization}
              daterange={""}
              jobtitle={portf.jobtitle}
              description={portf.description}
            />
          </animated.div>
        )) }
    </div> 
  );
}

