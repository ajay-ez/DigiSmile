/* eslint-disable no-unused-vars */
import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea
} from "@chakra-ui/react";
import { Field } from "formik";

interface Properties {
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
  touched?: boolean;
  onFocus?: (event: any) => void;
  children?: any;
  labelStyles?: any;
  inputStyles?: any;
  styles?: any;
  disabled?: any;
  variant?: string;
}

const FormArea = ({
  label,
  name,
  placeholder,
  error,
  touched,
  onFocus,
  children,
  labelStyles,
  inputStyles,
  styles,
  disabled,
  variant = "default"
}: Properties) => {
  return (
    <FormControl
      isInvalid={!!error && touched}
      marginInlineStart={children && "0 !important"}
      style={styles}
    >
      <FormLabel style={labelStyles} htmlFor={name}>
        {label}
      </FormLabel>
      <Field
        style={inputStyles}
        as={Textarea}
        id={name}
        name={name}
        placeholder={placeholder}
        variant={variant}
        autoComplete="off"
        onFocus={onFocus}
        disabled={disabled}
        maxHeight={"80px"}
        fontSize={"md"}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormArea;
