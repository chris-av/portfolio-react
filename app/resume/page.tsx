import { resume } from '@/data/resume.data';
import TimeLineSection from './TimeLineSection';
export default function Page() {
  return (
    <div>
      <h1 className="my-24 text-center text-4xl">Work History</h1>
      <div className="">
        {resume.jobs.map(({ id, organization, jobtitle, range, description }) => (
          <TimeLineSection
            key={id}
            organization={organization}
            jobtitle={jobtitle}
            range={range}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}
