import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --off-white: #FAF9F6;
    --primary: #003547;
    --secondary: #005E54;
    --tertiary: #C2BB00;
  
    --warning:  #ED8B16;
    --error: #E1523D;
  }

  body {
    background-color: var(--primary);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    height: 100vh;
    width: 100vw;
  }

`;

export default GlobalStyle;
