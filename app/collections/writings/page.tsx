import Link from "next/link";

const essays = [
  {
    href: "/collections/writings/test",
    title: "On Building Things",
    description: "The trap of perfect architecture, and why shipping consistently is a skill.",
  },
  {
    href: "/collections/writings/on-data-engineering",
    title: "On Data Engineering",
    description: "Why data pipelines are harder than they look, and where the real complexity hides.",
  },
  {
    href: "/collections/writings/on-learning",
    title: "On Learning New Technologies",
    description: "The build-first approach, the role of discomfort, and what actually transfers.",
  },
];

export default function WritingsPage() {
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
