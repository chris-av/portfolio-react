import React from 'react';
import styled from 'styled-components';
import { github, instagram, linkedin } from '@/data/socials';


import Cryptos from '@/components/Cryptos';
import Services from '@/components/Services';
import Technologies from '@/components/Technologies';

import Message from '@/components/Animations/Message';


const AboutMe = () => {
  
  return (
    <Container>
          
        <div className="content-window">

          <Message />
          
          <h1>Welcome!</h1>
          
          <p>
            My name's Christian Valenzuela, your friendly neighborhood web developer!
            I am glad you came to visit my page!
          </p>
          
          <p>
            I build everything: whether it is the landing page for your next product, a portfolio site for your artwork or a full e-commerce site.
          </p>
          
          <p>I am a passionate developer with a particular affinity towards Javasciprt and Node. But I also love tinkering in other languages like bash/zsh, python, and zig!</p>

          <div style={{ margin: "5rem 0" }}></div>

          <h1>Services</h1>

          <Services />

          <div style={{ margin: "5rem 0" }}></div>

          <Technologies />

          <div style={{ margin: "5rem 0" }}></div>

          <h1>Wanna donate ? </h1>

          <Cryptos />
          {/* <MyMusic /> */}

          <div className="logo-container">
            <a target="_blank" rel="noopener noreferrer" href={linkedin}><i className={`linkedin link big black icon`}></i></a>
            <a target="_blank" rel="noopener noreferrer" href={github}><i className={`github link big black icon`}></i></a>
            <a target="_blank" rel="noopener noreferrer" href={instagram}><i className={`instagram link big black icon`}></i></a>
          </div>

        </div>

    </Container>
  );
}


const Container = styled.div`

  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  .content-window {
    max-width: 700px;
    h1 { text-align: center; }
  }

  .stack-container {
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .stack-logo {
    max-width: 100px;
  }

  .logo-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 40px 0;
  }


`;



export default AboutMe;
