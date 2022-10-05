import ActionTypes from './ActionTypes';

const initialState = {
  events: [],
  loading: false,
  error: false,
};

const EventDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DATA_LOADING:
      return {
        ...state, loading: true,
      };
    case ActionTypes.FETCH_EVENT_DATA:
      return {
        ...state, events: payload, loading: false,
      };
    case ActionTypes.FETCH_DATA_ERROR:
      return {
        ...state, error: true,
      };
    default:
      return state;
  }
};
export default EventDataReducer;
