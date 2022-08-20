import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import LayoutPadding from '@/styles/LayoutPadding';

import { resume } from '@/data/resume.data';

const Resume = () => {
  
  return (
    <LayoutPadding>
      <Container>
        <div className="timeline">

          { resume.jobs.map(j => (
            <TimeLineSection 
              id={j.id} 
              organization={j.organization}
              jobtitle={j.jobtitle} 
              range={j.range} 
              description={j.description} 
            />
          )) }
      
        </div>
      </Container>
    </LayoutPadding>
  )
}


const TimeLineSection = ({ id, organization, jobtitle, range, description }) => {
  return (
    <div className="timeline-section" key={id}>
      <div className="time-range">{ range }</div>
      <div className="line"></div>
      <div className="job">
        <h1>{jobtitle}</h1>
        <h2>{organization}</h2>
        <ul>
          { description.map((des, i) => <li key={i}>{ des }</li>) }
        </ul>
      </div>
    </div>
  );
}



const Container = styled.div`

  .timeline {
    width: 100%;
  }

  .timeline-section {
    display: flex;
    flex-direction: row;
  }

  .time-range {
    font-size: 1rem;
    text-align: right;
    min-width: 250px;
    padding: 5px;
  }

  .job {
    h1 { font-size: 1.6rem; }
    h2 { font-size: 1.4rem; }
    ul li { font-size: 1rem; }
    margin-bottom: 100px;
  }

  .line {
    margin: 0 15px;
    width: 1px;
    background-color: black;
  }

`;


export default Resume;
