import React from "react";
import {
  Flex,
  FormControl,
  Radio,
  RadioGroup,
  Stack,
  Text
} from "@chakra-ui/react";
import { useField } from "formik";

interface RadioOption {
  label: string;
  value: string;
  status: string;
}

interface RadioGroupFieldProps {
  name: string;
  options: RadioOption[];
  error?: string;
  touched?: boolean;
  styles?: any;
  handleChange?: (value: string) => void;
}

const FormCustomRadioGroup: React.FC<RadioGroupFieldProps> = ({
  name,
  options,
  styles,
  handleChange
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <FormControl isInvalid={!!meta.error && meta.touched}>
      <RadioGroup
        {...field}
        value={field.value || ""}
        onChange={(value) => {
          if (handleChange) handleChange(value);
          helpers.setValue(value);
        }}
        id={name}
        style={styles}
      >
        <Stack
          className="custom-radio-group"
          direction="column"
          spacing={4}
          maxH={"50vh"}
          overflow={"auto"}
        >
          {options.map((option, index) => (
            <Flex
              key={index}
              border={"1px #577361 solid"}
              borderRadius={"sm"}
              justifyContent={"space-between"}
              alignItems={"center"}
              px={2}
            >
              <Radio
                value={option.value}
                isDisabled={option.status === "booked"}
                border={
                  option.status === "booked"
                    ? "1px #e1e9f8 solid !important"
                    : "2px solid"
                }
                borderRadius={"full"}
                borderColor={"inherit"}
              >
                {option.label}
              </Radio>
              <Text
                mr={8}
                as={"h5"}
                opacity={option.status === "booked" ? "0.2" : "1"}
              >
                {option.status === "booked" ? "BOOKED" : "AVAILABLE"}
              </Text>
            </Flex>
          ))}
        </Stack>
      </RadioGroup>
    </FormControl>
  );
};

export default FormCustomRadioGroup;
