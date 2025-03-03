export default {
  baseStyle: {
    field: {
      fontWeight: 400,
      borderRadius: "8px",
    },
  },
  variants: {
    main: {
      field: {
        bg: "transparent",
        border: "1px solid",

        borderColor: "gray.100",
        borderRadius: "16px",
        _placeholder: { color: "gray.600" },
      },
    },
    auth: {
      field: {
        bg: "transparent",
        border: "1px solid",

        borderColor: "gray.100",
        borderRadius: "16px",
        _placeholder: { color: "gray.600" },
      },
    },
    authSecondary: {
      field: {
        bg: "transparent",
        border: "1px solid",

        borderColor: "gray.100",
        borderRadius: "16px",
        _placeholder: { color: "gray.600" },
      },
    },
    search: {
      field: {
        border: "none",
        py: "11px",
        borderRadius: "inherit",
        _placeholder: { color: "gray.600" },
      },
    },
  },
  sizes: {},
};
