import { createSelector } from 'reselect';

export const getFetchingCounter = createSelector(
  state => state.getIn(['app', 'fetchingCounter']),
  fetchingCounter => fetchingCounter
);

export const getError = createSelector(
  state => state.getIn(['app', 'error']),
  error => error
);
