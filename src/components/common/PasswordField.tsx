/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { Field } from "formik";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

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
}

const PasswordField = ({
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
  disabled
}: Properties) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl
      position={"relative"}
      isInvalid={!!error && touched}
      marginInlineStart={children && "0 !important"}
      style={styles}
    >
      <FormLabel style={labelStyles} htmlFor={name}>
        {label}
      </FormLabel>
      <Field
        style={inputStyles}
        as={Input}
        id={name}
        name={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        variant="auth"
        autoComplete="off"
        onFocus={onFocus}
        disabled={disabled}
      />
      <Flex
        zIndex={2}
        onClick={() => setShowPassword(!showPassword)}
        position={"absolute"}
        top={9.5}
        right={4}
      >
        {showPassword ? (
          <VscEyeClosed size={25} color="#8F9BBA" />
        ) : (
          <VscEye size={25} color="#8F9BBA" />
        )}
      </Flex>

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default PasswordField;
