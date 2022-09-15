import {
  GetUser, setLoadingData, setDataError, GetUserLogin,
} from './Actions';

const URL = 'https://stcharlescyon.herokuapp.com/auth/login';

export const postUserLogin = (user) => (dispatch) => {
  dispatch(setLoadingData());
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify((user)),
  }).then((res) => {
    console.log('this is res', res.status);
    // const response = res;
    // console.log('this is response', response);

    dispatch(GetUserLogin(res.status));
    // sessionStorage.setItem('response', res.status);
    // const getResponse = sessionStorage.getItem('response');
    // console.log(getResponse);
  }).catch((error) => {
    dispatch(setDataError());
    console.log(error);
  });
};
export default postUserLogin;

export const GetUserDetail = () => (dispatch) => {
  dispatch(setLoadingData());
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(GetUser(data));
    })
    .catch((error) => {
      dispatch(setDataError(error.message));
    });
};
