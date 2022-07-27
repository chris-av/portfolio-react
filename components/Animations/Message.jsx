import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

// import styles from './styles.module.scss';

const Message = () => {
  const [flip, set] = useState(false);
		
  const props = useSpring({
      from: { opacity: 0, transform: `translatey(-10%)` },
      to: { opacity: 1, transform: `translateY(0%)` },
      // reset: true,
      // reverse: flip,
      delay: 800,
      config: config.molasses,
      onRest: () => set(!flip)
    });
  
    const props2 = useSpring({
      from: { opacity: 0, transform: `translatey(-10%)` },
      to: { opacity: 1, transform: `translateY(0%)` },
      // reset: true,
      // reverse: flip,
      delay: 1400,
      config: config.molasses,
      onRest: () => set(!flip)
    });

		return (
			<div style={{
        // height: "80vh", 
        margin: "150px 0",
        textAlign: "center"
      }}>
        <animated.h1 style={props}>Christian Valenzuela</animated.h1>
        <animated.h2 style={props2}><strong>const</strong> greeting = () =&gt; console.log(<span>'hello world!'</span>);</animated.h2>
      </div>
		);
}

export default Message;
