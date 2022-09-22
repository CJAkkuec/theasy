import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --off-white: #F9F4F9;
    --primary: #7AD9D9;
    --primary-light: #9BECEC;
    --secondary: #CDE5E3;
    --secondary-light: #DBEDEB;
    --tertiary: #F5DFDF;
    --tertiary-light: #F8E9E9;
    --decoration: #EFCCCC;
  
    --warning:  #ED8B16;
    --warning-light: #F1A347;
    --error: #E1523D;
    --error-light: #EB6F5C;
  }

  body {
    background-color: var(--off-white);
    font-family: Monaco, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    height: 100vh;
    width: 100vw;
  }

`;

export default GlobalStyle;
