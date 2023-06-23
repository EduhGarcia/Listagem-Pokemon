import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
      background-image: linear-gradient(to bottom, #e5dfdf, #b4b4b4);
      background-repeat: no-repeat;
      min-height: 100vh;
      font-size: 16px;
  }

  * {
    font-weight: 200;
    text-decoration: none;
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing: border-box;
}
`