import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const Navigation = () => {
    return (
      <Container className="container">

        <nav className="navbar">
          
          <Link href="/" className="navbar-brand">
            <a className="navbar-brand">Christian Valenzuela</a>
          </Link>
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">About Me</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/portfolio">
                <a className="nav-link">My Portfolio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/resume">
                <a className="nav-link">Resume</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>

        </nav>

      </Container>
    );
}


const Container = styled.div`
  
  width: 100%;

  .navbar {
    width: 100%;
    background-color: #434179;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 80px;
  }

  .navbar-brand { color: #e9e9e9;
    text-decoration: none;
    font-size: 20px;
    font-weight: 800;
    margin: auto 0;
    margin-left: 50px;
  }

  .nav-item {
    height: 100%;
    display: flex; justify-content: center; align-items: center;
    min-width: 120px;
    &:hover { background-color: #434179; cursor: pointer; }
  }

  .nav-link {
    text-decoration: none; 
    color: inherit; color: #e9e9e9;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar-nav {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    list-style: none;
  }


    
  @media only screen and (max-width: 1100px) {
    
    display: none;

  }


`;



export default Navigation;
