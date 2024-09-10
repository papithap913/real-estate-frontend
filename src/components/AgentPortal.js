import React from "react";

const AgentPortal = () => {
  return (
    <div className="container mt-5">
      <h3>Agent Portal</h3>
      <div className="row">
        <div className="col-md-4">
          <button className="btn btn-secondary w-100">Manage Properties</button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-secondary w-100">Manage Appointments</button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-secondary w-100">Interact with Clients</button>
        </div>
      </div>
    </div>
  );
};

export default AgentPortal;
