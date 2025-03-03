export default {
  baseStyle: {
    field: {
      fontWeight: 400,
    },
  },
  variants: {
    brand: {
      field: {
        bg: "transparent",
        border: "1px solid",
        height: 9,
        color: "gray.900",
        borderColor: "gray.500",
        maxWidth: "150px",
        fontSize: "14px",
        // borderRadius: '0',
        _placeholder: { color: "gray.600" },
      },
      icon: {
        color: "gray.600",
      },
    },
    default: {
      field: {
        bg: "transparent",
        border: "1px solid",
        borderRadius: "sm",
        color: "navy.700",
        borderColor: "gray.500",
        _placeholder: { color: "gray.600" },
      },
      icon: {
        color: "gray.600",
      },
    },
    table: {
      field: {
        bg: "transparent",
        border: "1px solid",
        color: "gray.900",
        borderColor: "gray.500",
        // maxWidth: "150px",
        _placeholder: { color: "gray.600" },
      },
    },
  },
  sizes: {},
};
