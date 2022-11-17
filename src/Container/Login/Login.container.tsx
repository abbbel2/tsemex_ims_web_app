// import AuthButton from "../../Component/Button/AuthButton";
import Button from "../../Component/Button/Main.button";
import AuthDivider from "../../Component/Divider/AuthDivider";
import ForgotPasswordLink from "../../Component/Link/ForgotPassword.link";
import AuthLogo from "../../Component/Logo/AuthLogo";
import MainInput from "../../Component/TextField/Main.textfield";
import { Formik } from "formik";
import { LoginValidationSchema } from "./Login.util";
import { useNavigate } from "react-router-dom";
import AuthTitle from "../../Component/Text/AuthTitle";

const LoginContainer = () => {
  const navigate = useNavigate();
  const navigateToReset = () => navigate("/forgot-password");
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginValidationSchema}
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
        return (
          <div className="flex flex-col items-center justify-center h-screen">
            <AuthLogo />
            <AuthTitle text="Inventory Management System" />
            <AuthDivider />
            <div className="w-12/12 lg:w-custom space-y-4 pt-12">
              <p className="font-face-rbb text-lg font-black">SIGN IN</p>
              <MainInput
                placeholder="Your email ..."
                value={values}
                name="email"
                touched={touched}
                errors={errors}
                isPassword={false}
                handleChange={handleChange}
              />
              <MainInput
                placeholder="Password ..."
                value={values}
                name="password"
                touched={touched}
                errors={errors}
                isPassword={false}
                handleChange={handleChange}
              />
            </div>
            <div className="flex flex-row justify-between items-center pt-12 w-12/12 lg:w-custom">
              <Button
                disabled={!dirty || !isValid}
                handleClick={handleSubmit}
                label="Sign In"
              />
              <ForgotPasswordLink handleClick={navigateToReset} />
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default LoginContainer;
