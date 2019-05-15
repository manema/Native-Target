import React from 'react';
import { func, string, bool } from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { View, Text, TouchableOpacity } from 'react-native';

import { validations, createTarget } from 'utils/constraints';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import translate from 'utils/i18n';
import { FONT_ERROR } from 'constants/styleConstants';
import { topics } from 'constants/appConstants';
import CustomDropdown from 'components/common/CustomDropdown';
import styles from './styles';

const CreateTargetForm = ({ onPressDelete, handleSubmit, error, submitting, isSelectedTarget, onClose }) => {
  const isSelectedButtons = isSelectedTarget ? styles.isSelectedButtons : {};
  return (
    <View onSubmit={handleSubmit}>
      <View style={styles.closeButtonContainer}>
        <TouchableOpacity
          onPress={onClose}
          style={styles.closeButton}
        >
          <Text style={styles.closeButtonText}>x</Text>
        </TouchableOpacity>
      </View>
      {error && <Text style={FONT_ERROR}>{error}</Text>}
      <Field
        name="area"
        label={translate('TARGETS.selectArea')}
        component={Input}
        textStyle={styles.input}
      />
      <Field
        name="title"
        label={translate('TARGETS.targetTitle')}
        component={Input}
        textStyle={styles.input}
      />
      <Field
        name="topic"
        label={translate('TARGETS.selectTopic')}
        component={CustomDropdown}
        data={topics}
      />
      <View style={[isSelectedTarget && styles.buttonsContainer]}>
        { isSelectedTarget &&
          <Button
            title={translate('COMMON.delete')}
            onPress={onPressDelete}
            submitting={submitting}
            addedContainerStyle={{ ...isSelectedButtons, ...styles.deleteButton }}
            addedTouchableStyle={{ ...isSelectedButtons, ...styles.deleteButton }}
          />
        }
        <Button
          title={isSelectedTarget ? translate('COMMON.save') : translate('TARGETS.button')}
          onPress={isSelectedTarget ? () => {} : handleSubmit}
          submitting={submitting}
          addedContainerStyle={isSelectedButtons}
          addedTouchableStyle={isSelectedButtons}
        />
      </View>
    </View>
  );
};

CreateTargetForm.propTypes = {
  handleSubmit: func.isRequired,
  submitting: bool.isRequired,
  isSelectedTarget: bool.isRequired,
  onPressDelete: func.isRequired,
  error: string,
  onClose: func.isRequired
};

export default reduxForm({
  form: 'createTarget',
  validate: validations(createTarget)
})(CreateTargetForm);
