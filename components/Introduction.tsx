import React, { useState, useEffect } from 'react';
import { useAppContext } from '@/state/state';
import { useTransition, animated } from '@react-spring/web';


import LayoutPadding from '@/styles/LayoutPadding';


export default function Introduction() {

  const [ items, setItems ] = useState<"Developer" | "Analyst" | "Engineer">('Analyst');
  const { messageRef } = useAppContext();
  const transitions = useTransition(items, {
    from: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -50 },
  });

  const colors = {
    "Developer": "#C85D91",  
    "Analyst": "#5D91C8",
    "Engineer": "#91C85D",
  } as const;

  useEffect(() => {
    const tmp = setInterval(() => {
      setItems(prev => {
        if (prev === 'Developer') return 'Analyst';
        if (prev === 'Analyst') return 'Engineer';
        if (prev === 'Engineer') return 'Developer';
        return "Analyst"
      })
    }, 2000);

    return () => clearInterval(tmp);

  }, [items]);

  return (
    <LayoutPadding myref={messageRef}>
      <div>
        <h1 className="text-left my-[3rem] leading-relaxed text-[4rem]">Professional &nbsp;
          <animated.div className="slidingVertical inline overflow-y-hidden w-full">
            { transitions((style, item) => (
              <animated.span style={{ ...style, color: colors[item] }}  className={`opacity-0 overflow-hidden absolute`}>
                { item }
              </animated.span>
            )) }
          </animated.div>
        </h1>
        
        <div className="max-w-[750px]">
          <p>
            My name's Christian Valenzuela, your friendly neighborhood web developer!
            I am glad you came to visit my page!
          </p>
          
          <p>
            I build everything: whether it is the landing page for your next product, a portfolio site for your artwork or a full e-commerce site.
          </p>
          
          <p>I am a passionate developer with a particular affinity towards Javascript and Node. But I also love tinkering in other languages like bash/zsh, python, and zig!</p>
        </div>
      </div>
    </LayoutPadding>
  );
}

