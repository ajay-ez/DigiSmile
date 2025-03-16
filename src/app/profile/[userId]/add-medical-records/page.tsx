"use client";

import React from "react";
import { Formik, Form } from "formik";
import { MedicalRecordsValues } from "@/types";
import { Box, Button, Flex, Spinner, useMediaQuery } from "@chakra-ui/react";
import {
  ChangePasswordSchema,
  MedicalRecordsSchema
} from "@/validations/schema/AuthSchema";
import { changePasswordAction } from "@/app/actions/authAction";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { showToastWithTimeout } from "@/redux/SharedSlice";
import FormField from "@/components/common/FormField";
import FormArea from "@/components/common";
import FormInput from "@/components/common/FormInput";
import FormDate from "@/components/common/FormDate";
import { AddMedicalRecordsAction } from "@/app/actions/appointmentAction";
import { uploadFileToS3WithCreds } from "@/utils/uploadToS3";

const initialLoginValues: MedicalRecordsValues = {
  date: "",
  document: "",
  email: "",
  prescription: "",
  problem: ""
};

const AddMedicalRecordsPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const [isMobile] = useMediaQuery("(max-width: 860px)");

  const handleSubmit = async (
    values: any,
    setSubmitting: (data: boolean) => void
  ) => {
    const authToken = localStorage.getItem("authToken");
    const documentResponse = await uploadFileToS3WithCreds(values.document);
    values = { ...values, document: documentResponse };
    const response = await AddMedicalRecordsAction(values, authToken);

    if (response?.success) {
      dispatch(
        showToastWithTimeout({
          message: "Record added successfully",
          status: "success"
        })
      );
      setSubmitting(false);
    } else {
      dispatch(
        showToastWithTimeout({
          message: response?.error || "Something went wrong",
          status: "error"
        })
      );
      setSubmitting(false);
    }
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
              validationSchema={MedicalRecordsSchema}
              onSubmit={(form, { setSubmitting }) => {
                handleSubmit(form, setSubmitting);
              }}
            >
              {({
                values,
                errors,
                touched,
                isSubmitting,
                setFieldValue
              }: any) => (
                <Form>
                  <FormField
                    label="Email*"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                    error={errors.email}
                    touched={touched.email}
                    styles={{ marginBottom: "1.5rem" }}
                  />
                  <FormArea
                    label="Prescription*"
                    name="prescription"
                    placeholder="Type prescription here"
                    disabled={isSubmitting}
                    error={errors.prescription}
                    touched={touched.prescription}
                    styles={{ marginBottom: "1.5rem" }}
                  />
                  <FormArea
                    label="Problem*"
                    name="problem"
                    placeholder="Type problem here"
                    disabled={isSubmitting}
                    error={errors.problem}
                    touched={touched.problem}
                    styles={{ marginBottom: "1.5rem" }}
                  />
                  <FormInput
                    label="Document*"
                    name="document"
                    placeholder="Enter your document"
                    disabled={isSubmitting}
                    error={errors.document}
                    touched={touched.document}
                    styles={{ marginBottom: "1.5rem" }}
                    onChange={(event) => {
                      const file = event.target.files?.[0];
                      setFieldValue("document", file);
                    }}
                  />
                  <FormDate
                    label="Date*"
                    name="date"
                    type="date"
                    placeholder="Enter your date"
                    disabled={isSubmitting}
                    error={errors.date}
                    touched={touched.date}
                    styles={{ marginBottom: "1.5rem" }}
                  />
                  <Button
                    type="submit"
                    variant="changePassword"
                    w="100%"
                    isDisabled={isSubmitting}
                  >
                    Submit {isSubmitting && <Spinner ml={"4"} />}
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

export default AddMedicalRecordsPage;
