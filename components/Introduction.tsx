"use client";
import { useState, useEffect, } from 'react';
import { useTransition, animated } from '@react-spring/web';


export default function Introduction({ messageRef }: { messageRef: any }) {

  const [items, setItems] = useState<"Developer" | "Analyst" | "Engineer">('Analyst');
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
    const interval = setInterval(() => {
      setItems(prev => {
        if (prev === 'Developer') return 'Analyst';
        if (prev === 'Analyst') return 'Engineer';
        if (prev === 'Engineer') return 'Developer';
        return "Analyst"
      })
    }, 2000);
    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className="relative h-screen">
      <div className="relative flex h-5/6 flex-col items-center justify-center text-center lg:ml-[15%] lg:text-left">
        <h1 className="-top-20 w-full text-6xl xl:text-8xl">Professional&nbsp;
          {transitions((style, item) => (
            <animated.span style={{ ...style, color: colors[item] }} className="absolute hidden lg:inline-block">
              {item}
            </animated.span>
          ))}
        </h1>

        <div className="my-12 text-6xl font-bold lg:hidden xl:text-8xl">
          {transitions((style, item) => (
            <animated.div style={{ ...style, color: colors[item] }} className="absolute left-0 w-full">
              {item}
            </animated.div>
          ))}
        </div>
      </div>

      <div className="bottom-50 absolute right-1/2 -mr-10">
        <i
          className="angle down huge icon cursor-pointer"
          onClick={() => scrollToRef()}
        />
      </div>
    </div>
  );
}

