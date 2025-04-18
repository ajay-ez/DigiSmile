"use client";

import React from "react";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { appointmentLists } from "@/utils";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { AppDispatch } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getSidebarStatus, toggleSideBar } from "@/redux/SharedSlice";
import Image from "next/image";
import { digismileLogoImage } from "@/assets/images";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState({
    id: "5",
    name: "Appointment",
    url: "/appointment"
  });
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const showSidebar = useSelector(getSidebarStatus);
  const dispath: AppDispatch = useDispatch();

  const handleTabClick = (item: any, isMobile: boolean) => {
    handleRedirect(item.url);
    setSelectedTab({ id: item.id, name: item.name, url: item.url });
    if (isMobile) {
      dispath(toggleSideBar(false));
    }
  };

  const handleRedirect = (url: string) => {
    router.push(url);
  };

  const handleMenuClick = () => {
    dispath(toggleSideBar(!showSidebar));
  };

  const navigateToSection = (url: string) => {
    router.push(`/${url}`);
  };
  
  return (
    <>
      <Flex
        height={"100vh"}
        width={"100%"}
        position={"relative"}
        overflow={"hidden"}
      >
        {isMobile && showSidebar ? (
          <Flex
            flexDir={"column"}
            minWidth={"300px"}
            background={"brand.700"}
            justifyContent={"space-between"}
            position={"absolute"}
            left={0}
            zIndex={3}
            height={"100%"}
            overflow={"auto"}
          >
            <IoCloseSharp
              size={30}
              style={{
                position: "absolute",
                right: 0
              }}
              onClick={handleMenuClick}
            />
            <Box h={"auto"}>
              <Flex width={"100%"} alignItems={"center"}>
                <Image
                  id="header-sticky-image"
                  onClick={() => navigateToSection("/")}
                  src={digismileLogoImage}
                  width={110}
                  height={70}
                  alt="digismile"
                  style={{ cursor: "pointer" }}
                />
              </Flex>
              <Flex flexDir={"column"}>
                {appointmentLists.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Flex
                        onClick={() => handleTabClick(item, isMobile)}
                        alignItems={"center"}
                        gap={4}
                        color={
                          selectedTab.id === item.id ? "white" : "gray.600"
                        }
                        cursor={"pointer"}
                        width={"100%"}
                        py={4}
                        px={10}
                        _hover={{
                          background: "brand.800"
                        }}
                      >
                        {item.component && (
                          <item.component
                            height={30}
                            width={30}
                            color={
                              selectedTab.id === item.id ? "white" : "#A3AED0"
                            }
                          />
                        )}
                        <Text
                          as={"h5"}
                          fontWeight={
                            selectedTab.id === item.id ? "bold" : "normal"
                          }
                        >
                          {item.name}
                        </Text>
                      </Flex>
                    </React.Fragment>
                  );
                })}
              </Flex>
            </Box>
          </Flex>
        ) : !isMobile ? (
          <Flex
            flexDir={"column"}
            minWidth={"300px"}
            background={"brand.700"}
            justifyContent={"space-between"}
            zIndex={2}
            height={"100%"}
            overflow={"auto"}
          >
            <Box h={"inherit"}>
              <Flex
                width={"100%"}
                justifyContent={"center"}
                py={4}
                borderBottom={"1px #E1E9F8 solid"}
              >
                <Image
                  id="header-sticky-image"
                  onClick={() => navigateToSection("/")}
                  src={digismileLogoImage}
                  width={110}
                  height={70}
                  alt="digismile"
                  style={{ cursor: "pointer" }}
                />
              </Flex>
              <Flex flexDir={"column"} mt={8}>
                {appointmentLists.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Flex
                        onClick={() => handleTabClick(item, isMobile)}
                        alignItems={"center"}
                        gap={4}
                        color={
                          selectedTab.id === item.id ? "white" : "gray.600"
                        }
                        cursor={"pointer"}
                        width={"100%"}
                        py={4}
                        px={10}
                        _hover={{
                          background: "brand.800"
                        }}
                      >
                        {item.component && (
                          <item.component
                            height={30}
                            width={30}
                            color={
                              selectedTab.id === item.id ? "white" : "#A3AED0"
                            }
                          />
                        )}
                        <Text
                          as={"h5"}
                          fontWeight={
                            selectedTab.id === item.id ? "bold" : "normal"
                          }
                        >
                          {item.name}
                        </Text>
                      </Flex>
                    </React.Fragment>
                  );
                })}
              </Flex>
            </Box>
          </Flex>
        ) : (
          <></>
        )}
        <Flex
          width={
            isMobile && showSidebar
              ? `calc(100%)`
              : !isMobile
                ? `calc(100% - 300px)`
                : "100%"
          }
          height={"inherit"}
          flexDir={"column"}
          backgroundColor={"#e7eef8"}
          position={"relative"}
        >
          <Flex
            className="profile-header"
            background={"white.900"}
            color={"black.100"}
            minH={"100px"}
            alignItems={"center"}
            boxShadow={"14px 17px 40px 4px rgb(95 188 148 / 18%)"}
            p={4}
            position={"sticky"}
            top={0}
            zIndex={2}
            width={"100%"}
          >
            <Box className="profile-header-bg-image"></Box>
            {isMobile && (
              <GiHamburgerMenu
                size={25}
                style={{
                  zIndex: 2
                }}
                cursor={"pointer"}
                onClick={handleMenuClick}
              />
            )}
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Text
                as={"h1"}
                px={4}
                fontWeight={"bold"}
                zIndex={2}
                letterSpacing={"5px"}
              >
                Appointment
              </Text>
            </Flex>
          </Flex>
          <Box
            h={"100%"}
            w={"100%"}
            p={isMobile ? 4 : 8}
            overflow={"auto"}
            className="scroll"
          >
            {children}
          </Box>
        </Flex>
      </Flex>
      {/* {data?.user_type ? (
        <></>
      ) : (
        <Flex
          height={"100vh"}
          width={"100vw"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex flexDir={"column"} alignItems={"center"} gap={2}>
            <Spinner color="colorPalette.600" />
            <Text as={"h6"}>Loading...</Text>
          </Flex>
        </Flex>
      )} */}
    </>
  );
};

export default ProfileLayout;
