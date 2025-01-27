"use client";
import Link from 'next/link';
import Burger from '@/components/Burger';

export default function Navigation() {
  return (
    <div>
      <div className="fixed z-30 h-[80px] w-full bg-purple text-white lg:static">

        <div className="absolute z-50 h-full lg:hidden">
          <Burger />
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
              <Link href="/portfolio" className="flex h-full items-center hover:text-[#DFDFDF]">
                My Portfolio
              </Link>
            </li>
            <li className="flex h-full min-w-[120px] items-center justify-center">
              <Link href="/resume" className="flex h-full items-center hover:text-[#DFDFDF]">
                Resume
              </Link>
            </li>
            <li className="flex h-full min-w-[120px] items-center justify-center">
              <Link href="/contact" className="flex h-full items-center hover:text-[#DFDFDF]">
                Contact
              </Link>
            </li>
          </ul>

        </nav>

      </div>

    </div>
  );
}
