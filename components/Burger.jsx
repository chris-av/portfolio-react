import React from 'react';
import styled from 'styled-components';

const Burger = ({ open, toggleOpen }) => {
  const isExpanded = true;
  
  return (
    <Container aria-label="Toggle menu" aria-expanded={isExpanded} onClick={() => toggleOpen(!open)}>
      <span className="bar" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0)' }} />
      <span className="bar" style={{ transform: open ? 'translateX(20px)' : 'translateX(0)', opacity: open ? 0 : 1 }} />
      <span className="bar" style={{ transform: open ? 'rotate(-45deg)' : 'rotate(0)' }} />
    </Container>
  );
}


const Container = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 80px;
  border: none;
  cursor: pointer;
  background-color: #434179;
  border: none;
  outline: transparent;

  .burger {
    width: 2rem;
    height: 2rem;
  }

  .bar {
    height: 4px;
    width: 35px;
    background: white;
    border-radius: 30px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 3px;
    margin: 3px 0;
    margin-left: 15px;

  }

  @media (max-width: 1100px) {  isplay: flex; }
  @media (max-width: 750px) { display: flex; }

`;



export default Burger;
