import { createSelector } from 'reselect';

export const getFetchingCounter = createSelector(
  state => state.getIn(['withAsync', 'fetchingCounter']),
  fetchingCounter => fetchingCounter
);

export const getError = createSelector(
  state => state.getIn(['withAsync', 'error']),
  error => error
);
