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
    <LayoutPadding>
      <div className="relative flex items-center h-full">
        <h1 className="relative -top-20 text-4xl lg:text-8xl">Professional &nbsp;
          { transitions((style, item) => (
            <animated.span style={{ ...style, color: colors[item] }} className="overflow-hidden absolute leading-relaxed -top-1/3">
              { item }
            </animated.span>
          )) }
        </h1>

        <div className="absolute left-1/2 bottom-10">
          <i 
            className="angle down huge icon" 
            onClick={() => messageRef.current.scrollIntoView()}
          />
        </div>
        
      </div>
    </LayoutPadding>
  );
}

