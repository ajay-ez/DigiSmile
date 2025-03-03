import React from "react";
import { Dialog } from "@mui/material";
import { Box, Button, CircularProgress } from "@chakra-ui/react";

interface CancelBookingPopupProps {
  open: boolean;
  onClose: () => void;
  onCancelBooking: () => void;
  isLoading: boolean;
}

const CancelBookingPopup: React.FC<CancelBookingPopupProps> = ({
  open,
  onClose,
  onCancelBooking,
  isLoading
}) => {
  return (
    <></>
    // <Dialog open={open} onClose={onClose}>
    //   <Box
    //     sx={{
    //       bgcolor: "background.paper",
    //       borderRadius: 2,
    //       boxShadow: 24,
    //       p: 4
    //     }}
    //   >
    //     <h1>
    //       Cancel Booking
    //     </h1>
    //     <h1>
    //       Are you sure you want to cancel this booking?
    //     </h1>
    //     <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
    //       <Button
    //         variant="outlined"
    //         onClick={onClose}
    //         className="rounded-lg capitalize font-bold"
    //       >
    //         Close
    //       </Button>
    //       <Button
    //         variant="contained"
    //         color="error"
    //         onClick={onCancelBooking}
    //         className="rounded-lg capitalize font-bold"
    //       >
    //         {isLoading ? <CircularProgress /> : "Confirm Cancellation"}
    //       </Button>
    //     </Box>
    //   </Box>
    // </Dialog>
  );
};

export default CancelBookingPopup;
