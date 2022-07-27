import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';



const Technologies = () => {
  return (
    <Container>
      <h1>Technologies I have experience in : </h1>
      <h3>Languages/Libraries</h3>
      <div className="icon-row">
        <i className="html5 huge red icon" />
        <i className="js huge yellow icon" />
        <i className="css3 huge blue icon" />
      </div>
      <div className="icon-row">
        <i className="node js huge green icon" />
        <i className="python huge blue icon" />
        <i className="linux huge black icon" />
      </div>
      <div className="icon-row">
        <i className="react huge blue icon" />
        <i className="less huge purple icon" />
        <i className="sass huge pink icon" />
      </div>

      <div className="divider"></div>

      <h3>Databases</h3>

      <div className="icon-row">
        <i className="custom-icon-container">
          <Image src="/postgres.svg" width={100} height={80} alt="postgres database"/>
        </i>
        <i className="custom-icon-container">
          <Image src="/MongoDB_Logo_FullColorBlack_RGB.svg" width={100} height={80}  alt="mongo nosql database"/>
        </i>
        <i className="custom-icon-container">
          <Image src="/Firebase_Logo_Standard_Lockup.svg" width={100} height={80} alt="Google Firebase" />
        </i>
      </div>

      <div className="divider"></div>

      <h3>Platforms</h3>

      <div className="icon-row">
        <i className="git huge black icon" />
        <i className="github huge black icon" />
        <i className="docker huge blue icon" />
      </div>

      <div className="icon-row">
        <i className="cpanel huge orange icon" />
        <i className="aws huge yellow icon" />
        <i className="linode huge green icon" />
      </div>

    </Container>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;

  h3 { text-align: center; }


  i { cursor: pointer; transition: all 0.6s ease-in-out; user-select: none; }
  i img { transition: all 0.6s ease-in-out; }

  .divider {
    margin: 2rem 0;
    height: 1px;
    border: solid 1px #D9DBDD;
  }

  .icon-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }

  .custom-icon-container {
    max-width: 200px;
    // img { max-width: 120px; width: 100%; }

    img:hover {
      max-width: 250px;
    }

    .postgres { width: 80px;  }
    .mongo { width: 150px; }
    .firebase { width: 150px; }

  }


  @media (max-width: 900px) {
    .custom-icon-container {
      max-width: 120px;
      img:hover {
        max-width: 150px;
      }
      .postgres { width: 40px; }
      .mongo { width: 90px; }
      .firebase { width: 90px; }
    }
  }


`;



export default Technologies

