import Link from "next/link";
import { getEssays } from "./essays";
import { POST_TIME_ZONE } from "./dates";
import TagList from "./TagList";

const datefmt = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  timeZone: POST_TIME_ZONE,
});

export default function WritingsPage() {
  const essays = getEssays();
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-extrabold text-purple-500 dark:text-purple-400">Writings</h1>
      </div>

      {essays.map(({ href, title, description, date, tags }) => (
        <Link key={href} href={href}>
          <div className="flex flex-col gap-2 rounded-xl border border-purple-500/20 bg-purple-500/5 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-purple-500 hover:bg-purple-500/10 hover:shadow-[0_8px_32px_rgba(168,85,247,0.3)]">
            <h2 className="text-xl font-bold">{title}</h2>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <p className="text-sm opacity-60 mb-0">{description}</p>
              <TagList tags={tags} className="sm:shrink-0 sm:justify-end" />
            </div>
            {date && <p className="text-sm opacity-60">{datefmt.format(date)}</p>}
          </div>
        </Link>
      ))}
    </div>
  );
}
