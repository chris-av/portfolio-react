import { freelance, jobs } from '@/data/resume.data';
import '@/styles/globals.css';
import ScrollToHash from './ScrollToHash';

export default function Page() {
  return (
    <div className="flex items-center justify-center p-8">
      <ScrollToHash />
      <div className="max-w-[1200px]">

        <div className="my-16">
          <h1 className="mb-4 text-center text-4xl">Resume</h1>
          <div className="flex flex-col justify-center lg:flex-row">
            <a className="mb-2 font-bold text-blue-500 underline dark:text-blue-400 underline-offset-2 lg:mb-0" target="_blank" href="/resume-full-stack.pdf">
              <span><i className="icon pdf file red" /></span>
              Full Stack Resume
            </a>
            <div className="mx-2 hidden text-xl lg:block">|</div>
            <a className="mb-2 font-bold text-blue-500 underline dark:text-blue-400 underline-offset-2 lg:mb-0" target="_blank" href="/resume-data-engineer.pdf">
              <span><i className="icon pdf file red" /></span>
              Data Engineer Resume
            </a>
          </div>
        </div>

        <h2 className="decoration-3 text-3xl font-extrabold text-purple-500 dark:text-purple-400">Job History</h2>
        <div className="mb-8 h-[3px] w-full rounded-xl bg-purple-500"></div>
        <div className="mx-auto max-w-[900px]">
          {jobs.map(({
            id, anchor, organization, range, jobtitle, description, tags,
          }) => {
            return (
              <div
                key={id || anchor}
                id={anchor}
                className="mb-12 scroll-mt-24 selection:bg-purple-500 selection:text-white lg:scroll-mt-8"
              >
                <h3 className="mb-2 text-2xl">{organization}, <span className="text-2xl text-purple-500 dark:text-purple-400">{jobtitle}</span></h3>
                <div className="text-lg font-bold">{range}</div>
                <ul className="list-outside list-disc">
                  {description.map((desc, i) => (
                    <li key={i} className="my-2 ml-4 pl-4">{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap">
                  {tags?.map(tag => (
                    <span key={tag} className="m-2 cursor-pointer select-none rounded-md bg-gray-100 px-4 dark:bg-white/10 py-2 text-sm font-bold transition-colors hover:bg-purple-500 hover:text-white">
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
            id, anchor, organization, jobtitle, description, tags,
          }) => {
            return (
              <div
                key={id}
                id={anchor}
                className="mb-12 scroll-mt-24 selection:bg-orange-500 selection:text-white lg:scroll-mt-8"
              >
                <h3 className="mb-2 text-2xl">{organization}, <span className="text-2xl text-orange-500">{jobtitle}</span></h3>
                <ul className="list-outside list-disc">
                  {description.map((desc, i) => (
                    <li key={i} className="my-2 ml-4 pl-4">{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap">
                  {tags?.map(tag => (
                    <span key={tag} className="m-2 cursor-pointer select-none rounded-md bg-gray-100 px-4 dark:bg-white/10 py-2 text-sm font-bold transition-colors hover:bg-orange-600 hover:text-white">
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
