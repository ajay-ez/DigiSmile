"use client";

import { toggleHeader } from "@/redux/SharedSlice";
import { Box } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
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
};

export default HomeLayout;
