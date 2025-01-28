"use client";
import { useState, useEffect, MutableRefObject } from 'react';
import { useTransition, animated } from '@react-spring/web';

export default function Introduction({ messageRef }: { messageRef: MutableRefObject<HTMLDivElement | null> }) {

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
    <div className="h-[calc(100vh-80px)]">
      <div className="flex h-5/6 w-full items-center">
        <div className="relative mx-auto flex w-full max-w-[1200px] flex-col justify-center p-4">
          <h1 className="mb-12 text-center text-4xl lg:text-left lg:text-6xl xl:text-8xl">Christian Valenzuela</h1>
          <h2 className="-top-20 w-full text-center text-3xl lg:text-left lg:text-4xl xl:text-6xl">Professional&nbsp;
            {transitions((style, item) => (
              <animated.span style={{ ...style, color: colors[item] }} className="absolute hidden lg:inline-block">
                {item}
              </animated.span>
            ))}
          </h2>
          <div className="text-3xl font-bold lg:hidden xl:text-6xl">
            {transitions((style, item) => (
              <animated.div style={{ ...style, color: colors[item] }} className="absolute left-1/2 -translate-x-1/2 transform text-center">
                {item}
              </animated.div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex h-1/6 w-full items-center justify-center">
        <i
          className="angle down huge icon cursor-pointer"
          onClick={() => scrollToRef()}
        />
      </div>
    </div>
  );
}
