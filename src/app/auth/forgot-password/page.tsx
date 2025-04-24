"use client";

import React from "react";
import { Formik, Form } from "formik";
import { ForgotPasswordValues } from "@/types";
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
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { ForgotPasswordSchema } from "@/validations/schema/AuthSchema";
import Image from "next/image";
import { digismileLogoImage } from "@/assets/images";
import { forgotPasswordAction } from "@/app/actions/authAction";
import { showToastWithTimeout } from "@/redux/SharedSlice";
import { IoMdHome } from "react-icons/io";

const initialForgotValues: ForgotPasswordValues = {
  email: ""
};

const ForgotPasswordPage = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const [isMobile] = useMediaQuery("(max-width: 860px)");

  const handlePasswordChange = async (
    values: ForgotPasswordValues,
    setSubmitting: (data: boolean) => void
  ) => {
    const response = await forgotPasswordAction(values);
    if (response.error) {
      dispatch(
        showToastWithTimeout({
          message: response.error || "Internal server error",
          status: "error"
        })
      );
    } else {
      dispatch(
        showToastWithTimeout({
          message:
            "Your password has been successfully reset. Please check your email.",
          status: "success"
        })
      );
      setTimeout(() => {
        router.push(`/auth/login`);
      }, 100);
    }
    setSubmitting(false);
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
              Hello, Welcome!
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
            Forgot Password
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
              initialValues={initialForgotValues}
              validationSchema={ForgotPasswordSchema}
              onSubmit={(form, { setSubmitting }) => {
                handlePasswordChange(form, setSubmitting);
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
                  <Button
                    type="submit"
                    variant="authentication"
                    w="100%"
                    isDisabled={isSubmitting}
                  >
                    Submit {isSubmitting && <Spinner ml={"4"} />}
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
              )}
            </Formik>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ForgotPasswordPage;
