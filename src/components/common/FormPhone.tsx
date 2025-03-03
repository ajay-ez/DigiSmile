import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { Field } from "formik";

interface PhoneProperties {
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
  touched?: boolean;
  // eslint-disable-next-line no-unused-vars
  onFocus?: (event: any) => void;
  children?: any;
  labelStyles?: any;
  inputStyles?: any;
  styles?: any;
  disabled?: boolean;
}

const FormPhone = ({
  label,
  name,
  placeholder = "Enter your phone number",
  error,
  touched,
  onFocus,
  children,
  labelStyles,
  inputStyles,
  styles,
  disabled
}: PhoneProperties) => {
  return (
    <FormControl
      isInvalid={!!error && touched}
      marginInlineStart={children && "0 !important"}
      style={styles}
    >
      <FormLabel style={labelStyles} htmlFor={name} color={"#000"}>
        {label}
      </FormLabel>
      <Field
        style={inputStyles}
        as={Input}
        id={name}
        name={name}
        type="number"
        placeholder={placeholder}
        variant="auth"
        autoComplete="off"
        onFocus={onFocus}
        disabled={disabled}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormPhone;
