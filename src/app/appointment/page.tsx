"use client";

import FormField from "@/components/common/FormField";
import {
  Box,
  Button,
  Flex,
  Spinner,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import FormPhone from "@/components/common/FormPhone";
import FormSelect from "@/components/common/FormMenu";
import { appointmentSchema } from "@/validations/schema/AppointmentFormSchema";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import moment from "moment";
import {
  BookAppointmentAction,
  fetchAvailableAppointments
} from "../actions/appointmentAction";

import "react-datepicker/dist/react-datepicker.css";
import "./calender.scss";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { showToastWithTimeout } from "@/redux/SharedSlice";

const BookAppointment = () => {
  const [isMobile] = useMediaQuery("(max-width: 1000px)");
  const searchParams = useSearchParams();
  const dispatch: AppDispatch = useDispatch();
  const [slotsStatus, setSlotsStatus] = useState({ status: false, text: "", success: false });
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [initialFormValues, setInitialFormValues] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    appointment_date: moment().format("yyyy-MM-DD"),
    description: "",
    city: "dc",
    start_time: "",
    end_time: ""
  });

  useEffect(() => {
    const func = async () => {
      const clinic = searchParams.get("clinic");
      const reason = searchParams.get("reason");
      if (clinic) {
        setInitialFormValues((prev) => ({ ...prev, city: clinic }));
        handleDateChange(new Date(), clinic);
      } else if (reason) {
        setInitialFormValues((prev) => ({ ...prev, description: reason }));
        handleDateChange(new Date(), "dc");
      } else {
        handleDateChange(new Date(), "dc");
      }
    };
    func();
  }, [searchParams.get("clinic")]);

  const handleDateChange = async (date: Date, city: string) => {
    const updatedDate = moment(date).format("YYYY-MM-DD");
    const response = await fetchAvailableAppointments({
      appointment_date: updatedDate,
      city
    });
    if (response?.data?.error) {
      setSlotsStatus({ text: response?.data?.error, status: false, success: false });
    } else if (response?.data?.slotss) {
      setSlotsStatus({ text: "Slots Available", status: true, success: true });
    }
    setSelectedDate(date);
  };

  const handleLogin = async (
    values: any,
    // eslint-disable-next-line no-unused-vars
    setSubmitting: (data: boolean) => void
  ) => {
    const response = await BookAppointmentAction(values);
    if (response.error) {
      dispatch(
        showToastWithTimeout({
          message: response.error,
          status: "error"
        })
      );
    } else {
      dispatch(
        showToastWithTimeout({
          message: response.data.message || "Success",
          status: "success"
        })
      );
    }
    setSubmitting(false);
  };

  return (
    <Box>
      <Formik
        initialValues={initialFormValues}
        validationSchema={appointmentSchema}
        onSubmit={(form, { setSubmitting }) => {
          handleLogin(form, setSubmitting);
        }}
        enableReinitialize
      >
        {({ values, errors, touched, isSubmitting, setFieldValue }: any) => {
          return (
            <Form>
              <Flex
                className="responsive-footer-section appointment-form-section"
                justifyContent={"center"}
                background={"#fff"}
                color={"#000"}
                gap={10}
                flexWrap={isMobile ? "wrap" : "nowrap"}
              >
                <Flex width={"100%"} flexDir={"column"} p={4}>
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
                  <FormPhone
                    label="Phone Number*"
                    name="phone_number"
                    placeholder="Enter your phone number"
                    disabled={isSubmitting}
                    error={errors.phone_number}
                    touched={touched.phone_number}
                    styles={{ marginBottom: "1.5rem" }}
                  />
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
                  <FormSelect
                    label="Clinic Location*"
                    name="city"
                    options={[
                      {
                        label: "Washington D.C.",
                        value: "dc"
                      },
                      {
                        label: "Burke, VA",
                        value: "burke"
                      }
                    ]}
                    disabled={isSubmitting}
                    placeholder="Select option"
                    error={errors.city}
                    touched={touched.city}
                    styles={{ marginBottom: "1.5rem" }}
                    handleChange={(value: string) => {
                      setFieldValue("city", value);
                      handleDateChange(selectedDate || new Date(), value);
                    }}
                  />
                  <FormSelect
                    label="Reason For Visit*"
                    name="description"
                    disabled={isSubmitting}
                    options={[
                      {
                        label: "Complete Exam",
                        value: "complete_exam"
                      },
                      {
                        label: "Regular Cleaning",
                        value: "regular_cleaning"
                      },
                      {
                        label: "Crown",
                        value: "crown"
                      },
                      {
                        label: "Filling",
                        value: "filling"
                      },
                      {
                        label: "Pain/Problem",
                        value: "pain_problem"
                      },
                      {
                        label: "Tooth Repair",
                        value: "tooth_repair"
                      },
                      {
                        label: "Teeth Whitening",
                        value: "teeth_whitening"
                      },
                      {
                        label: "Veeners",
                        value: "veeners"
                      },
                      {
                        label: "Others",
                        value: "others"
                      }
                    ]}
                    placeholder="Select option"
                    error={errors.description}
                    touched={touched.description}
                    styles={{ marginBottom: "1.5rem" }}
                    handleChange={(value: string) => {
                      setFieldValue("description", value);
                    }}
                  />
                </Flex>
                <Flex width={"100%"}>
                  <div className="date-picker">
                    <h4>Select Date and Time</h4>
                    <div className="divider"></div>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date: any) => {
                        setFieldValue(
                          "appointment_date",
                          moment(date).format("yyyy-MM-DD")
                        );
                        handleDateChange(date, values.city);
                      }}
                      minDate={new Date()}
                      inline
                    />
                    <Text as={"h4"} textAlign={'center'} color={slotsStatus.success ? "green !important" : "red !important"}>{slotsStatus.text}</Text>
                  </div>
                </Flex>
              </Flex>
              <Flex width={"100%"} justifyContent={"center"} my={4}>
                <Button
                  type="submit"
                  variant="changePassword"
                  isDisabled={isSubmitting || !slotsStatus.status}
                  width={"300px"}
                  height={"100%"}
                  py={3}
                >
                  Request Appointment {isSubmitting && <Spinner ml={"4"} />}
                </Button>
              </Flex>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default BookAppointment;
