"use client";
import { useEffect, useRef, useState, MutableRefObject } from 'react';
import { useSpring, animated } from '@react-spring/web';
import "semantic-ui-css/components/icon.min.css";
import classnames from 'classnames';

import { LayoutTwoPanel } from '@/design-system/layouts';

import useIsVisible from '@/hooks/useIsVisible';


export default function Services({ messageRef }: { messageRef: MutableRefObject<HTMLDivElement | null> }) {

  const webappRef = useRef(null);
  const dataRef = useRef(null);
  const techRef = useRef(null);

  const webappVisible = useIsVisible(webappRef);
  const dataVisible = useIsVisible(dataRef);
  const techVisible = useIsVisible(techRef);

  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  useEffect(() => {
    if (webappVisible) { setState1(true); }
    if (dataVisible) { setState2(true); }
    if (techVisible) { setState3(true); }
  }, [webappVisible, dataVisible, techVisible]);

  return (
    <div className="w-full" ref={messageRef}>

      <LayoutTwoPanel>
        <div>
          <h1 className="mb-12 text-xl md:text-3xl">Web Apps and Landing Pages</h1>
          <p>Whether you need a simple landing page for your product or portfolio, or a full-stack website, I can help present your work to an online audience!</p>
          <p>As a developer, I can create your dream website using a CMS tool like WordPress or Squarespace, or I can code it up using HTML, Javascript.</p>
          <p>I have substantial experience using advanced Javascript libraries and frameworks like React, Nextjs and or others to ensure that your website's codebase is based on the bleeding edge of web technologies!</p>
        </div>
        <div className="flex w-1/2 items-center justify-center" ref={webappRef}>
          <WebAppsAnimation isVisible={state1} />
        </div>
      </LayoutTwoPanel>

      <LayoutTwoPanel>
        <div>
          <h1 className="mb-12 text-xl md:text-3xl">Data Analysis</h1>
          <p>Most of my professional career has been spend doing data analysis.</p>
          <p>My experience with data visualization tools, like Tableau, combined with my passion for programming in R/Python makes me an especially useful partner for deriving insights from your data.</p>
          <p>I have professional experience pre-processing data using R and Python, and visualizing data using Tableau, Python or R (base or <code>ggplot</code> library)</p>
          <p>Whether it is ETL, data exploration visualization, or analysis, I have the expertise to create dashboards, reports or other assets to help you understand your own data.</p>
        </div>
        <div className="flex w-1/2 items-center justify-center" ref={dataRef}>
          <DataAnimation isVisible={state2} />
        </div>
      </LayoutTwoPanel>

      <div className="p-[4rem]">
        <div className="header w-full">
          <h1 className="mb-12 text-center text-xl md:text-3xl">General Technologist</h1>
          <p className="">I love technology! Whatever solution you need&#8212;whether that by a small script, an ad hoc analysis, or a full web app&#8212;I am always up to the challenge to find a solution.</p>
          <p className="">I have experience using different platforms to deploy my projects and ensure a sensible, efficient develop/deployment pipeline.</p>
        </div>
        <div className="mx-auto flex w-full max-w-[800px] justify-center" ref={techRef}>
          <TechnologistAnimation isVisible={state3} />
        </div>
      </div>

    </div>
  );
}


const WebAppsAnimation = ({ isVisible }: { isVisible: boolean; }) => {

  const animate = {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    duration: 2000
  };

  const icons = [
    { icon: "react", color: "blue" },
    { icon: "node", color: "green" },
    { icon: "js", color: "yellow" },
    { icon: "html5", color: "red" },
    { icon: "css3", color: "blue" },
    { icon: "sass", color: "pink" },
  ];

  return (
    <div className="grid grid-cols-3 gap-12">
      {icons.map(({ icon, color }, i) => (
        <animated.div
          style={useSpring({...animate, delay: 300 + (300*i)})}
        >
          <i className={classnames([
            icon, color,
            "huge", // TODO: detect screen size dynamically
            "icon",
          ])}/>
        </animated.div>
      ))}
    </div>
  );

}


const DataAnimation = ({ isVisible }: { isVisible: boolean; }) => {

  const animate = {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    duration: 2000
  };

  return (
    <div className="grid grid-cols-3 gap-12 [&>*]:flex [&>*]:items-center [&>*]:justify-center">
      <animated.img style={{ ...useSpring({ ...animate, delay: 300 }), width: "80px" }} src="/python-logo-notext.svg" className="h-[64px]" />
      <animated.div style={useSpring({ ...animate, delay: 1400 })}>
        <i className="database black huge icon"></i>
      </animated.div>
      <animated.img style={{ ...useSpring({ ...animate, delay: 1000 }), width: "80px" }} src="/Rlogo.svg" className="h-[64px]" />
      <animated.img style={{ ...useSpring({ ...animate, delay: 800 }), width: "80px" }} src="/noun-data-analysis-2790390.svg" className="h-[64px]" />
      <animated.div style={useSpring({ ...animate, delay: 1400 })}>
        <i className="chart pie black huge icon"></i>
      </animated.div>
      <animated.div style={useSpring({ ...animate, delay: 1400 })}>
        <i className="cloud black huge icon"></i>
      </animated.div>
    </div>
  );

}

const TechnologistAnimation = ({ isVisible }: { isVisible: boolean; }) => {

  const animate = {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    duration: 2000
  };

  return (
    <div className="mx-auto">
      <h2 className="my-8 mt-24 text-center text-2xl">Databases and Version Control</h2>

      <div className="grid grid-cols-3 gap-20 [&>*]:flex [&>*]:items-center [&>*]:justify-center">
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
          <img className="postgres" src="/postgres.svg" style={{ height: "80px" }} />
        </animated.i>
        <animated.i style={useSpring({ ...animate, delay: 500 })} >
          <img className="mongodb" src="/MongoDB_Icon.svg" style={{ height: "80px" }} />
        </animated.i>
        <animated.i style={useSpring({ ...animate, delay: 500 })} >
          <img className="firebase" src="/Firebase_Logo.svg" style={{ height: "80px" }} />
        </animated.i>

      </div>

      <h2 className="my-8 mt-24 text-center text-2xl">Deployment</h2>
      <div className="mx-auto grid w-full grid-cols-3 gap-12 [&>*]:flex [&>*]:items-center [&>*]:justify-center">
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


