import React from 'react';

import s from './services.module.scss';

import AnimatedCard from '../AnimatedCard/AnimatedCard';


const Services = () => { return (
    <div className={s['container']}>

      <div className={s["cards"]}>

        <AnimatedCard front="Landing Pages">
          <p>I can help you build out landing pages for your products!</p>
        </AnimatedCard>

        <AnimatedCard front="Portfolios">
          <p>Are you an artist? A lawyer? A photographer? If you need help showcasing your work hit me up!</p>
          <p>I can create the perfect website to beautifully present your hard work and talents!</p>
        </AnimatedCard>

        <AnimatedCard front="E-commerce">
          <p>I can connect your payment solution to your personal website, whether its Wordpress, Squarespace or other website platform!</p>
        </AnimatedCard>

        <AnimatedCard front="Data Cleaning and ETL">
          <p>I've got few years experience as a data analyst.</p>
          <p>I'm not only a spreadsheet wiz, I also use Python (pandas) and R for the most sophisticated data needs.</p>
        </AnimatedCard>

        <AnimatedCard front="Tutor">
          <p>Want some quick hands on tutorials on everything web dev? Data analysis?</p>
          <p>I can teach you what I know in a one on one session!</p>
        </AnimatedCard>

        <AnimatedCard front="Network">
          <p>Wanna connect professionally? I'm always down! 😎</p>
        </AnimatedCard>

      </div>

    </div>
  );
}


export default Services;

