export default {
  baseStyle: {},
  variants: {
    sidebar: {
      root: {
        border: "none",
        width: "100%"
      },
      container: {
        border: "none"
      },
      button: {
        p: 0,
        _hover: {
          bg: "transparent"
        }
      },
      panel: {
        display: "flex",
        flexDirection: "column",
        pt: 0,
        pl: 0,
        pb: 0,
        ml: 11
      },
      icon: {}
    },
    services: {
      root: {},
      container: {
        borderBottom: "1px #dac4c2 solid"
      },
      button: {
        fontWeight: "900",
        fontSize: "lg",
        padding: "1rem 0",
        _hover: {
          bg: "transparent"
        }
      },
      panel: {
        padding: "0 0 1rem 0"
      },
      icon: {}
    },
    "about-us": {
      root: {},
      container: {},
      button: {
        fontWeight: "900",
        fontSize: "lg",
        padding: ".7rem 0",
        _hover: {
          bg: "transparent"
        }
      },
      panel: {
        padding: "0 0 1rem 0"
      },
      icon: {}
    }
  },
  sizes: {}
};
