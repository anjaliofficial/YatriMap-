import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/Signup.css"; // reuse the same CSS

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // API call here
  };

  return (
    <div className="signup-container">
      <motion.div
        className="signup-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label className="terms">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />{" "}
            Remember Me
          </label>
          <button type="submit" className="btn-signup">
            Login
          </button>
        </form>
        <p>
          Forgot your password?{" "}
          <span className="login-link" onClick={() => alert("Redirect to Forgot Password")}>
            Reset Here
          </span>
        </p>
        <p>
          Don't have an account?{" "}
          <span className="login-link" onClick={() => alert("Redirect to Sign Up")}>
            Sign Up
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
