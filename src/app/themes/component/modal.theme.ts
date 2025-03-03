export default {
  baseStyle: {
    overlay: {
      zIndex: 2,
    },
    dialog: {
      background: "#fff",
    },
  },
  variants: {
    brand: {
      dialog: {
        height: "100%",
        maxHeight: "80%",
      },
      body: {
        maxHeight: "80%",
        overflow: "auto",
      },
    },
    setInviteModal: {
      dialogContainer: {
        alignItems: "center",
      },
      dialog: {
        margin: "auto 12px",
      },
      body: {
        py: 4,
      },
    },
    confirmationModal: {
      dialogContainer: {
        alignItems: "center",
      },
      header: {
        px: 4,
      },
      dialog: {
        margin: "auto 12px",
      },
      body: {
        p: 0,
      },
      closeButton: {
        top: 4,
      },
    },
    changePasswordModal: {
      dialogContainer: {
        alignItems: "center",
      },
      dialog: {
        margin: "auto 12px",
        padding: 2,
      },
      body: {
        py: 4,
      },
    },
    communityModal: {
      dialogContainer: {
        alignItems: "center",
      },
      dialog: {
        margin: "auto 12px",
        minWidth: "40%",
        padding: 2,
        maxH: "80%",
        overflow: "auto",
      },
      body: {
        py: 4,
        height: "calc(100% - 80px)",
        maxH: "calc(100% - 80px)",
        overflow: "auto",
      },
    },
    masterModal: {
      dialogContainer: {
        alignItems: "center",
      },
      dialog: {
        margin: "auto 12px",
        minWidth: "30%",
        padding: 2,
      },
      body: {
        py: 4,
      },
    },
    postModal: {
      dialogContainer: {
        alignItems: "center",
      },
      dialog: {
        margin: "auto 12px",
        minWidth: "40%",
        padding: 2,
        maxH: "80%",
        overflow: "auto",
      },
      body: {
        py: 4,
        height: "calc(100% - 80px)",
        maxH: "calc(100% - 80px)",
        overflow: "auto",
      },
    },
    notification: {
      header: {
        pt: 4,
        pb: 0,
      },
      dialog: {
        margin: "auto 12px",
        minWidth: "75%",
        maxH: "80%",
        overflow: "auto",
      },
      body: {
        py: 4,
        height: "calc(100% - 80px)",
        maxH: "calc(100% - 80px)",
        overflow: "auto",
      },
      footer: {
        justifyContent: "center",
      },
    },
  },
  sizes: {},
};
