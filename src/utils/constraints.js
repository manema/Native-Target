import validate from 'validate.js';

export const login = {
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true
  }
};

export const signUp = {
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: 'must be at least 6 characters'
    }
  },
  passwordConfirmation: {
    presence: true,
    equality: { attribute: 'password' }
  }
};

export const createTarget = {
  area: {
    presence: true,
    numericality: { strict: true }
  },
  title: {
    presence: true
  }
};

export const validations = constraints =>
  data => validate(data.toJS(), constraints) || {};
