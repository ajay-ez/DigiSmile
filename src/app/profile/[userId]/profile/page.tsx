"use client";

import React from "react";
import { Formik, Form } from "formik";
import { UserProfileValues } from "@/types";
import {
  Box,
  Button,
  Flex,
  Spinner,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import { UserProfileSchema } from "@/validations/schema/AuthSchema";
import { UpdateProfileAction } from "@/app/actions/authAction";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { showToastWithTimeout } from "@/redux/SharedSlice";
import FormField from "@/components/common/FormField";
import { useGetUserDetailsQuery } from "@/services/apiServices/profileService";


const ChangePasswordPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data } = useGetUserDetailsQuery(undefined, {
    refetchOnMountOrArgChange: true
  });
  const [isMobile] = useMediaQuery("(max-width: 860px)");

  const initialProfileValues: UserProfileValues = {
    first_name: data?.first_name || "",
    last_name: data?.last_name || "",
    email: data?.email || "",
    phone_number: data?.phone_number || "",
    // date_of_birth: data?.date_of_birth || ""
  };

  const handleChangePassword = async (
    values: UserProfileValues,
    setSubmitting: (data: boolean) => void
  ) => {
    const authToken = localStorage.getItem("authToken");
    const storedUserId = localStorage.getItem("userId");
    const response = await UpdateProfileAction({ ...values, authToken, userId: storedUserId });
    if (response?.success) {
      dispatch(
        showToastWithTimeout({
          message: "Successfully Updated Profile",
          status: "success"
        })
      );
    } else {
      dispatch(
        showToastWithTimeout({
          message: response?.error || "Something went wrong",
          status: "error"
        })
      );
    }
    setSubmitting(false);
  };

  return (
    <Flex
      height={"100%"}
      width={"100%"}
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
        <Box width={isMobile ? "90vw" : "600px"} px={12} py={16}>
          <Text
            as={"h1"}
            mb="1rem"
            textAlign={"center"}
            fontWeight={800}
            color={"black"}
          >
            User Profile
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
              initialValues={initialProfileValues}
              enableReinitialize
              validationSchema={UserProfileSchema}
              onSubmit={(form, { setSubmitting }) => {
                handleChangePassword(form, setSubmitting);
              }}
            >
              {({ errors, touched, isSubmitting }: any) => (
                <Form>
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
                    disabled
                    label="Email*"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    error={errors.email}
                    touched={touched.email}
                    styles={{ marginBottom: "1.5rem" }}
                  />
                  <FormField
                    label="Phone Number*"
                    name="phone_number"
                    type="text"
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                    error={errors.phone_number}
                    touched={touched.phone_number}
                    styles={{ marginBottom: "1.5rem" }}
                  />
                  {/* <FormField
                    label="Date of Birth*"
                    name="date_of_birth"
                    type="date"
                    placeholder="Select your date of birth"
                    disabled={isSubmitting}
                    error={errors.date_of_birth}
                    touched={touched.date_of_birth}
                    styles={{ marginBottom: "1.5rem" }}
                  /> */}
                  <Button
                    type="submit"
                    variant="changePassword"
                    w="100%"
                    isDisabled={isSubmitting}
                    _hover={{
                      _disabled: { bg: "#577361" }
                    }}
                  >
                    Update Profile {isSubmitting && <Spinner ml={"4"} />}
                  </Button>
                </Form>
              )}
            </Formik>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ChangePasswordPage;
