import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .app {
    height: 100%;
    width: 100%;
  }
  
  .content {
    padding: 25px;
  }



`;



export default GlobalStyle;

