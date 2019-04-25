import { Map } from 'immutable';
import * as types from '../actions/actionTypes';

export const initialState = Map({
  currentPosition: {
    latitude: 42.882004,
    longitude: 74.582748,
    heading: 0,
    altitude: 17
  },
  lastClickPosition: {
    latitude: 42.882004,
    longitude: 74.582748,
  },
  currentTarget: {},
  targets: []
});

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSITION_SUCCESS: {
      return state.set('currentPosition', action.coords);
    }
    case types.CREATE_TARGET_SUCCESS: {
      return state.merge(Map({
        currentTarget: action.target,
        isOpenMenu: false
      }));
    }
    case types.GET_TARGETS_SUCCESS: {
      return state.set('targets', action.targets);
    }
    case types.SET_LAST_CLICK_POSITION: {
      return state.set('lastClickPosition', action.coords);
    }
    default: {
      return state;
    }
  }
};

export default mapReducer;
