// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-poppins), sans-serif",

    h1: {
      fontSize: "2.5rem",
      letterSpacing: ".024em",
      fontWeight: "bold",
      color: "#253858",
      fontFamily: "var(--font-poppins)"
    },

    subtitle1: {
      fontSize: "1.8rem",
      letterSpacing: ".024em",
      fontWeight: "600",
      color: "#253858",
      fontFamily: "var(--font-poppins)"
    },
    subtitle2: {
      fontSize: "1.2rem",
      letterSpacing: ".024em",
      fontWeight: "600",
      color: "#253858",
      fontFamily: "var(--font-poppins)"
    },
    body1: {
      fontSize: "1.1rem",
      color: "#253858",
      fontFamily: "var(--font-poppins)"
    }
  }
});

export default theme;
