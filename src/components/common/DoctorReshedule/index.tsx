import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calender.scss";
import { Formik } from "formik";
import moment from "moment";
import { userAppointmentSchema } from "@/validations/schema/AppointmentFormSchema";
import { appointmentValues } from "@/types";

const DoctorReschedule = () => {
  const [startDate, setStartDate] = useState(new Date());
  const initialFormValues: appointmentValues = {
    city: "dc",
    slot: null,
    start_time: "",
    end_time: "",
    appointment_date: moment().format("yyyy-MM-DD"),
    user_id: ""
  };
  // const [initialFormValues, setInitialFormValues] = useState({
  //   city: "dc",
  //   slot: null,
  //   start_time: "",
  //   end_time: "",
  //   appointment_date: moment().format("yyyy-MM-DD"),
  //   user_id: ""
  // });
  const handleNextClick = () => {
    const nextMonth = new Date(startDate);
    nextMonth.setDate(startDate.getDate() + 1);
    setStartDate(nextMonth);
  };

  const handlePrevClick = () => {
    const prevMonth = new Date(startDate);
    prevMonth.setDate(startDate.getDate() - 1);
    setStartDate(prevMonth);
  };

  const handleDateChange = (date: any) => {
    setStartDate(date);
  };

  const handleAppointment = async (
    values: appointmentValues,
    setSubmitting: (data: boolean) => void
  ) => {
    console.log("values", values);
    // delete values.confirmPassword;
    // registerUser(values).then((response: any) => {
    //   if (response.error) {
    //     dispatch(
    //       showToastWithTimeout({
    //         message: response.error.data.message,
    //         status: "error"
    //       })
    //     );
    //   } else {
    //     router.push("/auth/login");
    //     dispatch(
    //       showToastWithTimeout({
    //         message: response.data.message || "Success",
    //         status: "success"
    //       })
    //     );
    //   }
    //   setSubmitting(false);
    // });
  };

  return (
    <Flex className="doctor-appointment-date-picker-container">
      <Flex className="appointment-date-picker">
        <button className="prev_button" onClick={handlePrevClick}>
          {"◄"}
        </button>
        <Formik
          initialValues={initialFormValues}
          validationSchema={userAppointmentSchema}
          onSubmit={(form, { setSubmitting }) => {
            handleAppointment(form, setSubmitting);
          }}
          enableReinitialize
        >
          <DatePicker selected={startDate} onChange={handleDateChange}>
            <Text>AA</Text>
          </DatePicker>
        </Formik>
        <button className="next_button" onClick={handleNextClick}>
          {"►"}
        </button>
      </Flex>
    </Flex>
  );
};

export default DoctorReschedule;
