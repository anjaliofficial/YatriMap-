// src/pages/ForgotPasswordPage.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/LoginForgotPage.css.css";

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset Password Email:", email);
    // API call to send reset email
  };

  return (
    <div className="forgot-container">
      <motion.div
        className="forgot-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Forgot Password</h2>
        <p>Enter your email address to reset your password.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn-reset">Send Reset Link</button>
        </form>
        <p>
          Remembered your password? <span className="login-link">Login</span>
        </p>
      </motion.div>
    </div>
  );
};

export default ForgotPasswordPage;
