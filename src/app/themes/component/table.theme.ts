export default {
  baseStyle: {},
  variants: {
    users: {
      table: {
        height: "fit-content",
        // padding: "1rem",
        position: "relative",
        borderCollapse: "separate",
        borderSpacing: "0 1rem"
      },
      thead: {
        // zIndex: "tableStickyHeaders",
        zIndex: 1,
        position: "sticky",
        top: 0,
        backgroundColor: "white.900",
        whiteSpace: "nowrap"
      },
      tbody: {
        tr: {
          _hover: {
            bgColor: " #f4f7fe"
          }
        }
      },
      th: {
        fontFamily: "inherit",
        color: "gray.500",
        fontWeight: "bold",
        borderColor: "gray.200",
        fontSize: "xs",
        minWidth: "150px",
        maxWidth: "200px",
        backgroundColor: "#f4f6f9",
        _last: {
          borderRightRadius: "10px"
        },
        _first: {
          borderLeftRadius: "10px"
        }
      },
      td: {
        fontSize: "md",
        color: "gray.900",
        maxWidth: "300px",
        whiteSpace: "nowrap",
        span: {
          maxWidth: "100%",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden"
        },
        _last: {
          borderRightRadius: "10px"
        },
        _first: {
          borderLeftRadius: "10px"
        }
      },
      tr: {
        borderBottom: "1px solid",
        borderColor: "gray.200",
        backgroundColor: "white"
      }
    }
  },
  sizes: {}
};
