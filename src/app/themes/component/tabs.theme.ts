export default {
  baseStyle: {},
  variants: {
    shared: {
      root: {
        maxHeight: "inherit",
      },
      tab: {
        whiteSpace: "nowrap",
        _selected: {
          borderBottom: "3px solid",
          borderColor: "brand.500",
          mb: "-2px",
        },
      },
      tablist: {
        borderBottom: "1px solid",
        borderColor: "#e1dede",
        overflowX: "auto",
        overflowY: "hidden",
      },
      tabpanels: {
        padding: 0,
      },
      tabpanel: {
        p: 0,
        paddingTop: 4,
      },
    },
  },
  sizes: {},
};
