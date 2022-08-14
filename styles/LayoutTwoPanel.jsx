import React from 'react'
import styled from 'styled-components';


export default function LayoutTwoPanel({ children, reverse = false }) {
  return (
    <Container reverse={reverse}>
      { children }
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
  padding: 4rem;
  min-height: 450px;
  flex-direction: ${({ reverse}) => reverse ? "row-reverse" : "row" };

  .left {
    width: ${({reverse}) => reverse ? '60' : '50'}%;
  }

  .right {
    width: ${({reverse}) => reverse ? '40' : '50'}%;
  }


  .left {
    h1 {
      text-align: left;
      font-size: 4rem;
      margin-bottom: 50px;
    }

    p {
      font-weight: 100;
      font-size: 1.2rem;
    }

    text-align: left;
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem;
  }

  @media(max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    .left, .right {
      width: 100%;
      p { font-size: 1rem; }
    }

    .left h1 {
      font-size: 2rem;
      text-align: center;
    }

    .right {
      margin: 3rem 0;
    }

  }

`;

