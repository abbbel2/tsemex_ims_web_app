import * as yup from "yup";

export type ResetPasswordPropType = {};

export const ResetPasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Minimum 6 characters allowed")
    .required("Please enter your password"),
  confirmPassword: yup
    .string()
    .min(6, "Minimum 6 characters allowed")
    .required("Please enter your password"),
  code: yup.string().required("Code is required"),
});
