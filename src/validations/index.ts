import * as Yup from "yup";

export const emailValidation = Yup.string()
  .email("Invalid email format")
  .required("Email is required");

export const passwordValidation = Yup.string()
  .min(8, "Password must be at least 8 characters long")
  .required("Password is required");

export const requiredCharField = (fieldName: string) =>
  Yup.string()
    .trim()
    .min(2, `${fieldName} must be at least 3 characters long`)
    .required(`${fieldName} is required`);

export const contactNumberValidation = Yup.string()
  .matches(/^[0-9]{10}$/, "Contact number must be a 10-digit number")
  .required("Contact number is required");

export const booleanValidation = Yup.boolean()
  .oneOf([true], "You must accept this")
  .required("This field is required");
