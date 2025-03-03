import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Radio,
  RadioGroup,
  Stack
} from "@chakra-ui/react";
import { useField } from "formik";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupFieldProps {
  name: string;
  label: string;
  options: RadioOption[];
  error?: string;
  touched?: boolean;
  labelStyles?: any;
  styles?: any;
}

const FormRadioGroup: React.FC<RadioGroupFieldProps> = ({
  name,
  label,
  options,
  labelStyles,
  styles
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <FormControl isInvalid={!!meta.error && meta.touched}>
      <FormLabel style={labelStyles} htmlFor={name}>
        {label}
      </FormLabel>
      <RadioGroup
        {...field}
        value={field.value || ""}
        onChange={(value) => helpers.setValue(value)}
        id={name}
        style={styles}
      >
        <Stack direction="row" spacing={4}>
          {options.map((option, index) => (
            <Radio key={index} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormRadioGroup;
