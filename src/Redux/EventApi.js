import axios from 'axios';
import {
  addGroup, removeGroup, allGroups, setLoadingData, setDataError,
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

const GETEVENT = 'http://127.0.0.1:3000/groups';
export const GetAllGroups = () => (dispatch) => {
  dispatch(setLoadingData());
  fetch(GETEVENT)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(allGroups(data));
    })
    .catch((error) => {
      dispatch(setDataError(error.message));
    });
};

// const DELGROUP = 'http://127.0.0.1:3000/users';

// export const DeleteGroup = (userid, groupid) => (dispatch) => {
//   axios.delete(`${DELGROUP}/${userid}/groups/${groupid}`)
//     .then((response) => {
//       dispatch(removeGroup(response));
//     });
// };
