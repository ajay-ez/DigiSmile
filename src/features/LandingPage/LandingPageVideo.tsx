import React from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { HEADER_HEIGHT } from "@/utils/constant";

const LandingPageVideo = () => {
  const router = useRouter();

  const [isMobile] = useMediaQuery("(max-width: 1000px)");

  const navigateToSection = (id: string) => {
    router.push(`${id}`);
  };

  return (
    <Box
      height={isMobile ? "initial" : "100vh"}
      marginTop={isMobile ? HEADER_HEIGHT : "unset"}
      width={"100vw"}
      position={"relative"}
    >
      <Flex
        flexDir={"column"}
        width={"-webkit-fill-available"}
        alignItems={"center"}
        justifyContent={"center"}
        position={isMobile ? "relative" : "absolute"}
        transform={isMobile ? "unset" : "translate(0, -50%)"}
        top={isMobile ? "unset" : "50%"}
        zIndex={2}
        marginX={isMobile ? "0" : "4rem"}
        padding={isMobile ? "3rem 1rem" : "0"}
        color={"brand.200"}
        bg={isMobile ? "brand.100" : "transparent"}
      >
        {isMobile ? (
          <Text as={"h1"} className="heading" lineHeight={1.2}>
            Your smile deserves the best. crafted just for you
          </Text>
        ) : (
          <>
            <Text as={"h1"} className="heading">
              Your smile deserves the best.
            </Text>
            <Text as={"h1"} className="heading">
              crafted just for you
            </Text>
          </>
        )}
        <Text as={"h4"} mt={4} textAlign={"center"}>
          Get your best ever dental experience
        </Text>
        <Button
          mt={8}
          variant={"brand"}
          onClick={() => {
            if (!localStorage.getItem("userId")) {
              navigateToSection("/appointment");
            } else {
              navigateToSection(
                `profile/${localStorage.getItem("userId")}/quick-appointment?tabId=2`
              );
            }
          }}
        >
          Request Appointment
        </Button>
        <Button
          mt={3}
          variant={"brand-second"}
          onClick={() => navigateToSection("home/clinic-services")}
        >
          Services
        </Button>
      </Flex>
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/landing_page4.mp4"
        style={{
          width: "100%",
          height: "100%",
          filter: "brightness(50%)",
          objectFit: "cover"
        }}
      />
    </Box>
  );
};

export default LandingPageVideo;
