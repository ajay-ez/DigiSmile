export default {
  baseStyle: {
    control: {
      borderRadius: "none",
      _checked: {
        bg: "brand.200",
        borderColor: "brand.200",
        _hover: {
          bg: "brand.200",
          borderColor: "brand.200",
        },
        _disabled: {
          bg: "brand.200",
          borderColor: "brand.200",
          opacity: ".4",
        },
      },
      _disabled: {
        borderColor: "gray.500",
        opacity: ".4",
      },
      borderColor: "gray.500",
    },
    icon: {
      color: "white.900",
    },
    container: {},
    label: {
      color: "red",
    },
  },
  variants: {},
  sizes: {},
  defaultProps: {},
};
