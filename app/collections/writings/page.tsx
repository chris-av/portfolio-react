import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const writingsDir = path.join(process.cwd(), "app/collections/writings");

type Essay = {
  href: string;
  title: string;
  description: string;
  date?: string;
};

function getEssays(): Essay[] {
  return fs
    .readdirSync(writingsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const filePath = path.join(writingsDir, entry.name, "page.mdx");
      if (!fs.existsSync(filePath)) return null;
      const { data } = matter(fs.readFileSync(filePath, "utf8"));
      return {
        href: `/collections/writings/${entry.name}`,
        title: data.title,
        description: data.description,
        date: data.date,
      } as Essay;
    })
    .filter((essay): essay is Essay => essay !== null)
    .sort((a, b) => (a.date && b.date ? +new Date(b.date) - +new Date(a.date) : 0));
}

export default function WritingsPage() {
  const essays = getEssays();
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-4xl font-extrabold text-purple-500">Writings</h1>
      </div>

      {essays.map(({ href, title, description }) => (
        <Link key={href} href={href}>
          <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-purple-500 hover:bg-purple-500/10 hover:shadow-[0_8px_32px_rgba(168,85,247,0.3)]">
            <h2 className="mb-1 text-xl font-bold">{title}</h2>
            <p className="text-sm opacity-60">{description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
