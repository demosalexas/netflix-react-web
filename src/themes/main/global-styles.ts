import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }
  
  *, *::after, *::before {
  box-sizing: border-box;
  }
  
`;

export default GlobalStyles;
