import { Map } from 'immutable';
import * as types from '../actions/actionTypes';

export const initialState = Map({
  currentPosition: {
    latitude: 42.882004,
    longitude: 74.582748,
    heading: 0,
    altitude: 17
  },
});

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSITION_SUCCESS: {
      return state.set('currentPosition', action.coords);
    }
    default: {
      return state;
    }
  }
};

export default mapReducer;
