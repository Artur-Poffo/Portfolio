import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 3px;
  }

  @media (max-width: 510px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }

  *, input, button {
    border: none;
    outline: none;
  }

  a, a:active {
    color: inherit;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: var(--background);
    color: var(--text);
  }

  :root {
    --background: #121214;
    --contrast: #0A0A0C;
    --primary: #8257e5;
    --secondary: #b6b7f6;
    --text: #E1E1E1;
  }
`