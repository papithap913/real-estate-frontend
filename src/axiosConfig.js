// src/axiosConfig.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://real-estate-backend-main-x4c0.onrender.com", // Replace with your backend URL
});

// Interceptor to add token to requests
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
