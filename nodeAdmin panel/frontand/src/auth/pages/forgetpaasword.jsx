import { useState } from "react";
import authApi from "../auth/authApi";
import "./ForgetPassword.css";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const sendOtp = async () => {
    await authApi.post("/forget-password", { email });
    window.location.href = "/verify-forget-otp";
  };

  return (
    <div className="auth-card">
      <h3>Forget Password</h3>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendOtp}>Send OTP</button>
    </div>
  );
}
