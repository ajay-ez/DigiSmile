import { Box, FormLabel, TextField } from "@mui/material";
import { Field, ErrorMessage } from "formik";
import React from "react";

interface Properties {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  isEditMode?: boolean;
}

const FieldInput = ({
  label,
  name,
  placeholder,
  type,
  required = false,
  disabled = false,
  isEditMode = false
}: Properties) => {
  return (
    <Box width="100%">
      <FormLabel
        sx={{
          color: "#000 !important",
          fontWeight: 600,
          fontSize: "16px"
          // "& .MuiFormLabel-asterisk": { color: "#F39200" },
          // "&.Mui-focused": { color: "#000" },
          // "&.Mui-error": { color: "#d32f2f" },
        }}
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </FormLabel>
      <Box mt={1}>
        <Field name={name}>
          {({ field }: { field: any; meta: any }) => (
            <TextField
              {...field}
              type={type}
              placeholder={placeholder}
              fullWidth
              disabled={disabled && isEditMode}
              variant="outlined"
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
            />
          )}
        </Field>
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-600 mt-1"
        />
      </Box>
    </Box>
  );
};

export default FieldInput;