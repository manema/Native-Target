import { createSelector } from 'reselect';

export const getFetchingCounter = createSelector(
  state => state.getIn(['app', 'fetchingCounter']),
  fetchingCounter => fetchingCounter
);
