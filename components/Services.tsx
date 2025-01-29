"use client";
import { useEffect, useRef, useState, MutableRefObject } from 'react';
import { useSpring, animated } from '@react-spring/web';
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
    <div className="w-full pt-16 lg:pt-0" ref={messageRef}>

      <LayoutTwoPanel>
        <div className="mb-12 lg:mb-0">
          <h2 className="mb-4 text-xl md:text-3xl">Customized Web Solutions</h2>
          <p className="lg:text-xl">
            I specialize in crafting modern, scalable web applications tailored to your unique requirements.
            From interactive front-end interfaces to robust back-end systems, I build solutions using technologies like React, Next.js, and Node.js.
            I bring strong fundamentals as a web developer and can seamlessly deliver value to your existing architecture—whether it’s built with vanilla JavaScript, powered by build or transpilation tools, or implemented using popular frameworks on the market.
          </p>
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
          <h2 className="mb-4 text-xl md:text-3xl">Data-Driven Solutions</h2>
          <p className="lg:text-xl">
            With years of experience in data engineering and analysis, I can transform raw data into meaningful insights.
            My expertise lies in bridging the gap between data science and engineering, delivering solutions that are not only insightful but also built to scale.
            Whether it's adding observability, containerization, or advanced tooling to your analysis, I can elevate your workflows to ensure they’re modular, reproducible, and production-ready.
          </p>
        </div>
        <div className="flex w-1/2 items-center justify-center" ref={dataRef}>
          <CreateAnimationSection
            isVisible={state2}
            start_delay={600}
            next_item_delay={300}
            assets={[
              { id: "6a4757018684e507c4ad", type: "custom", src: "/python-logo-notext.svg", styles: { width: "80px", height: "64px" }, },
              { id: "6a4757018684e507c4ad", type: "custom", src: "/Rlogo.svg", styles: { width: "80px", height: "64px" }, },
              { id: "9e5bddacb54d992a946c", type: "custom", src: "/tableau-icon.svg", styles: { width: "80px", height: "64px" }, },
              { id: "f0aae19276d0ba970d5e", type: "custom", src: "/postgres.svg", styles: { width: "80px", height: "64px" }, },
              { id: "4ccd4caa849a06e65558", type: "custom", src: "/bigquery.svg", styles: { width: "80px", height: "64px" }, },
              { id: "5b4819533095e3f409f4", type: "semantic", icon: "aws", color: "yellow" },
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
              style={{ ...asset.styles, width: iconWidth, height: iconHeight, }}
            />
          )}
        </animated.div>
      ))}
    </div>
  );

}
