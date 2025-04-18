import * as yup from "yup";

import * as MESSAGES from "../messages";

const appointmentSchema = yup.object().shape({
  first_name: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  last_name: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  phone_number: yup.string().trim().matches(/^\d{10}$/, "Phone number must be exactly 10 digits").notRequired(),
  email: yup
    .string()
    .trim()
    .email(MESSAGES.EMAIL_MESSAGE)
    .required(MESSAGES.REQUIRE_MESSAGE),
  city: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  description: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE)
});

const userAppointmentSchema = yup.object().shape({
  city: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  description: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  slot: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE)
});

const rescheduleAppointmentSchema = yup.object().shape({
  city: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  slot: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  start_time: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  end_time: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  appointment_date : yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  appointment_id : yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  description : yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  rescheduled_by : yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
});

export { appointmentSchema, userAppointmentSchema, rescheduleAppointmentSchema };
