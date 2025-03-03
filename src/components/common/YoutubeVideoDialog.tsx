"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@chakra-ui/react";

type YoutubeDialogProps = {
  videoUrl: string;
};

export const YoutubeVideoDialog = ({ videoUrl }: YoutubeDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="inherit"
        onClick={handleClickOpen}
        className="capitalize p-2 px-5 font-bold bg-blue-900 hover:bg-blue-600 text-white"
      >
        Watch Here
      </Button>
      {/* <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          Watch this Video
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div
            style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded YouTube"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",

                height: "100%"
              }}
            />
          </div>
        </DialogContent>
      </Dialog> */}
    </div>
  );
};
