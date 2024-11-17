// src/components/AddProperty.js
import React, { useState } from "react";
import axios from "../axiosConfig";

const AddProperty = () => {
  const [formData, setFormData] = useState({ title: "", description: "", price: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/addproperty", formData);
      setMessage("Property added successfully!");
      setFormData({ title: "", description: "", price: "" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Property</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default AddProperty;

