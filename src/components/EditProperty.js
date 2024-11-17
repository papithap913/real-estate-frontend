// src/components/EditProperty.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axiosConfig";

const EditProperty = () => {
  const { id } = useParams(); // Get property ID from URL
  const [formData, setFormData] = useState({ title: "", description: "", price: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(`/properties/${id}`);
        setFormData(res.data);
      } catch (err) {
        console.error(err.response?.data?.message || "Error fetching property");
      }
    };
    fetchProperty();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/properties/${id}`, formData);
      setMessage("Property updated successfully!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error updating property");
    }
  };

  return (
    <div>
      <h2>Edit Property</h2>
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
        <button type="submit">Update Property</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default EditProperty;

