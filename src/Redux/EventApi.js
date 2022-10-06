import axios from 'axios';
import {
  removeGroup, setEventData, setLoadingData, setDataError,
} from './Actions';

const GROUPURL = 'http://127.0.0.1:3000/users';
export const postEvent = (event, userid) => (dispatch) => {
  dispatch(setLoadingData());
  const config = {
    headers: {
      'content-type': 'multipart/formData',
    },
  };
  axios.post(`${GROUPURL}/${userid}/events`, event, config)
    .then((res) => {
      console.log('Expecting res', res);
      // dispatch(addMember(res));
    }).catch((error) => {
      dispatch(setDataError());
      console.log('Catch error', error);
    });
};

const GETEVENT = 'http://127.0.0.1:3000/events';
export const GetAllEvents = () => (dispatch) => {
  dispatch(setLoadingData());
  fetch(GETEVENT)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(setEventData(data));
    })
    .catch((error) => {
      dispatch(setDataError(error.message));
    });
};

const DELEVENT = 'http://127.0.0.1:3000/users';
export const DeleteEvent = (userid, eventid) => (dispatch) => {
  axios.delete(`${DELEVENT}/${userid}/events/${eventid}`)
    .then((response) => {
      dispatch(removeGroup(response));
    });
};
