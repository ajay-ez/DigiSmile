"use client";

import React from "react";
import { Formik, Form } from "formik";
import { LoginFormValues } from "@/types";
import { useLoginMutation } from "@/services/apiServices/authService";
import useAuthToken from "@/hooks/useAuthToken";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Flex,
  Spinner,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import FormField from "@/components/common/FormField";
import PasswordField from "@/components/common/PasswordField";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { showToastWithTimeout } from "@/redux/SharedSlice";
import { LoginSchema } from "@/validations/schema/AuthSchema";
import Image from "next/image";
import { digismileLogoImage } from "@/assets/images";
import { IoMdHome } from "react-icons/io";

const initialLoginValues: LoginFormValues = {
  email: "",
  password: ""
};

const LoginPage = () => {
  const [userLogin, { error }] = useLoginMutation();
  const router = useRouter();
  const { setAuthToken } = useAuthToken();
  const dispatch: AppDispatch = useDispatch();
  const [isMobile] = useMediaQuery("(max-width: 860px)");

  const handleLogin = async (
    values: LoginFormValues,
    setSubmitting: (data: boolean) => void
  ) => {
    userLogin(values).then((response: any) => {
      if (response?.data?.status_code === 200) {
        dispatch(
          showToastWithTimeout({
            message: "Successfully logged in",
            status: "success"
          })
        );
        setAuthToken(response.data);
        setTimeout(() => {
          router.push(
            `/profile/${localStorage.getItem("userId")}/profile?tabId=0`
          );
        }, 100);
      } else {
        dispatch(
          showToastWithTimeout({
            message: response.error.data.message || "Something went wrong",
            status: "error"
          })
        );
      }
      setSubmitting(false);
    });
  };

  return (
    <Flex
      height={"100vh"}
      width={"100vw"}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        background={"#fff"}
        color={"black.200"}
        borderRadius={"lg"}
        boxShadow={"1px 1px 10px #f0d4d4"}
        gap={8}
        flexDir={isMobile ? "column" : "row"}
      >
        {!isMobile && (
          <Flex
            width={"300px"}
            borderRadius={"25px 0 200px 25px"}
            bgColor={"brand.100"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            position={"relative"}
          >
            <Image
              onClick={() => {
                router.push("/");
              }}
              src={digismileLogoImage}
              alt="logo"
              height={140}
              width={160}
              style={{
                position: "absolute",
                top: 20,
                cursor: "pointer"
              }}
            ></Image>
            <Text as={"h2"} color={"white.900"} fontWeight={800}>
            Welcome Back!
            </Text>
            <Text as={"h6"} color={"white.900"}>
              Don&apos;t have an account?
            </Text>
            <Button
              className="animated-button"
              mt={4}
              variant={"bordered"}
              onClick={() => {
                router.push("/auth/signup");
              }}
            >
              Register
            </Button>
          </Flex>
        )}
        <Box
          width={isMobile ? "90vw" : "400px"}
          px={12}
          py={16}
          position={"relative"}
        >
          {isMobile && (
            <IoMdHome
              onClick={() => {
                router.push("/");
              }}
              style={{
                position: "absolute",
                left: 10,
                top: 10,
                border: "2px black solid",
                borderRadius: "50%"
              }}
              size={30}
            />
          )}
          <Text
            as={"h1"}
            mb="1rem"
            textAlign={"center"}
            fontWeight={800}
            color={"black"}
          >
            Sign In
          </Text>
          <Flex
            zIndex="2"
            direction="column"
            w={"100%"}
            maxW="100%"
            background="transparent"
            borderRadius="15px"
            mx={{ base: "auto", lg: "unset" }}
            mb={{ base: "20px", md: "auto" }}
          >
            <Formik
              initialValues={initialLoginValues}
              validationSchema={LoginSchema}
              onSubmit={(form, { setSubmitting }) => {
                handleLogin(form, setSubmitting);
              }}
            >
              {({ errors, touched, isSubmitting }: any) => (
                <Form>
                  <FormField
                    label="Email address*"
                    name="email"
                    type="text"
                    placeholder="mail@smilexpertsdental.com"
                    disabled={isSubmitting}
                    error={errors.email}
                    touched={touched.email}
                    styles={{ marginBottom: "1.5rem" }}
                  />
                  <PasswordField
                    label="Password*"
                    name="password"
                    placeholder="Min. 8 characters"
                    disabled={isSubmitting}
                    error={errors.password}
                    touched={touched.password}
                    styles={{ marginBottom: "1.5rem" }}
                  />
                  <Button
                    type="submit"
                    variant="authentication"
                    w="100%"
                    isDisabled={isSubmitting}
                  >
                    Sign In {isSubmitting && <Spinner ml={"4"} />}
                  </Button>
                  <Flex
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    flexDir={"column"}
                  >
                    <Text
                      pointerEvents={isSubmitting ? "none" : "auto"}
                      mt={2}
                      as={"h5"}
                      textAlign={"center"}
                      cursor={"pointer"}
                      onClick={() => {
                        router.push("/auth/signup");
                      }}
                    >
                      Don&apos;t have an account? Sign UP
                    </Text>
                    <Text
                      pointerEvents={isSubmitting ? "none" : "auto"}
                      mt={2}
                      as={"h5"}
                      textAlign={"center"}
                      cursor={"pointer"}
                      onClick={() => {
                        router.push("/auth/forgot-password");
                      }}
                    >
                      Forgot Password?
                    </Text>
                  </Flex>
                </Form>
              )}
            </Formik>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
