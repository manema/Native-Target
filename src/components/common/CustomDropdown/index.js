import React from 'react';
import { string, object, array } from 'prop-types';
import { View, Text } from 'react-native';
import { FONT_TITLE } from 'constants/styleConstants';
import { Dropdown } from 'react-native-material-dropdown';
import styles from './styles';

const CustomDropdown = ({ input: { onChange, ...restInput }, data, label }) => (
  <View style={styles.container}>
    {label && <Text style={FONT_TITLE}>{label.toUpperCase()}</Text>}
    <Dropdown
      data={data}
      {...styles.dropdown}
      containerStyle={styles.inputContainer}
      {...restInput}
      onChangeText={onChange}
    />
  </View>
);

CustomDropdown.propTypes = {
  input: object.isRequired,
  label: string,
  meta: object,
  data: array
};

export default CustomDropdown;
