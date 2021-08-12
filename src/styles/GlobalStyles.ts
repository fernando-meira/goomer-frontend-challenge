import { createGlobalStyle } from 'styled-components';

import { colors } from './colors';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    };

    html {
      transition: .2s;
      overflow-x: hidden;
    };

    @media (max-width: 1080px) {
      html {
        font-size: 93.75%;
      };
    };

    @media (max-width: 768px) {
      html {
        font-size: 87.5%;
      };
    };

    body {
      background: ${colors.white};
      -webkit-font-smoothing: antialiased;
    };

    body, input, textarea, select, button, p, span, h1, h2, h3, h4, h5, h6 {
      font-weight: 400;
      color: ${colors.gray[700]};
      font-family: 'Montserrat', sans-serif;
    };

    button, input, optgroup, select, textarea {
      margin: 0;
      padding: 0;

      color: inherit;
      font-size: 100%;
      font-family: inherit;
      line-height: inherit;
    };

    button, input {
      overflow: visible,
    };

    button, select {
      text-transform: none;
    };

    button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner {
      padding: 0;
      border-style: 'none';
    };

    button {
      padding: 0;
      border: none;

      cursor: pointer;
      background: transparent;
    };

    a {
      color: inherit;
      text-decoration: none;
    };
`;
