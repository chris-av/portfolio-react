import React, { useState } from 'react';
import styled from 'styled-components';
// import s from './animatedcard.module.scss';

const AnimatedCard = ({ front, children }) => {
  const [ active, setActive ] = useState(false);

  const clickerHandler = () => {
    setActive(prevState => !prevState);
  }

  // flip-card
  // 
  return (
    <Container className="flip-card" onClick={clickerHandler}>
      <div className={`flip-card-inner${active ? "-active" : ""}`}>
        <h3 className="flip-card-front">{ front }</h3>
        <div className="flip-card-back">
          { children }
        </div>
      </div>
    </Container>
  );
}


const Container = styled.div`
  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    user-select: none;
    margin: 20px 0;

    p { font-size: 1.2rem; }

  }

  .flip-card-inner {
    position: relative;
    border: none;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s ease-in-out;
    transform-style: preserve-3d;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transform: rotateY(0deg);
  }


  .flip-card-inner-active {
    position: relative;
    border: none;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s ease-in-out;
    transform-style: preserve-3d;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

  }

  .flip-card-front {
    background-color: #B9CEDD;
    color: black;
    border: none;
  }

  .flip-card-back {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: #CBE3F4;
    color: black;
    transform: rotateY(180deg);
  }

  @media (max-width: 900px) {
    .flip-card {
      width: 100%;
    }
  }


`;



export default AnimatedCard
