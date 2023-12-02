import { createTheme, ThemeOptions } from "@mui/material/styles";

enum Colors {
  PRIMARY_MAIN = "#1f3e72",
  PRIMARY_CONTR_TEXT = "#ffffff",
  SECONDARY_MAIN = "#2aa6e9",
  INFO_MAIN = "#FFD700",
  BACKGROUND_GREY = "#ECECF0"
}

let theme = createTheme({});

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: Colors.PRIMARY_MAIN,
      contrastText: Colors.PRIMARY_CONTR_TEXT
    },
    secondary: {
      main: Colors.SECONDARY_MAIN
    },
    background: {
      default: Colors.BACKGROUND_GREY
    },
    info: {
      main: Colors.INFO_MAIN
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          paddingLeft: 20,
          paddingRight: 20,
          [theme.breakpoints.up("sm")]: {
            paddingLeft: 40,
            paddingRight: 40
          },
          [theme.breakpoints.up("md")]: {
            paddingLeft: 50,
            paddingRight: 50
          },
          [theme.breakpoints.up("lg")]: {
            maxWidth: 1800,
            paddingLeft: 50,
            paddingRight: 50
          }
        }
      }
    }
  }
};

theme = createTheme(themeOptions);

export default theme;
