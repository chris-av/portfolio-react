import React from 'react';

import style from './card.module.scss';


const Card = ({ org, jobtitle, daterange, description, styles }) => {
  return (
    <div className={style["card"]} style={styles}>
      <div className={style["card-header"]}>
        <h2 className={style["header"]}>{org}</h2>
      </div>
      <div className={style["card-body"]}>
        <div className={style["card-title"]}>
          <h3 className={style["job-title"]}>{jobtitle}</h3>
          <div className={style["date-range"]}>{daterange}</div>
        </div>
        <div className={style["card-text"]}>
          {description()}
        </div>
        <br/>
      </div>
    </div>
  );
}



export default Card;