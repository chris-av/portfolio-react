import React from 'react';
import Link from 'next/link';
import Burger from '@/components/Burger';


export default function Navigation() {
    return (
      <div className="fixed w-full lg:static h-[80px] bg-purple text-white z-30">

        <div className="h-full lg:hidden">
          <Burger />
        </div>

        <nav className="hidden h-full lg:flex justify-between">
          
          <Link href="/" className="flex justify-center items-center select-none text-2xl ml-6 hover:text-white">
            Christian Valenzuela
          </Link>
          
          <ul className="flex justify-between items-center">
            <li className="flex justify-center items-center h-full min-w-[120px]">
              <Link href="/" className="h-full flex items-center hover:text-white">
                About Me
              </Link>
            </li>
            <li className="flex justify-center items-center h-full min-w-[120px]">
              <Link href="/portfolio" className="h-full flex items-center hover:text-white">
                My Portfolio
              </Link>
            </li>
            <li className="flex justify-center items-center h-full min-w-[120px]">
              <Link href="/resume" className="h-full flex items-center hover:text-white">
                Resume
              </Link>
            </li>
            <li className="flex justify-center items-center h-full min-w-[120px]">
              <Link href="/contact" className="h-full flex items-center hover:text-white">
                Contact
              </Link>
            </li>
          </ul>

        </nav>

      </div>
    );
}

