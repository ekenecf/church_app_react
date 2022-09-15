import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import UserDataReducer from './Reducer';

const rootReducer = combineReducers({
  UserDataReducer,
});

const store = createStore(rootReducer,
  applyMiddleware(thunk));

export default store;
