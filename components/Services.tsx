import React, { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useAppContext } from '@/state/state';

import LayoutTwoPanel from '@/styles/LayoutTwoPanel';
import LayoutSinglePanel from '@/styles/LayoutSinglePanel';

import useIsVisible from '@/hooks/useIsVisible';


export default function Services() {

  const { messageRef } = useAppContext();

  const webappRef = useRef(null);
  const dataRef = useRef(null);
  const techRef = useRef(null);

  const webappVisible = useIsVisible(webappRef);
  const dataVisible = useIsVisible(dataRef);
  const techVisible = useIsVisible(techRef);

  return (
    <div className="w-full" ref={messageRef}>

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
          <div className="left w-full">
            <h1>Data Analysis</h1>
            <p>Most of my professional career has been spend doing data analysis.</p>
            <p>My experience with data visualization tools, like Tableau, combined with my passion for programming in R/Python makes me an especially useful partner for deriving insights from your data.</p>
            <p>I have professional experience pre-processing data using R and Python, and visualizing data using Tableau, Python or R (base or <code>ggplot</code> library)</p>
            <p>Whether it is ETL, data exploration visualization, or analysis, I have the expertise to create dashboards, reports or other assets to help you understand your own data.</p>
          </div>
          <div className="right w-full" ref={dataRef}>
            <DataAnimation isVisible={dataVisible} />
          </div>
        </LayoutTwoPanel>
      </div>

      <div className="layout--technologist">
        <div className="p-[4rem]">
          <div className="header w-full">
            <h1 className="text-[4rem] mb-12">General Technologist</h1>
            <p className="text-[1.2rem]">I love technology! Whatever solution you need&#8212;whether that by a small script, an ad hoc analysis, or a full web app&#8212;I am always up to the challenge to find a solution.</p>
            <p className="text-[1.2rem]">I have experience using different platforms to deploy my projects and ensure a sensible, efficient develop/deployment pipeline.</p>
          </div>
          <div className="flex justify-center w-full max-w-[800px] mx-auto" ref={techRef}>
            <TechnologistAnimation isVisible={techVisible} />
          </div>
        </div>
      </div>

    </div>
  );
}


const WebAppsAnimation = ({ isVisible } : { isVisible : boolean; }) => {

  const animate = {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    duration: 2000
  };

  return (
    <div className="animation-container grid grid-cols-3 gap-12">
      <animated.div style={useSpring({ ...animate, delay: 300 })}>
        <i className="react blue huge icon"></i>
      </animated.div>
      <animated.div style={useSpring({ ...animate, delay: 500 })}>
        <i className="node green huge icon"></i>
      </animated.div>
      <animated.div style={useSpring({ ...animate, delay: 800 })}>
        <i className="js yellow huge icon"></i>
      </animated.div>
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
  );

}


const DataAnimation = ({ isVisible } : { isVisible: boolean; }) => {

  const animate = {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    duration: 2000
  };

  return (
    <div className="grid grid-cols-2 gap-12">
      <animated.img style={{ ...useSpring({ ...animate, delay: 300 }), width: "80px" }} src="/python-logo-notext.svg" />
      <animated.img style={{ ...useSpring({ ...animate, delay: 500 }), width: "80px" }} src="/noun-data-analysis-1726791.svg" />
      <animated.img style={{ ...useSpring({ ...animate, delay: 800 }), width: "80px"}} src="/noun-data-analysis-2790390.svg" />
      <animated.img style={{ ...useSpring({ ...animate, delay: 1000 }), width: "80px" }} src="/Rlogo.svg" />
    </div>
  );

}

const TechnologistAnimation = ({ isVisible } : { isVisible: boolean; }) => {

  const animate = {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    duration: 2000
  };

  return (
    <div className="mx-auto">
      <h2 className="text-2xl text-center my-8 mt-24">Databases and Version Control</h2>

      <div className="grid grid-cols-3 gap-20 [&>*]:flex [&>*]:justify-center [&>*]:items-center">
        <div>
          <animated.i style={useSpring({ ...animate, delay: 300 })} className="git icon huge"></animated.i>
        </div>
        <div>
          <animated.i style={useSpring({ ...animate, delay: 300 })} className="github icon huge"></animated.i>
        </div>
        <div>
          <animated.i style={useSpring({ ...animate, delay: 300 })} className="gitlab orange icon huge"></animated.i>
        </div>

        <animated.i style={useSpring({ ...animate, delay: 500 })} >
          <img className="postgres" src="/postgres.svg" style={{ height:"80px" }}/>
        </animated.i>
        <animated.i style={useSpring({ ...animate, delay: 500 })} >
          <img className="mongodb" src="/MongoDB_Icon.svg" style={{ height:"80px" }}/>
        </animated.i>
        <animated.i style={useSpring({ ...animate, delay: 500 })} >
          <img className="firebase" src="/Firebase_Logo.svg" style={{ height:"80px" }}/>
        </animated.i>

      </div>

      <h2 className="text-2xl text-center my-8 mt-24">Deployment</h2>
      <div className="w-full mx-auto grid grid-cols-3 gap-12 [&>*]:flex [&>*]:justify-center [&>*]:items-center">
        <div>
          <animated.i style={useSpring({ ...animate, delay: 300 })} className="docker blue icon huge"></animated.i>
        </div>
        <div>
          <animated.i style={useSpring({ ...animate, delay: 300 })} className="cpanel orange icon huge"></animated.i>
        </div>
        <div>
          <animated.i style={useSpring({ ...animate, delay: 300 })} className="aws yellow icon huge"></animated.i>
        </div>

        <div>
          <animated.i style={useSpring({ ...animate, delay: 300 })} className="linode green icon huge"></animated.i>
        </div>
        <div>
          <animated.i style={useSpring({ ...animate, delay: 300 })}>
            <img className="netlify" src="/netlify-logomark.svg" style={{ height: "80px" }} />
          </animated.i>
        </div>
        <div>
          <animated.i style={useSpring({ ...animate, delay: 300 })}>
            <img className="heroku" src="/heroku-logotype-vertical-purple.svg" style={{ height: "80px" }} />
          </animated.i>
        </div>

      </div>

    </div>
  );
}


