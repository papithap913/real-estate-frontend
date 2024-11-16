import React, { useState } from "react";
import axios from "axios"; // Removed "../axiosConfig" for simplicity, using direct axios import.

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://real-estate-backend-main-x4c0.onrender.com/api/auth/login", // Full backend endpoint
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Required if backend uses cookies/sessions
        }
      );

      // Store token in localStorage (if provided by backend)
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setMessage("Logged in successfully!");
      } else {
        setMessage("Login successful, but no token received!");
      }
    } catch (err) {
      // Handle errors, including backend response errors
      setMessage(err.response?.data?.error || "Login failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
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
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Login;
