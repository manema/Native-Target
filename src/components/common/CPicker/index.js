import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Picker } from 'react-native';
// import styles from './styles';

const Cpicker = ({ input: { onChange, value, ...restInput }, label, items }) => (
  <View>
    {label && <Text>{label}</Text>}
    <Picker
      selectedValue={value}
      style={{ height: 50, width: 100 }}
      onValueChange={onChange}
      {...restInput}
    >
      {/* <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" /> */}
      {items.map((item, index) =>
        <Picker.Item key={index} label={item.label} value={item.value} />)
      }
    </Picker>
  </View>
);

const { string, object, bool, array } = PropTypes;

Cpicker.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object,
  password: bool,
  items: array
};

export default Cpicker;
