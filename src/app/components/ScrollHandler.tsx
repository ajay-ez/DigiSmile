import { Box } from "@chakra-ui/react";
import { toggleHeader } from "@/redux/SharedSlice";
import { useDispatch } from "react-redux";
import React from "react";

interface ScrollHandlerProps {
  children: React.ReactNode;
}

export default function ScrollHandler({ children }: ScrollHandlerProps) {
  const dispatch = useDispatch();
  
  const handleScroll = (e: any) => {
    if (e.target.scrollTop > 50) {
      dispatch(toggleHeader(true));
    } else {
      dispatch(toggleHeader(false));
    }
  };

  return (
    <Box
      height={"inherit"}
      width={"inherit"}
      overflow={"auto"}
      className="scroll"
      onScroll={(e) => handleScroll(e)}
    >
      {children}
    </Box>
  );
}
