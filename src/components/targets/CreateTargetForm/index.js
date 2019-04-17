import React from 'react';
import { func, string, bool } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text } from 'react-native';

import * as constraints from 'utils/constraints';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import translate from 'utils/i18n';
// import CustomPicker from 'components/common/CustomPicker';
import { FONT_ERROR } from 'constants/styleConstants';
import { topics } from 'constants/appConstants';
import CustomDropdown from 'components/common/CustomDropdown';
// import { Dropdown } from 'react-native-material-dropdown';
import styles from './styles';

const CreateTargetForm = ({ handleSubmit, error, submitting }) => (
  <View onSubmit={handleSubmit}>
    {error && <Text style={FONT_ERROR}>{error}</Text>}
    <Field
      name="area"
      label={translate('CREATE_TARGET.selectArea')}
      component={Input}
      textAddStyle={styles.input}
    />
    <Field
      name="title"
      label={translate('CREATE_TARGET.targetTitle')}
      component={Input}
      textAddStyle={styles.input}
    />
    <Field
      name="topic"
      label={translate('CREATE_TARGET.selectTopic')}
      component={CustomDropdown}
      data={topics}
      fontSize={6}
      baseColor="#000000"
    />
    <View /* style={styles.button} */ >
      <Button
        title={translate('CREATE_TARGET.button')}
        onPress={handleSubmit}
        submitting={submitting}
      />
    </View>
  </View>
);

CreateTargetForm.propTypes = {
  handleSubmit: func.isRequired,
  submitting: bool.isRequired,
  error: string
};

export default reduxForm({
  form: 'createTarget',
  validate: constraints.validations(constraints.createTarget)
})(CreateTargetForm);
