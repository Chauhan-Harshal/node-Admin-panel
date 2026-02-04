import { Routes, Route, Navigate } from "react-router-dom";

import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import VerifyOtp from "../pages/VerifyOtp";
import ForgetPassword from "../pages/ForgetPassword";
import VerifyOtpForgetPassword from "../pages/VerifyOtpForgetPassword";
import ResetPassword from "../pages/ResetPassword";
import Dashboard from "../pages/Dashboard";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/signin" />;
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route
        path="/verify-forget-otp"
        element={<VerifyOtpForgetPassword />}
      />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
