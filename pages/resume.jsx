import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import LayoutPadding from '@/styles/LayoutPadding';
import useIsVisible from '@/hooks/useIsVisible';

import { resume } from '@/data/resume.data';

const Resume = () => {

  const testRef1 = useRef();
  const testRef2 = useRef();
  const testRef3 = useRef();


  const testRefIsVisible1 = useIsVisible(testRef1);
  const testRefIsVisible2 = useIsVisible(testRef2);
  const testRefIsVisible3 = useIsVisible(testRef3);

  const refs = [ testRef1, testRef2, testRef3 ];
  const visibles = [ testRefIsVisible1, testRefIsVisible2, testRefIsVisible3 ];

  return (
    <Container>

      <h1 className="work-history">Work History</h1>

      <div className="timeline">

        { resume.jobs.map((j, i) => (
          <TimeLineSection 
            key={j.id}
            organization={j.organization}
            jobtitle={j.jobtitle} 
            range={j.range} 
            description={j.description} 
            myref={refs[i]}
            isVisible={visibles[i]}
            i={i}
          />
        )) }
    
      </div>
    </Container>
  )
}


const TimeLineSection = ({ organization, jobtitle, range, description, myref, isVisible, i }) => {

  const animate = {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    duration: 2000,
  }

  return (
    <div className="timeline-section" key={id}>
      <div className="time-range">{ range }</div>
      <div className="line"></div>
      <animated.div className="job" style={useSpring({ ...animate, delay: 300*i })}>
        <h2 ref={myref}>{jobtitle}</h2>
        <h3>{organization}</h3>
        <ul>
          { description.map((des, i) => <li key={i}>{ des }</li>) }
        </ul>
      </animated.div>
    </div>
  );
}



const Container = styled.div`

  .work-history {
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    margin: 4rem 0;
  }

  .timeline {
    width: 100%;
  }

  .timeline-section {
    display: flex;
    flex-direction: row;
    min-height: 80vh;
  }

  .time-range {
    font-size: 1rem;
    font-weight: bold;
    font-style: italic;
    text-align: right;
    max-width: 250px;
    min-width: 20%;
    padding: 5px;
  }

  .job {
    h2, h3 { margin: 0; padding: 0; }

    h2 { font-size: 1.6rem; margin-bottom: 10px; }
    h3 { font-size: 1.2rem; }
    ul li {
      font-size: 1rem;
      margin: 10px 0;
    }
    margin-bottom: 100px;
  }

  .line {
    margin: 0 15px;
    width: 1px;
    background-color: black;
  }


  @media (max-width: 900px) {
    .work-history {
      font-size: 2rem;
    }
    .timeline {
      padding: 10px;
    }
    .time-range {
      font-size: 0.8rem;
    }
    .job {
      h2 { font-size: 1.2rem; }
      h3 { font-size: 0.9rem; }
      ul li { font-size: 0.8rem; }
    }
  }

`;


export default Resume;
