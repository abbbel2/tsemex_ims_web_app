import * as yup from "yup";
export const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Format should be an email")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters allowed")
    .required("Please enter your password"),
});
