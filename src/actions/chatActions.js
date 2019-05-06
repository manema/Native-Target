import chatApi from 'api/chatApi';
import {
  increaseFetchingIndicator,
  decreaseFetchingIndicator,
  fetchingError
} from 'actions/appActions';
import { FETCH_CONVERSATIONS_SUCCESS } from './actionTypes';
import { normalizeError } from '../utils/helpers';

export const fetchConversationsSuccess = conversations => ({
  type: FETCH_CONVERSATIONS_SUCCESS,
  conversations
});

export const getConversations = () =>
  async (dispatch) => {
    try {
      dispatch(increaseFetchingIndicator());
      const { matches } = await chatApi.getConversations();
      dispatch(fetchConversationsSuccess(matches));
      dispatch(decreaseFetchingIndicator());
    } catch ({ errors }) {
      dispatch(fetchingError(normalizeError(errors)));
    }
  };
