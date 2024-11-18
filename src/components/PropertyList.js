// src/components/PropertyList.js
import React, { useState, useEffect } from "react";
import axios from "../axiosConfig";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("/api/PropertyList");
        setProperties(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err.response?.data?.message || "Error fetching properties");
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Properties</h2>
      <ul>
        {properties.map((property) => (
          <li key={property._id}>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
