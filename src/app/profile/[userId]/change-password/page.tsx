"use client";

import React from "react";
import { Formik, Form } from "formik";
import { ChangePasswordValues } from "@/types";
import {
  Box,
  Button,
  Flex,
  Spinner,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import PasswordField from "@/components/common/PasswordField";
import { ChangePasswordSchema } from "@/validations/schema/AuthSchema";
import { changePasswordAction } from "@/app/actions/authAction";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { showToastWithTimeout } from "@/redux/SharedSlice";
import useAuthToken from "@/hooks/useAuthToken";

const initialChangePasswordValues: ChangePasswordValues = {
  new_password: "",
  old_password: ""
};

const ChangePasswordPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { clearAuthToken } = useAuthToken();
  const [isMobile] = useMediaQuery("(max-width: 860px)");

  const handleChangePassword = async (
    values: ChangePasswordValues,
    setSubmitting: (data: boolean) => void
  ) => {
    const authToken = localStorage.getItem("authToken");
    const response = await changePasswordAction({ ...values, authToken });

    if (response?.success) {
      dispatch(
        showToastWithTimeout({
          message: "Successfully Changed Password",
          status: "success"
        })
      );
      clearAuthToken();
      location.reload();
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
            Change Password
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
              initialValues={initialChangePasswordValues}
              validationSchema={ChangePasswordSchema}
              onSubmit={(form, { setSubmitting }) => {
                handleChangePassword(form, setSubmitting);
              }}
            >
              {({ errors, touched, isSubmitting }: any) => (
                <Form>
                  <PasswordField
                    label="Old Password*"
                    name="old_password"
                    placeholder="Min. 8 characters"
                    disabled={isSubmitting}
                    error={errors.old_password}
                    touched={touched.old_password}
                    styles={{ marginBottom: "1.5rem" }}
                  />
                  <PasswordField
                    label="New Password*"
                    name="new_password"
                    placeholder="Min. 8 characters"
                    disabled={isSubmitting}
                    error={errors.new_password}
                    touched={touched.new_password}
                    styles={{ marginBottom: "1.5rem" }}
                  />
                  <Button
                    type="submit"
                    variant="changePassword"
                    w="100%"
                    isDisabled={isSubmitting}
                    _hover={{
                      _disabled: { bg: "#577361" }
                    }}
                  >
                    Change Password {isSubmitting && <Spinner ml={"4"} />}
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
