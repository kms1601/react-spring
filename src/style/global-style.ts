import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: black;
    text-decoration: none;
  }

  html {
    min-height: 100vh;
  }

  body {
    min-height: 100%;
    font-family: "Pretendard-Regular", serif;
  }

  #root {
    min-height: 100%;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;