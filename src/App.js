import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AgentPortal from "./components/AgentPortal";
import Register from "./components/Register";
import AddProperty from "./components/AddProperty";
import properties from "./components/properties";
import EditProperty from "./components/EditProperty";
import './App.css';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
    
      <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/agents" element={<AgentPortal />} />
        <Route path="/addproperty" element={<AddProperty />} />
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/editproperty/:id" element={<EditProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
