import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import PropertyListing from "./components/PropertyListing";
import AgentPortal from "./components/AgentPortal";
import Register from "./components/Register";
import './App.css';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PropertyListing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/agents" element={<AgentPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
