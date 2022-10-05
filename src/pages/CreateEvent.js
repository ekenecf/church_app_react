import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function CreateEvent() {
  const [eventInput, changeEventsInput] = useState({
    name: '',
    image: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: '',
    description: '',
    date: '',
  });

  const updateDescription = (e) => {
    changeEventsInput({
      ...eventInput,
      description: e.target.value,
    });
  };

  const updateName = (e) => {
    changeEventsInput({
      ...eventInput,
      name: e.target.value,
    });
  };

  const updateImage = (e) => {
    if (e.target.files.length !== 0) {
      changeEventsInput({
        ...eventInput,
        image: e.target.files[0],
      });
    }
  };

  const updateImage1 = (e) => {
    if (e.target.files.length !== 0) {
      changeEventsInput({
        ...eventInput,
        image1: e.target.files[0],
      });
    }
  };

  const updateImage2 = (e) => {
    if (e.target.files.length !== 0) {
      changeEventsInput({
        ...eventInput,
        image2: e.target.files[0],
      });
    }
  };

  const updateImage3 = (e) => {
    if (e.target.files.length !== 0) {
      changeEventsInput({
        ...eventInput,
        image3: e.target.files[0],
      });
    }
  };

  const updateImage4 = (e) => {
    if (e.target.files.length !== 0) {
      changeEventsInput({
        ...eventInput,
        image4: e.target.files[0],
      });
    }
  };

  const updateImage5 = (e) => {
    if (e.target.files.length !== 0) {
      changeEventsInput({
        ...eventInput,
        image5: e.target.files[0],
      });
    }
  };

  const updateDate = (e) => {
    changeEventsInput({
      ...eventInput,
      date: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form execution');
  };

  console.log(eventInput);

  return (
    <div className="AdminDashboard">
      <h2>Create Event</h2>

      <form type="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
        <textarea name="description" placeholder="Event description" onChange={(e) => updateDescription(e)} required />
        <input type="text" name="name" placeholder="Name of event" onChange={(e) => updateName(e)} required />
        <input type="file" name="image" onChange={(e) => updateImage(e)} required />
        <input type="file" name="image1" onChange={(e) => updateImage1(e)} required />
        <input type="file" name="image2" onChange={(e) => updateImage2(e)} required />
        <input type="file" name="image3" onChange={(e) => updateImage3(e)} />
        <input type="file" name="image4" onChange={(e) => updateImage4(e)} />
        <input type="file" name="image5" onChange={(e) => updateImage5(e)} />

        <input type="date" name="date" onChange={(e) => updateDate(e)} required />

        <button type="submit">Add Member</button>
      </form>

      <button type="button">
        <NavLink to="/AdminDashboard">Back to AdminDashboard </NavLink>
      </button>
    </div>
  );
}

export default CreateEvent;
