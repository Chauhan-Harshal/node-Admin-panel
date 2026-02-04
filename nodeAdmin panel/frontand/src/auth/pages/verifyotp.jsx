import { useState } from "react";
import authApi from "../auth/authApi";
import "./VerifyOtp.css";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");

  const verifyOtp = async () => {
    await authApi.post("/verify-otp", { otp });
    window.location.href = "/signin";
  };

  return (
    <div className="auth-card">
      <h3>Verify OTP</h3>
      <input
        placeholder="OTP"
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOtp}>Verify</button>
    </div>
  );
}
