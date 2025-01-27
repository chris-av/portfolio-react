"use client";
import { useEffect, useRef, useState, MutableRefObject } from 'react';
import { useSpring, animated } from '@react-spring/web';
import "semantic-ui-css/components/icon.min.css";
import classnames from 'classnames';

import { LayoutTwoPanel } from '@/design-system/layouts';

import useIsVisible from '@/hooks/useIsVisible';
import useIconSize from '@/hooks/useIconSize';


export default function Services({ messageRef }: { messageRef: MutableRefObject<HTMLDivElement | null> }) {

  const webappRef = useRef(null);
  const dataRef = useRef(null);
  const techRef = useRef(null);

  const webappVisible = useIsVisible(webappRef);
  const dataVisible = useIsVisible(dataRef);
  const techVisible = useIsVisible(techRef);

  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);

  useEffect(() => {
    if (webappVisible) { setState1(true); }
    if (dataVisible) { setState2(true); }
  }, [webappVisible, dataVisible, techVisible]);

  return (
    <div className="w-full" ref={messageRef}>

      <LayoutTwoPanel>
        <div className="mb-12 lg:mb-0">
          <h2 className="mb-12 text-xl md:text-3xl">Web Apps and Landing Pages</h2>
          <p>Whether you need a simple landing page for your product or portfolio, or a full-stack website, I can help present your work to an online audience!</p>
          <p>As a developer, I can create your dream website using a CMS tool like WordPress or Squarespace, or I can code it up using HTML, Javascript.</p>
          <p>I have substantial experience using advanced Javascript libraries and frameworks like React, Nextjs and or others to ensure that your website's codebase is based on the bleeding edge of web technologies!</p>
        </div>
        <div className="flex w-1/2 items-center justify-center" ref={webappRef}>
          <CreateAnimationSection
            isVisible={state1}
            start_delay={300}
            next_item_delay={300}
            assets={[
              { id: "6498c3e745", type: "semantic", icon: "react", color: "blue" },
              { id: "4d73b78ab7", type: "semantic", icon: "node", color: "green" },
              { id: "ab9c5b5561", type: "semantic", icon: "js", color: "yellow" },
              { id: "72def0fac4", type: "semantic", icon: "html5", color: "red" },
              { id: "5afc7ad30c", type: "semantic", icon: "css3", color: "blue" },
              { id: "041a21c0ce", type: "semantic", icon: "sass", color: "pink" },
            ]}
          />
        </div>
      </LayoutTwoPanel>

      <LayoutTwoPanel>
        <div className="mb-12 lg:mb-0">
          <h2 className="mb-12 text-xl md:text-3xl">Data Analysis</h2>
          <p>Most of my professional career has been spend doing data analysis.</p>
          <p>My experience with data visualization tools, like Tableau, combined with my passion for programming in R/Python makes me an especially useful partner for deriving insights from your data.</p>
          <p>I have professional experience pre-processing data using R and Python, and visualizing data using Tableau, Python or R (base or <code>ggplot</code> library)</p>
          <p>Whether it is ETL, data exploration visualization, or analysis, I have the expertise to create dashboards, reports or other assets to help you understand your own data.</p>
        </div>
        <div className="flex w-1/2 items-center justify-center" ref={dataRef}>
          <CreateAnimationSection
            isVisible={state2}
            start_delay={600}
            next_item_delay={300}
            assets={[
              { id: "e7239d8a472624caf3f7", type: "semantic", icon: "python", color: "blue" },
              { id: "f0aae19276d0ba970d5e", type: "semantic", icon: "database", color: "black" },
              { id: "6a4757018684e507c4ad", type: "custom", src: "/Rlogo.svg", styles: { width: "80px", height: "64px" }, },
              { id: "c5bfa00e994693811572", type: "custom", src: "/noun-data-analysis-2790390.svg", styles: { width: "80px", height: "64px" }, },
              { id: "cfd8a6d7b452745dfa4a", type: "semantic", icon: "chart pie", color: "black" },
              { id: "8e744b0ce658fcff2a11", type: "semantic", icon: "cloud", color: "black" },
            ]}
          />
        </div>
      </LayoutTwoPanel>

    </div>
  );
}

type SemanticIcon = {
  id: string;
  type: "semantic";
  icon: string;
  color: string;
}

type CustomIcon = {
  id: string;
  type: "custom";
  src: string;
  styles?: Record<string, string>;
}

type IconAsset = SemanticIcon | CustomIcon;

interface CreateAnimationSectionProps {
  isVisible: boolean;
  start_delay: number;
  next_item_delay: number;
  assets: IconAsset[]
}

const CreateAnimationSection = ({
  isVisible,
  start_delay,
  next_item_delay,
  assets,
}: CreateAnimationSectionProps) => {
  const animate = {
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    duration: 2000
  };

  const { iconSize, iconWidth, iconHeight, } = useIconSize();

  return (
    <div className="grid grid-cols-3 gap-12">
      {assets.map((asset, i) => (
        <animated.div
          key={asset.id}
          style={useSpring({ ...animate, delay: start_delay + (next_item_delay * i) })}
        >
          {asset.type === "semantic" ? (
            <i
              className={classnames([
                asset.icon, asset.color,
                iconSize,
                "icon",
              ])}
            />
          ) : (
            <img
              className=""
              src={asset.src}
              style={{...asset.styles, width: iconWidth, height: iconHeight, }}
            />
          )}
        </animated.div>
      ))}
    </div>
  )

}
