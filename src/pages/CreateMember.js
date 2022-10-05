import React, { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postMember } from '../Redux/MemberApi';
import { GetAllGroups } from '../Redux/GroupApi';

const FormData = require('form-data');

function CreateMember() {
  const { groups } = useSelector((state) => state.GroupDataReducer);
  const location = useLocation();
  const { adminId } = location.state || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllGroups());
  }, [dispatch]);

  const [formInputs, changeFormInputs] = useState({
    name: '',
    phone_number: '',
    occupation: '',
    post_held: '',
    birthday: '',
    picture: '',
    distance: false,
    group_id: '',
  });

  const updateName = (e) => {
    changeFormInputs({
      ...formInputs,
      name: e.target.value,
    });
  };

  const updateNumber = (e) => {
    changeFormInputs({
      ...formInputs,
      phone_number: e.target.value,
    });
  };

  const updateOccupation = (e) => {
    changeFormInputs({
      ...formInputs,
      occupation: e.target.value,
    });
  };

  const updatePostheld = (e) => {
    changeFormInputs({
      ...formInputs,
      post_held: e.target.value,
    });
  };

  const updateBirthday = (e) => {
    changeFormInputs({
      ...formInputs,
      birthday: e.target.value,
    });
  };

  const updateImage = (e) => {
    if (e.target.files.length !== 0) {
      changeFormInputs({
        ...formInputs,
        picture: e.target.files[0],
      });
    }
  };

  const updateCheckValue = () => {
    changeFormInputs({
      ...formInputs,
      distance: !formInputs.distance,
    });
  };

  const updateGroupId = (e) => {
    changeFormInputs({
      ...formInputs,
      group_id: e.target.value,
    });
  };

  console.log(formInputs);

  const form = new FormData();
  form.append('name', formInputs.name);
  form.append('phone_number', formInputs.phone_number);
  form.append('occupation', formInputs.occupation);
  form.append('picture', formInputs.picture);
  form.append('distance', formInputs.distance);
  form.append('post_held', formInputs.post_held);
  form.append('birthday', formInputs.birthday);
  form.append('user_id', formInputs.user_id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postMember(form, adminId, formInputs.group_id));
    const {
      name, number, occupation, postheld, birthday,
    } = e.target.elements;

    name.value = '';
    number.value = '';
    occupation.value = '';
    postheld.value = '';
    birthday.value = '';
  };

  return (
    <div className="AdminDashboard">
      <h2>Create Member</h2>
      <form type="multipart/form-data" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name of member here" onChange={updateName} required />
        <input type="number" name="number" placeholder="Phone number" onChange={updateNumber} required />
        <input type="text" name="occupation" placeholder="Occupation" onChange={updateOccupation} required />
        <input type="file" name="photo" onChange={updateImage} required />
        <label htmlFor="distance">
          <br />
          Distance:
          <input type="checkbox" name="distance" checked={formInputs.distance} onChange={updateCheckValue} />
        </label>
        <br />

        <input type="text" name="postheld" placeholder="Post held" onChange={updatePostheld} required />
        <input type="text" name="birthday" placeholder="Year of birth" onChange={updateBirthday} required />

        <label htmlFor="group">
          Choose a group:
          <select name="groups" id="groups" onChange={updateGroupId}>
            <option>Choose a group</option>
            {
              groups.map((group) => <option key={group.id} value={group.id}>{group.name}</option>)
}
          </select>
        </label>
        <button type="submit">Add Member</button>
      </form>
      <button type="button">
        <NavLink to="/AdminDashboard">Back to AdminDashboard </NavLink>
      </button>
    </div>
  );
}

export default CreateMember;
