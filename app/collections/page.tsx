import Link from "next/link";

const collections = [
  {
    href: "/collections/music",
    icon: "music",
    title: "Music",
    description: "Page containing my favorite music, artists and curated playlists.",
    cardClass: "border-[#13C253]/20 bg-[#13C253]/5 hover:border-[#13C253] hover:bg-[#13C253]/10 hover:shadow-[0_8px_32px_rgba(19,194,83,0.3)]",
    iconClass: "text-[#13C253]",
  },
  {
    href: "/collections/writings",
    icon: "pencil alternate",
    title: "Writings",
    description: "My personal writings on random stuff.",
    cardClass: "border-purple-500/20 bg-purple-500/5 hover:border-purple-500 hover:bg-purple-500/10 hover:shadow-[0_8px_32px_rgba(168,85,247,0.3)]",
    iconClass: "text-purple-500 dark:text-purple-400",
  },
];

export default function CollectionsPage() {
  return (
    <div className="flex min-h-[calc(100vh-80px)] flex-col items-center px-6 py-16">
      <div className="w-full max-w-155">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-extrabold">Collections</h1>
          <p className="text-lg opacity-60">Things that I collect; stuff I wanna share, stuff I create.</p>
        </div>

        <div className="flex flex-col gap-4">
          {collections.map(({ href, icon, title, description, cardClass, iconClass }) => (
            <Link key={href} href={href}>
              <div className={`flex items-center gap-6 rounded-xl border p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] ${cardClass}`}>
                <div className={`shrink-0 text-3xl ${iconClass}`}>
                  <i className={`${icon} icon`} />
                </div>
                <div>
                  <h2 className="mb-1 text-xl font-bold">{title}</h2>
                  <p className="text-sm opacity-60">{description}</p>
                </div>
                <div className="ml-auto shrink-0 opacity-30">
                  <i className="chevron right icon" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
