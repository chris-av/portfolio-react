import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import LayoutTwoPanel from '@/styles/LayoutTwoPanel';
import LayoutSinglePanel from '@/styles/LayoutSinglePanel';

import useIsVisible from '@/hooks/useIsVisible';


const Services = () => {

  const webappRef = useRef();
  const dataRef = useRef();
  const techRef = useRef();

  const webappVisible = useIsVisible(webappRef);
  const dataVisible = useIsVisible(dataRef);
  const techVisible = useIsVisible(techRef);

  return (
    <Container>

      <div className="layout--webapps">
        <LayoutTwoPanel>
          <div className="left">
            <h1>Web Apps and Landing Pages</h1>
            <p>Whether you need a simple landing page for your product or portfolio, or a full-stack website, I can help present your work to an online audience!</p>
            <p>As a developer, I can create your dream website using a CMS tool like WordPress or Squarespace, or I can code it up using HTML, Javascript.</p>
            <p>I have substantial experience using advanced Javascript libraries and frameworks like React, Nextjs and or others to ensure that your website's codebase is based on the bleeding edge of web technologies!</p>
          </div>
          <div className="right" ref={webappRef}>
            <WebAppsAnimation isVisible={webappVisible} />
          </div>
        </LayoutTwoPanel>
      </div>
      
      <div className="layout--data">
        <LayoutTwoPanel reverse={true}>
          <div className="left">
            <h1>Data Analysis</h1>
            <p>Most of my professional career has been spend doing data analysis.</p>
            <p>My experience with data visualization tools, like Tableau, combined with my passion for programming in R/Python makes me an especially useful partner for deriving insights from your data.</p>
            <p>I have professional experience pre-processing data using R and Python, and visualizing data using Tableau, Python or R (base or <code>ggplot</code> library)</p>
            <p>Whether it is ETL, data exploration visualization, or analysis, I have the expertise to create dashboards, reports or other assets to help you understand your own data.</p>
          </div>
          <div className="right" ref={dataRef}>
            <DataAnimation isVisible={dataVisible} />
          </div>
        </LayoutTwoPanel>
      </div>

      <div className="layout--technologist">
        <LayoutSinglePanel>
          <div className="header">
            <h1>General Technologist</h1>
            <p>I love technology! Whatever solution you need&#8212;whether that by a small script, an ad hoc analysis, or a full web app&#8212;I am always up to the challenge to find a solution.</p>
            <p>I have experience using different platforms to deploy my projects and ensure a sensible, efficient develop/deployment pipeline.</p>
          </div>
          <div className="content" ref={techRef}>
            <TechnologistAnimation isVisible={techVisible} />
          </div>
        </LayoutSinglePanel>
      </div>

    </Container>
  );
}


const WebAppsAnimation = ({ isVisible }) => {

  const animate = {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    duration: 2000
  };

  return (
    <div className="animation-container">
      <div className="top">
        <animated.div style={useSpring({ ...animate, delay: 300 })}>
          <i className="react blue huge icon"></i>
        </animated.div>
        <animated.div style={useSpring({ ...animate, delay: 500 })}>
          <i className="node green huge icon"></i>
        </animated.div>
        <animated.div style={useSpring({ ...animate, delay: 800 })}>
          <i className="js yellow huge icon"></i>
        </animated.div>
      </div>
      <div className="bottom">
        <animated.div style={useSpring({ ...animate, delay: 1000 })}>
          <i className="html5 red huge icon"></i>
        </animated.div>
        <animated.div style={useSpring({ ...animate, delay: 1200 })}>
          <i className="css3 blue huge icon"></i>
        </animated.div>
        <animated.div style={useSpring({ ...animate, delay: 1400 })}>
          <i className="sass pink huge icon"></i>
        </animated.div>
      </div>
    </div>
  );

}


const DataAnimation = ({ isVisible }) => {

  const animate = {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    duration: 2000
  };

  return (
    <div className="animation-container">
      <div className="top">
        <animated.img style={useSpring({ ...animate, delay: 300 })} src="/python-logo-notext.svg" />
        <animated.img style={useSpring({ ...animate, delay: 500 })} src="/noun-data-analysis-1726791.svg" />
      </div>
      <div className="bottom">
        <animated.img style={useSpring({ ...animate, delay: 800 })} src="/noun-data-analysis-2790390.svg" />
        <animated.img style={useSpring({ ...animate, delay: 1000 })} src="/Rlogo.svg" />
      </div>
    </div>
  );

}

const TechnologistAnimation = ({ isVisible }) => {

  const animate = {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    duration: 2000
  };

  return (
    <div className="animation-container">
      <div className="section">
        <h2>Version Control</h2>
        <animated.div className="icons" style={useSpring({ ...animate, delay: 300 })}>
          <i className="git icon huge"></i>
          <i className="github icon huge"></i>
          <i className="gitlab orange icon huge"></i>
        </animated.div>
      </div>
      <div className="section">
        <h2>Databases</h2>
        <animated.div className="icons" style={useSpring({ ...animate, delay: 500 })}>
          <i>
            <img className="postgres" src="/postgres.svg"/>
          </i>
          <i>
            <img className="mongodb" src="/MongoDB_Icon.svg"/>
          </i>
          <i>
            <img className="firebase" src="/Firebase_Logo.svg"/>
          </i>
        </animated.div>
      </div>
      <div className="section">
        <h2>Deployment</h2>
        <animated.div className="icons" style={useSpring({ ...animate, delay: 800 })}>
          <i className="docker blue icon huge"></i>
          <i className="cpanel orange icon huge"></i>
          <i className="aws yellow icon huge"></i>
          <i className="linode green icon huge"></i>
          <i>
            <img className="netlify" src="/netlify-logomark.svg" />
          </i>
        </animated.div>
      </div>
    </div>
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

  .layout--webapps, .layout--data, .layout--technologist {
    height: 100vh;
  }

  .right {
    .animation-container {

      width: 60%;

      .top {
        margin-bottom: 40px;
      }

      .top, .bottom {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-height: 80px;

        img {
          max-height: 60px;
        }

      }

    }
  }

  .content {
    .animation-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .section {
      width: 33%;
      text-align: center;
      padding: 0 20px;
    }
    .icons {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      padding: 10px 0;

      i { width: 33%; }

      .postgres {
        width: 50px;
      }

      .mongodb {
        height: 80px;
      }

      .firebase {
        height: 60px;
      }

    }
  }

  i { margin: 10px 0; }


  @media (max-width: 900px) {
    font-size: 10px;
    .content {
      .section {
        width: 100%;
        margin: 2rem 0;
      }
      .animation-container {
        flex-direction: column;
        width: 100%;
      }
    }
  }


`;



export default Services;

