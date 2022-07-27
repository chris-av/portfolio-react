import React from 'react';
import styled from 'styled-components';

import AnimatedCard from './AnimatedCard';


const Services = () => { return (
    <Container>

      <div className="cards">

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

    </Container>
  );
}



const Container = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 14px;

  .cards {
    display: grid;
    margin: 2rem 0;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    grid-auto-rows: minmax(250px, auto);

  }


  @media (max-width: 900px) {
    font-size: 10px;
    padding: 0px 0px 0px 20px;
    .cards {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0;
    }
  }


`;


export default Services;

