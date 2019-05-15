import { SubmissionError } from 'redux-form';
import { sessionService } from 'redux-react-native-session';

import userApi from 'api/userApi';
import {
  increaseFetchingIndicator,
  decreaseFetchingIndicator,
  fetchingError
} from 'actions/withAsyncActions';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { normalizeError } from '../utils/helpers';
import * as types from './actionTypes';

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
});

export const login = user =>
  async (dispatch) => {
    try {
      const { data } = await userApi.login({ user });
      await sessionService.saveUser(data);
      dispatch(loginSuccess());
    } catch ({ errors }) {
      throw new SubmissionError({
        _error: normalizeError(errors),
      });
    }
  };

export const loginFacebook = () =>
  async (dispatch) => {
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile']);
      if (result.isCancelled) dispatch(fetchingError('Login is cancelled'));
      else {
        dispatch(increaseFetchingIndicator);
        const { accessToken } = await AccessToken.getCurrentAccessToken();
        const { data } = await userApi.loginFacebook({ accessToken });
        await sessionService.saveUser(data);
        dispatch(loginSuccess());
        dispatch(decreaseFetchingIndicator);
      }
    } catch ({ error }) {
      dispatch(fetchingError(error));
    }
  };

export const logout = () =>
  async (dispatch) => {
    try {
      await userApi.logout();
      sessionService.deleteSession();
      sessionService.deleteUser();
      dispatch(logoutSuccess());
    } catch (err) {
      throw err;
    }
  };

export const signUp = user =>
  async () => {
    try {
      const response = await userApi.signUp({ user });
      sessionService.saveUser(response);
    } catch ({ errors: { fullMessages } }) {
      throw new SubmissionError({
        _error: normalizeError(fullMessages),
      });
    }
  };
