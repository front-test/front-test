import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
      box-sizing: border-box;
    }
    
    body, html, #root {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      color: #2C2C2C;
      line-height: 1.5;
    }
`;