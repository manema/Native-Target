import React from 'react';
import { func, string, bool } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text } from 'react-native';

import * as constraints from 'utils/constraints';
import Input from 'components/common/Input';
import Custompicker from 'components/common/CustomPicker';
import translate from 'utils/i18n';
import { GENDER } from 'constants/appConstants';
import { FONT_ERROR } from 'constants/styleConstants';
import Button from 'components/common/Button';

const SignUpForm = ({ handleSubmit, error, submitting }) => (
  <View onSubmit={handleSubmit}>
    {error && <Text style={FONT_ERROR}>{error}</Text>}
    <Field
      name="username"
      label={translate('SIGN_UP.name')}
      component={Input}
    />
    <Field
      name="email"
      label={translate('SIGN_UP.email')}
      component={Input}
    />
    <Field
      name="genderPicker"
      label={translate('SIGN_UP.gender')}
      component={Custompicker}
      items={GENDER}
    />
    <Field
      name="password"
      label={translate('SIGN_UP.password')}
      component={Input}
      password
    />
    <Field
      name="passwordConfirmation"
      label={translate('SIGN_UP.passwordConfirmation')}
      component={Input}
      password
    />
    <Button
      title={translate('SIGN_UP.button').toUpperCase()}
      onPress={handleSubmit}
      submitting={submitting}
    />
  </View>
);

SignUpForm.propTypes = {
  handleSubmit: func.isRequired,
  error: string,
  submitting: bool.isRequired
};

export default reduxForm({
  form: 'signUp',
  validate: constraints.validations(constraints.signUp)
})(SignUpForm);
