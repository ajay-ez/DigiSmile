import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";
interface Properties {
  children: React.ReactNode;
}
const DigiLayout = ({ children }: Properties) => {
  return (
    <Box position={"relative"} width={"100%"}>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default DigiLayout;
