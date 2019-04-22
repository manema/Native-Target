import { createSelector } from 'reselect';

export const getCurrentPosition = createSelector(
  state => state.getIn(['map', 'currentPosition']),
  currentPosition => currentPosition
);

export const getLastClickPosition = createSelector(
  state => state.getIn(['map', 'lastClickPosition']),
  lastClickPosition => lastClickPosition
);
