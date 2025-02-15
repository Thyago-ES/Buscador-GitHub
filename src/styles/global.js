import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }
  body {
    background: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased !important;
  }

  a {
    color: ${(props) => props.theme.colors.background};
  }
  a:hover {
    text-decoration: underline;
  }

  body, input, p, a, button{
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.normal};
    font-family: ${(props) => props.theme.fonts};
  }

  small {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  button {
    cursor: pointer;
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.champagne};
  }

  input{
    outline: none;
  }
`;
