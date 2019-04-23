import { createSelector } from 'reselect';

export const getCurrentPosition = createSelector(
  state => state.getIn(['map', 'currentPosition']),
  currentPosition => currentPosition
);

export const getLastClickPosition = createSelector(
  state => state.getIn(['map', 'lastClickPosition']),
  lastClickPosition => lastClickPosition
);

export const obtainTargets = createSelector(
  state => state.getIn(['map', 'targets']),
  targets => targets
);

export const getIsOpenMenu = createSelector(
  state => state.getIn(['map', 'isOpenMenu']),
  isOpenMenu => isOpenMenu
);
