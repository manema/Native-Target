import { Alert } from 'react-native';

import * as types from './actionTypes';

export const getPositionSuccess = coords => ({
  type: types.GET_POSITION_SUCCESS,
  coords
});

export const getPosition = () =>
  async (dispatch) => {
    try {
      await navigator.geolocation.getCurrentPosition(
        ({ coords }) => dispatch(getPositionSuccess(coords)),
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } catch (err) {
      throw err;
    }
  };
