import { createTheme } from "@material-ui/core/styles";
import { grey, blue, red } from "@material-ui/core/colors";

const darkTheme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: "12px"
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: grey[700],
          borderRadius: "5px"
        }
      }
    }
  },
  palette: {
    type: "dark",
    primary: {
      main: blue[400]
    },
    secondary: {
      main: red[600]
    },
    tertiary: {
      main: "#ffc708",
      shadow: grey[900]
    },
    grid: {
      text: "white",
      background: "#424242"
    },
    button: {
      shadow: "rgb(37, 37, 37)"
    },
    navigation: {
      main: grey[800]
    },
    popper: {
      background: "rgb(37, 37, 37)",
      text: "white"
    }
  }
});

const lightTheme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: "15px"
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: grey[400],
          borderRadius: "5px"
        }
      }
    }
  },
  palette: {
    type: "light",
    primary: {
      main: blue[700]
    },
    tertiary: {
      main: "rgb(39, 51, 115)",
      shadow: grey[500]
    },
    grid: {
      text: "black",
      background: grey[200]
    },
    button: {
      shadow: grey[300]
    },
    navigation: {
      main: grey[300]
    },
    popper: {
      background: grey[300],
      text: "black"
    }
  }
});

export const themes = {
  light: lightTheme,
  dark: darkTheme
};
