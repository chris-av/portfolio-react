import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';


const Message = () => {
  const [flip, set] = useState(false);
		
  const props = useSpring({
      from: { opacity: 0, transform: `translatey(-10%)` },
      to: { opacity: 1, transform: `translateY(0%)` },
      delay: 800,
      config: config.molasses,
      onRest: () => set(!flip)
    });
  
    const props2 = useSpring({
      from: { opacity: 0, transform: `translatey(-10%)` },
      to: { opacity: 1, transform: `translateY(0%)` },
      delay: 1400,
      config: config.molasses,
      onRest: () => set(!flip)
    });

		return (
			<Container>
        <Message1 style={props}>Christian Valenzuela</Message1>
        <Message2 style={props2}><strong>const</strong> greeting = () =&gt; console.log(<span>'hello world!'</span>);</Message2>
      </Container>
		);
}



const Container = styled.div`
  margin: 150px 0;
  text-align: center;
  width: 100%;
`;


const Message1 = styled(animated.h1)`
  font-size: 40px;
  font-family: 'Courier New', Courier, monospace;

  @media(max-width: 900px) {
    font-size: 20px;
  }

`;

const Message2 = styled(animated.h2)`
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;

  span { font-size: inherit; font-family: inherit; color: blue; }
  strong { font-size: inherit; font-family: inherit; font-weight: 900; }

  @media(max-width: 900px) {
    font-size: 18px;
  }

`;


export default Message;

