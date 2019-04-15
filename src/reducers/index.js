import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import { sessionImmutableReducer as session } from 'redux-react-native-session';
import map from './mapReducer';

const AppReducer = combineReducers({
  form,
  session,
  map
});

export default AppReducer;
