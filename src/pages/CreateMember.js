import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postMember } from '../Redux/MemberApi';
import { GetAllGroups } from '../Redux/GroupApi';

function CreateMember() {
  const { groups } = useSelector((state) => state.GroupDataReducer);

  const [image, setImage] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [optionId, setoption] = useState('');

  const location = useLocation();
  const { adminId } = location.state || {};

  // console.log(adminId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllGroups());
  }, [dispatch]);

  const handleChange = (e) => {
    if (e.target.files.length !== 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  console.log(optionId);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSelect = (e) => {
    setoption(e.target.value);
  };
  console.log(optionId);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setImage(e.target.files[0]);
    // const savedPhoto = URL.createObjectURL(file);
    const {
      name, number, occupation, postheld, birthday,
    } = e.target.elements;
    const createdMember = {
      name: name.value,
      phone_number: number.value,
      occupation: occupation.value,
      picture: image,
      distance: isChecked,
      post_held: postheld.value,
      birthday: birthday.value,
    };
    dispatch(postMember(createdMember, adminId, optionId));
    name.value = '';
    number.value = '';
    occupation.value = '';
    birthday.value = '';
    postheld.value = '';
  };

  return (
    <div className="AdminDashboard">
      <h2>Create Member</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name of member here" required />
        <input type="number" name="number" placeholder="Phone number" required />
        <input type="text" name="occupation" placeholder="Occupation" required />
        <input type="file" name="photo" onChange={(e) => handleChange(e)} required />
        <label htmlFor="distance">
          <br />
          Distance:
          <input type="checkbox" name="distance" checked={isChecked} onChange={(e) => handleOnChange(e)} />
        </label>
        <br />

        <input type="text" name="postheld" placeholder="Post held" required />
        <input type="text" name="birthday" placeholder="Year of birth" required />

        <button type="submit">Add Member</button>

        <label htmlFor="group">
          Choose a group:
          <select name="groups" id="groups" onChange={(e) => handleSelect(e)}>
            {
              groups.map((group) => <option key={group.id} value={group.id}>{group.name}</option>)
}
          </select>
        </label>
      </form>
    </div>
  );
}

export default CreateMember;

// const [isChecked, setIsChecked] = useState(false);

// const handleOnChange = () => {
//   setIsChecked(!isChecked);
// };
// checked={isChecked}
//           onChange={handleOnChange}
