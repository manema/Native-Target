import React from 'react';
import { string, object, bool } from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import { FONT_TITLE, FONT_ERROR } from 'constants/styleConstants';
import styles from './styles';

const Input = ({
  input: { onChange, ...restInput },
  password = false,
  label,
  meta: { touched, error },
  textStyle
}) => (
  <View style={styles.container}>
    {label && <Text style={[styles.text, FONT_TITLE, textStyle]}>{label.toUpperCase()}</Text>}
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={onChange}
        secureTextEntry={password}
        {...restInput}
      />
    </View>
    {touched && error && <Text style={FONT_ERROR}>{error}</Text>}
  </View>
);

Input.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object,
  password: bool,
  textStyle: object
};

export default Input;
