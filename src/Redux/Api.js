import {
  GetUser, setLoadingData, setDataError, GetUserLogin,
} from './Actions';

const URL = 'https://stcharlescyon.herokuapp.com/auth/login';
const URL2 = 'https://stcharlescyon.herokuapp.com/users';

export const postUserLogin = (user) => (dispatch) => {
  dispatch(setLoadingData());
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify((user)),
  }).then((res) => {
    // console.log(res.json());
    dispatch(GetUserLogin(res.status));
  }).catch((error) => {
    dispatch(setDataError());
    console.log(error);
  });
};
export default postUserLogin;

export const GetUserDetail = () => (dispatch) => {
  dispatch(setLoadingData());
  fetch(URL2)
    .then((response) => response.json())
    .then((data) => {
      dispatch(GetUser(data));
    })
    .catch((error) => {
      dispatch(setDataError(error.message));
    });
};
