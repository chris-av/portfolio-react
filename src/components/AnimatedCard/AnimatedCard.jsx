import React, { useState } from 'react';
import s from './animatedcard.module.scss';

const AnimatedCard = ({ front, children }) => {
  const [ active, setActive ] = useState(false);

  const clickerHandler = () => {
    setActive(prevState => !prevState);
  }

  return (
    <div className={s["flip-card"]} onClick={clickerHandler}>
      <div className={s[`flip-card-inner${active ? "-active" : ""}`]}>
        <h3 className={s["flip-card-front"]}>{ front }</h3>
        <div className={s["flip-card-back"]}>
          { children }
        </div>
      </div>
    </div>
  );
}

export default AnimatedCard
