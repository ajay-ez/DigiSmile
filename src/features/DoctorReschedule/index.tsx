import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";
import { Form, Formik } from "formik";
import moment from "moment";
import { rescheduleAppointmentSchema } from "@/validations/schema/AppointmentFormSchema";
import { appointmentValues } from "@/types";
import FormSelect from "@/components/common/FormMenu";
import { fetchAvailableAppointments, RescheduleAppointmentAction } from "@/app/actions/appointmentAction";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { showToastWithTimeout } from "@/redux/SharedSlice";

interface DoctorRescheduleProps {
  initialSlots?: any[];
  initialData: any;
  onSubmit?: (values: any) => void;
}

const DoctorReschedule = ({ initialSlots = [], initialData, onSubmit }: DoctorRescheduleProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [slotsStatus, setSlotsStatus] = useState({ status: false, text: "", success: false });
  const [initialFormValues, setInitialFormValues] = useState({
    city: "dc",
    slot: '',
    start_time: "",
    end_time: "",
    appointment_date: initialData?.date,
    appointment_id : initialData?.appointment_id,
    description: initialData?.description,
    rescheduled_by: "doctor",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [slots, setSlots] = useState(initialSlots);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  useEffect(() => {
    if (initialSlots.length > 0) {
      setSlotsStatus({ text: "Slots Available", status: true, success: true });
    }
    else {
      setSlotsStatus({ text: "No Slots Available", status: false, success: false });
    }
  }, [initialSlots]);

  const handleDateChange = async (date: Date, city: string) => {
    const updatedDate = moment(date).format("YYYY-MM-DD");
    const response = await fetchAvailableAppointments({
      appointment_date: updatedDate,
      city,
      showBooked: true
    });
    if (response?.data?.error) {
      setSlotsStatus({ text: response?.data?.error, status: false, success: false });
    } else if (response?.data?.slotss) {
      setSlotsStatus({ text: "Slots Available", status: true, success: true });
    }
    if (response?.success) {
      setSlots(response?.data?.slotss || []);
    } else {
      setSlots([]);
    }
    setSelectedDate(date);
  };

  const handleAppointment = async (
    values: any,
    setSubmitting: (data: boolean) => void,
    resetForm: () => void
  ) => {
    values.location = values.city
    values.bearer_token = localStorage.getItem("authToken")?.slice(7);
    delete values.city;
    delete values.slot;
    const response = await RescheduleAppointmentAction(values);
    if (response?.success) {
      dispatch(
        showToastWithTimeout({
          message: "Rescheduled Appointment Successfully",
          status: "success"
        })
      );
      setIsOpen(false);
      setSlots(initialSlots);
      setSubmitting(false);
      resetForm();
      onSubmit?.(values);
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

  const CustomInput = ({ value }: { value: string }) => (
    <Button onClick={() => setIsOpen(true)} variant="outline">
      {value || "Select Date"}
    </Button>
  );
  
  return (
    <Flex className="doctor-appointment-date-picker-container">
      <Flex className="appointment-date-picker">
        <Formik
          initialValues={initialFormValues}
          validationSchema={rescheduleAppointmentSchema}
          onSubmit={(form, { setSubmitting, resetForm }) => {
            handleAppointment(form, setSubmitting, resetForm);
          }}
          enableReinitialize
        >
          {({ values, errors, touched, setFieldValue, resetForm }: any) => {
            return (
              <Form>
                <DatePicker
                  onClickOutside={() => setIsOpen(false)}
                  open={isOpen}
                  customInput={<CustomInput value={values.appointment_date}/>}
                  selected={initialFormValues.appointment_date ? moment(initialFormValues.appointment_date).toDate() : new Date()} 
                  shouldCloseOnSelect={false}
                  onCalendarClose={() => {
                    setSlots(initialSlots);
                    resetForm({
                      values: {
                        city: 'dc',
                        slot: '',
                        start_time: '',
                        end_time: '',
                        appointment_date: initialData?.date
                      }
                    });
                  }}
                  onChange={(date: any) => {
                    setFieldValue(
                      "appointment_date",
                      moment(date).format("yyyy-MM-DD")
                    );
                    handleDateChange(date, values.city);
                    setFieldValue('slot', '');
                    setFieldValue('start_time', '');
                    setFieldValue('end_time', '');
                  }}>
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
                    placeholder="Select option"
                    styles={{ marginBottom: "1.5rem" }}
                    handleChange={(value: string) => {
                      setFieldValue("city", value);
                      handleDateChange(selectedDate || new Date(), value);
                      setFieldValue('slot', '');
                      setFieldValue('start_time', '');
                      setFieldValue('end_time', '');
                    }}
                    error={errors.city}
                    touched={touched.city}
                  />
                  <FormSelect
                    label="Slots*"
                    name="slot"
                    options={slots.map((slot: any) => ({
                      label: `${slot.start_time} - ${slot.end_time}`,
                      value: `${slot.start_time} - ${slot.end_time}`,
                    }))}
                    handleChange={async (date: any) => {
                      const [startTime, endTime] = date.split(" - ");
                      await setFieldValue("start_time", `${startTime}:00`);
                      await setFieldValue("end_time", `${endTime}:00`);
                      await setFieldValue("slot", `${startTime} - ${endTime}`);
                    }}
                    placeholder="Select option"
                    styles={{ marginBottom: "1.5rem" }}
                    error={errors.start_time}
                    touched={touched.start_time}
                  />
                  <Text as={"h4"} textAlign={'center'} mb={2} color={slotsStatus.success ? "green !important" : "red !important"}>{slotsStatus.text}</Text>
                  <Button type="submit" variant="changePassword">Reschedule</Button>
                </DatePicker>
              </Form>
            )
          }
          }
        </Formik>
      </Flex>
    </Flex>
  );
};

export default DoctorReschedule;
