import AuthButton from "../../Component/Button/AuthButton";
import AuthDivider from "../../Component/Divider/AuthDivider";
import ForgotPasswordLink from "../../Component/Link/ForgotPassword.link";
import AuthLogo from "../../Component/Logo/AuthLogo";
import MainInput from "../../Component/TextField/Main.textfield";
import { Formik } from "formik";
import { ForgotPasswordValidationSchema } from "./ForgotPassword.util";

const ForgotPasswordContainer = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={ForgotPasswordValidationSchema}
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
            <div className="w-12/12 lg:w-custom space-y-4 pt-8">
              <p className="font-face-rbb text-lg font-black">
                FORGOT PASSWORD?
              </p>
              <p className="font-thin text-sm">
                Please enter your email to get a password reset link.
              </p>
              <MainInput
                placeholder="Enter your email ..."
                value={values}
                name="email"
                touched={touched}
                errors={errors}
                isPassword={false}
                handleChange={handleChange}
              />
            </div>
            <div className="flex flex-row justify-between items-center pt-8 w-12/12 lg:w-custom">
              <AuthButton
                disabled={!dirty || !isValid}
                onClick={handleSubmit}
                label="Reset"
              />
              <p />
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default ForgotPasswordContainer;
