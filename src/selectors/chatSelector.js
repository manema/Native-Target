import { createSelector } from 'reselect';

export const obtainConversations = createSelector(
  state => state.getIn(['chat', 'conversations']),
  conversations => conversations.toJS()
);
