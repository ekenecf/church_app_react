import React from 'react';
import { useLocation } from 'react-router-dom';

function CreateMember() {
  const location = useLocation();
  const { adminId } = location.state || {};
  console.log(adminId);

  return (
    <div className="AdminDashboard">
      <h2>Create group</h2>
      <form>
        <input type="text" name="name" placeholder="Name of member here" required />
        <input type="number" name="number" placeholder="Phone number" required />
        <input type="text" name="Occupation" placeholder="Occupation" required />
        <input type="file" name="photo" required />
        <label htmlFor="distance">
          <br />
          Distance:
          <input type="checkbox" name="distance" id="distance" required />
        </label>
        <label htmlFor="active">
          <br />
          {' '}
          Active:
          <input type="checkbox" name="active" required />
        </label>
        <br />

        <input type="text" name="post-held" placeholder="Post held" required />
        <input type="date" name="Birthday" placeholder="Year of birth" required />

        <button type="submit">Add Member</button>
      </form>
    </div>
  );
}

export default CreateMember;
