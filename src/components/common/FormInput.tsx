import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from "@chakra-ui/react";

interface Properties {
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
  touched?: boolean;
  onFocus?: (event: any) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: any;
  labelStyles?: any;
  inputStyles?: any;
  styles?: any;
  disabled?: boolean;
}

const FormInput = ({
  label,
  name,
  placeholder,
  error,
  touched,
  onFocus,
  onChange,
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
      <Input
        padding={".25rem"}
        style={inputStyles}
        id={name}
        name={name}
        type={"file"}
        placeholder={placeholder}
        variant="auth"
        autoComplete="off"
        onFocus={onFocus}
        onChange={onChange}
        disabled={disabled}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
