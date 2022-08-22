import { createTheme } from "@mui/system";
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/600.css';
import "@fontsource/croissant-one";


const theme = createTheme({
  typography: {
    h2: {
      fontFamily: "Croissant One",
      letterSpacing: "-0.08em",
      fontWeight: "400",
    },
    subtitle1: {
      fontFamily: "Nunito",
    },
    subtitle2: {
      fontFamily: "Nunito",
    },
    button: {
      fontFamily: "Nunito",
    },
    body1: {
      fontSize: "1.25em",
      fontFamily: "Nunito",
      fontWeight: "600",
      lineHeight: "33px",
      color: "rgba(7, 33, 57, 0.6)"
    },
  },
})

export default theme;