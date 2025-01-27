"use client";
import { useNavbarContext } from '@/state/navbar';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import useWindowSize from '@/hooks/useWindowSize';


import { github, instagram, linkedin } from '@/data/socials';

export default function NavigationMobile() {

  const { open, toggleOpen } = useNavbarContext();

  const location = usePathname();
  const windowSize = useWindowSize();


  useIsomorphicLayoutEffect(() => {
    if (windowSize.width >= 1000) { toggleOpen(false) }
  }, [windowSize, location, toggleOpen]);

  return (
    <div 
      style={{ transform: open ? "translateX(0)" : "translateX(-100%)" }} 
      className="fixed z-10 -mt-[1px] flex h-full w-full flex-col bg-purple px-12 pt-20 text-white transition-transform duration-500"
    >
      <nav className="mb-menu text-3xl">
        <ul>

          <li className="mb-menu-item my-4">
            <Link href="/" onClick={() => toggleOpen(false)}>
              About
            </Link>
          </li>

          <li className="mb-menu-item my-4">
            <Link href="/portfolio" onClick={() => toggleOpen(false)}>
              Portfolio
            </Link>
          </li>

          <li className="mb-menu-item my-4">
            <Link href="/resume" onClick={() => toggleOpen(false)}>
              Resume
            </Link>
          </li>

          <li className="mb-menu-item p">
            <Link href="/contact" onClick={() => toggleOpen(false)}>
              Contact
            </Link>
          </li>

        </ul>
      </nav>
      <div className="logo-container my-12 flex w-full items-center justify-center [&>*]:mx-4 [&>*]:text-2xl">
        <a href={linkedin}><i className={`linkedin link big inverted icon`}></i></a>
        <a href={github}><i className={`github link big inverted icon`}></i></a>
        <a href={instagram}><i className={`instagram link big inverted icon`}></i></a>
      </div>
    </div>
  );
}
