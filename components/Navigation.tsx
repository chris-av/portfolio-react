"use client";
import Link from 'next/link';
import Burger from '@/components/Burger';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navigation() {
  return (
    <div>
      <div className="fixed z-30 h-[80px] w-full bg-purple text-white transition-colors dark:bg-purple-deep lg:static">

        <div className="absolute z-50 h-full lg:hidden">
          <Burger />
        </div>

        <div className="absolute right-4 z-50 flex h-full items-center lg:hidden">
          <ThemeToggle />
        </div>

        <nav className="hidden h-full justify-between lg:flex">

          <Link href="/" className="ml-6 flex select-none items-center justify-center text-2xl hover:text-[#DFDFDF]">
            <i className="terminal icon olive" />
          </Link>

          <ul className="flex items-center justify-between">
            <li className="flex h-full min-w-[120px] items-center justify-center">
              <Link href="/" className="flex h-full items-center hover:text-[#DFDFDF]">
                About Me
              </Link>
            </li>
            <li className="flex h-full min-w-[120px] items-center justify-center">
              <Link href="/resume" className="flex h-full items-center hover:text-[#DFDFDF]">
                Resume
              </Link>
            </li>
            <li className="flex h-full min-w-[120px] items-center justify-center">
              <Link href="/collections/music" className="flex h-full items-center hover:text-[#DFDFDF]">
                Music
              </Link>
            </li>
            <li className="flex h-full min-w-[120px] items-center justify-center">
              <Link href="/collections" className="flex h-full items-center hover:text-[#DFDFDF]">
                Collections
              </Link>
            </li>
            <li className="mr-4 flex h-full items-center justify-center">
              <ThemeToggle />
            </li>
          </ul>

        </nav>

      </div>

    </div>
  );
}
