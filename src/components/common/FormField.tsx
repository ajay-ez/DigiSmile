import React from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { Field } from "formik";

interface Properties {
  label: string;
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "file" | "date";
  error?: string;
  touched?: boolean;
  // eslint-disable-next-line no-unused-vars
  onFocus?: (event: any) => void;
  children?: any;
  labelStyles?: any;
  inputStyles?: any;
  styles?: any;
  disabled?: any;
}

const FormField = ({
  label,
  name,
  placeholder,
  type = "text",
  error,
  touched,
  onFocus,
  children,
  labelStyles,
  inputStyles,
  styles,
  disabled
}: Properties) => {
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
        type={type}
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

export default FormField;
