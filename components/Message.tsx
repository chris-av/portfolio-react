import { useState, useRef } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from '@react-spring/web';


const Message = () => {
  const [flip, set] = useState(false);
  const messageRef = useRef<null | HTMLDivElement>();

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

  const props3 = useSpring({
    from: { opacity: 0, transform: `translatey(-10%)` },
    to: { opacity: 1, transform: `translateY(0%)` },
    delay: 2000,
    config: config.molasses,
    onRest: () => set(!flip)
  });

  return (
    <Container>
      <Message1 style={props}>Christian Valenzuela</Message1>
      <Message2 style={props2}><strong>const</strong> greeting = () =&gt; console.log(<span>'hello world!'</span>);</Message2>
      <div style={{ margin: "5rem 0" }} ></div>
      <animated.i style={props3} className="angle down huge icon" onClick={() => {
        if (messageRef.current) {
          messageRef.current.scrollIntoView();
        }
      }}></animated.i>
    </Container>
  );
}



const Container = styled.div`
  margin: 150px 0;
  text-align: center;
  width: 100%;
  transition: all 0.4s ease;

  height: 100vh;

  .angle.down.icon {
    transition: all 0.2s ease-in-out;
    tranform-origin: 50% 50%;
    cursor: pointer;
    &:hover {
      color: grey;
    }
  }


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

