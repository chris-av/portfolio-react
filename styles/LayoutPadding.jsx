import React from 'react';
import styled from 'styled-components';


export default function Layout({ myref, children }) {
  return (
    <Container ref={myref}>
      {children}
    </Container>
  );
}


const Container = styled.div`
  font-size: 1.2rem;
  padding: 4rem;

  @media (max-width: 900px) {
    padding: 2rem;
    font-size: 1rem;
  }

`;





