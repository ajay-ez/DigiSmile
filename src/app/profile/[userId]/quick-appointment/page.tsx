"use client";

import "react-datepicker/dist/react-datepicker.css";
import "./calender.scss";

import {
  Box,
  Button,
  Flex,
  Spinner,
  Text,
  useMediaQuery
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import FormSelect from "@/components/common/FormMenu";
import { userAppointmentSchema } from "@/validations/schema/AppointmentFormSchema";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import moment from "moment";
import {
  BookQuickAppointmentAction,
  fetchAvailableAppointments,
  RescheduleAppointmentAction
} from "@/app/actions/appointmentAction";
import FormCustomRadioGroup from "@/components/common/CustomFormRadioGroup";
import { useRouter, useSearchParams } from "next/navigation";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { showToastWithTimeout } from "@/redux/SharedSlice";

const QuickAppointment = () => {
  const [initialFormValues, setInitialFormValues] = useState({
    city: "dc",
    description: "",
    slot: null,
    start_time: "",
    end_time: "",
    appointment_date: moment().format("yyyy-MM-DD"),
    user_id: ""
  });
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const [isMobile] = useMediaQuery("(max-width: 1200px)");
  const [loadingSlots, setLoadingSlots] = useState(true);
  const [slots, setSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const searchParams = useSearchParams();

  const handleAppointment = async (
    values: any,
    setSubmitting: (data: boolean) => void
  ) => {
    delete values.slot;
    const isReschedule = searchParams.get("reschedule");
    const appointmentId = searchParams.get("appointmentId");

    if (isReschedule === "true") {
      values.appointment_id = appointmentId;
      values.location = values.city;
      values.bearer_token = localStorage.getItem("authToken")?.slice(7);
      delete values.city;
      delete values.user_id;
      const response = await RescheduleAppointmentAction(values);
      if (response?.success) {
        dispatch(
          showToastWithTimeout({
            message: "Rescheduled Appointment Successfully",
            status: "success"
          })
        );
        router.push(
          `/profile/${localStorage.getItem("userId")}/upcoming-appointments?tabId=3`
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
    } else {
      delete values.city;
      const response = await BookQuickAppointmentAction(
        values,
        localStorage.getItem("authToken")
      );
      if (response?.success) {
        dispatch(
          showToastWithTimeout({
            message: "Booked Appointment Successfully",
            status: "success"
          })
        );
        router.push(
          `/profile/${localStorage.getItem("userId")}/upcoming-appointments?tabId=3`
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
    }
  };

  useEffect(() => {
    const func = async () => {
      const tabId = searchParams.get("tabId");
      const clinic = searchParams.get("clinic");
      const reason = searchParams.get("reason");
      if (tabId && clinic) {
        setInitialFormValues((prev) => ({ ...prev, city: clinic }));
        handleDateChange(new Date(), clinic);
      } else if (reason) {
        setInitialFormValues((prev) => ({ ...prev, description: reason }));
      } else {
        handleDateChange(new Date(), "dc");
      }
      setInitialFormValues((prev) => ({
        ...prev,
        user_id: `${localStorage.getItem("userId")}`
      }));
    };
    func();
  }, [searchParams.get("tabId")]);

  const handleDateChange = async (date: Date, city: string) => {
    setLoadingSlots(true);
    const updatedDate = moment(date).format("YYYY-MM-DD");
    const response = await fetchAvailableAppointments({
      appointment_date: updatedDate,
      city
    });
    if (response?.success) {
      setSlots(response?.data?.slotss || []);
    } else {
      setSlots([]);
    }
    setLoadingSlots(false);
    setSelectedDate(date);
  };

  return (
    <Box>
      <Formik
        initialValues={initialFormValues}
        validationSchema={userAppointmentSchema}
        onSubmit={(form, { setSubmitting }) => {
          handleAppointment(form, setSubmitting);
        }}
        enableReinitialize
      >
        {({ values, errors, touched, isSubmitting, setFieldValue }: any) => (
          <Form>
            <Flex
              justifyContent={"center"}
              background={"#fff"}
              color={"#000"}
              gap={2}
              flexWrap={isMobile ? "wrap" : "nowrap"}
            >
              <Flex width={"100%"} flexDir={"column"} p={4}>
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
                </div>
              </Flex>
              <Flex
                width={"100%"}
                flexDir={"column"}
                p={6}
                gap={3}
                maxH={"100%"}
                overflow={"auto"}
              >
                {loadingSlots ? (
                  <Spinner />
                ) : (
                  <>
                    {slots.length > 0 ? (
                      <Flex flexDir={"column"}>
                        <Text as={"h4"} fontWeight={600}>
                          Choose a Time Slot*
                        </Text>
                        <FormCustomRadioGroup
                          name="slot"
                          options={slots.map((slot: any) => ({
                            label: `${slot.start_time} - ${slot.end_time}`,
                            value: `${slot.start_time} - ${slot.end_time}`,
                            status: slot.status
                            // value: slot.start_time
                          }))}
                          error={errors.slot}
                          handleChange={(date: any) => {
                            const [startTime, endTime] = date.split(" - ");
                            setFieldValue("start_time", `${startTime}:00`);
                            setFieldValue("end_time", `${endTime}:00`);
                          }}
                          touched={touched.slot}
                          styles={{ margin: ".8rem 0 1.5rem 0" }}
                        />
                      </Flex>
                    ) : (
                      <>No Slots For Today</>
                    )}
                  </>
                )}
              </Flex>
            </Flex>
            <Flex width={"100%"} justifyContent={"center"} my={4}>
              <Button
                type="submit"
                variant="changePassword"
                isDisabled={isSubmitting}
                width={"300px"}
                height={"100%"}
                py={3}
              >
                Request Appointment {isSubmitting && <Spinner ml={"4"} />}
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default QuickAppointment;
