import { css, GlobalStyles as MUIGlobalStyles } from "@mui/material";

export const GlobalStyles = (
  <MUIGlobalStyles
    styles={css`
      * {
        box-sizing: border-box;
      }

      html,
      body {
        height: 100%;
        min-width: 320px;
      }

      body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      a {
        text-decoration: none;
        font-weight: 500;
      }

      #app {
        min-height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        overflow: hidden;
      }

      @supports (overflow: clip) {
        #app {
          overflow: clip;
        }
      }

      #app > main {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      #app > * {
        min-width: 0;
      }
    `}
  />
);
