"use client";
import { useState, useEffect, } from 'react';
import { portfolio } from '@/data/portfolio.data';
import Card from '@/components/Card';
import sleep from '@/utils/sleep';

export default function ClientWrapper() {
  const [showItems, setShowItems] = useState([false, false, false]);
  const showPortfolio = [...portfolio];

  useEffect(() => {
    async function main() {
      await sleep(0.2);
      for (let i = 0; i < showPortfolio.length; i++) {
        await sleep(1);
        setShowItems(prev => {
          const cpy = [...prev];
          cpy[i] = true;
          return cpy;
        });
      }
    }
    main();
  }, []);

  return (
    <div>
      {showPortfolio.map((port, i) => {
        return (
          <div
            key={port.organization}
            className="transition-opacity duration-700"
            style={{ opacity: showItems[i] ? 1 : 0 }}
          >
            <Card
              org={port.organization}
              daterange={""}
              jobtitle={port.jobtitle}
              description={port.description}
            />
          </div>
        )
      })}
    </div>
  );
}

