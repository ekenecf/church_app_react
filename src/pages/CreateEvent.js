import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import { postEvent } from '../Redux/EventApi';

const FormData = require('form-data');

function CreateEvent() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { adminId } = location.state || {};

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

  const updateDate = (e) => {
    changeEventsInput({
      ...eventInput,
      date: e.target.value,
    });
  };

  const form = new FormData();
  form.append('name', eventInput.name);
  form.append('description', eventInput.description);
  form.append('image', eventInput.image);
  form.append('image1', eventInput.image1);
  form.append('image2', eventInput.image2);
  form.append('date', eventInput.date);

  const getdata = form.get('name');
  console.log(getdata);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postEvent(form, adminId));
    const {
      name, description, date, image, image1, image2,
    } = e.target.elements;
    name.value = '';
    description.value = '';
    date.value = '';
    image.value = '';
    image1.value = '';
    image2.value = '';
  };

  console.log(eventInput);

  return (
    <div className="AdminDashboard">
      <h2>Create Event</h2>

      <form type="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="name" placeholder="Name of event" onChange={(e) => updateName(e)} required />
        <textarea name="description" placeholder="Event description" onChange={(e) => updateDescription(e)} required />
        <input type="date" name="date" onChange={(e) => updateDate(e)} required />
        <input type="file" name="image" onChange={(e) => updateImage(e)} required />
        <input type="file" name="image1" onChange={(e) => updateImage1(e)} required />
        <input type="file" name="image2" onChange={(e) => updateImage2(e)} required />

        <button type="submit">Add Event</button>
      </form>

      <button type="button">
        <NavLink to="/AdminDashboard">Back to AdminDashboard </NavLink>
      </button>
    </div>
  );
}

export default CreateEvent;
