import * as yup from "yup";
export const ForgotPasswordValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Format should be an email")
    .required("Please enter your email"),
});
