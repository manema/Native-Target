import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Picker } from 'react-native';
import { FONT_TITLE } from 'constants/styleConstants';
import { isAndroid } from 'constants/appConstants';
import styles from './styles';

const CustomPicker = ({ input: { onChange, value, ...restInput }, label, items }) =>
  <View style={isAndroid ? styles.container : ''}>
    {label && <Text style={[styles.label, FONT_TITLE]}>{label.toUpperCase()}</Text>}
    <View style={isAndroid ? styles.pickerContainer : ''}>
      <Picker
        selectedValue={value}
        style={isAndroid ? styles.input : ''}
        onValueChange={value => onChange(value)}
        {...restInput}
      >
        {items.map((item, index) =>
          <Picker.Item key={index} label={item.label} value={item.value} />)
        }
      </Picker>
    </View>
  </View>;

const { string, object, bool, array } = PropTypes;

CustomPicker.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object,
  password: bool,
  items: array
};

export default CustomPicker;
