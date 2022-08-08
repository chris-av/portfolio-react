import React, { useRef } from 'react';
import styled from 'styled-components';
import { github, instagram, linkedin } from '@/data/socials';


import Introduction from '@/components/Introduction';
import Cryptos from '@/components/Cryptos';
import Services from '@/components/Services';
import Technologies from '@/components/Technologies';

import Message from '@/components/Message';


const AboutMe = () => {

  const ref = useRef();
  
  return (
    <Container>
          

      <Message myref={ref} />
      
      <Introduction myref={ref} />

      <div style={{ margin: "5rem 0" }}></div>

      <Services />

      <div style={{ margin: "5rem 0" }}></div>


      <h1>Wanna donate ? </h1>

      <Cryptos />

      <div className="footer-container">
        <a target="_blank" rel="noopener noreferrer" href={linkedin}><i className={`linkedin link big black icon`}></i></a>
        <a target="_blank" rel="noopener noreferrer" href={github}><i className={`github link big black icon`}></i></a>
        <a target="_blank" rel="noopener noreferrer" href={instagram}><i className={`instagram link big black icon`}></i></a>
      </div>


    </Container>
  );
}


const Container = styled.div`

  width: 100%;

  .introduction {
    max-width: 750px;
  }

  h1 { text-align: center; }

  .footer-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 40px 0;
  }


`;



export default AboutMe;

