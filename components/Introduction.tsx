"use client";
import { useState, useEffect, } from 'react';
import { useTransition, animated } from '@react-spring/web';


export default function Introduction({ messageRef }: { messageRef: any }) {

  const [ items, setItems ] = useState<"Developer" | "Analyst" | "Engineer">('Analyst');
  const transitions = useTransition(items, {
    from: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -50 },
  });

  const scrollToRef = () => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView();
    }
  }

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
    <div className="h-screen p-12">
      <div className="relative flex h-5/6 items-center">
        <h1 className="relative -left-2 -top-20 text-4xl md:left-20 md:text-6xl lg:text-8xl">Professional &nbsp;
          { transitions((style, item) => (
            <animated.span style={{ ...style, color: colors[item] }} className="absolute">
              { item }
            </animated.span>
          )) }
        </h1>

        <div className="absolute bottom-10 right-1/2 -mr-10">
          <i 
            className="angle down huge icon cursor-pointer" 
            onClick={() => scrollToRef()}
          />
        </div>
        
      </div>
    </div>
  );
}

