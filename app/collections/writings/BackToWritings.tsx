"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const WRITINGS_PATH = "/collections/writings";

export default function BackToWritings() {
  const pathname = usePathname();

  // Only show on individual entries, not on the writings list itself
  if (pathname.replace(/\/$/, "") === WRITINGS_PATH) return null;

  return (
    <Link
      href={WRITINGS_PATH}
      className="mb-8 inline-flex items-center gap-1 rounded-lg border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-sm font-bold text-purple-500 transition-all duration-300 ease-out hover:border-purple-500 hover:bg-purple-500/10"
    >
      <i className="chevron left icon leading-none" />
      All writings
    </Link>
  );
}
