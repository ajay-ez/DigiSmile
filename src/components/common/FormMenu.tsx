/* eslint-disable no-unused-vars */
import React from "react";
import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage
} from "@chakra-ui/react";
import { Field } from "formik";

interface Option {
  value: string;
  label: string;
}

interface Properties {
  label: string;
  name: string;
  placeholder?: string;
  options: Option[];
  error?: string;
  touched?: boolean;
  onFocus?: (event: any) => void;
  handleChange?: (value: string) => void;
  labelStyles?: any;
  inputStyles?: any;
  styles?: any;
  disabled?: boolean;
  variant?: string;
}

const FormSelect = ({
  label,
  name,
  placeholder = "Select option",
  options,
  error,
  touched,
  onFocus,
  handleChange,
  labelStyles,
  inputStyles,
  styles,
  disabled,
  variant = "default"
}: Properties) => {
  return (
    <FormControl isInvalid={!!error && touched} style={styles}>
      <FormLabel style={labelStyles} htmlFor={name} color={"#000"}>
        {label}
      </FormLabel>
      <Field
        variant={variant}
        as={Select}
        id={name}
        name={name}
        onFocus={onFocus}
        style={inputStyles}
        disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          if (handleChange) handleChange(e.target.value);
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormSelect;
