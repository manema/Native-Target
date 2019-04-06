import api from './apiService';

class Session {
  static login(user) {
    return api.post('/users/sign_in', user);
  }

  static loginFacebook(token) {
    return api.post('/users/facebook', token);
  }

  static logout() {
    return api.delete('/users/sign_out');
  }

  static signUp(user) {
    return api.post('/users', user);
  }
}

export default Session;
