import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';


import LayoutPadding from '@/styles/LayoutPadding';


const Introduction = ({ myref }) => {

  const [ items, setItems ] = useState('Analyst');
  const transitions = useTransition(items, {
    from: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -50 },
    // update: {},
  });


  useEffect(() => {
    const tmp = setInterval(() => {
      setItems(prev => {
        if (prev === 'Developer') return 'Analyst';
        if (prev === 'Analyst') return 'Engineer';
        if (prev === 'Engineer') return 'Developer';
      })
    }, 2000);

    return () => clearInterval(tmp);

  }, [items]);

  return (
    <LayoutPadding myref={myref}>
      <Container>
        <h1 className="sentence">Professional &nbsp;
          <animated.div className="slidingVertical">
            { transitions((style, item) => (
              <animated.span style={{ ...style }} className={`${item.toLowerCase()}`}>
                { item }
              </animated.span>
            )) }
          </animated.div>
        </h1>
        
        <div className="introduction">
          <p>
            My name's Christian Valenzuela, your friendly neighborhood web developer!
            I am glad you came to visit my page!
          </p>
          
          <p>
            I build everything: whether it is the landing page for your next product, a portfolio site for your artwork or a full e-commerce site.
          </p>
          
          <p>I am a passionate developer with a particular affinity towards Javascript and Node. But I also love tinkering in other languages like bash/zsh, python, and zig!</p>
        </div>
      </Container>
    </LayoutPadding>
  );
}



const Container = styled.div`
  width: 100%;

  h1 {
    font-size: 4rem;
    margin: 3rem 0;
  }

  .wrapper {
    position: relative;
    width: 100%;
  }

  .sentence {
    text-align: left;
  }

  .slidingVertical {
    width: 100%;
    display: inline;
    overflow-y: hidden;
  }

  .developer { color: #C85D91; }
  .analyst { color: #5D91C8; }
  .engineer { color: #91C85D; }

  .slidingVertical span {
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }

  @media(max-width: 900px) {
    h1 {
      font-size: 2.5rem;
    }
    .sentence {
      margin-left: 0;
    }
  }

  @media(max-width: 400px) {
    h1 {
      font-size: 1.5rem !important;
    }

    .wrapper {
      overflow: hidden;
    }
  }

`;

export default Introduction;

