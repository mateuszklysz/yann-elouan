import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
      margin: 0;
      padding: 0;
    }
    *:focus {
      outline: 0;
      outline-color: transparent;
      outline-style: none;
    }
    body, html{
      box-sizing: border-box;
      overscroll-behavior-y: none;
      background-color:${({ theme: { color } }) => color.black};
      font-family:${({
        theme: {
          font: { family },
        },
      }) => family.karla};
      padding-top: env(safe-area-inset-top);
      padding-left: env(safe-area-inset-left);
      padding-bottom: env(safe-area-inset-bottom);
      padding-right: env(safe-area-inset-right);
    }
    body::-webkit-scrollbar {
      width: 0.5em;
    }
    
    body::-webkit-scrollbar-thumb {
      background-color: ${({ theme: { color } }) => color.white};
    }
    input,
    textarea,
    button,
    select,
    p,
    a {
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      user-select: none;
      color: inherit;
    }
`;

export default GlobalStyle;
