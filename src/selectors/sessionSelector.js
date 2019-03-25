import { createSelector } from 'reselect';

export const getUser = createSelector(
  state => state.getIn(['session', 'user']),
  user => user.toJS()
);

export const getSessionState = createSelector(
  state => state.getIn(['session', 'authenticated']),
  authenticated => authenticated
);
