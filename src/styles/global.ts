import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'roboto', sans-serif
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    background: #0f0f0f;
    color: #f5f5f5;
  }

  #root {
    max-width: 100vw;
    margin: 0 auto;
  }
  
  button {
    cursor: pointer;
  }
`;
