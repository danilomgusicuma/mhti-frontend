import { createTheme } from "@mui/system";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/600.css";
import "@fontsource/croissant-one";

const theme = createTheme({
  typography: {
    h2: {
      fontFamily: "Croissant One",
      letterSpacing: "-0.08em",
      fontWeight: "400",
      fontSize: "1.375em",
      lineHeight: "1.5em",
    },
    h3: {
      fontFamily: "Poppins",
      fontWeight: "400",
      fontSize: "1.5em",
      lineHeight: "auto",
    },
    subtitle1: {
      fontFamily: "Poppins",
      letterSpacing: "0.00938em",
      fontWeight: "400",
      fontSize: "0.875em",
      lineHeight: "1.5em",
    },
    body1: {
      fontFamily: "Poppins",
      fontSize: "1em",
      fontWeight: "400",
      lineHeight: "auto",
    },
    caption: {
      fontFamily: "Poppins",
      fontSize: "0.75em",
      fontWeight: "400",
      lineHeight: "1.5em",
      color: "rgba(7, 33, 57, 0.38)",
    },
    subtitle2: {
      fontFamily: "Poppins",
      letterSpacing: "0.00714em",
      fontWeight: "500",
      fontSize: "0.75em",
      lineHeight: "1.125em",
    },
    button: {
      fontFamily: "Poppins",
      letterSpacing: "0.06em",
      fontWeight: "600",
      fontSize: "0.75em",
      lineHeight: "1.25em",
    },
  },
  palette: {
    commom: {
      black: "#072139",
      white: "#FFF",
    },
    primary: {
      main: "#4D5CB5",
    },
    secondary: {
      main: "#C5C5F8",
    },
    error: {
      main: "#FE7745",
    },
    warning: {
      main: "#FFCE6D",
    },
    info: {
      main: "#4D5CB5",
    },
    success: {
      main: "#C4DC63",
    },
    text: {
      primary: "#072139",
      secondary: "rgba(7, 33, 57, 0.6)",
      disabled: "rgba(7, 33, 57, 0.38)",
    },
    divider: "rgba(7, 33, 57, 0.12)",
    background: {
      paper: "#FFF",
      default: "#F5F6FA",
    },
  },
});

export default theme;
