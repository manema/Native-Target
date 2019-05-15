import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import { sessionImmutableReducer as session } from 'redux-react-native-session';
import map from './mapReducer';
import withAsync from './withAsyncReducer';
import chat from './chatReducer';

const AppReducer = combineReducers({
  withAsync,
  form,
  session,
  map,
  chat
});

export default AppReducer;
