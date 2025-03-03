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
        color: "gray.900",
        borderColor: "gray.100",
        borderRadius: "16px",
        fontSize: "sm",
        p: "20px",
        _placeholder: { color: "gray.400" },
      },
    },
    auth: {
      field: {
        fontSize: "md",
        fontWeight: "500",
        color: "navy.700",
        bg: "transparent",
        border: "1px solid",
        borderColor: "gray.500",
        borderRadius: "sm",
        _placeholder: { color: "gray.500", fontWeight: "400" },
        height: "2.5rem",
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
    table: {
      field: {
        border: "1px solid",
        borderColor: "gray.500",
        // py: "11px",
        // borderRadius: "inherit",
        // _placeholder: { color: "gray.600" },
      },
    },
  },
};
