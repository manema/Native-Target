import { Alert } from 'react-native';
import { SubmissionError } from 'redux-form';

import mapApi from 'api/mapApi';
import * as types from './actionTypes';
import { normalizeError } from '../utils/helpers';

export const getPositionSuccess = coords => ({
  type: types.GET_POSITION_SUCCESS,
  coords
});

export const createTargetSuccess = target => ({
  type: types.CREATE_TARGET_SUCCESS,
  target
});

export const setLastClickPosition = coords => ({
  type: types.SET_LAST_CLICK_POSITION,
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

export const createTarget =
  ({
    area: radius,
    latitude: lat,
    longitude: lng,
    title,
    topic: topicId
  }) =>
    async (dispatch) => {
      try {
        const target = { title, lat, lng, radius, topicId };
        const targetInfo = await mapApi.createTarget({ target });
        dispatch(createTargetSuccess(targetInfo));
      } catch ({ errors }) {
        throw new SubmissionError({
          _error: normalizeError(errors),
        });
      }
    };
