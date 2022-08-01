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
  padding: 25px;
`;





