import { useState } from "react";
import authApi from "../auth/authApi";
import "./VerifyOtpForgetPassword.css";

export default function VerifyOtpForgetPassword() {
  const [otp, setOtp] = useState("");

  const verify = async () => {
    await authApi.post("/verify-forget-otp", { otp });
    window.location.href = "/reset-password";
  };

  return (
    <div className="auth-card">
      <h3>Verify OTP</h3>
      <input
        placeholder="OTP"
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verify}>Verify</button>
    </div>
  );
}
