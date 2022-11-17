import { createBrowserRouter } from "react-router-dom";
import ForgotPasswordPage from "../Pages/Auth/ForgotPassword.page";
import LoginPage from "../Pages/Auth/Login.page";
import ResetPasswordPage from "../Pages/Auth/ResetPassword.page";
import DashboardPage from "../Pages/Main/Dashboard.page";
import InventoryPage from "../Pages/Main/Inventory.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
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
  {
    path: "/inventory",
    element: <InventoryPage />,
  },
]);

export default router;
