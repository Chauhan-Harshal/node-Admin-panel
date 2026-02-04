import { useState } from "react";
import authApi from "../auth/authApi";
import "./Signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");

  const handleSignup = async () => {
    await authApi.post("/signup", { email });
    window.location.href = "/verify-otp";
  };

  return (
    <div className="auth-card">
      <h3>Signup</h3>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSignup}>Send OTP</button>
    </div>
  );
}
