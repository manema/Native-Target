import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import { sessionImmutableReducer as session } from 'redux-react-native-session';
import map from './mapReducer';
import app from './appReducer';
import chat from './chatReducer';

const AppReducer = combineReducers({
  app,
  form,
  session,
  map,
  chat
});

export default AppReducer;
