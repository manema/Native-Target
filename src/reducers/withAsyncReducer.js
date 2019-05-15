import { Map } from 'immutable';
import {
  INCREASE_FETCHING_INDICATOR,
  DECREASE_FETCHING_INDICATOR,
  FETCHING_ERROR,
  SET_TOAST_MESSAGE
} from '../actions/actionTypes';

export const initialState = Map({
  fetchingCounter: 0,
  toastMessage: ''
});

const withAsyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_FETCHING_INDICATOR: {
      return state.set('fetchingCounter', state.get('fetchingCounter') + 1);
    }
    case DECREASE_FETCHING_INDICATOR: {
      return state.set('fetchingCounter', state.get('fetchingCounter') - 1);
    }
    case FETCHING_ERROR: {
      return state.merge({
        toastMessage: action.error,
        fetchingCounter: state.get('fetchingCounter') - 1
      });
    }
    case SET_TOAST_MESSAGE: {
      return state.set('toastMessage', action.toastMessage);
    }
    default: {
      return state;
    }
  }
};

export default withAsyncReducer;
