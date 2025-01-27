import { ReactNode } from 'react';

interface CardProps {
  org: string;
  jobtitle: string;
  daterange: string;
  description: () => ReactNode;
  styles?: Record<string, string>;
}

export default function Card({ org, jobtitle, daterange, description, styles = {} } : CardProps) {
  return (
    <div className="mx-auto my-2 w-full max-w-[700px] rounded-[10px] border border-[#c9bebe]" style={styles}>
      <div className="flex h-[60px] items-center justify-center rounded-tl-[9px] rounded-tr-[9px] bg-[#70707e] text-2xl text-white">
        <h2 className="header">{org}</h2>
      </div>
      <div className="card-body h-full p-4">
        <div className="">
          <h3 className="job-title">{jobtitle}</h3>
          <div className="date-range">{daterange}</div>
        </div>
        <div className="card-text">
          {description()}
        </div>
        <br/>
      </div>
    </div>
  );
}
