import * as yup from "yup";

import * as MESSAGES from "../messages";

const appointmentSchema = yup.object().shape({
  first_name: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  last_name: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  phone_number: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  email: yup
    .string()
    .trim()
    .email(MESSAGES.EMAIL_MESSAGE)
    .required(MESSAGES.REQUIRE_MESSAGE),
  city: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  problem: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE)
});

export default appointmentSchema;
