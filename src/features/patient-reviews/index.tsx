"use client";

import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Flex, Text } from "@chakra-ui/react";
import ReviewCard from "./ReviewCard";
import "./patient-reviews.scss";

const PatientReviews = () => {
  return (
    <Box className="home-section patient-reviews-section">
      <Flex
        flexDir={"column"}
        className="responsive-service-section"
        alignItems={"center"}
        justifyContent={"center"}
        gap={10}
      >
        <Text as={"h1"} color={"brand.100"} fontWeight={900}>
          What Our Patients Say...
        </Text>
        <ReviewCard />
      </Flex>
    </Box>
  );
};

export default PatientReviews;
