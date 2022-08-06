import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { useTransition, animated, config } from 'react-spring';
import { colors } from '@/styles/style-assets';


import LayoutPadding from '@/styles/LayoutPadding';


const Introduction = ({ myref }) => {

  const adjectives = [ 'Developer', 'Analyst', 'Engineer' ];


  return (
    <LayoutPadding>
      <Container>
        <div className="wrapper">
          <h1 ref={myref} className="sentence">Professional &nbsp;
            <div className="slidingVertical">
              { adjectives.map(adj => (
                <span className={`${adj.toLowerCase()}`}>{adj}</span> 
              ))}
            </div>
          </h1>
        </div>
        
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



const keyframeAnimations = keyframes`
  0% { opacity: 0; }
  5% { opacity: 0; transform: translateY(-50px); }
  10% { opacity: 1; transform: translateY(0px); }
  25% { opacity: 1; transform: translateY(0px); }
  30% { opacity: 0; transform: translateY(50px); }
  80% { opacity: 0; }
  100% { opacity: 0; }
`;


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
    animation: ${keyframeAnimations} 6s linear infinite 0s;
    opacity: 0;
    overflow: hidden;
    position: absolute;
  }

  .slidingVertical span:nth-child(2){
    animation-delay: 2s;
  }

  .slidingVertical span:nth-child(3){
    animation-delay: 4s;
  }

  @media(max-width: 900px) {
    h1 {
      font-size: 2.5rem;
    }
    .sentence {
      margin-left: 0;
    }
  }


`;

export default Introduction;

