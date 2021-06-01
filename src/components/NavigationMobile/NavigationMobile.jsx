import React, { useLayoutEffect, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './navigationmobile.module.scss';

import { github, instagram, linkedin } from '../../socials';

const NavigationMobile = ({ open, toggleOpen }) => {
  
  const location = useLocation();

  useLayoutEffect(() => {
    function checkMobileSize() {
      const width = document.getElementById('root').clientWidth;
      if (width > 1000) { toggleOpen(false) }
    }

    function outsideClick() {
      toggleOpen(false);
    }

    window.addEventListener('resize', checkMobileSize);
    document.querySelector('.content').addEventListener('click', outsideClick);

    return () => {
      window.removeEventListener('resize', checkMobileSize);
      document.querySelector('.content').removeEventListener('click', outsideClick);
    };

  });

  useEffect(() => {
    // console.log('location has changed!');
    toggleOpen(false);
  }, [location, toggleOpen]);
  
  return (
    <div className={styles["mb-top"]} style={{ transform: open ? 'translateX(0)' : 'translateX(-100%)' }}>
      <nav className={styles["mb-menu"]}>
        <ul>
          <li className={styles["mb-menu-item"]}><Link onClick={() => toggleOpen(false)} to="/">About</Link></li>
          <li className={styles["mb-menu-item"]}><Link onClick={() => toggleOpen(false)} to="/portfolio">Portfolio</Link></li>
          <li className={styles["mb-menu-item"]}><Link onClick={() => toggleOpen(false)} to="/resume">Resume</Link></li>
          <li className={styles["mb-menu-item"]}><Link onClick={() => toggleOpen(false)} to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className={styles['logo-container']}>
        <a href={linkedin}><i className={`linkedin link big inverted icon`}></i></a>
        <a href={github}><i className={`github link big inverted icon`}></i></a>
        <a href={instagram}><i className={`instagram link big inverted icon`}></i></a>
      </div>
    </div>
  );
}

export default NavigationMobile;