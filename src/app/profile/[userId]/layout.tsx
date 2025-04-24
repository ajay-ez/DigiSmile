"use client";

import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import { sidebarData } from "@/utils";
import { useState } from "react";
import RemoveIconComponent from "@/app/Icons/ProfileIcon";
import { IoCloseSharp, IoLogOutOutline } from "react-icons/io5";
import useAuthToken from "@/hooks/useAuthToken";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { AppDispatch } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getSidebarStatus, toggleSideBar } from "@/redux/SharedSlice";
import { useGetUserDetailsQuery } from "@/services/apiServices/profileService";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const { data } = useGetUserDetailsQuery();
  const { clearAuthToken } = useAuthToken();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState({
    id: "0",
    name: "DOCUMENTS",
    url: "documents"
  });
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [userId, setUserId] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const showSidebar = useSelector(getSidebarStatus);
  const dispath: AppDispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("userId");
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");
      if (!token) {
        redirect("/auth/login");
      }
    }
  }, [router]);

  useEffect(() => {
    const func = async () => {
      const tabId = searchParams.get("tabId");

      if (tabId && data?.user_type) {
        if (data?.user_type === "staff") {
          if (tabId !== "5") {
            router.push(
              `/profile/${localStorage.getItem("userId")}/add-medical-records?tabId=6`
            );
          }
          const tab = sidebarData.find((item) => item.id === tabId);
          if (tab) {
            setSelectedTab({ id: tabId, name: tab.name, url: tab.url });
          }
        } else if (data?.user_type === "patient") {
          // if (tabId === "5") {
          //   router.push(
          //     `/profile/${localStorage.getItem("userId")}/documents?tabId=1`
          //   );
          // }
          const tab = sidebarData.find((item) => item.id === tabId);
          if (tab) {
            setSelectedTab({ id: tabId, name: tab.name, url: tab.url });
          } else {
            router.push(
              `/profile/${localStorage.getItem("userId")}/documents?tabId=1`
            );
          }
        } else {
          setSelectedTab({
            id: "7",
            name: "Check Appointment",
            url: "check-appointment"
          });
          router.push(
            `/profile/${localStorage.getItem("userId")}/check-appointment?tabId=7`
          );
        }
      }
      setIsLoading(false);
    };
    func();
  }, [searchParams.get("tabId"), data]);

  const handleTabClick = (item: any, isMobile: boolean) => {
    handleRedirect(item.url, item.id);
    setSelectedTab({ id: item.id, name: item.name, url: item.url });
    if (isMobile) {
      dispath(toggleSideBar(false));
    }
  };

  const handleLogout = () => {
    clearAuthToken();
    location.reload();
  };

  const handleRedirect = (url: string, id: string) => {
    const userId = localStorage.getItem("userId");
    router.push(`/profile/${userId}/${url}?tabId=${id}`);
  };

  const handleMenuClick = () => {
    dispath(toggleSideBar(!showSidebar));
  };

  const navigateToSection = (url: string) => {
    router.push(`/${url}`);
  };

  const handleProfileVisit = () => {
    if (data?.user_type === "staff") {
      navigateToSection("add-medical-records");
    } else {
      navigateToSection(`profile/${userId}/profile?tabId=0`);
    }
  };

  const handleHomeRedirect = () => {
    navigateToSection(`/`);
  };

  const handleChangePassword = () => {
    navigateToSection(`profile/${userId}/change-password?tabId=5`);
  };

  return (
    <>
      {/* {!isLoading && data?.user_type ? ( */}
      {data?.user_type ? (
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
              zIndex={5}
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
                <Flex mt={8} mb={12} flexDir={"column"} alignItems={"center"}>
                  <RemoveIconComponent color="white" />
                  <Text as={"h5"} mt={4} color={"#e7e7e7"}>
                    {data?.name}
                  </Text>
                  <Text as={"h6"} color={"#b7b5b5"}>
                    {data?.phone_number}
                  </Text>
                  <Text as={"h6"} color={"#b7b5b5"}>
                    {data?.email}
                  </Text>
                </Flex>
                <Flex flexDir={"column"}>
                  {sidebarData.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        {data?.user_type === item.permission && (
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
                                  selectedTab.id === item.id
                                    ? "white"
                                    : "#A3AED0"
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
                        )}
                      </React.Fragment>
                    );
                  })}
                </Flex>
              </Box>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                color={"white"}
                p={4}
                onClick={handleLogout}
                cursor={"pointer"}
              >
                <IoLogOutOutline size={30} />
                <Text as={"h4"}>Sign OUT</Text>
              </Flex>
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
                <Flex mt={8} mb={12} flexDir={"column"} alignItems={"center"}>
                  <RemoveIconComponent color="white" />
                  <Text as={"h5"} mt={4} color={"#e7e7e7"}>
                    {data?.name}
                  </Text>
                  <Text as={"h6"} color={"#b7b5b5"}>
                    {data?.phone_number}
                  </Text>
                  <Text as={"h6"} color={"#b7b5b5"}>
                    {data?.email}
                  </Text>
                </Flex>
                <Flex flexDir={"column"}>
                  {sidebarData.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        {data?.user_type === item.permission && (
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
                                  selectedTab.id === item.id
                                    ? "white"
                                    : "#A3AED0"
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
                        )}
                      </React.Fragment>
                    );
                  })}
                </Flex>
              </Box>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                color={"white"}
                p={4}
                onClick={handleLogout}
                cursor={"pointer"}
              >
                <IoLogOutOutline size={30} />
                <Text as={"h4"}>Sign OUT</Text>
              </Flex>
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
                  {selectedTab.name}
                </Text>
                <Menu variant={"profileHeader"}>
                  <MenuButton>{data.name.slice(0, 2).toUpperCase()}</MenuButton>
                  <MenuList>
                    <Flex flexDirection="column" p="10px">
                      <MenuItem onClick={handleHomeRedirect}>
                        <Text as={"h6"}>Home</Text>
                      </MenuItem>
                      <MenuItem onClick={handleProfileVisit}>
                        <Text as={"h6"}>Visit Profile</Text>
                      </MenuItem>
                      <MenuItem onClick={handleChangePassword}>
                        <Text as={"h6"}>Change Password</Text>
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>
                        <Text as={"h6"}>Logout</Text>
                      </MenuItem>
                    </Flex>
                  </MenuList>
                </Menu>
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
      )}
    </>
  );
};

export default ProfileLayout;
