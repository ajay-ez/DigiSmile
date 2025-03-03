import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FieldInput from "@/components/common/FieldInput";
import { emailValidation, requiredCharField } from "@/validations";
import { Box, Button } from "@chakra-ui/react";

const validationSchema = Yup.object({
  name: requiredCharField("Name"),
  email: emailValidation,
  message: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters long")
    .required("Message is required")
});

const initialValues = {
  name: "",
  email: "",
  message: ""
};

const ContactUsForm = () => {
  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (values: any) => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Box mb={2}>
            <h1 className="text-center">
              Send Us a Message
            </h1>
          </Box>
          <Box mb={2}>
            <FieldInput label="Name" name="name" type="text" required />
          </Box>
          <Box mb={2}>
            <FieldInput label="Email" name="email" type="email" required />
          </Box>
          <Box mb={2}>
            <Field name="message">
              {({ field }: { field: any; meta: any }) => (
                <Box>
                  <label
                    htmlFor="message"
                    style={{ display: "block", marginBottom: "8px" }}
                  >
                    Message
                  </label>
                  <textarea
                    {...field}
                    id="message"
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      fontSize: "16px"
                    }}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-600 mt-1"
                  />
                </Box>
              )}
            </Field>
          </Box>

          <Button
            // fullWidth
            className="bg-digiSkyBlue text-lg text-white rounded-lg p-2 px-8 capitalize hover:bg-blue-500"
            type="submit"
          >
            Send Message
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactUsForm;
