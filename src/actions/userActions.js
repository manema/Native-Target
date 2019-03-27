import { SubmissionError } from 'redux-form';
import { sessionService } from 'redux-react-native-session';

import userApi from 'api/userApi';
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
<<<<<<< HEAD
      const { data } = await userApi.login({ user });
      await sessionService.saveUser(data);
=======
      const response = await userApi.login({ user });
      await sessionService.saveUser(response.data);
>>>>>>> ignore third-library
      dispatch(loginSuccess());
    } catch ({ errors }) {
      throw new SubmissionError({
        _error: normalizeError(errors),
      });
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
