import { createMuiTheme } from "@material-ui/core/styles";
import { blue, orange } from "@material-ui/core/colors";

const theme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: blue[700],
      },
      secondary: {
        main: orange[800],
      },
      background: {
        //default: "#1D2127",
        // paper: "#2E353E",
      },
    },
  });

export default theme;
