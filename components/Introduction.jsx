import React from 'react';
import styled from 'styled-components';

const Introduction = ({ myref }) => {
  return (
    <Container>

      <h1 ref={myref}>Welcome!</h1>
      
      <div className="introduction">
        <p>
          My name's Christian Valenzuela, your friendly neighborhood web developer!
          I am glad you came to visit my page!
        </p>
        
        <p>
          I build everything: whether it is the landing page for your next product, a portfolio site for your artwork or a full e-commerce site.
        </p>
        
        <p>I am a passionate developer with a particular affinity towards Javasciprt and Node. But I also love tinkering in other languages like bash/zsh, python, and zig!</p>
      </div>
    </Container>
  );
}


const Container = styled.div`
  width: 100%;
`;

export default Introduction;

