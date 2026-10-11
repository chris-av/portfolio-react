import classNames from "classnames";

export default function TagList({ tags, className }: { tags: string[]; className?: string }) {
  if (tags.length === 0) return null;

  return (
    <ul className={classNames("flex flex-wrap gap-2", className)} aria-label="Tags">
      {tags.map((tag) => (
        <li
          key={tag}
          className="whitespace-nowrap rounded-full border border-purple-500/20 bg-purple-500/5 px-2.5 py-0.5 text-xs text-purple-500"
        >
          <span className="opacity-50">#</span>
          {tag}
        </li>
      ))}
    </ul>
  );
}
