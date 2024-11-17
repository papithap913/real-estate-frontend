import React, { useState } from "react";
import axios from "../axiosConfig"; // Ensure axiosConfig is properly set up
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook to navigate to other pages

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://real-estate-backend-main-x4c0.onrender.com/api/auth/login", formData); // Replace with correct login endpoint
      const userData = res.data; // Assuming the response contains the user data
      localStorage.setItem("user", JSON.stringify(userData)); // Save user data
      setMessage("Login successful!");
      navigate("/PropertyList.js"); // Redirect to dashboard
    } catch (err) {
      setMessage(err.response?.data?.error || "Error occurred during login");
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
