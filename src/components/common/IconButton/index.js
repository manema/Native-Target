import React from 'react';
import { number, object } from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const IconButton = ({ icon, addIconStyle, addContainerStyle }) =>
  <TouchableOpacity
    style={[styles.container, addContainerStyle]}
  >
    <Image
      source={icon}
      style={[addIconStyle, styles.icon]}
    />
  </TouchableOpacity>;

IconButton.propTypes = {
  icon: number.isRequired,
  addIconStyle: object,
  addContainerStyle: object
};

export default IconButton;
