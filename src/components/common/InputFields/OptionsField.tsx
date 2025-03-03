import { Box, FormLabel } from "@chakra-ui/react";
import { Field, ErrorMessage } from "formik";
import React from "react";

interface Option {
  label: string;
  value: string;
}

interface Properties {
  label: string;
  name: string;
  options: Option[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  isEditMode?: boolean;
  handleChange: any;
}

const OptionsField = ({
  label,
  name,
  options,
  placeholder,
  required = false,
  disabled = false,
  isEditMode = false,
  handleChange
}: Properties) => {
  return (
    <Box width="100%">
      <FormLabel
        sx={{
          color: "#000 !important",
          fontWeight: 600,
          fontSize: "16px"
        }}
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </FormLabel>
      <Box mt={1}>
        {/* <Field name={name}>
          {({ field }: { field: any; meta: any }) => (
            <TextField
              {...field}
              select
              placeholder={placeholder}
              fullWidth
              disabled={disabled && isEditMode}
              variant="outlined"
              onChange={handleChange}
              InputProps={{
                sx: {
                  color: "#000",
                  height: "55px",
                  padding: "14px 20px",
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  "& .MuiFormLabel-asterisk": { color: "#F39200" },
                  "&.Mui-focused": { color: "#000" },
                  "&.Mui-error": { color: "#d32f2f" }
                }
              }}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        </Field> */}
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-600 mt-1"
        />
      </Box>
    </Box>
  );
};

export default OptionsField;
