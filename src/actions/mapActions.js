import { SubmissionError } from 'redux-form';

import mapApi from 'api/mapApi';
import * as types from './actionTypes';
import { increaseFetchingIndicator, decreaseFetchingIndicator, fetchingError } from './appActions';
import { normalizeError } from '../utils/helpers';

export const getPositionSuccess = coords => ({
  type: types.GET_POSITION_SUCCESS,
  coords
});

export const createTargetSuccess = target => ({
  type: types.CREATE_TARGET_SUCCESS,
  target
});

export const fetchTargetsSuccess = targets => ({
  type: types.FETCH_TARGETS_SUCCESS,
  targets
});

export const setLastClickPosition = coords => ({
  type: types.SET_LAST_CLICK_POSITION,
  coords
});

export const getPosition = () =>
  async (dispatch) => {
    try {
      dispatch(increaseFetchingIndicator());
      await navigator.geolocation.getCurrentPosition(
        ({ coords }) => { 
          dispatch(getPositionSuccess(coords));
          dispatch(decreaseFetchingIndicator());
        },
        error => dispatch(fetchingError(error.message)),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    } catch (err) {
      throw err;
    }
  };

export const getTargets = () =>
  async (dispatch) => {
    try {
      dispatch(increaseFetchingIndicator());
      const { targets } = await mapApi.getTargets();
      dispatch(fetchTargetsSuccess(targets));
      dispatch(decreaseFetchingIndicator());
    } catch ({ error }) {
      dispatch(fetchingError(error));
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
        dispatch(getTargets());
      } catch ({ errors }) {
        throw new SubmissionError({
          _error: normalizeError(errors),
        });
      }
    };
