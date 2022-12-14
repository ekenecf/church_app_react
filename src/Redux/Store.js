import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import UserDataReducer from './Reducer';
import GroupDataReducer from './GroupReducer';
import MemberDataReducer from './MemberReducer';
import EventDataReducer from './EventReducer';

const rootReducer = combineReducers({
  UserDataReducer,
  GroupDataReducer,
  MemberDataReducer,
  EventDataReducer,
});

const store = createStore(rootReducer,
  applyMiddleware(thunk, logger));

export default store;
