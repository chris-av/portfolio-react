import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppContext } from '@/state/state';

import useWindowSize from '@/hooks/useWindowSize';


import { github, instagram, linkedin } from '@/data/socials';

export default function NavigationMobile() {
  
  const { pathname: location } = useRouter();
  const windowSize = useWindowSize();
  const { open, toggleOpen } = useAppContext();


  useIsomorphicLayoutEffect(() => {
    if (windowSize.width >= 1000) { toggleOpen(false) }
  }, [windowSize, location, toggleOpen]);

  return (
    <div 
      style={{ transform: open ? "translateX(0)" : "translateX(-100%)" }} 
      className="fixed bg-purple z-10 flex flex-col h-full w-full text-white p-12 -mt-[1px] transition-transform duration-500"
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
      <div className="logo-container w-full my-12 flex justify-center items-center [&>*]:mx-4 [&>*]:text-2xl">
        <a href={linkedin}><i className={`linkedin link big inverted icon`}></i></a>
        <a href={github}><i className={`github link big inverted icon`}></i></a>
        <a href={instagram}><i className={`instagram link big inverted icon`}></i></a>
      </div>
    </div>
  );
}

