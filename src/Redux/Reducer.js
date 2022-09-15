import ActionTypes from './ActionTypes';

const initialState = {
  users: [],
  loading: false,
  error: false,
  response: [],
};

const UserDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DATA_LOADING:
      // console.log('this is state', state);
      return {
        ...state, loading: true,
      };
    case ActionTypes.USER_LOGIN:
      console.log('this is stateReducer', payload);
      console.log('this is stateReducer', {[state.response]:payload});
      return {
        ...state, [state.response]: payload, 
        // success: [...state.success, payload],
      };
    case ActionTypes.GET_USER:
      return {
        ...state, users: payload, loading: false,
      };
    case ActionTypes.FETCH_DATA_ERROR:
      return {
        ...state, error: true,
      };
    default:
      return state;
  }
};
export default UserDataReducer;
