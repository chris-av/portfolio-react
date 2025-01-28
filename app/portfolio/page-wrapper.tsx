"use client";
import { ReactNode } from 'react';
import { portfolio } from '@/data/portfolio.data';

export default function ClientWrapper() {
  const showPortfolio = portfolio.filter(p => p.active === true);
  return (
    <div>

      <div className="mx-auto max-w-[900px]">
        {showPortfolio.map(({ id, organization, jobtitle, description, tags, }) => {
          return (
            <div
              key={id}
              className="mb-12 p-4"
            >
              <h2 className="mb-2 text-2xl">{organization}</h2>
              <h3 className="mb-4 text-xl">{jobtitle}</h3>
              <div>{description()}</div>
              {tags?.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )
        })}
      </div>

    </div>
  );
}


interface TagProps {
  children: ReactNode;
}

function Tag({ children }: TagProps) {
  return (
    <span className="mx-2 rounded-md bg-gray-100 px-4 py-2 text-sm">
      {children}
    </span>
  );
}
