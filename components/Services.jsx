import React from 'react';
import styled from 'styled-components';

import AnimatedCard from './AnimatedCard';
import LayoutTwoPanel from '@/styles/LayoutTwoPanel';


const Services = () => { return (
    <Container>


      <div className="layout--webapps">
        <LayoutTwoPanel>
          <div className="left">
            <h1>Web Apps and Landing Pages</h1>
            <p>Whether you need a simple landing page for your product or portfolio, or a full-stack website, I can help present your work to an online audience!</p>
            <p>As a developer, I can create your dream website using a CMS tool like WordPress or Squarespace, or I can code it up using HTML, Javascript.</p>
            <p>I have substantial experience using advanced Javascript libraries and frameworks like React, Nextjs and or others to ensure that your website's codebase is based on the bleeding edge of web technologies!</p>
          </div>
          <div className="right">
            <i className="react blue huge icon"></i>
          </div>
        </LayoutTwoPanel>
      </div>
      
      
      <div className="layout--data">
        <LayoutTwoPanel reverse={true}>
          <div className="left">
            <h1>Data Analysis</h1>
            <p>Most of my professional career has been spend doing data analysis.</p>
            <p>My experience with data visualization tools, like Tableau, combined with my passion for programming in R/Python makes me an especially useful asset for deriving insights from your data.</p>
            <p>Whether it is ETL, data exploration or visualization, I have the expertise to get what you need from your data.</p>
          </div>
          <div className="right">
            <i className="python green huge icon"></i>
          </div>
        </LayoutTwoPanel>
      </div>

      <div className="layout--technologist">
        <LayoutTwoPanel>
          <div className="left">
            <h1>General Technologies</h1>
            <p>I love technology! Whatever solution you need&#8212;whether that by a small script, an ad hoc analysis, or a full web app&#8212;I am always up to the challenge to find a solution.</p>
            <p>I also love learning about new technologies! Some of the newer programming languages that I am trying to learn include zig, carbon and lua. If you need a developer who is willing to learn, I can be your apprentice!</p>
          </div>
          <div className="right">
            <i className="python green huge icon"></i>
          </div>
        </LayoutTwoPanel>
      </div>

    </Container>
  );
}



const Container = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 14px;

  .layout--webapps {
    background-color: #EDEDED;
    border: none;
  }

  .layout--data {
    background-color: white;
    border: none;
  }

  .layout--technologist {
    background-color: white;
    border: none;
  }


  @media (max-width: 900px) {
    font-size: 10px;
  }


`;


export default Services;

