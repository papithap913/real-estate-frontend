import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://real-estate-backend-main-x4c0.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Retrieve token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
