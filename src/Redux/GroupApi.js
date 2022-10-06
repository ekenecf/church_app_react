import axios from 'axios';
import {
  addGroup, removeGroup, allGroups, setLoadingData, setDataError,
} from './Actions';

const GROUPURL = 'http://127.0.0.1:3000/users';

export const postGroup = (group, userid) => (dispatch) => {
  dispatch(setLoadingData());
  fetch(`${GROUPURL}/${userid}/groups`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify((group)),
  }).then((res) => {
    console.log(res);
    dispatch(addGroup(res));
  }).catch((error) => {
    dispatch(setDataError());
    console.log(error);
  });
};

const GETGROUP = 'http://127.0.0.1:3000/groups';
export const GetAllGroups = () => (dispatch) => {
  dispatch(setLoadingData());
  fetch(GETGROUP)
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
