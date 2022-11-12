import { createBrowserRouter } from "react-router-dom";
import ResetPassword from "../Container/ResetPassword/ResetPassword.container";
import ForgotPasswordPage from "../Pages/ForgotPassword.page";
import LoginPage from "../Pages/Login.page";
import ResetPasswordPage from "../Pages/ResetPassword.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
]);

export default router;
