import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/ForgotPassword.css";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Forgot Password Email:", email);
    // Call API to send reset link
  };

  return (
    <div className="signup-container">
      <motion.div
        className="signup-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Forgot Password</h2>
        <p>Enter your email address to receive a password reset link.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn-signup">
            Send Reset Link
          </button>
        </form>
        <p>
          Remembered your password?{" "}
          <span className="login-link" onClick={() => window.location.href="/login"}>
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
