import { createSelector } from 'reselect';

export const getFetchingCounter = createSelector(
  state => state.getIn(['withAsync', 'fetchingCounter']),
  fetchingCounter => fetchingCounter
);

export const getToastMessage = createSelector(
  state => state.getIn(['withAsync', 'toastMessage']),
  toastMessage => toastMessage
);
