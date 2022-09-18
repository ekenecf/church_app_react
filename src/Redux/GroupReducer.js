import ActionTypes from './ActionTypes';

const initialState = {
  groups: [],
  loading: false,
  error: false,
  // groupId: [],
};

const GroupDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DATA_LOADING:
      return {
        ...state, loading: true,
      };
    case ActionTypes.ALL_GROUPS:
      console.log(state);
      return {
        ...state, groups: payload, loading: false,
      };
    case ActionTypes.REMOVE_GROUP:
      return {
        ...state,
        groups: state.groups.filter((group) => group.id !== payload),
        loading: false,
      };
    case ActionTypes.FETCH_DATA_ERROR:
      return {
        ...state, error: true,
      };
    default:
      return state;
  }
};
export default GroupDataReducer;
