import { ReactNode, RefObject } from 'react';
import styled from 'styled-components';


export default function Layout({ myref, children } : { myref?: RefObject<HTMLDivElement>, children?: ReactNode }) {
  return (
    <Container ref={myref}>
      {children}
    </Container>
  );
}


const Container = styled.div`
  font-size: 1.2rem;
  padding: 4rem;
  height: 90vh;

  @media (max-width: 900px) {
    padding: 2rem;
    font-size: 1rem;
  }

`;




