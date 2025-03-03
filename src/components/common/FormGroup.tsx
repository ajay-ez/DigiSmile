/* eslint-disable no-unused-vars */
import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormErrorMessage,
  Stack
} from "@chakra-ui/react";
import { Field } from "formik";

interface Option {
  value: string;
  label: string;
}

interface Properties {
  label: string;
  name: string;
  options: Option[];
  error?: string;
  touched?: boolean;
  onFocus?: (event: any) => void;
  labelStyles?: any;
  inputStyles?: any;
  styles?: any;
  disabled?: boolean;
  variant?: string;
  value?: string;
  stackDirection?: "row" | "column";
}

const FormRadioGroup = ({
  label,
  name,
  options,
  error,
  touched,
  onFocus,
  labelStyles,
  inputStyles,
  styles,
  disabled,
  value,
  variant = "default",
  stackDirection = "column"
}: Properties) => {
  return (
    <FormControl isInvalid={!!error && touched} style={styles}>
      <FormLabel style={labelStyles} htmlFor={name} color={"#000"}>
        {label}
      </FormLabel>
      <Field name={name} type="radio">
        {({ field }: any) => (
          <RadioGroup
            {...field}
            id={name}
            value={value || ""}
            onChange={(val) => field.onChange({ target: { name, value: val } })}
            onFocus={onFocus}
          >
            <Stack direction={stackDirection} style={inputStyles}>
              {options.map((option, index) => (
                <Radio key={index} value={option.value} isDisabled={disabled}>
                  {option.label}
                </Radio>
              ))}
            </Stack>
          </RadioGroup>
        )}
      </Field>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormRadioGroup;
