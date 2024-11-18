import React, { useState } from "react";
import axios from "../axiosConfig";

function AddProperty() {
  const [propertyName, setPropertyName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");

    try {
      const response = await axios.post(
        "/addproperty",
        { name: propertyName, price },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Property added successfully:", response.data);
    } catch (error) {
      console.error("Error occurred:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Property Name"
        value={propertyName}
        onChange={(e) => setPropertyName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Property</button>
    </form>
  );
}

export default AddProperty;
