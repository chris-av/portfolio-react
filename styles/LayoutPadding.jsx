import React from 'react';
import styled from 'styled-components';


export default function Layout({ children }) {
  return (
    <Container>
      { children }
    </Container>
  );
}


const Container = styled.div`
  font-size: 1.2rem;
  padding: 4rem;
  height: 100vh;

  @media (max-width: 900px) {
    padding: 2rem;
    font-size: 1rem;
  }

`;





