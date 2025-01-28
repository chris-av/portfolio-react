import { freelance, jobs } from '@/data/resume.data';
import '@/styles/globals.css';

export default function Page() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="max-w-[1200px]">
        <h1 className="my-20 text-center text-4xl">Resume</h1>

        <h2 className="decoration-3 text-3xl font-extrabold text-purple-500">Job History</h2>
        <div className="mb-8 h-[3px] w-full rounded-xl bg-purple-500"></div>
        <div className="mx-auto max-w-[900px]">
          {jobs.map(({
            id, organization, range, jobtitle, description, tags,
          }) => {
            return (
              <div
                key={id}
                className="mb-12 selection:bg-purple-500 selection:text-white"
              >
                <h3 className="mb-2 text-2xl">{organization}, <span className="text-2xl text-purple-500">{jobtitle}</span></h3>
                <div className="text-lg font-bold">{range}</div>
                <ul className="list-outside list-disc">
                  {description.map((desc, i) => (
                    <li key={i} className="my-2 ml-4 pl-4">{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap">
                  {tags?.map(tag => (
                    <span key={tag} className="m-2 cursor-pointer select-none rounded-md bg-gray-100 px-4 py-2 text-sm font-bold transition-colors hover:bg-purple-500 hover:text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <h2 className="decoration-3 text-3xl font-extrabold text-orange-500">Freelance Work</h2>
        <div className="mb-8 h-[3px] w-full rounded-xl bg-orange-500"></div>
        <div className="mx-auto max-w-[900px]">
          {freelance.map(({
            id, organization, jobtitle, description, tags,
          }) => {
            return (
              <div
                key={id}
                className="mb-12 selection:bg-orange-500 selection:text-white"
              >
                <h3 className="mb-2 text-2xl">{organization}, <span className="text-2xl text-orange-500">{jobtitle}</span></h3>
                <ul className="list-outside list-disc">
                  {description.map((desc, i) => (
                    <li key={i} className="my-2 ml-4 pl-4">{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap">
                  {tags?.map(tag => (
                    <span key={tag} className="m-2 cursor-pointer select-none rounded-md bg-gray-100 px-4 py-2 text-sm font-bold transition-colors hover:bg-orange-600 hover:text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  );
}
