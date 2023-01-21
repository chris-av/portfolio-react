import React, { useState, useLayoutEffect, useEffect } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useAppContext } from '@/state/state';

import useWindowSize from '@/hooks/useWindowSize';


import { github, instagram, linkedin } from '@/data/socials';

const NavigationMobile = () => {
  
  const { pathname: location } = useRouter();
  const windowSize = useWindowSize();
  const { open, toggleOpen } = useAppContext();


  useIsomorphicLayoutEffect(() => {
    if (windowSize.width >= 1000) { toggleOpen(false) }
  }, [windowSize, location, toggleOpen]);

  return (
    <Container open={open}>
      <nav className="mb-menu">
        <ul>

          <li className="mb-menu-item">
            <Link href="/" onClick={() => toggleOpen(false)}>
              About
            </Link>
          </li>

          <li className="mb-menu-item">
            <Link href="/portfolio" onClick={() => toggleOpen(false)}>
              Portfolio
            </Link>
          </li>

          <li className="mb-menu-item">
            <Link href="/resume" onClick={() => toggleOpen(false)}>
              Resume
            </Link>
          </li>

          <li className="mb-menu-item">
            <Link href="/contact" onClick={() => toggleOpen(false)}>
              Contact
            </Link>
          </li>

        </ul>
      </nav>
      <div className="logo-container">
        <a href={linkedin}><i className={`linkedin link big inverted icon`}></i></a>
        <a href={github}><i className={`github link big inverted icon`}></i></a>
        <a href={instagram}><i className={`instagram link big inverted icon`}></i></a>
      </div>
    </Container>
  );
}



const Container = styled.div<{ open: boolean }>`

  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  background-color: #434179;
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 80px;
  left: 0;
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  width: 100%;
  color: white;
  ul { list-style: none; }

  .mb-nav-bar {
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 20px;
  }

  .hamburger { display: flex; flex-direction: column; }
  .hamburger-bar {
    width: 35px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
  }

  .mb-menu {
    z-index: 1000000;
    font-size: 20px;
  }

  .mb-menu-item {
    margin: 15px 0;
    a { text-decoration: none; color: white; }
  }

  .logo-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 40px 0;
  }
`;





export default NavigationMobile;
