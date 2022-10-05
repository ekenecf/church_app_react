import React from 'react';
import { NavLink } from 'react-router-dom';

function CreateEvent() {
  return (
    <div className="AdminDashboard">
      Create Event

      <button type="button">
        <NavLink to="/AdminDashboard">Back to AdminDashboard </NavLink>
      </button>
    </div>
  );
}

export default CreateEvent;
