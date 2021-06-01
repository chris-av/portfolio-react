import React from 'react';

import styles from './socials.module.scss';

const links = {
  linkedin: 'https://www.linkedin.com/in/christian-a-valenzuela/',
  github: 'https://github.com/im2wddrf',
  instagram: 'https://www.instagram.com/chrisandre95'
}

const Socials = ({ color }) => {
  let useColor = color ? color : 'black';
  
  return (
    <div className={styles['container']}>
      <div className={styles['logo-container']}>
        
        <a href={links.linkedin}><i className={`linkedin link big ${useColor} icon`}></i></a>
        <a href={links.github}><i className={`github link big ${useColor} icon`}></i></a>
        <a href={links.instagram}><i className={`instagram link big ${useColor} icon`}></i></a>

      </div>
    </div>
  );
}

export default Socials;
