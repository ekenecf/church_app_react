import {
  addGroup, removeGroup, allGroups, setLoadingData, setDataError,
} from './Actions';

const GROUPURL = 'https://stcharlescyon.herokuapp.com/users';

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
export default postGroup;

const GETGROUP = 'https://stcharlescyon.herokuapp.com/groups';
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

const DELGROUP = 'https://stcharlescyon.herokuapp.com/users';

export const DeleteGroup = (userid, groupid) => (dispatch) => {
  fetch(`${DELGROUP}/${userid}/groups/${groupid}`, {
    method: 'DELETE',
    body: JSON.stringify((userid, groupid)),
  })
    .then(() => {
      dispatch(removeGroup(groupid));
    });
};
