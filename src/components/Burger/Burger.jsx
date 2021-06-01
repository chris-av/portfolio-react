import React from 'react';
import styles from './burger.module.scss';

const Burger = ({ open, toggleOpen }) => {
  const isExpanded = true;
  
  return (
    <button aria-label="Toggle menu" aria-expanded={isExpanded} className={styles['container']} onClick={() => toggleOpen(!open)}>
      <span className={styles['bar']} style={{ transform: open ? 'rotate(45deg)' : 'rotate(0)' }} />
      <span className={styles['bar']} style={{ transform: open ? 'translateX(20px)' : 'translateX(0)', opacity: open ? 0 : 1 }} />
      <span className={styles['bar']} style={{ transform: open ? 'rotate(-45deg)' : 'rotate(0)' }} />
    </button>
  );
}

export default Burger;