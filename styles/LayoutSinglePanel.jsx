import React from 'react';
import styled from 'styled-components';


export default function LayoutSinglePanel({ children }) {
  return (
    <Container>
      { children }
    </Container>
  );
}


const Container = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    margin-bottom: 50px;
  }

  p {
    font-size: 1.2rem;
    font-weight: 100;
  }

  .header {}

  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 900px) {
    padding: 2rem;
    p { font-size: 1rem; }
    h1 {
      font-size: 2rem;
      text-align: center;
    }
  }

`;

