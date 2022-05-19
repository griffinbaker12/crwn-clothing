import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Encode Sans Condensed', sans-serif;
  padding: 20px 40px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }

  ${props =>
    props.theme === 'dark' &&
    css`
      background-color: #282c35;

      svg g {
        fill: white !important;
        stroke: white;
      }

      svg g path {
        fill: white !important;
        stroke: white;
      }
    `}
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;
