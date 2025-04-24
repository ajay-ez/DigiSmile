"use client";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";

import { SignupFormValues } from "@/types";
import { useRegisterMutation } from "@/services/apiServices/authService";
import {
  Box,
  Button,
  Flex,
  Spinner,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import FormField from "@/components/common/FormField";
import FormPhone from "@/components/common/FormPhone";
import PasswordField from "@/components/common/PasswordField";
import { SignupSchema } from "@/validations/schema/AuthSchema";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { showToastWithTimeout } from "@/redux/SharedSlice";
import Image from "next/image";
import { digismileLogoImage } from "@/assets/images";
import { IoMdHome } from "react-icons/io";

const initialSignupValues: SignupFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone_number: "",
  problem: "",
  address: "LA",
  date_of_birth: "2023-01-01"
};

const SignupPage = () => {
  const router = useRouter();
  const [registerUser, { error }] = useRegisterMutation();
  const dispatch: AppDispatch = useDispatch();
  const [isMobile] = useMediaQuery("(max-width: 860px)");

  const handleSignup = async (
    values: SignupFormValues,
    setSubmitting: (data: boolean) => void
  ) => {
    delete values.confirmPassword;
    registerUser(values).then((response: any) => {
      if (response.error) {
        dispatch(
          showToastWithTimeout({
            message: response.error.data.message,
            status: "error"
          })
        );
      } else {
        router.push("/auth/login");
        dispatch(
          showToastWithTimeout({
            message: response.data.message || "Success",
            status: "success"
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
      p={2}
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
            borderRadius={"25px 145px 145px 25px "}
            bgColor={"brand.100"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            position={"relative"}
          >
            <Image
              src={digismileLogoImage}
              onClick={() => {
                router.push("/");
              }}
              alt="logo"
              height={140}
              width={160}
              style={{
                position: "absolute",
                top: 50,
                cursor: "pointer"
              }}
            ></Image>
            <Text as={"h2"} color={"white.900"} fontWeight={800}>
            Hello, Welcome!
            </Text>
            <Text as={"h6"} color={"white.900"}>
              Already have an account?
            </Text>
            <Button
              className="animated-button"
              mt={4}
              variant={"bordered"}
              onClick={() => {
                router.push("/auth/login");
              }}
            >
              Login
            </Button>
          </Flex>
        )}
        <Box
          width={isMobile ? "90vw" : "500px"}
          px={8}
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
            Registration
          </Text>
          <Flex
            zIndex="2"
            direction="column"
            w={"100%"}
            maxW="100%"
            background="transparent"
            mx={{ base: "auto", lg: "unset" }}
            mb={{ base: "20px", md: "auto" }}
            paddingRight={"1rem"}
            className="scroll"
          >
            <Formik
              initialValues={initialSignupValues}
              validationSchema={SignupSchema}
              onSubmit={(form, { setSubmitting }) => {
                handleSignup(form, setSubmitting);
              }}
            >
              {({ errors, touched, isSubmitting }) => {
                return (
                  <Form>
                    <Box
                      height={isMobile ? "50vh" : "35vh"}
                      overflow={"auto"}
                      className="scroll"
                      pr={4}
                    >
                      <FormField
                        label="First Name*"
                        name="first_name"
                        type="text"
                        placeholder="Enter your first name"
                        disabled={isSubmitting}
                        error={errors.first_name}
                        touched={touched.first_name}
                        styles={{ marginBottom: "1.5rem" }}
                      />
                      <FormField
                        label="Last Name*"
                        name="last_name"
                        type="text"
                        placeholder="Enter your last name"
                        disabled={isSubmitting}
                        error={errors.last_name}
                        touched={touched.last_name}
                        styles={{ marginBottom: "1.5rem" }}
                      />
                      <FormField
                        label="Reason For Visit"
                        name="problem"
                        type="text"
                        placeholder="Enter Reason For Visit"
                        disabled={isSubmitting}
                        error={errors.problem}
                        touched={touched.problem}
                        styles={{ marginBottom: "1.5rem" }}
                      />
                      <FormField
                        label="Email*"
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        disabled={isSubmitting}
                        error={errors.email}
                        touched={touched.email}
                        styles={{ marginBottom: "1.5rem" }}
                      />
                      <FormPhone
                        label="Phone Number*"
                        name="phone_number"
                        placeholder="Enter your phone number"
                        disabled={isSubmitting}
                        error={errors.phone_number}
                        touched={touched.phone_number}
                        styles={{ marginBottom: "1.5rem" }}
                      />
                      <PasswordField
                        label="Password*"
                        name="password"
                        placeholder="Enter your password"
                        disabled={isSubmitting}
                        error={errors.password}
                        touched={touched.password}
                        styles={{ marginBottom: "1.5rem" }}
                      />
                      <PasswordField
                        label="Confirm Password*"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        disabled={isSubmitting}
                        error={errors.confirmPassword}
                        touched={touched.confirmPassword}
                        styles={{ marginBottom: "1.5rem" }}
                      />
                    </Box>
                    <Button
                      type="submit"
                      variant="authentication"
                      w="100%"
                      isDisabled={isSubmitting}
                      mt={6}
                    >
                      Confirm {isSubmitting && <Spinner ml={"4"} />}
                    </Button>
                    <Text
                      pointerEvents={isSubmitting ? "none" : "auto"}
                      mt={2}
                      as={"h5"}
                      textAlign={"center"}
                      cursor={"pointer"}
                      onClick={() => {
                        router.push("/auth/login");
                      }}
                    >
                      Already have an account? Login
                    </Text>
                  </Form>
                );
              }}
            </Formik>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SignupPage;
