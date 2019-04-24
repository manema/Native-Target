import { INCREASE_FETCHING_INDICATOR, DECREASE_FETCHING_INDICATOR, FETCHING_ERROR } from './actionTypes';

// query counter
export const increaseFetchingIndicator = () => ({ type: INCREASE_FETCHING_INDICATOR });
export const decreaseFetchingIndicator = () => ({ type: DECREASE_FETCHING_INDICATOR });

// fetching error
export const fetchingError = error => ({
  type: FETCHING_ERROR,
  error
});
