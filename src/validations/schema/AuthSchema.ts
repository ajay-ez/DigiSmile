import * as yup from "yup";
import * as MESSAGES from "../messages";
import { contactNumberValidation, requiredCharField } from "..";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email(MESSAGES.EMAIL_MESSAGE)
    .required(MESSAGES.REQUIRE_MESSAGE),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required")
});

export const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email(MESSAGES.EMAIL_MESSAGE)
    .required(MESSAGES.REQUIRE_MESSAGE)
});

export const ChangePasswordSchema = yup.object().shape({
  new_password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  old_password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required")
});

export const UserProfileSchema = yup.object().shape({
  first_name: requiredCharField("First Name"),
  last_name: requiredCharField("Last Name"),
  email: yup
    .string()
    .trim()
    .email(MESSAGES.EMAIL_MESSAGE)
    .required(MESSAGES.REQUIRE_MESSAGE),
  phone_number: yup.string().trim().matches(/^\d{10}$/, "Phone number must be exactly 10 digits").notRequired(),
});

export const MedicalRecordsSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email(MESSAGES.EMAIL_MESSAGE)
    .required(MESSAGES.REQUIRE_MESSAGE),
  document: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  date: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  prescription: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE),
  problem: yup.string().trim().required(MESSAGES.REQUIRE_MESSAGE)
});

export const SignupSchema = yup.object().shape({
  first_name: requiredCharField("First Name"),
  last_name: requiredCharField("Last Name"),
  email: yup
    .string()
    .trim()
    .email(MESSAGES.EMAIL_MESSAGE)
    .required(MESSAGES.REQUIRE_MESSAGE),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required")
});
