import {
  INCREASE_FETCHING_INDICATOR,
  DECREASE_FETCHING_INDICATOR,
  FETCHING_ERROR,
  SET_TOAST_MESSAGE
} from './actionTypes';

// query counter
export const increaseFetchingIndicator = () => ({ type: INCREASE_FETCHING_INDICATOR });
export const decreaseFetchingIndicator = () => ({ type: DECREASE_FETCHING_INDICATOR });

// fetching error
export const fetchingError = error => ({
  type: FETCHING_ERROR,
  error
});

export const setToastMessage = toasteMessage => ({ type: SET_TOAST_MESSAGE, toasteMessage });
