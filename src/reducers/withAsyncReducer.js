import { Map } from 'immutable';
import {
  INCREASE_FETCHING_INDICATOR,
  DECREASE_FETCHING_INDICATOR,
  FETCHING_ERROR,
  CLEAR_FETCHING_ERROR
} from '../actions/actionTypes';

export const initialState = Map({
  fetchingCounter: 0,
  error: ''
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
        error: action.error,
        fetchingCounter: state.get('fetchingCounter') - 1
      });
    }
    case CLEAR_FETCHING_ERROR: {
      return state.set('error', '');
    }
    default: {
      return state;
    }
  }
};

export default withAsyncReducer;
