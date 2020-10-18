import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        src: url('/fontSs/BBTreeG_B.ttf') format('truetype');
      }
`;