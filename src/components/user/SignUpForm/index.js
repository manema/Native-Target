import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text } from 'react-native';

import * as constraints from 'utils/constraints';
import Input from 'components/common/Input';
import Custompicker from 'components/common/CustomPicker';
import translate from 'utils/i18n';
import { GENDER } from 'constants/appConstants';
import { BLACK, WHITE, FONT_ERROR } from 'constants/styleConstants';
import Button from '../../common/Button';

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
      marginTop={25}
      textColor={WHITE}
      title={translate('SIGN_UP.button').toUpperCase()}
      color={BLACK}
      onPress={handleSubmit}
      submitting={submitting}
    />
  </View>
);

const { func, string, bool } = PropTypes;

SignUpForm.propTypes = {
  handleSubmit: func.isRequired,
  error: string,
  submitting: bool.isRequired
};

export default reduxForm({
  form: 'signUp',
  validate: constraints.validations(constraints.signUp)
})(SignUpForm);
