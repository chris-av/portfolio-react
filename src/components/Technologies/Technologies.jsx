import React from 'react';
import s from './technologies.module.scss';

// accompany icons with one word descriptions
// add Postgres, APIs, file (shell scripting), cloud (Google Cloud)
// mongo? firebase?
import postgres from '../../assets/postgres.svg';
import mongo from '../../assets/MongoDB_Logo_FullColorBlack_RGB.svg';
import firebase from '../../assets/Firebase_Logo_Standard_Lockup.svg';


const Technologies = () => {
  return (
    <div className={s['container']}>
      <h1>Technologies I have experience in : </h1>
      <h3>Languages/Libraries</h3>
      <div className={s['icon-row']}>
        <i className="html5 huge red icon" />
        <i className="js huge yellow icon" />
        <i className="css3 huge blue icon" />
      </div>
      <div className={s['icon-row']}>
        <i className="node js huge green icon" />
        <i className="python huge blue icon" />
        <i className="linux huge black icon" />
      </div>
      <div className={s['icon-row']}>
        <i className="react huge blue icon" />
        <i className="less huge purple icon" />
        <i className="sass huge pink icon" />
      </div>

      <div className={s['divider']}></div>

      <h3>Databases</h3>
      <div className={s['icon-row']}>
        <i className={s['custom-icon-container']}><img className={`${s['postgres']}`} src={postgres} alt="postgres database" /></i>
        <i className={s['custom-icon-container']}><img className={`${s['mongo']}`} src={mongo} alt="mongo nosql database" /></i>
        <i className={s['custom-icon-container']}><img className={`${s['firebase']}`} src={firebase} alt="Google Firebase" /></i>
      </div>

      <div className={s['divider']}></div>

      <h3>Platforms</h3>
      <div className={s['icon-row']}>
        <i className="database huge black icon" />
        <i className="git huge black icon" />
        <i className="github huge black icon" />
      </div>
      <div className={s['icon-row']}>
        <i className="cpanel huge orange icon" />
        <i className="aws huge yellow icon" />
        <i className="linode huge green icon" />
      </div>
      <i className="docker huge blue icon" />
    </div>
  );
}

export default Technologies

