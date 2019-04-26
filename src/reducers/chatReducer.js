import { Map } from 'immutable';
import {
  FETCH_CONVERSATIONS_SUCCESS
} from '../actions/actionTypes';

export const initialState = Map({
  conversations: []
});

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONVERSATIONS_SUCCESS: {
      return state.set('conversations', action.conversations);
    }
    default: {
      return state;
    }
  }
};

export default chatReducer;
