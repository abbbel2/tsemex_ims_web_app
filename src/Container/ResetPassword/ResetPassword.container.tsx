import { Typography } from "@mui/material";
import AuthButton from "../../Component/Button/AuthButton";
import AuthDivider from "../../Component/Divider/AuthDivider";
import ForgotPasswordLink from "../../Component/Link/ForgotPassword.link";
import AuthLogo from "../../Component/Logo/AuthLogo";
import MainInput from "../../Component/TextField/Main.textfield";
import { Formik } from "formik";
import { ResetPasswordValidationSchema } from "./ResetPassword.util";

const ResetPasswordContainer = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={ResetPasswordValidationSchema}
      onSubmit={(values) => console.log("values >>>  ", values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isValid,
        initialErrors,
        dirty,
      }) => {
        console.log("touched >>>  ", initialErrors);
        return (
          <div className="flex flex-col items-center justify-center h-screen">
            <AuthLogo />
            <p className="font-face-rbb text-2xl font-black pt-12">
              Inventory Management System
            </p>
            <AuthDivider />
            <div className="w-5/12 space-y-4 pt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                <p className="font-face-rbb text-lg font-black">ENTER CODE</p>
                <p className="font-face-rbb text-lg font-black">NEW PASSWORD</p>
                <p className="font-thin text-md">
                  We've emailed a reset code to your email. Please enter the
                  code below.
                </p>
                <MainInput
                  placeholder="Password"
                  value={values}
                  name="password"
                  touched={touched}
                  errors={errors}
                  isPassword={true}
                  handleChange={handleChange}
                />
                <MainInput
                  placeholder="Enter code ..."
                  value={values}
                  name="code"
                  touched={touched}
                  errors={errors}
                  isPassword={false}
                  handleChange={handleChange}
                />
                <MainInput
                  placeholder="Confirm password ..."
                  value={values}
                  name="confirm_password"
                  touched={touched}
                  errors={errors}
                  isPassword={false}
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-row justify-end items-center pt-8 w-5/12">
              <AuthButton
                disabled={!dirty || !isValid}
                onClick={handleSubmit}
                label="Reset"
              />
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default ResetPasswordContainer;
