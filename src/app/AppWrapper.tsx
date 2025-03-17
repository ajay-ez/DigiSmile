"use client";

import React, { ReactNode, useEffect } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

import { useDispatch } from "react-redux";
import themes from "./themes";
import { toggleHeader } from "@/redux/SharedSlice";
import CustomToastComponent from "@/components/common/Toast";

export default function AppWrappers({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();

  const handleScroll = (e: any) => {
    if (e.target.scrollTop > 50) {
      dispatch(toggleHeader(true));
    } else {
      dispatch(toggleHeader(false));
    }
  };

  return (
    <CacheProvider>
      <ChakraProvider theme={themes}>
        <CustomToastComponent />
        <Box onScroll={(e) => handleScroll(e)} className="container">
          {children}
        </Box>
      </ChakraProvider>
    </CacheProvider>
  );
}
