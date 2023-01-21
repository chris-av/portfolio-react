import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '@/styles/style-assets';


interface CardProps {
  org: string;
  jobtitle: string;
  daterange: string;
  description: any;
  styles: any;
}

const Card = ({ org, jobtitle, daterange, description, styles } : CardProps) => {
  return (
    <Container style={styles}>
      <div className="card-header">
        <h2 className="header">{org}</h2>
      </div>
      <div className="card-body">
        <div className="card-title">
          <h3 className="job-title">{jobtitle}</h3>
          <div className="date-range">{daterange}</div>
        </div>
        <div className="card-text">
          {description()}
        </div>
        <br/>
      </div>
    </Container>
  );
}


const Container = styled.div`

  border: solid 1px #c9bebe;
  border-radius: 10px;
  margin: 30px auto;
  width: 100%;
  max-width: 700px;

  .card-header {
    h1, h2, h3 { margin: 0; }
    border-radius: 9px 9px 0 0;
    height: 60px;
    background-color: #70707e;
  }

  .header {
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #eeeeee;
    font-weight: 600;
  }

  .card-body {
    h1, h2, h3 { margin: 10px 0; }
    height: 100%;
    padding: 15px;
    a { text-decoration: underline; }
  }

  .card-title {
    margin: 0;
    display: flex;
    justify-content: space-between;
  }

  .job-title {
    max-width: 60%;
  }

  .date-range {
    font-size: 1rem;
    margin: auto 0;
  }

  .card-text div {
    margin: 15px 0;
  }

  .card-text p {
    margin: 15px 0;
  }

  .card-text div, p {
    font-size: 1.1rem;
  }

  @media(max-width: ${breakpoints.smartphoneRegular}) {

    .card-header {
      h2 { font-size: 24px; } 
      height: 90px;
      padding: 0 10px;
    }
    
    .card-title {
      flex-direction: column;
    }

    .job-title, .date-range {
      max-width: 100%;
      width: 100%;
    }

    .card-text div, p {
      font-size: 14px;
    }

  }



`;


export default Card;
