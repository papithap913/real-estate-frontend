import React, { useState, useEffect } from "react";
import axios from "../axiosConfig";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("/properties");
        setProperties(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className="container">
      <h2>Available Properties</h2>
      <div>
        {properties.map((property) => (
          <div className="property-card" key={property._id}>
            <img
              src={property.image || "https://via.placeholder.com/150"}
              alt={property.title}
            />
            <div className="property-info">
              <h3>{property.title}</h3>
              <p className="price">${property.price}</p>
              <a href={`/property/${property._id}`} className="view-details">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
