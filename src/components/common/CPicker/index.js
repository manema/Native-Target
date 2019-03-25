import React from 'react';
import PropTypes from 'prop-types';
import { Platform, View, Text, Picker } from 'react-native';
import { FONT_TITLE } from '../../../constants/styleConstants';
import styles from './styles';

const Cpicker = ({ input: { onChange, value, ...restInput }, label, items }) => {
  const android = Platform.OS === 'android';
  return (
    <View style={android ? styles.container : ''}>
      {label && <Text style={[styles.label, FONT_TITLE]}>{label.toUpperCase()}</Text>}
      <View style={android ? styles.pickerContainer : ''}>
        <Picker
          selectedValue={value}
          style={android ? styles.input : ''}
          onValueChange={value => onChange(value)}
          {...restInput}
        >
          {items.map((item, index) =>
            <Picker.Item key={index} label={item.label} value={item.value} />)
          }
        </Picker>
      </View>
    </View>
  );
};

const { string, object, bool, array } = PropTypes;

Cpicker.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object,
  password: bool,
  items: array
};

export default Cpicker;
