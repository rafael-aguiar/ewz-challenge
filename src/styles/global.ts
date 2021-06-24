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
    background: #e5e5e5;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
  
  button {
    cursor: pointer;
  }
`;
