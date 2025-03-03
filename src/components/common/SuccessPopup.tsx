import { Dialog } from "@mui/material";
import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Box } from "@chakra-ui/react";

type SuccessPopupProps = {
  open: boolean;
  onClose: () => void;
  successMessage: string;
  subMessage?: string;
};
export const SuccessPopup = ({
  open,
  onClose,
  successMessage,
  subMessage
}: SuccessPopupProps) => {
  return (
    <></>
    // <Dialog open={open} onClose={onClose}>
    //   <Box className="w-80 h-64 flex flex-col justify-center items-center gap-3 p-8">
    //     <Box className="w-20 h-20 bg-digiDarkBlue rounded-full flex items-center justify-center">
    //       <DoneAllIcon className="text-white text-5xl" />
    //     </Box>
    //     <h1 className="font-bold text-2xl text-center">
    //       {successMessage}
    //     </h1>
    //     <h1 className="text-sm text-center">
    //       {subMessage ?? ""}
    //     </h1>
    //   </Box>
    // </Dialog>
  );
};
