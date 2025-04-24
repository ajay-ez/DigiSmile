"use client";

import { digismileLogoImage } from "@/assets/images";
import Image from "next/image";
import React from "react";
import { Box, Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import InstagramIconComponent from "@/app/Icons/InstagramIcon";
import FacebookIconComponent from "@/app/Icons/FacebookIcon";

const Footer = () => {
  const router = useRouter();
  const [isLaptop] = useMediaQuery("(max-width: 1000px)");
  const [isMobile] = useMediaQuery("(max-width: 580px)");

  const navigateToSection = (id: string) => {
    router.push(`${id}`);
  };

  return (
    <Box
      background={"#577361"}
      className="footer-home-section"
      id="footer-section"
    >
      <Flex
        flexDir={"column"}
        className="responsive-footer-section"
        alignItems={"center"}
        justifyContent={"center"}
        gap={12}
        width={"100%"}
      >
        <Image src={digismileLogoImage} alt="logo" width={200} height={100} />
        <Flex
          justifyContent="space-between"
          alignItems={"center"}
          gap={20}
          width={"100%"}
          padding={"0 2rem"}
          flexDir={isLaptop ? "column" : "row"}
        >
          <Flex width={"100%"} flexDir={"column"} gap={8}>
            <Flex
              flexDir={"column"}
              width={"100%"}
              padding={"0 0 2rem 0"}
              alignItems={isLaptop ? "center" : "start"}
              borderBottom={"1px white solid"}
            >
              <Text as={"h1"} className="footer-heading">
                Washington D.C
              </Text>
              <Text as={"h1"} className="footer-heading">
                Dental Clinic
              </Text>
            </Flex>
            <Flex
              justifyContent={"space-between"}
              flexWrap={isMobile ? "wrap" : "nowrap"}
              gap={2}
            >
              <Flex width={"100%"} flexDir={"column"} gap={2}>
                <Text as={"h5"}>Smilexpertsdc@gmail.com</Text>
                <Text as={"h5"}>(202) 545-6336</Text>
                <Flex gap={2} mt={4}>
                  <InstagramIconComponent click={() => {
                    window.open("https://www.instagram.com/smile_experts_dental_dc?igsh=MzdpdXJvOXR0cTBq", "_blank");
                  }}/>
                  <FacebookIconComponent click={() => {
                    window.open("https://www.facebook.com/smileexpertsdentaldc?mibextid=ZbWKwL", "_blank");
                  }}/>
                </Flex>
              </Flex>
              <Flex width={"100%"} flexDir={"column"} gap={2}>
                <Text as={"h5"}>
                  1747, Pennsylvania Avenue NW Suite 100 Washington, DC, 20006
                </Text>
                <div className="footer-location-hours">
                  Mon, Wed, Fri: 10am-5pm Hours
                </div>
              </Flex>
            </Flex>
            <Button
              mt={4}
              variant={"footer-button"}
              width={isLaptop ? "100%" : "300px"}
              onClick={() => {
                if (!localStorage.getItem("userId")) {
                  navigateToSection("/appointment?clinic=dc");
                } else {
                  navigateToSection(
                    `profile/${localStorage.getItem("userId")}/quick-appointment?tabId=2&clinic=dc`
                  );
                }
              }}
            >
              Book a consultation
            </Button>
          </Flex>
          <Flex width={"100%"} flexDir={"column"} gap={8}>
            <Flex
              flexDir={"column"}
              width={"100%"}
              padding={"0 0 2rem 0"}
              alignItems={isLaptop ? "center" : "start"}
              borderBottom={"1px white solid"}
            >
              <Text as={"h1"} className="footer-heading">
                Burke, VA
              </Text>
              <Text as={"h1"} className="footer-heading">
                Dental Clinic
              </Text>
            </Flex>
            <Flex
              justifyContent={"space-between"}
              flexWrap={isMobile ? "wrap" : "nowrap"}
              gap={2}
            >
              <Flex width={"100%"} flexDir={"column"} gap={2}>
                <Text as={"h5"}>Smilexpertsdc@gmail.com</Text>
                <Text as={"h5"}>(571) 374-8000</Text>
                <Flex gap={2} mt={4}>
                  <InstagramIconComponent click={() => {
                    window.open("https://www.instagram.com/smile_experts_dental_burke?igsh=eWM5MWdmaG9qMnJz ", "_blank");
                  }}/>
                  <FacebookIconComponent click={() => {
                    window.open("https://www.facebook.com/share/16a7qzr8cX/", "_blank");
                  }}/>
                </Flex>
              </Flex>
              <Flex width={"100%"} flexDir={"column"} gap={2}>
                <Text as={"h5"}>
                  9570, Burke Road Unit A Burke, VIRGINIA, 22015
                </Text>
                <div className="footer-location-hours">
                  Tue, Thu, Sat: 9am-4pm Hours
                </div>
              </Flex>
            </Flex>
            <Button
              mt={4}
              variant={"footer-button"}
              width={isLaptop ? "100%" : "300px"}
              onClick={() => {
                if (!localStorage.getItem("userId")) {
                  navigateToSection("/appointment?clinic=burke");
                } else {
                  navigateToSection(
                    `profile/${localStorage.getItem("userId")}/quick-appointment?tabId=2&clinic=burke`
                  );
                }
              }}
            >
              Book a consultation
            </Button>
          </Flex>
        </Flex>
        <p>
          &copy; {new Date().getFullYear()} Smile Expert Dental. All rights
          reserved.
        </p>
      </Flex>
    </Box>
  );
};

export default Footer;
