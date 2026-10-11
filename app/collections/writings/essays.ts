import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { parsePostDate } from "./dates";

const writingsDir = path.join(process.cwd(), "app/collections/writings");

export type Essay = {
  slug: string;
  href: string;
  title: string;
  description: string;
  date?: Date;
  tags: string[];
};

// Accepts `tags: [a, b]` or `tags: a, b` in frontmatter; lowercased and deduped.
export function normalizeTags(raw: unknown): string[] {
  const list = Array.isArray(raw) ? raw : typeof raw === "string" ? raw.split(",") : [];
  const tags = list
    .map((tag) => String(tag).trim().toLowerCase())
    .filter((tag) => tag.length > 0);
  return Array.from(new Set(tags));
}

export function getEssays(): Essay[] {
  return fs
    .readdirSync(writingsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const filePath = path.join(writingsDir, entry.name, "page.mdx");
      if (!fs.existsSync(filePath)) return null;
      const { data } = matter(fs.readFileSync(filePath, "utf8"));
      return {
        slug: entry.name,
        href: `/collections/writings/${entry.name}`,
        title: data.title,
        description: data.description,
        date: parsePostDate(data.date),
        tags: normalizeTags(data.tags),
      } as Essay;
    })
    .filter((essay): essay is Essay => essay !== null)
    .sort((a, b) => (a.date && b.date ? +new Date(b.date) - +new Date(a.date) : 0));
}

// Every tag in use, with how many essays carry it, most used first.
export function getAllTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const essay of getEssays()) {
    for (const tag of essay.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return Array.from(counts, ([tag, count]) => ({ tag, count })).sort(
    (a, b) => b.count - a.count || a.tag.localeCompare(b.tag)
  );
}

export function getEssaysByTag(tag: string): Essay[] {
  const needle = tag.trim().toLowerCase();
  return getEssays().filter((essay) => essay.tags.includes(needle));
}
